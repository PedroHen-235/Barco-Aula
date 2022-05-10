const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;


var barco
var matrixbarco = []


var canvas, angle, tower, ground, cannon, cannonball
var caixabolas = []
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
 
  cannon = new Cannon (180,110,130,100,angle)
  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  for (var i = 0;i<caixabolas.length;i=i+1) {
    showcannonballs (caixabolas[i],i)
    batidadobarco(i)
   }
   cannon.display()
   showbarcos()
}

function keyReleased(){
  if (keyCode===DOWN_ARROW) {
   caixabolas[caixabolas.length-1].shoot()
  }
}
function keyPressed() {
  if (keyCode===DOWN_ARROW) {
   cannonball = new Bola (cannon.x,cannon.y)
   cannonball.trajetoria=[]
   Matter.Body.setAngle(cannonball.body,cannonball.angle)
   caixabolas.push(cannonball)
  }
}
function showcannonballs(cannonball,indice){
  if (cannonball) {
    cannonball.display()
    if (cannonball.body.position.x>=width||cannonball.body.position.y>=height-50) {
      cannonball.remove(indice)
    }
  }
}
function showbarcos (){
 if (matrixbarco.length>0){
  if (matrixbarco[matrixbarco.length-1]===undefined||matrixbarco[matrixbarco.length-1].body.position.x<width-300){
    var position = [-40, -60, -50, -30]
    var aleatoria = random (position)
    barco = new Barco (width-79, height-60, 170, 170,aleatoria)
    matrixbarco.push(barco)
  }
  for (var i = 0; i<matrixbarco.length;i = i+1) {
    if(matrixbarco[i]){
      matrixbarco[i].display()
      Matter.Body.setVelocity(matrixbarco[i].body, {x:-1,y:0}) 
    }
  }
 } else{
  barco = new Barco (width-79, height-60, 170, 170,-80)
  matrixbarco.push(barco)
 }




}
function batidadobarco (indice) {
  for (var i = 0; i<matrixbarco.length;i = i+1) { 
    if (caixabolas[indice]!==undefined&&matrixbarco[i]!==undefined) {
      var colisao = Matter.SAT.collides (caixabolas[indice].body,matrixbarco[i].body)
      console.log (colisao)
      if (colisao.collided) {
       matrixbarco[i].remove(i)
       Matter.World.remove (world,caixabolas[indice].body)
       delete caixabolas[indice]
      }
    }
  }
}


