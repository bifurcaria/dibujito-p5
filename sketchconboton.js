var btn;

  function algo() {
  saveCanvas("imagen","jpg");
}

  function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(0,0,255);
  btn=createButton('descargar');
  btn.position (20,20);
  btn.mousePressed(algo);
  }

  function draw() {
    fill (random(0,255),random(0,255),random(0,255));
    circle (mouseX, mouseY,15);
    line(100, 100, 400, 400);

}


/*
consejitos en
https://p5js.org/es/reference/
*/
