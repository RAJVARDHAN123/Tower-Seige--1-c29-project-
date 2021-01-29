const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height, height + 1000, 60);

    Stand1 = new Ground(1000, height/1.4, 300, 20);

    Stand2 = new Ground(500, height/2, 200, 20);

    hexagon = new Hexagon(200, 100, 100);

    rubber = new SlingShot(hexagon.body, {x: 200, y: 100});

    g1 = new GreenBlock(900, 450, 40, 50);
    g2 = new GreenBlock(940, 450, 40, 50);
    g3 = new GreenBlock(980, 450, 40, 50);
    g4 = new GreenBlock(1020, 450, 40, 50);
    g5 = new GreenBlock(1060, 450, 40, 50);
    g6 = new GreenBlock(1100, 450, 40, 50);
    g7 = new GreenBlock(960, 280, 40, 50);
    g8 = new GreenBlock(1000, 280, 40, 50);
    g9 = new GreenBlock(1040, 280, 40, 50);
    g10 = new GreenBlock(460, 280, 40, 50);
    g11 = new GreenBlock(500, 280, 40, 50);
    g12 = new GreenBlock(540, 280, 40, 50);

    b1 = new BlueBlock(920, 410, 40, 50);
    b2 = new BlueBlock(960, 410, 40, 50);
    b3 = new BlueBlock(1000, 410, 40, 50);
    b4 = new BlueBlock(1040, 410, 40, 50);
    b5 = new BlueBlock(1080, 410, 40, 50);
    b6 = new BlueBlock(980, 220, 40, 50);
    b7 = new BlueBlock(1020, 220, 40, 50);
    b8 = new BlueBlock(480, 240, 40, 50);
    b9 = new BlueBlock(520, 240, 40, 50);

    r1 = new RedBlock(940, 360, 40, 50);
    r2 = new RedBlock(980, 360, 40, 50);
    r3 = new RedBlock(1020, 360, 40, 50);
    r4 = new RedBlock(1060, 360, 40, 50);
    r5 = new RedBlock(1000, 180, 40, 50);
    r6 = new RedBlock(500,200, 40, 50);
  
}

function draw(){
    background(1000);
    Engine.update(engine);
     
    ground.display();

    strokeWeight(10);
    textSize(24);
    text("Drag the Hexagonal stone and release it, to launch it towards the stone", 200, 50);
    text("press space to get second chance", 200, 100);

    Stand1.display();
    Stand2.display();

    rubber.display();

    hexagon.display();

    g1.display();
    g2.display();
    g3.display();
    g4.display();
    g5.display();
    g6.display();
    g7.display();
    g8.display();
    g9.display();
    g10.display();
    g11.display();
    g12.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();

    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    r6.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber.fly();
}

function keyPressed(){

    if(keyCode == 32){
 
        Matter.Body.setPosition(hexagon.body,{x:200, y: 100});
        rubber.attach(hexagon.body)

    }

}
