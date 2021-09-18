
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ppr , dustbin; 

function preload()
{
	ppr=loadImage("crumpled paper/paper (2).png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grnd= new Ground(400,height,800,30);

	p1= new paper(50,300);

	r1= new redzone(600,660,220,20);
	r2= new redzone(500,615,20,70);
	r3= new redzone(700,615,20,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keypressed();

  grnd.display();
  p1.display();
  r1.display();
  r2.display();
  r3.display();
  ppr.display();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:10,y:-5});
	}
}



