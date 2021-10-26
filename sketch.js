const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImage;
var score=0;

function preload() {
    polygonImage=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    ground = new Ground(450,390,900,20);
    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 200, 10);
    
    box1 = new Box(300,275);
    box2 = new Box(330,275);
    box3 = new Box(360,275);
    box4 = new Box(390,275);
    box5 = new Box(420,275);
    box6 = new Box(450,275);
    box7 = new Box(480,275);

    box8 = new Box(330,235);
    box9 = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);

    box13 = new Box(360,195);
    box14 = new Box(390,195);
    box15 = new Box(420,195);

    box16 = new Box(390,155);

    box17 = new Box(640,175);
    box18 = new Box(670,175);
    box19 = new Box(700,175);
    box20 = new Box(730,175);
    box21 = new Box(760,175);

    box22 = new Box(670,135);
    box23 = new Box(700,135);
    box24 = new Box(730,135);
    
    box25 = new Box(700,95);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingshot = new SlingShot(this.polygon,{x:100, y:200});


}

function draw(){
    background("gray");
    Engine.update(engine);
    
    noStroke();
    textSize(35);
    fill("white");
    text("Score: " + score, 750, 40);

    //strokeWeight(4);
    box1.display();
    
    box2.display();

    ground.display();

    box4.display();

    box5.display();

    box17.display();

    box6.display();

    box7.display();

    box8.display();

    box9.display();

    box10.display();

    box11.display();

    box12.display();
    
    box13.display();

    box14.display();

    box15.display();

    box16.display();

    box18.display();

    box19.display();

    box20.display();

    box21.display();

    box22.display();

    box23.display();

    box24.display();

    box25.display();

    stand1.display();
    stand2.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score()

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);




    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed() {
    if (keyCode===32) {
        slingshot.attach(this.polygon);
    }
}
