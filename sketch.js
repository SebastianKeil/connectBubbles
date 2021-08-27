let movers = [];


function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 10, 1);
  
  //mover = new Mover(width/2, height/2);
  
}

function draw() {
  background(100, 140, 220);
  for(let i = 0; i < movers.length; i++){
    movers[i].move(slider.value());
    movers[i].show();
    
    stroke(0,200,0);
    strokeWeight(20);
    if(i == 0){
      line(movers[movers.length-1].location.x, movers[movers.length-1].location.y, 
           movers[0].location.x, movers[0].location.y);
    } else if(i != movers.length){
      line(movers[i-1].location.x, movers[i-1].location.y, 
           movers[i].location.x, movers[i].location.y);
    } 
  }
  
}

function mousePressed(){
  if(mouseY < height-20){
    mover = new Mover(mouseX, mouseY);
    movers.push(mover);
    print(movers.length);
  }
}
