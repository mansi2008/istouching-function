var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(200,200,40,30);
  rect3.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(touching(movingRect, fixedRect)){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();

  if(touching(rect3,movingRect)){
    rect3.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  else{
    movingRect.shapeColor="green";
    rect3.shapeColor="green";
  }
}

function touching(rect1,rect2){
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
    && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
  return true;
}
else{return false;}
}