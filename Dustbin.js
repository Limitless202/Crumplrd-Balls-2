class Dustbin{
    constructor(x,y,width,height){

        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:5.9
        
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.image=loadImage("dustbin.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }


  display(){

    var Dustbinpos=this.body.position;

    push()

    translate(Dustbinpos.x,Dustbinpos.y);
    ellipseMode(RADIUS);
    fill(255);
    imageMode(CENTER);
    image(this.image,100,100,145,145);
    
    
    pop()

    


 }
}