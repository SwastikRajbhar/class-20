var fix,move;


function setup() {
  createCanvas(1200,800);
fix=createSprite(600,400,50,80);
fix.shapeColor="green";
fix.debug=true;
move=createSprite(400,200,80,30);
move.shapeColor="green";
move.debug=true;



}

function draw() {
  background(255,255,255); 
  
  move.x=World.mouseX;
  move.y=World.mouseY;

if(move.x-fix.x<fix.width/2+move.width/2
  &&fix.x-move.x<fix.width/2+move.width/2
  &&move.y-fix.y<fix.height/2+move.height/2
  &&fix.y-move.y<fix.height/2+move.height/2){
move.shapeColor="red";
fix.shapeColor="red";
 }

else{
  move.shapeColor="green";
  fix.shapeColor="green";
}


  drawSprites();
}