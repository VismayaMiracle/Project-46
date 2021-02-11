/*
By 2038, Coronavirus is spread across the World and many have died.
then one day, a astronomer realised that he have heard corona from a very 
old research of his when he was a beginner. so, he looked into the files
and found that his professor once told him, that there is a lost person in Saturn
but it is not clear who it is.. And his Professor also told him he hate the Earth
beause it is filled with Evil doers.. And he understood that he should go and 
meet him and should ask him is there any connection between corona virus and 
corona named person. He is on his way! 
*/


//astronomer, meterotes, and spaceship/rocket, few aliens/asteriods, corona named person.
//astroman walking to the spaceship,and disappers into the spaceship.

//create a class for meteriods, as that it can randomly appear. 
//have created database, make buttons

//classes: form,meteriod.
//-2=asteriods,1=stars,5=giant one
//if the astronaut is toching the lifee star vanishes.
//if the player survives and wins 5 stars, the rocket will reach to saturn
//if the rocket touches the ood asteriod, completely lost
//the rocket shouldn't go outside the boundary.

//increase the score when the rocket is touching the star. 
//bg with saturn

var backIMG, back;
var astroman;
var rocket;
var aster1,aster1IMG;
var aster2,aster2IMG;
var aster3,aster3IMG;
var aster4,aster4IMG;
var aster5,aster5IMG;
var star1,star1IMG;
var asteriods; //function
var score=0;
var saturn,saturnIMG;
// var button;

var man_leftIMG,man;

var gameState="LAUNCHED";
var starGroup;
var asteriodGroup;

function preload(){
  
  backIMG=loadImage("images/backIMG.jpg");
  rocketIMG=loadImage("images/Rocket.png");
  aster1IMG=loadImage("images/as1.png");
  aster2IMG=loadImage("images/as2.png");
  aster3IMG=loadImage("images/as3.png");
  aster4IMG=loadImage("images/as4.png");
  aster5IMG=loadImage("images/as5.png")
  star1IMG=loadImage("images/star1.png");
  saturnIMG=loadImage("images/saturn2.png");
  man_leftIMG=loadImage("images/running_left.png")
  astromanIMG=loadImage("images/astroman.jpg")
  ongroundbgIMG=loadImage("images/enviro.png")
  bg2IMG=loadImage("images/bg2.png")
 surIMG=loadImage("images/sur_with_astronaut.png")
}



function setup(){
  createCanvas(windowWidth, windowHeight)

  back=createSprite(1000,600)
   back.addImage(backIMG)
   back.velocityX=-4;
   back.scale=3;

  rocket=createSprite(200,200,10,10);
  rocket.addImage(rocketIMG)
  rocket.scale=0.4;

 
  man_left=createSprite(600,600)
  man_left.addImage(man_leftIMG)
  man_left.visible=false;

  // button=createButton("Reach Saturn!")
  // button.position(800,600)

   
  score=0;
  starGroup=new Group();
  asteriodGroup=new Group();
}

function draw(){
  background(255)

  // if(gameState==ONGROUND){

  
  //   astroman=createSprite(300,300)
  //   astroman.addImage(astromanIMG)

  // }
  if(gameState=="LAUNCHED"){

  // button.hide()

  rocket.velocityX=0;
  rocket.velocityY=0;

  if(keyDown(UP_ARROW)){
    rocket.velocityY=-5;
    rocket.velocityX=0;   

  }
  if(keyDown(DOWN_ARROW)){
    rocket.velocityY=5;
    rocket.velocityX=0;
  
  }
  back.velocityX=-4;
  asteriods();
  backgd();
  stars();

  if(rocket.isTouching(starGroup))
  {
    score=score+1;
    starGroup.destroyEach();
  }
if(rocket.isTouching(asteriodGroup))
{
gameState="END";


}

 
 
  if(score===5){
    gameState="SATURN";
  }
}
if(gameState === "END"){
  rocket.destroy()
  asteriodGroup.destroyEach()
  asteriodGroup.setVelocityEach(0)
  starGroup.destroyEach()
  starGroup.setVelocityEach(0)
  back.destroy();
  background(backIMG)
  
  fill("yellow")
  stroke("white")
  textSize(34)
 
  text("Oh no😔!! Better Luck Next Time",300,300)
  // button.hide()
}

if(gameState==="SATURN"){

 back.destroy()
 starGroup.destroyEach()


  background(bg2IMG)
  textSize(22);
  fill("yellow");
 

  text("Good Job!🤩 You have now crossed the crucial part and go ahead and get the medicine🧴, click next to reach saturn!😉",100,100);
  
 var button=createSprite(600,500)
 if(mousePressedOver(button)){
   background(surIMG)
 }
 
  // button.mousePressed(()=>{
  //   background(surIMG)
  // })

}

if(rocket.isTouching(starGroup))
{
  score=score+1;
  starGroup.destroyEach();
}


  drawSprites()
  
  
  textSize(32);
  fill("yellow");
  stroke("red")

  text("Stars Collected🌟: "+score,1000,50);
}

function asteriods(){
  if(frameCount % 100 == 0){
    var asteriod = createSprite(width,height-60,10,40);
    asteriod.velocityX = -12;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: asteriod.addImage(aster1IMG);
              break;
      case 2: asteriod.addImage(aster2IMG);
              break;
      case 3: asteriod.addImage(aster3IMG);
              break;
      case 4: asteriod.addImage(aster4IMG);
              break;
      case 5: asteriod.addImage(aster5IMG);
              break;    
      default: break;
    }
    asteriod.scale=random(0.07,0.3);
    asteriod.y=Math.round(random(50,height-30))
    asteriodGroup.add(asteriod)
  }

}
function backgd(){

  if(frameCount % 100 == 40)
  {
      back.x=100;
  }
}
function stars(){
  if(frameCount % 50 == 0){
    var star = createSprite(width,height-60,10,40);
    star.velocityX = -12;

    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: star.addImage(star1IMG);
              break;
      default: break;
    }
    star.scale=0.04;
    star.y=Math.round(random(50,height-30))
    starGroup.add(star)
  }
 

}

