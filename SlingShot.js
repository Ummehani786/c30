class SlingShot{
constructor (a,pointB) {
    var info = {
        bodyA:a,
        pointB:pointB,
        stiffness:0.04,
        length:10

    }
    this.pointB=pointB;
    this.sling=Constraint.create(info);
    World.add(world,this.sling);
    
}
fly (){
  this.sling.bodyA=null;
}
display() {
  if(this.sling.bodyA){

  
  var pointA = this.sling.bodyA.position;
  var pointB = this.pointB;
  strokeWeight(4);
  line (pointA.x,pointA.y,pointB.x,pointB.y);
  }
}

}