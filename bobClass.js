class Bob {
    constructor(x, y, radius) {
       var options = {
           'isStatic':true,
           'restitution':0.3,
           'friction':1,
           'density':1.2           
       }
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.body=Bodies.circle(x,y,radius,options);
       World.add(world, this.body);
     }
  display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       strokeWeight(4);
       stroke("green");
       fill("green");
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius)
       pop();
     }
}
 