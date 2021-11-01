var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy, boy_running ;
var ground, invisibleGround, groundImage;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var bg,bgImg;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
var dog,dog_running

function preload(){
  boy_running = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png");

  
  //groundImage = loadImage("ground2.png");
  
  bgImg = loadImage("images/runningBackground.png")
  
  obstacle1 = loadImage("images/ob1.jpg");
  obstacle2 = loadImage("images/ob2.jpg");
  obstacle3 = loadImage("images/ob3.jpg");
  obstacle4 = loadImage("images/ob4.jpg");
 

  dog_running = loadAnimation("images/runningdog1.jpg","images/runningdog2.jpg","images/runningdog3.jpg","images/runningdog4.jpg","images/runningdog5.jpg","images/runningdog6.jpg",
  "images/runningdog7.jpg","images/runningdog8.jpg","images/runningdog9.jpg","images/runningdog10.jpg","images/runningdog11.jpg","images/runningdog12.jpg",
  "images/runningdog13.jpg");

}

function setup() {
  createCanvas(1800, 800);

  bg = createSprite(900,200);
  bg.addImage(bgImg);
  bg.width=3*bg.width;

  boy = createSprite(30,450,20,50);
  boy.addAnimation("running", boy_running);

  boy.scale = 2;

  dog = createSprite(1000,440,20,50);
  dog.addAnimation("running", dog_running);
  dog.scale = 1.5;
  
  
/* ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;*/
  
  invisibleGround = createSprite(400,480,1000,10);
  invisibleGround.visible = false;

  boy.collide(invisibleGround);
  
  //create Obstacle and Cloud Groups
 /* obstaclesGroup = createGroup();
  cloudsGroup = createGroup();

  
  boy.setCollider("rectangle",0,0,trex.width,trex.height);
  boy.debug = true*/
  
  score = 0;
  
}

function draw() {
  
  background(180);
  drawSprites();
  //displaying score
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){

  
    bg.velocityX = -(4 + 3* score/100);
    //scoring
    score = score + Math.round(getFrameRate()/60);
  
    
    if (bg.x < 400){
      bg.x = bg.width/8;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& boy.y >=200) {
        boy.velocityY=-8;
    }
    
    //add gravity
    boy.velocityY=boy.velocityY+0.5;

    boy.collide(invisibleGround);
  
    //spawn the clouds
   // spawnClouds();
  
    //spawn obstacles on the ground
    //spawnObstacles();
    
    /*if(obstaclesGroup.isTouching(boy)){
        //trex.velocityY = -12;
        gameState = END;
     
      
    }
  }
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;

     
      ground.velocityX = 0;
      boy.velocityY = 0
      
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
    
       
  
 
  //stop trex from falling down
  //boy.collide(invisibleGround);*/
  

  
}

/*function reset(){
  gameState = PLAY;
  gameOver.visible=false;
  restart.visible=false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  score=0;
  boy.changeAnimation("running",boy_running);
  
}


function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage();
              break;
      case 2: obstacle.addImage();
              break;
      case 3: obstacle.addImage();
              break;
      case 4: obstacle.addImage();
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}*/
}
