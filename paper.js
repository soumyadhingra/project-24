class Paper{
    constructor(x,y,width,hieght){
        var options={
            isStatic=false
            'restitution':0.3
            'friction':0.5
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius
        
        world.add(world,this.body);
        
    }
    display(){
        eliplsemode(RADIUS)
        fill("yellow")
        
       Circle(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }