class Rock{
  constructor(x,y,width,height){
    var options ={ isStatic: false}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage('images/rock1.png')
    World.add(world,this.body);
    this.width = width;
    this.height = height;
  }
  show()
  {
      var pos=this.body.position;
      imageMode(CENTER);
      fill('black');
      stroke('grey')
      image(this.image,pos.x, pos.y,this.width, this.height);
  }


}
