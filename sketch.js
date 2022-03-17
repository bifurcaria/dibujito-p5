
  function setup() {
  createCanvas(400, 400);
  frameRate(20);
  background(0,0,255);
  }

  function draw() {
    fill (random(0,255),random(0,255),random(0,255));
    circle (mouseX, mouseY,15);
}


/*
consejitos en
https://p5js.org/es/reference/
*/
