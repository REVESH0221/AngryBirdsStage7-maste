var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,50,hieght/2); 
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed; 
  drawSprites();
}