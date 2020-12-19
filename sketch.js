const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
//JSON Format
  var options={
    isStatic : true,
  }
  var ball_options={
    restitution : 0.9,
  }
  object=Bodies.rectangle(400,390,800,50,options);
  World.add(world,object);
  ball=Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);
console.log(object);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30);
}