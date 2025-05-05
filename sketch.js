function setup() {
    createCanvas(windowWidth, windowHeight);
    background('rgb(177,238,248)');
  }
  
  function draw() {
    
    textSize(100)
    text('🕊️', 1200, 400); 
    
    
    fill('rgb(243,243,176)');
    stroke('rgb(247,247,212)');
    strokeWeight(25);
    circle(800, 200, 300);
    
    fill('rgb(247,247,95)');
    stroke('rgb(245,245,136)');
    strokeWeight(25);
    circle(800, 200, 200);
    
    fill('rgb(245,245,1)');
    stroke('rgb(245,245,24)');
    strokeWeight(25);
    circle(800, 200, 100);
    
    
    
    
    if (mouseIsPressed){
    strokeWeight(0);
    fill('rgba(255,255,255,0.10)')
    circle(mouseX, mouseY, 130);
    }
    
  }