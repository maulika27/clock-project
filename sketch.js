
var hr,mn,sc;
var scAngle,mnAngle,hrAngle;



function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background("black");

  translate(200,200)
  rotate(-90)
  
  hr = hour();
  mn = minute();
  sc  = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 60, 0, 360);

  
  strokeWeight(7);

  
push();
rotate(scAngle);
  stroke("blue")
  line(0,0, 100, 0 )
pop();

  push();
 rotate(hrAngle);
  stroke("yellow");
  line(0,0, 50, 0)
 pop();

 push();
 rotate(mnAngle);
  stroke("red");
  line(0,0, 75, 0);
 pop();
  


 strokeWeight(10);
noFill();

stroke("red");
arc(0,0,280,280,0,mnAngle);


stroke("blue");
arc(0,0,300,300,0,scAngle);

stroke("yellow");
arc(0,0,260,260,0,hrAngle);
  //drawSprites();
}