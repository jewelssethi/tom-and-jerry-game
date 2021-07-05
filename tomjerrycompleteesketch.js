var backgroundImg,background
var cat,catImg1,catwalking,catImg4
var mouse,mouseImg1,mouseteasing,mouseImg4


function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png")
    catwalking=loadAnimation("images/cat2.png","images/cat3.png")
    catImg4=loadAnimation("images/cat4.png")
    backgroundImg=loadImage("images/garden.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseteasing=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg4=loadAnimation("images/mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background=createSprite(500,500,50,50)
    background.addImage(backgroundImg)

    cat=createSprite(900,750,20,20)
    cat.addAnimation("sitting",catImg1)
    cat.scale=0.1
    
    mouse=createSprite(150,750,20,20)
    mouse.addAnimation("standing",mouseImg4)
    mouse.scale=0.1
    
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height)
    mouse.debug=false
}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
     if(cat.isTouching(mouse)){
         cat.velocityX=0
         cat.addAnimation("collided",catImg4)
         cat.changeAnimation("collided")
         mouse.addAnimation("teasing",mouseImg1)
         mouse.changeAnimation("teasing")
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left_arrow")){
    mouse.addAnimation(mouseteasing)
    mouse.changeAnimation(mouseteasing)
    cat.velocityX=-1

    cat.addAnimation("walking",catwalking)
    cat.changeAnimation("walking")
}

}
