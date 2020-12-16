
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper= new Paper(40,630,20)
	ground= new Ground(400,645,800,10)
	dustbin1= new dustbin(550,590,20,100)
	dustbin2= new dustbin(660,630,200,20)
	dustbin3= new dustbin(770,590,20,100)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

 
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

