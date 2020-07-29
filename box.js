class Box
{
  constructor(x, y, width, height) 
  {
    var box_options = 
    {
        restitution : 0.3,
        friction : 0.9,
        density : 1.2
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, box_options);   
    World.add(world, this.body);    
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;

    push();

    translate(position.x, position.y);
    rotate(angle);

    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);

    pop();
  }
}