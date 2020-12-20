var hr = hour();
var mn = minute();
var sc = second();


 var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);

  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,300,100);
  pop();

  mnAngle = map(mn,0,60,0,360);

  push();
  rotate(mnAngle);
  translate(0,0);
  stroke(0,0,255);
  strokeWeight(7);
  line(400,200,450,250);
  pop();

  hrAngle = map(hr,0,12,0,360);
  
  push();
  rotate(hrAngle);
  translate(0,0);
  stroke(0,255,0);
  strokeWeight(7);
  // arc(400, 200, 2280,2280, 0, PI + QUARTER_PI);
  line(400,200,475,125);
  pop();

  // drawSprites();
}




