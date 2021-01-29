
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1600, 990);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paper=new Paper(150,520,70);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper.display();
  dustbinObj.display();
  

}

function keyPressed(){

	if(keyDown("up_arrow")){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:430,y:731});
		
	}
	

}
