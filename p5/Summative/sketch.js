/*Tag Game
2019-01-24
Madhusha*/

//make canvas
function setup() {
  createCanvas(800,800);


}

//Variable setup
var posW=800;
var posX= posW;
var posY= posW;
var posZ= posW;
var ballRadius = posW/18;
var startbutton;

//speed varaibles
var speedW=200;
var speedX=200;
var speedY=10;
var speedZ=10;

function draw() {
//background
background(0);

//Make the circles
fill(255,0,0);
ellipse(posW/20,posX/20,ballRadius,ballRadius);
fill(0,0,255);
ellipse(posY/1,posZ/1,ballRadius,ballRadius);

//draw portals
fill(255,255,0);
rect(790,0,10,799);
fill(255,255,0);
rect(1,790,799,77);


  // Code for staying on the canvas (red circle)
  if (posW/20 > width) {    // the object has moved off the canvas to the right
      posW = -speedW;
  }
  if (posW/20 < 0) {    // the object has moved off the canvas to the left
      posW = -speedW;
  }
  if (posX/20 > height) {    // the object has moved off the canvas to the bottom
      posX = -speedX;
  }
  if (posX/20 < 0) {    // the object has moved off the canvas to the top
      posX = -speedX;
  }


    // Code for staying on the canvas (blue circle)
    if (posY/1 > width) {    // the object has moved off the canvas to the right
        posY = -speedY;
    }
    if (posY/1 < 0) {    // the object has moved off the canvas to the left
        posY = -speedY;
    }
    if (posZ/1 > height) {    // the object has moved off the canvas to the bottom
        posZ = -speedZ;
    }
    if (posZ/1 < 0) {    // the object has moved off the canvas to the top
        posZ = -speedZ;
    }
  //when the two circles are exactly placed on the exact same place, It will say GAME OVER
    if (posW/25 === posY/1.07 && posX/25 === posZ/1.07 ) {
      posW = 5000;
      posY= 5000;
      posX = 5000;
      posZ = 5000;
      text ("GAME OVER",100,100);
    }
}

  //move the red circle
function keyPressed() {
  if (key === 'd') {  //move the red circle to the right
     posW += 200;
   }
   else if (key ==='a') {    //move the red circle to the left
     posW -= 200;
   }
   else if (key ==='s'){   //move the red circle down
     posX += 200;
   }
   else if (key ==='w'){   //move the red circle up
     posX -= 200;
   }
   


 //move the blue circle
 if (keyCode === RIGHT_ARROW) {  //move the blue circle to the right
    posY += 8;
  }
  else if (keyCode === LEFT_ARROW) {   //move the blue circle to the left
    posY -= 8;
  }
  else if (keyCode === DOWN_ARROW){   //move the blue circle down
    posZ += 8;
  }
  else if (keyCode === UP_ARROW){    //move the blue circle up
    posZ -= 8;
  }
}
function startScreen() {
startbutton = createButton("Start");
startbutton.position(width/3.3, 400);
startbutton.size(100,50);
startbutton.mousePressed(clickButton);
}
