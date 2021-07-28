var garden,rabbit;
var gardenImg,rabbitImg;
var gameState="play"



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png");
  redImg= loadImage("redImage.png");
  oranImg=loadImage("orangeLeaf.png")
}



function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,350,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);



  var rand =  Math.round(random(1,100))
  console.log(rand)
}




function draw() {
  background(0);
  
  // edges= createEdgeSprites();
  // rabbit.collide(edges);
  
  rabbit.x=World.mouseX


  createApple();
  callLeaves();
  drawSprites();
 
  
}




function createApple(){
  if(frameCount%80===0){
    if(rabbit.depth=1){
      Apple=createSprite(400,25,50,50);
      Apple.addImage("apple1", appleImg)
      Apple.scale=0.06
      Apple.x=Math.round(random(25,350))
      console.log(Apple.depth)
      console.log(rabbit.depth)
      rabbit.depth=Apple.depth
      rabbit.depth=Apple.depth+5
      Apple.velocityY=7;
    }
  } 
}

function callLeaves(){
  if(frameCount%50===0){
    redLeaves=createSprite(400,25,50,50);
    redLeaves.addImage("red1", redImg)
    redLeaves.scale=0.06
    redLeaves.x=Math.round(random(25,350))
    rabbit.depth=redLeaves.depth
    rabbit.depth=redLeaves.depth+5
    redLeaves.velocityY=7
  }

  if(frameCount%90===0){
    orangeLeaves=createSprite(400,25,50,50);
    orangeLeaves.addImage("or1",oranImg)
    orangeLeaves.scale=0.09
    orangeLeaves.x=Math.round(random(10,375))
    rabbit.depth=orangeLeaves.depth
    rabbit.depth=orangeLeaves.depth+5
    orangeLeaves.velocityY=7
  }
}