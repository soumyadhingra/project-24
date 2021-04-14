class Ground{
constructor(x,y,width,hieght){
    var options={
        isStatic=true
        'restitution' : 0
        'friction' : 0
        'density':1
    }
    this.body=Bodies.rectangle(x,y,width,hieght,option);
    this.width=width;
    this.height=height;
}
display(){
    fill(255)
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}