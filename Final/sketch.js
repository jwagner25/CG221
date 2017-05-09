 var input, button, greeting;
var mySound;

function preload() {
  mySound = loadSound('03 Elegy.m4a');
}

function setup() {

  // create canvas
  createCanvas(710, 400);
  background(30);
  mySound.setVolume(0.1);
  mySound.play();

  input = createInput();
  input.position(20, 65);

  button = createButton('sound');
  button.position(input.x + input.width, 65);
  button.mousePressed(play);

  greeting = createElement('h2', 'What is the song?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function play() {
  var name = input.value();
  play.html('hello '+Hey+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function draw(){
}
