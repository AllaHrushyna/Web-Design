let shape1;
let img;

function preload() {
  shape1 = loadModel('/assets/splash.obj', true);
  img = loadImage('/assets/marble.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background('rgba(248, 248, 248, 0)');
  
  //links, rood
  directionalLight(255, 0, 0, height/2, width/2, -1);
  //onder, blauw
  directionalLight(0, 0, 255, -height/2, -width/2, -1);
  //boven, geel
  directionalLight(255, 255, 0, -height/2, width/2, -1);
  //rechts, groen
  directionalLight(0, 255, 0, height/2, -width/2, -1);
  
  //rood
  //pointLight(255, 0, 0, 40, -40, 0);
  //geel
  //pointLight(255, 255, 0, 40, 40, 0);
  //groen
  //pointLight(0, 255, 0, -40, -40, 0);
  //blauw
  //pointLight(0, 0, 255, 0, -40, -40);
  //pointLight(0, 255, 255, 0, 40, -40);
  //pointLight(255, 0, 255, 40, 40, 40);
  
  //ambientLight("rgb(248,230,248)")
  
  
  texture(img);
  
  model(shape1);
  orbitControl();
  
}