
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango;
var stone;
var mangotree;
var bk_game;

function preload()
{
  mango = loadImage("image_processing20200508-13712-z8c1za.png");
  stone = loadImage("Pebble-Stone-PNG-Clipart.png");
  mangotree = loadImage("419-4192854_mango-tree-clip-art.png");
  bk_game = loadImage("8899591fcde45ec3991ef48efb053e74.jpg");
}




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

