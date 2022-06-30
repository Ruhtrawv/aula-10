var deaths = 0
var car1, car2, car3,car4
var boundary1, boundary2
var sam 



boundary1 = createSprite(190,60,420,3)
boundary2 = createSprite(190,260,420,3)

sam = createSprite(20,190,13,13)
sam.shapeColor = "green"

car1 = createSprite(100,130,10,10)
car1.shapeColor = "red"
car2 = createSprite(215,130,10,10)
car2.shapeColor = "red"
car3 = createSprite(165,250,10,10)
car3.shapeColor = "red"
car4 = createSprite(270,250,10,10)
car4.shapeColor = "red"

car1.velocityY = 8
car2.velocityY = 8
car3.velocityY = -8
car4.velocityY = -8
//adicione velocidade para fazer o carro se mover.

function draw() {
background("black")

stroke("yellow");
strokeWeight(2)
fill("blue")
text("deaths: " + deaths,200,50);


strokeWeight(0);
fill("lightblue")
rect(0,60,52,200)
fill("yellow")
rect(345,60,52,200)

// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary1)
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if(keyDown("right")){
  sam.x = sam.x + 2
  
  
}
if(keyDown("left")){
  sam.x = sam.x - 2
}



//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
if(
   sam.isTouching(car1)||
   sam.isTouching(car2)||
   sam.isTouching(car3)||
   sam.isTouching(car4))
{
   sam.x = 20;
   sam.y = 170;
   deaths = deaths + 1
}
  
sam.setAnimation("2");
sam.scale = 0.20

car1.setAnimation("a");
car1.scale = 0.20

car2.setAnimation("aa");
car2.scale = 0.20

car3.setAnimation("aaa");
car3.scale = 0.20

car4.setAnimation("aaaa");
car4.scale =0.20

drawSprites();
}


console.log("hello");