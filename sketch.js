
var r = 0;
var g = 0;
var b=0;



function setup(){
  createCanvas(1200,1200);
}


function draw(){
fill("black");
textSize(20);
text("the color changes as the triangle moves",500,50);
ellipse(mouseX,200,50,50);
drawSprites();
}
function mouseMoved(){
  r=Math.round(random(0,255));
  b=Math.round(random(0,255));
  g=Math.round(random(0,255));
  background(r,g,b); 
}