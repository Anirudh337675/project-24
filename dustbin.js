class dustbin
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:true,
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
      
        rectMode(CENTER);
        fill("yellow");
        rect(roc.x,roc.y, this.width,this.height);
        
    }

}