
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,restitution:0.3,friction:0,density:1.2
}
ball=Bodies.circle(200,100,50,ball_options)
World.add(world,ball)
	Engine.run(engine);
  groundObj=new ground(width/2760,width)
  leftSide = new ground(1100,600,20,120)
  rightSide = new ground(1100,400,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50)
  drawSprites();
  groundObj.display();
 
}

function keyPressed(up){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.10,y:0})
}
}
	

