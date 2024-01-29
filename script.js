function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  // add your drawing code here ...
  noStroke();
  fill(73,79,85)
  fill("black")
  ellipse(width / 2, height / 1.3, 130,); // catbody
  fill(255,218,198)
  ellipse(width/2,height/1.7,100); // head
  rect(width / 2 - 20, height / 1.75 + 50, 37, 20); // neck
  fill(73,79,85)
  triangle(width/2 - 45, height/2.2 - 50, width/2 - 25, height/2 - 40, width/2 - 47, height/2 - 20 );
  triangle(width/2 + 45, height/2.2 - 50, width/2 + 25, height/2 - 40, width/2 + 47, height/2 - 20 );
  ellipse(width/2,height/1.85,120,55); // cheek
  ellipse(width/2,height/2,100); // head
  ellipse(width / 2 + 50, height / 1.5, 30, 80); // right hand
  ellipse(width / 2 - 50, height / 1.5, 30, 80); // left hand
  fill(12,4,4);
  arc(width / 2 + 23, height / 2 - 10, 30, 30, 0, PI * .8); // right eye
  arc(width / 2, height / 1.5, 25, 15, 19, PI, 0); // smile
  fill("pink")
  arc(width / 2, height / 1.73, 15, 10, 0, PI); // cat nose
  fill("yellow")
arc(width/2 - 23, height/2 - 10, 30,30, PI * .2, PI); // left eye
fill("black")
ellipse(width / 2 - 23, height / 2 - 6, 5, 9); // small oval in eye
fill(61, 12, 2)
rect(width / 2 - 70, height / 1.60 + 50, 150, 125);
stroke(0);
line(width/2, height / 1.2 + 78, width / 1.9, height / 1.7 + 65);
line(width / 2, height / 1.2 + 78, width / 2.14, height / 1.60 + 50);
}