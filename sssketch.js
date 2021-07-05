var backgroungImg,backgroung
var cat,catImg1,catImg2,catImg3,catImg4
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4


function preload() {
    //load the images here
    catImg1=loadImage("cat1,png")
    catImg2=loadImage("cat2.png")
    catImg3=loadImage("cat3.png")
    catImg4=loadImage("cat4.png")
    backgroungImg=loadImage("garden.png")
    mouseImg1=loadImage("mouse1.png")
    mouseImg2=loadImage("mouse2.png")
    mouseImg3=loadImage("mouse3.png")
    mouseImg4=loadImage("mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backgroung=createSprite(500,500)
    backgroung.addImage("backgroungImg")

    cat=createSprite(150,100,20,20)
    cat.addImage(catImg1)

    mouse=createSprite(900,100,20,20)
    mouse.addImage(mouseImg2)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(left_arrow)){
    mouse.addImage(mouseImg3)
    mouse.addAnimation(mouseImg3)
    
}

}
