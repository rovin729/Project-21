var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 30, 20);
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(Damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if (Damage<10) {
     wall.shapeColor=color(0,255,0);
   }
  }  
  drawSprites();
}
function hasCollided(lbullet,lwall) {
  BulletRightEdge=lbullet.x+lbullet.width;
  WallLeftEdge=lwall.x;
  if (BulletRightEdge>=WallLeftEdge) {
    return true
  }
  return false
}