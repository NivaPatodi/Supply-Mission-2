const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall, wall1, bg, bgIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgIMG=loadImage("background.jpg")
}

function setup() 
{
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bg = createSprite(400, 350, 800, 700);
	bg.addImage(bgIMG);

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	//helicopterSprite.velocityX = 5;

	wall1 = createSprite(400, 660, 175, 20);
	wall2 = createSprite(320, 630, 20, 75);
	wall3 = createSprite(480, 630, 20, 75);
	wall1.shapeColor = color(255, 0, 0);
	wall2.shapeColor = color(255, 0, 0);
	wall3.shapeColor = color(255, 0, 0);

	//wall1 = new Box(680, 645, 175, 20);
	//wall2 = new Box(600, 630, 20, 75);
	//wall3 = new Box(760, 630, 20, 75);

	var ground_options = 
	{
		isStatic : true
	}

	var wall_options = 
	{
		isStatic : true
	}

	var package_options = 
	{
		restitution : 0.3,
		friction : 1.5,
		density : 15,
		isStatic : true
	}

	ground = Bodies.rectangle(400, 650, 800, 10, ground_options);
	World.add(world, ground);

	wall = Bodies.rectangle(400, 660, 175, 20, wall_options);
	World.add(world, wall);

	packageBody = Bodies.circle(400 , 200 , 5, package_options);
	World.add(world, packageBody);

	Engine.run(engine);  

	
}


function draw() 
{
	background(0);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	//packageSprite.x= packageSprite.position.x + 5;
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;

	//wall1.display();
	//wall2.display();
	//wall3.display();

	//console.log(packageBody.speed);
	drawSprites(); 
}

function keyPressed() 
{
 	if (keyCode === DOWN_ARROW) 
 	{
 		Matter.Body.setStatic(packageBody,false);    
 	}
}