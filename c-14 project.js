var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, 
 blue_balloonImage, backgroundImage;
var redBalloon,blueBalloon,pinkBalloon,greenBalloon;
var score;
var blueG,greenG,redG,pinkG;
 PLAY = 1;
 END = 0;
 gameState = PLAY;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage= loadImage("green_balloon0.png")
  blue_balloonImage= loadImage("blue_balloon0.png")
pink_balloonImage= loadImage("pink_balloon0.png")

}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
 
  
  score=0;
  
  
  redG= new Group();
  pinkG= new Group();
  blueG= new Group();
  greenG= new Group();
  arrowGroup= new Group();
  
  
  
}

function draw() {
 background(0);
 drawSprites(); 
  if(gameState===PLAY){
     scene.velocityX = -3;
      if (scene.x < 0){
      scene.x = scene.width/2;
      }
          //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  else if (select_balloon ==2)
  {
      greenBalloon();
    }
  else if (select_balloon ==3)
  {
      blueBalloon();
    }
  
  else if (select_balloon ==4)
  {
      pinkBalloon();
    }
  }

  if(arrowGroup.isTouching(redG)){
    console.log("hi")
  redG.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
    
  }
  
   if(arrowGroup.isTouching(blueG)){
  blueG.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
    
  }

  if(arrowGroup.isTouching(pinkG)){
  pinkG.destroyEach();
    arrowGroup.destroyEach();
    score=score+8;
    
  }
  
  if(arrowGroup.isTouching(greenG)){
  greenG.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
    
  }
  
            if (score>650)
                {
                 gameState=END
                }
      
     }
  
 
  

else if(gameState===END){
        scene.velocityX =0
  console.log("ENDSTATE")
  textSize(20)
  fill("blue")
  text("YOU WON GAME !! ",100,186);
  textSize(20)
  text("Game OVER!!",100,214)
 pinkG.destroyEach()
    redG.destroyEach()
  blueG.destroyEach()
  greenG.destroyEach()
  blueG.setVelocityEach(0)
  pinkG.setVelocityEach(0)
  greenG.setVelocityEach(0)
  redG.setVelocityEach(0)
  
  
        }


  
    
  
   textSize(20);
text("score : "+score,300,50)

}

 

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   arrowGroup.add(arrow);
   
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redG.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
   var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueG.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
   green.addImage(green_balloonImage);
 green.velocityX = 3;
  green.lifetime = 150;
   green.scale = 0.1;
  greenG.add(green);
  
 
}


function pinkBalloon() {
  //write code for spwaning pink balloons
   var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
 pink.addImage(pink_balloonImage);
pink.velocityX = 3;
 pink.lifetime = 140;
 pinkBalloon.scale = 0.1;
  pinkG.add(pink); 
 
  
}

function destroy(){
  
  
  
  
  
}

