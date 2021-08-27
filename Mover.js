class Mover {
  
  
  constructor(x, y){
    this.location = createVector(x,y);
    
  }
  
  move(x){
    
    this.location.x += random(-x, x);
    this.location.y += random(-x, x);
  }
  
  show(){
    stroke(200,0,0);
    strokeWeight(30);
    noFill();
    ellipse(this.location.x, this.location.y, 50)
  }
  
}