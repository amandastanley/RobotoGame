var canvasWidth = 300; //canvas width
var canvasHeight = 250;//canvas height
var x = 0;//x position of where frame will be drawn
var y = 0;//y position of where frame will be drawn
var withobject = 0;//the first row aka the robot smashes the object and runs it over 
var withoutobject = 1;//the second row aka the robot is just driving
var failing = 2;//the third row aka the robot doesnt smash the box and crashes into it and flips over box
var srcX;//starting x coordinate of the current frame
var scrY;//starting y coordinate of the current frame
var spritesheetWidth = 3600;//the pixel count of the width of the entire spritesheet png
var spritesheetHeight = 900; //the pixel count of the height of the entire spritesheet png
var columns = 12; //the amount of columns that each row has in the spritesheet
var rows = 3;//the amount of rows that each column has in the spritesheet
var width = spritesheetWidth/columns;//calculating width of the frame
var height = spritesheetHeight/rows;//calculating height of the frame
var currentFrame = 0; //the current frame that the animation is on
var character = new Image(); //links drawing to image
character.src = "Roboto all.png"; //links drawing to image
var canvas = document.getElementById('canvas'); //getting the canvas to set width and height
canvas.width = canvasWidth; //setting width
canvas.height = canvasHeight;//setting height
var ctx = canvas.getContext('2d'); //creates the ctx
var framerow;
function updateFrame(){
  currentFrame = ++currentFrame % columns;//1 % 6 = 1 and 6 % 6 = 1 ask about this
  srcX= currentFrame * width; //calculates the starting x coordinate of the current frame
  srcY = framerow * height; //calculates the starting y coordinate of the current frame
  ctx.clearRect(x,y,width,height); //clears the canvas so it doesnt draw over itself repeatedly
  
}
document.querySelector("#playbutton").addEventListener("click", function() {
    if (framerow==undefined){
      framerow=2;
    }
    else if (framerow==2){
      framerow=0;
    }
    else if (framerow==0){
      framerow=2;
    }
    console.log(framerow);
});
function drawimage(){
  updateFrame(); //runs updateFrame function
  ctx.drawImage(character,srcX,srcY,width,height, x,y,width,height); 
  //this draws the image (the individual frames)
  
}
//document.getElementById("playbutton").addEventListener("click", function() {
 // if (framerow==1){
//    framerow=0;
//  }
 // else if (framerow==0){
  //  framerow=1;
//  }
 // console.log(framerow);
//});


//I learned this from https://youtu.be/W0e9Z5pmt-I (I understand this fairly well)


setInterval(function(){
  //this makes the interval so it can update and redraw the frame
  drawimage();
},100);