class Snow{
    constructor(x,y,r){
        var options={
         'restitution':1,
         'friction':0.6,
         'density':0.8
        }
        this.image=loadImage("snow5.webp");
        this.r=r;
    this.body = Bodies.circle(x,y,this.r,options);
   // this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);


    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,50,50)  ;
    //ellipseMode(RADIUS);
    //ellipse(0,0,this.r,this.r);
    pop();
 }
 
}