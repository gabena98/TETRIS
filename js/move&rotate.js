function key(){
	this.leftKey=false;
	this.rightKey=false;
	this.upKey=false;
	this.delay = 0;
	this.rotateDelay=0;

	document.addEventListener("keydown",this.keyDownHandlerr.bind(this));
	document.addEventListener("keyup",this.keyUpHandler.bind(this));
}

key.prototype.keyDownHandlerr=
function(e){
	if (e.key == "Up" || e.key == "ArrowUp"){
		this.upKey=true;
	}
	if (e.key == "Left" || e.key == "ArrowLeft"){
		this.leftKey = true;
	}
	if (e.key == "Right" || e.key == "ArrowRight"){
		this.rightKey = true;
	}
	if (e.key == "Down" || e.key == "ArrowDown"){
		console.log("giù");
		session.tetromino.speed =fastSpeed;
	}
}

key.prototype.keyUpHandler=
function(e){
	if(e.key == "Up" || e.key == "ArrowUp"){
		this.upKey=false;
		this.rotateDelay=0;
	}
	if(e.key == "Left" || e.key == "ArrowLeft")
		this.leftKey=false;
	if(e.key == "Right" || e.key == "ArrowRight")
		this.rightKey=false;
	if(e.key == "Down" || e.key == "ArrowDown"){
		console.log("su");
		session.tetromino.speed=normalSpeed;
	}
}

key.prototype.moveTDirection=
function(){
	var direction=0;
	if(this.rightKey)
		direction= 1;
	if(this.leftKey)
		direction= -1;
	this.delay+=dimSquare;
	if(session.gameBoard.movementAllowed(direction)){
		if (this.delay > 0){
			session.tetromino.moveT(direction);
			this.delay = dimSquare*(-6);
		}
	}
}

key.prototype.rotateT=
function(){
	if (this.upKey) {
		this.upKey=false;
		if(session.tetromino.insideBoundaries()){
			if(session.tetromino.checkRotation()){
				this.rotateDelay+= 1;
				if(this.rotateDelay>0){
					session.tetromino.rotation= (session.tetromino.rotation+90)%360;
					this.rotateDelay= (-6);
				}
			}
		}
	}
}
