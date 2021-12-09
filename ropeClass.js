class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:50,
            pointB:{x:this.offsetX, y:this.offsetY}
       }
       this.offsetX=offsetX;
       this.offsetY=offsetY;
       this.rope=Constraint.create(options);
       World.add(world,this.rope);
    }
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    var anchorX=pointB.x+this.offsetX;
    var anchorY=pointB.y+this.offsetY;
    strokeWeight(4);
    line(pointA.x,pointA.y,anchorX,anchorY);
}
}
