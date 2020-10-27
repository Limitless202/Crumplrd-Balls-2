class Paper{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:5.9
        
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }


  display(){


    var paperpos=this.body.position;

    push()

    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    fill(255);
    imageMode(CENTER);
    image(this.image,-20,-20,100,100);
    
    
    pop()

 }
}
 