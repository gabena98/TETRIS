function tetrisGameBoard(){
	this.points=0;
	this.sprite=[];
	this.square=[];
	for (var i = 0; i < shapes.length; i++) {
		var img= new Image();
		img.src="./sprites/Square"+shapes[i]+ ".png";
		this.sprite[i]=img;
	}
	for (var i = 0; i < 20; i++) {
		this.square[i]=[];
		for (var j = 0; j < 10; j++) {
			this.square[i][j]={
				present:false,
				x:gameUImargin + j*dimSquare,
				y:i*dimSquare
			};
		}
	}
}

tetrisGameBoard.prototype.addTetromino=
function(){
	var i=0;
	var j=0;
	switch(session.tetromino.icon){
		case "O":
			 i=Math.floor(session.tetromino.y/dimSquare);
			 j=Math.floor((session.tetromino.x-gameUImargin)/dimSquare);
			if(i>=0 && i+1<20 && j>=0 && j+1<10){
				this.square[i][j].present=this.sprite[2];
				this.square[i][j+1].present=this.sprite[2];
				this.square[i+1][j].present=this.sprite[2];
				this.square[i+1][j+1].present=this.sprite[2];
			}
			else
				session.GameOver();
		break;
		case "I":
			i = Math.floor((session.tetromino.y+2*dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+2*dimSquare-gameUImargin)/dimSquare);

			if (session.tetromino.rotation == 0){
				if ( i-2 >= 0 && i+1 < 20 && j >= 0 && j < 10){				
					this.square[i][j].present = this.sprite[1];
					this.square[i-1][j].present = this.sprite[1];
					this.square[i-2][j].present = this.sprite[1];
					this.square[i+1][j].present = this.sprite[1];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if ( i >= 0 && i < 20  && j-2 >= 0 && j+1 < 10){				
					this.square[i][j-2].present = this.sprite[1];
					this.square[i][j-1].present = this.sprite[1];
					this.square[i][j].present = this.sprite[1];
					this.square[i][j+1].present = this.sprite[1];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if ( i-1 >= 0 && i-1 < 20 && j-2 >= 0 && j+1 < 10){				
					this.square[i-1][j].present = this.sprite[1];
					this.square[i-1][j-2].present = this.sprite[1];
					this.square[i-1][j-1].present = this.sprite[1];
					this.square[i-1][j+1].present = this.sprite[1];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if ( i-2 >= 0 && i+1 < 20  && j-1 >= 0 && j-1 < 10){				
					this.square[i][j-1].present = this.sprite[1];
					this.square[i-2][j-1].present = this.sprite[1];
					this.square[i-1][j-1].present = this.sprite[1];
					this.square[i+1][j-1].present = this.sprite[1];
				}else{
					session.GameOver();
				}
			}
		break;
		case "L":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);

			if (session.tetromino.rotation == 0){
				if ( i >= 0 && i+1 < 20  && j-1 >= 0 && j+1 < 10){								
					this.square[i][j].present = this.sprite[6];
					this.square[i][j+1].present = this.sprite[6];
					this.square[i][j-1].present = this.sprite[6];
					this.square[i+1][j-1].present = this.sprite[6];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){				
					this.square[i][j].present = this.sprite[6];
					this.square[i-1][j-1].present = this.sprite[6];
					this.square[i-1][j].present = this.sprite[6];
					this.square[i+1][j].present = this.sprite[6];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if ( i-1 >= 0 && i+1 < 20 && j >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[6];
					this.square[i+1][j+1].present = this.sprite[6];
					this.square[i+1][j].present = this.sprite[6];
					this.square[i-1][j].present = this.sprite[6];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[6];
					this.square[i][j+1].present = this.sprite[6];
					this.square[i][j-1].present = this.sprite[6];
					this.square[i-1][j+1].present = this.sprite[6];
				}else{
					session.GameOver();
				}
			}
		break;
		case "J":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);

			if (session.tetromino.rotation == 0){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[4];
					this.square[i][j+1].present = this.sprite[4];
					this.square[i][j-1].present = this.sprite[4];
					this.square[i-1][j-1].present = this.sprite[4];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[4];
					this.square[i-1][j].present = this.sprite[4];
					this.square[i-1][j+1].present = this.sprite[4];
					this.square[i+1][j].present = this.sprite[4];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){				
					this.square[i][j].present = this.sprite[4];
					this.square[i+1][j].present = this.sprite[4];
					this.square[i+1][j-1].present = this.sprite[4];
					this.square[i-1][j].present = this.sprite[4];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[4];
					this.square[i][j+1].present = this.sprite[4];
					this.square[i][j-1].present = this.sprite[4];
					this.square[i+1][j+1].present = this.sprite[4];
				}else{
					session.GameOver();
				}
			}
		break;
		case "S":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);

			if (session.tetromino.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){								
					this.square[i][j].present = this.sprite[0];
					this.square[i+1][j].present = this.sprite[0];
					this.square[i][j+1].present = this.sprite[0];
					this.square[i+1][j-1].present = this.sprite[0];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){								
					this.square[i][j].present = this.sprite[0];
					this.square[i+1][j].present = this.sprite[0];
					this.square[i][j-1].present = this.sprite[0];
					this.square[i-1][j-1].present = this.sprite[0];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[0];
					this.square[i-1][j].present = this.sprite[0];
					this.square[i+1][j+1].present = this.sprite[0];
					this.square[i][j+1].present = this.sprite[0];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[0];
					this.square[i][j-1].present = this.sprite[0];
					this.square[i-1][j].present = this.sprite[0];
					this.square[i-1][j+1].present = this.sprite[0];
				}else{
					session.GameOver();
				}
			}
		break;
		case "T":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					this.square[i][j].present = this.sprite[3];
					this.square[i+1][j].present = this.sprite[3];
					this.square[i][j+1].present = this.sprite[3];
					this.square[i][j-1].present = this.sprite[3];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					this.square[i][j].present = this.sprite[3];
					this.square[i+1][j].present = this.sprite[3];
					this.square[i-1][j].present = this.sprite[3];
					this.square[i][j-1].present = this.sprite[3];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[3];
					this.square[i+1][j].present = this.sprite[3];
					this.square[i-1][j].present = this.sprite[3];
					this.square[i][j+1].present = this.sprite[3];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[3];
					this.square[i][j-1].present = this.sprite[3];
					this.square[i-1][j].present = this.sprite[3];
					this.square[i][j+1].present = this.sprite[3];
				}else{
					session.GameOver();
				}
			}
		break;
		case "Z":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);

			if (session.tetromino.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){				
					this.square[i][j].present = this.sprite[5];
					this.square[i+1][j].present = this.sprite[5];
					this.square[i+1][j+1].present = this.sprite[5];
					this.square[i][j-1].present = this.sprite[5];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					this.square[i][j].present = this.sprite[5];
					this.square[i-1][j].present = this.sprite[5];
					this.square[i][j-1].present = this.sprite[5];
					this.square[i+1][j-1].present = this.sprite[5];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					this.square[i][j].present = this.sprite[5];
					this.square[i-1][j+1].present = this.sprite[5];
					this.square[i+1][j].present = this.sprite[5];
					this.square[i][j+1].present = this.sprite[5];
				}else{
					session.GameOver();
				}
			}
			if (session.tetromino.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){								
					this.square[i][j].present = this.sprite[5];
					this.square[i-1][j].present = this.sprite[5];
					this.square[i][j+1].present = this.sprite[5];
					this.square[i-1][j-1].present = this.sprite[5];
				}else{
					session.GameOver();
				}
			}
		break;

	}
}

tetrisGameBoard.prototype.lineCompleted=
function(){
	var checkLine=0;
	var checkSquare=0;
	var score=0;
	var repeat=false;
	for(var i=19; i>=0; i--){
		do{
			repeat=false;
			checkSquare=0;
			for(var j=0; j<10; j++){
				if(this.square[i][j].present)
					checkSquare++;
			}	
			if(checkSquare==10){
				repeat=true;
				checkLine++;
				for(var x= i; x>=1; x--){
					for(var k=0; k<10; k++)
						this.square[x][k].present=this.square[x-1][k].present;
				}
			}
		}while(repeat)
	}
	score=50*checkLine+(checkLine>3)*200+(checkLine>2)*150+(checkLine>1)*100;
	
	this.points+=score;
}
