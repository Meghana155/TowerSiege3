class Box {
    constructor(x, y) {
var options = {
    'restitution':0.8,
    'friction':0.3,
    'density':1.0
}
this.Visibility=255;
this.body = Bodies.rectangle(x, y, 30, 40, options);
this.width = 30;
this.height = 40;

World.add(world, this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
if(this.body.speed < 3) {
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("green");
fill(255);
rect(0, 0, this.width, this.height);
pop();
}
else{
    World.remove(world, this.body);
    push();
    this.Visibility=this.Visibility-5;
    pop();
}
}
score() {
    if(this.Visibility<0 && this.Visibility >-105){
        score++;
    }
}
}




