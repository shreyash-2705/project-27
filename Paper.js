class Paper{
	constructor(x,y,r)
	{ var options = {
		isStatic:false,
        density:1,
		friction: 5,
		restitution:1,
	  };
	// assign options to the rubber ball
	//	this.body = Bodies.circle(x,y,width,options);
	
	this.image=loadImage("paper.png")
	
	    this.y = y;
		this.x=x;
		this.r=r;
		this.body=Bodies.circle(this.x,this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x,paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            image(this.image,0,0,this.r,this.r);      
			pop()
	}

}








