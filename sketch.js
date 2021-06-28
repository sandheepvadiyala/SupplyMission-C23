var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

   boxPosition=width/2-100;
   boxY=610;

   LeftBoxSprite=createSprite(boxPosition,boxY,20,100);
   LeftBoxSprite.shapeColor="red";

   LeftBoxBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
   World.add(world,LeftBoxBody);

   BoxBase=createSprite(boxPosition+100,boxY+40,200,20);
   BoxBase.shapeColor="red";

   BottomBox=Bodies.rectangle(boxPosition+100,boxY+20,200,20,{isStatic:true});
   World.add(world,BottomBox);

   LeftBoxSprite=createSprite(boxPosition+210,boxY,20,100);
   LeftBoxSprite.shapeColor="red";

	/*box1 = createSprite(480,610,20,100);
	box1.shapeColor = "red";

	box2 = createSprite(280,610,20,100);
	box2.shapeColor = "red";

	box3 = createSprite(380,650,210,20);
	box3.shapeColor = "red";
*/
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);
  }
}



