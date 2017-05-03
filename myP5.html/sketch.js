var mind = 100;
var r = 30;
var g = 155;
var b = 22;

function setup() {
createCanvas(600,800);
background(30);

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
}
