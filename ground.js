class Ground{
constructor (x,y,width,height){


const options = {
    isStatic:(true)
};
this.body=Matter.Bodies.rectangle(x,y,width,height,options);

this.width = width;
this.height = height;
this.collapse = false;

World.add(world, this.body)

}
display(){
    var pos= this.body.position;


    push();
    imageMode(CENTER)
    pop();
}
}