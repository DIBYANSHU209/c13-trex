var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var cactus,cactusi1,cactusi2,cactusi3,cactusi4,cactusi5,cactusi6;
var score = 0 ;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  cactusi1 = loadImage("obstacle1.png");
  cactusi2 = loadImage("obstacle2.png");
  cactusi3 = loadImage("obstacle3.png");
  cactusi4 = loadImage("obstacle4.png");
  cactusi5 = loadImage("obstacle5.png");
  cactusi6 = loadImage("obstacle6.png");
}
function setup() {
    createCanvas(600, 200);

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    // trex.addAnimation("collided",trex_collided)
    trex.scale = 0.5;
    
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
    
  }

  function draw() {
      background(180);
      text("Score: " + score, 500,50);
      score = score+Math.round(frameCount/60);
      if(keyDown("space") && trex.y >= 154) {
        trex.velocityY = -10;
      }
    trex.velocityY = trex.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    trex.collide(invisibleGround);
    
    //spawn the clouds
    spawnClouds();
    spawnObstacles();
    drawSprites();
  }

  function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      cloud = createSprite(600,100,40,10);
      cloud.addImage(cloudImage)
      cloud.y = Math.round(random(10,60))
      cloud.scale = 0.4;
      cloud.velocityX = -3;
      cloud.lifetime = 200;
      cloud.depth = trex.depth
      trex.depth = trex.depth + 1;
      }
  }

    function spawnObstacles(){
      if(frameCount % 80 === 0){
        var cactus = createSprite(600,165,10,40);
        cactus.velocityX = -5;
        var ran = Math.round(random(1,6));
        switch(ran){
          case 1:cactus.addImage(cactusi1);
                 break;
          case 2:cactus.addImage(cactusi2);
                 break;
          case 3:cactus.addImage(cactusi3);
                 break;
          case 4:cactus.addImage(cactusi4);
                 break;
          case 5:cactus.addImage(cactusi5);
                 break;
          case 6:cactus.addImage(cactusi6);
                 break;
          default:break;
        }
        cactus.scale = 0.5;
        cactus.lifetime = 200;

      }


    }
