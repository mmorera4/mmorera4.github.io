let mic;

function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  
  let vol = mic.getLevel();
  
  let h = map (vol, 0, 1, 0, 300);
  
  background(220);
  fill (255,255);
  beginShape();
  vertex(0,242);//1r vertex
  vertex(120,240);//2n vertex
  vertex(160,160);//3è vertex
  vertex(160,80);//4è vertex
  vertex(180,40);//5è vertex
  vertex(260,40);//6è vertex
  vertex(280,80);//7è vertex
  vertex(360,100-h*6);//8è vertex BOCA DALT !
  vertex(280,120);//9è vertex BOCA DINS
  vertex(360,140+h*6);//10è vertex BOCA BAIX !
  vertex(280,160);//11è vertex
  vertex(240,240);//12è vertex
  vertex(260,280);//13è vertex
  vertex(260,320);//14e vertex
  vertex(260,360);//15è vertex
  vertex(220,400);//16è vertex
  vertex(0,400);//17è vertex
  endShape(CLOSE);
  
  fill (0,0,0)
  ellipse(240,80,20,20);
  
  
}
