
let circuloX
let circuloY
let diametro

function setup() {
  createCanvas(600, 600);
   background(64,224,208);
  
  circuloX=[300,150]
  circuloY=[300,150]
  diametro=[20,20]
  cor=[color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255))]
  
}

function draw() {
  fill(cor[0])
  circle(circuloX[0],circuloY[1],diametro[1])
  fill(cor[1])
  circle(circuloX[1],circuloY[1],diametro[1])

  diametro[0]=diametro[0]+1
  diametro[1]=diametro[1]+1
  
  if(mouseIsPressed){
    cor[0]=color(random(0,255),random(0,255),random(0,255))
    cor[1]= color(random(0,255),random(0,255),random(0,255))
    diametro[0]=0
    diametro[1]=0
    
  }
}
