const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var box13,box14,box15,box16;
var chains;

var gamestate = "play"

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  box1 = new Box(290,330,30,40);
  box2 = new Box(295,330,30,40);
  box3 = new Box(300,330,30,40);
  box4 = new Box(305,330,30,40);
  box5 = new Box(310,330,30,40);
  box6 = new Box(315,330,30,40);
  box7 = new Box(320,330,30,40);

  box8 = new Box(325,290,30,40);
  box9 = new Box(330,290,30,40);
  box10 = new Box(335,290,30,40);
  box11 = new Box(340,290,30,40);
  box12 = new Box(345,290,30,40);

  box13 = new Box(350,250,30,40);
  box14 = new Box(355,250,30,40);
  box15 = new Box(360,250,30,40);

  box16 = new Box(365,210,30,40);

  chains = new Chain(ball.body,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  ground.display();

  
  chains.display();

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,10);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
  chains.fly();   
  gamestate = "throw"
}

function keyPressed(){
  if(keyCode === 32){
   chains.attach(this.ball)
  }
}