class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.imagebase=loadImage("assets/cannonBase.png")
    this.imagearm=loadImage("assets/canon.png")
  }
  display(){
    image(this.imagebase,70,20,200,200)
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.imagearm,0,0,this.width,this.height)
    pop()
    if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
     this.angle = this.angle+1
    }
    if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
      this.angle = this.angle-1
     }
  } 
}
