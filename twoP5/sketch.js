var mind = 100;
var r = 30;
var g = 155;
var b = 22;
var y = 100;
var mySound;

function preload() {
  mySound = loadSound('Axero_feat.Jimmy_Magardeau-WalkAway.mp3');
}
function setup() {
createCanvas(600,800);
background(30);
mySound.setVolume(0.1);
mySound.play();
}
function draw(){
  if(mouseIsPressed){
    background('#0000ff');
  }else{
    fill('ff999f');
  }
 fill(123);
 ellipse(mouseX,mouseY,mind,100);
 fill(r,g,b);
 rect(100,30,22,mind);
 y = y - 1;
 if (y < 0) {
   y = height;
 }
 line(0, y, width, y);
}
