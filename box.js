class Box {
    constructor(x,y,width,height){
        var option ={
            restitution :0.4,
            friction :0.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 3){
            this.body.display();
        }
        else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
        }
        
    }

}