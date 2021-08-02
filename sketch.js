const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

var ball;
var con;
var ball2;
var con2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.8
    
  }

  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);

  con = Constraint.create({
    pointA : {x : 200,y : 20},
    bodyB : ball,
    length : 100,
    stiffness : 0.1
  })
  World.add(world,con);
  
  ellipseMode(RADIUS);

  ball2 = Bodies.circle(350,100,10,ball_options);
  World.add(world,ball2);

  con2  = Constraint.create({
    bodyA : ball,
    bodyB : ball2,
    length : 100,
    stiffness : 0.1
  })
  World.add(world, con2);


}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);



  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  pop();

  
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}