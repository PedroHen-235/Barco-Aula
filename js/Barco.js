class Barco{
    constructor(x, y, w, h, posbarco) {
        this.body = Bodies.rectangle(x, y, w, h)
        this.w = w 
        this.h = h
        this.posbarco = posbarco
        this.image = loadImage("assets/Barco.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.posbarco,this.w,this.h)
        pop()




    }
    remove (indice) {
        setTimeout(() => {
         Matter.World.remove(world,matrixbarco[indice].body)
         delete matrixbarco[indice]         
        }, 20000);
    }



}






