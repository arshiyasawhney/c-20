function setup() {

 createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "green";

}

function draw() {
  background(200,255,255);  
  movingRect.y =  mouseY;
  movingRect.x = mouseX;
  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2) 
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.height/2+fixedRect.height/2) 
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)){ 
    fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red"; 
  } else{ fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green";

 }
  drawSprites();
}