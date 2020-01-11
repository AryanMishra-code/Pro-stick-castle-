var base;
var palaceGates;
var gate;
var lol;
var border;
var pillar1;
var pil1;
var pillar2;
var pil2;

function setup() {
  createCanvas(1350,650);
  base = createSprite(675,600, 1000, 10);
  base.shapeColor = "red" ;

  palaceGates = createSprite(675, 395, 400 , 400);
  palaceGates.shapeColor = "white";
   
  gate = createSprite(670, 470, 150, 250);
  gate.shapeColor = "black";

  lol = createSprite(670, 110, 175, 175);
  lol.shapeColor = "white";

  pillar1 = createSprite(300, 320, 50, 550);
  pillar1.shapeColor = "white";

  border = createSprite(670, 190, 175, 10);
  border.shapeColor = "black";

  pil1 = createSprite(300, 50, 100, 80);
  pil1.shapeColor = "orangered";

  pillar2 = createSprite(1050, 320, 50, 550);
  pillar2.shapeColor = "white";

  pil2 = createSprite(1050, 50, 100, 80);
  pil2.shapeColor = "orangered";
}

function draw() {
  background("turquoise"); 
  drawSprites();
}