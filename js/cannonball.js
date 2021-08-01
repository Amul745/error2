class CannonBall{

constructor(x,y){
 this.x=x;
 this.y=y;
this.radius=40;
var options ={
isStatic=true,
restitution=1.0,
friction=1.0,
density=1.0
}
this.body = Bodies.circle(x, y,this.radius,options);

this.image=loadImage("./assets/cannonball.png")
World.add(world,this.body)

}

show(){
var pos = this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.radius,this.radius)
pop()


}

}