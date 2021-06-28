function gameOverScreen(){
	cntx.clearRect(gameUImargin,0,c.width-2*gameUImargin,c.height);
	cntx.font = "30px Arial";
	cntx.fillStyle = "Black";
	cntx.fillText('Game Over',c.width/2,c.height/2);
	document.getElementById('gameOver').style.display="block";
}

gameSession.prototype.createGame=
function(){
	cntx.clearRect(0,0,c.width,c.height);
	this.gameIteration();
	this.gameBoard.createBoard();
	this.tetromino.createTetromino();
	this.GameUI();
	if (this.gameOver){
		gameOverScreen();
	}else{
		requestAnimationFrame(() => {this.createGame()});
	}
}

tetromino.prototype.createTetromino=
function(){
    // Store the current context state (i.e. rotation, translation etc..)
    cntx.save();
    //Convert degrees to radian 
    var rad = this.rotation * Math.PI / 180;
    //Set the origin to the center of the image
    cntx.translate(this.x + (this.sprite.width/4*3) / 2, this.y + (this.sprite.height/4*3) / 2);
    //Rotate the canvas around the origin
    cntx.rotate(rad);
    //draw the image    
    cntx.drawImage(this.sprite,(this.sprite.width/4*3) / 2 * (-1),(this.sprite.height/4*3) / 2 * (-1),this.sprite.width/4*3,this.sprite.height/4*3);
    // Restore canvas state as saved from above
    cntx.restore();

}

tetrisGameBoard.prototype.createBoard=
function(){
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 10; j++) {
			if (this.square[i][j].present) {
				cntx.drawImage(this.square[i][j].present,this.square[i][j].x,this.square[i][j].y,dimSquare,dimSquare);
			}
		}
	}
}

gameSession.prototype.GameUI=
function(){
	cntx.strokeStyle="black";
	cntx.lineWidth = 1;
	cntx.strokeRect(1,1,gameUImargin-2,c.height-2);
	cntx.strokeRect(c.width - gameUImargin+1,1,gameUImargin-2,c.height-2);
	cntx.font = "20px Arial";
	cntx.textAlign = "center";
	cntx.fillText("Punteggio",420,c.height/10);
	cntx.fillText(this.gameBoard.points,420,c.height/6);
	var offset = (gameUImargin-dimSquare - this.nextTetromino.sprite.width/4*3)/2;
	cntx.strokeStyle = "black";
	cntx.strokeRect( dimSquare/2,c.height/12,gameUImargin-dimSquare,gameUImargin-dimSquare);
	cntx.drawImage(this.nextTetromino.sprite,dimSquare/2 + offset,c.height/12 + offset,this.nextTetromino.sprite.width/4*3,this.nextTetromino.sprite.height/4*3);
}

