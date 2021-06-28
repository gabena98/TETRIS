function tetromino(sprite,x,y,icon,speed){
	this.sprite=sprite;
	this.x=x;
	this.y=y;
	this.icon=icon;
	this.speed=speed;
	this.rotation=0;
}

tetromino.prototype.moveT=
function(arrow){
	switch(this.icon){
		case "I":
			if (this.rotation == 90 || this.rotation == 270){
				if(this.x >= gameUImargin && this.x <= c.width - 4*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin || this.x > c.width - 4*dimSquare - gameUImargin)
						this.x -= arrow*dimSquare;
				}
			}
			if (this.rotation == 0){
				if(this.x >= gameUImargin - 2*dimSquare && this.x <= c.width - 3*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin - 2*dimSquare || this.x > c.width - 3*dimSquare - gameUImargin)//forse non serve
						this.x -= arrow*dimSquare;
				}
			}
			if (this.rotation == 180){
				if(this.x >= gameUImargin - dimSquare && this.x <= c.width - 2*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin - dimSquare || this.x > c.width - 2*dimSquare - gameUImargin)
						this.x -= arrow*dimSquare;
				}
			}
		break;
		case "J":
			if (this.rotation == 0 || this.rotation == 180){
				if(this.x >= gameUImargin && this.x <= c.width - 3*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					console.log("vado ->");
					if (this.x < gameUImargin || this.x > c.width - 3*dimSquare - gameUImargin){
						console.log("torna a<-");
						this.x -= arrow*dimSquare;
					}
				}
			}
			if (this.rotation == 90){
				if(this.x >= gameUImargin - dimSquare && this.x <= c.width - 3*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin - dimSquare || this.x > c.width - 3*dimSquare - gameUImargin){
						console.log("torna a<- 1");
						this.x -= arrow*dimSquare;
					}
				}
			}
			if (this.rotation == 270){
				if(this.x >= gameUImargin && this.x <= c.width - 2*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin || this.x > c.width - 2*dimSquare - gameUImargin){
						console.log("torna a<-2 ");
						this.x -= arrow*dimSquare;
					}
				}
			}
		break;
		case "O":
			if (this.x >= gameUImargin && this.x <= c.width - gameUImargin - 2*dimSquare){
				this.x += arrow*dimSquare;
				if (this.x < gameUImargin || this.x > c.width - gameUImargin - 2*dimSquare){
					this.x -= arrow*dimSquare;
				}
			}
		break;
		case "T":
		case "S":
		case "Z":
		case "L":
			if (this.rotation == 0 || this.rotation == 180){
				if(this.x >= gameUImargin && this.x <= c.width - 3*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin || this.x > c.width - 3*dimSquare - gameUImargin)
						this.x -= arrow*dimSquare;
				}
			}
			if (this.rotation == 270){
				if(this.x >= gameUImargin - dimSquare && this.x <= c.width - 3*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin - dimSquare || this.x > c.width - 3*dimSquare - gameUImargin)
						this.x -= arrow*dimSquare;
				}
			}
			if (this.rotation == 90){
				if(this.x >= gameUImargin && this.x <= c.width - 2*dimSquare - gameUImargin){
					this.x += arrow*dimSquare;
					if (this.x < gameUImargin || this.x > c.width - 2*dimSquare - gameUImargin)
						this.x -= arrow*dimSquare;
				}
			}
		break;
	}
}

tetromino.prototype.checkRotation=
function(){
	var i=0;
	var j=0;
	switch(this.icon){
		case "J":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i+1][j].present && !session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i-1][j+1].present)
						return true;
					else
						return false;
				}else
					return true;
			}
			if (this.rotation == 90){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i][j+1].present && !session.gameBoard.square[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j+1].present && !session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i-1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i+1][j].present && !session.gameBoard.square[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "I":
			i = Math.floor((this.y+2*dimSquare)/dimSquare);
			j = Math.floor((this.x+2*dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				//alert("c");
				if (i < 20 && i >= 0 && j-2 >= 0 && j+1 < 10){
					//alert("ci");
					if(!session.gameBoard.square[i][j+1].present && !session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i][j-2].present){
						//alert("cia");
						return true;
					}
					else
						return false;
				}else
					return true;
			}
			if (this.rotation == 90){
				if (i+1 < 20 && i-2 >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i-2][j-1].present && !session.gameBoard.square[i-1][j-1].present && !session.gameBoard.square[i+1][j-1].present)
						return true;
					else
						return false;
				}else
					return true;
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i-2 >= 0 && j >= 0 && j < 10){
					if(!session.gameBoard.square[i-2][j].present && !session.gameBoard.square[i][j].present && !session.gameBoard.square[i+1][j].present)
						return true;
					else
						return false;
					
				}else
					return true;
			}
			if (this.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-2 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i-1][j+1].present && !session.gameBoard.square[i-1][j-2].present)
						return true;
					else
						return false;
				}else
					return true;
			}
		break;
		case "Z":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i-1 >= 0 && i+1 < 20 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i+1][j-1].present && !session.gameBoard.square[i-1][j].present)
						return true;
					else
						return false;
				}else
					return true;
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i-1][j-1].present && !session.gameBoard.square[i][j+1].present)
						return true;
					else
						return false;
					
				}else
					return true;
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i+1][j].present && !session.gameBoard.square[i-1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "L":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i-1][j-1].present && !session.gameBoard.square[i+1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j+1].present && !session.gameBoard.square[i-1][j+1].present && !session.gameBoard.square[i][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i+1][j-1].present && !session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i+1][j].present && !session.gameBoard.square[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "T":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if (i < 20 && i-1 >= 0 && j >= 0 && j < 10){
					if(!session.gameBoard.square[i-1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i >= 0 && j >= 0 && j < 10){
					if(!session.gameBoard.square[i+1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "S":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i][j-1].present && !session.gameBoard.square[i-1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i-1][j].present && !session.gameBoard.square[i-1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!session.gameBoard.square[i+1][j].present && !session.gameBoard.square[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i >= 0 && j >= 0 && j+1 < 10){
					if(!session.gameBoard.square[i][j+1].present && !session.gameBoard.square[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "O":
			return true;
		break;
		default: return true;
	}
}

tetromino.prototype.insideBoundaries=//controllo prima della rotazione 
function(){
	switch(this.icon){
		case"O": return true;
		break;
		case "J":
			if(this.rotation==90){
				if(this.x < gameUImargin){//margine sinistro della tabella
					if(session.gameBoard.movementAllowed(1)){  //destra
						this.x+=dimSquare;
						return true;
					}
					else
						return false;
				}
			}
			if(this.rotation==270){
				if(this.x>c.width- gameUImargin -3*dimSquare){//margine destro della tabella
					if(session.gameBoard.movementAllowed(-1)){//sinistra
						this.x-=dimSquare;
						return true;
					}
					else
						return false;
				}
			}
		break;
		case"I":
			if(this.rotation==0){
				if(this.x<gameUImargin){//margine sinistro
					if(session.gameBoard.movementAllowed(1)){
						this.x+=dimSquare;
							console.log("sposto I dx");

						if(session.gameBoard.movementAllowed(1)){
							console.log("sposto I dx");
							this.x+=dimSquare;
							return true;
						}
						else{
							this.x-=dimSquare;
							return false;
						}					
					}
					else
						return false;
				}
				if(this.x> c.width- gameUImargin - 4*dimSquare){//margine destro
					if(session.gameBoard.movementAllowed(-1)){
						console.log("sposto I a sx");
						this.x-=dimSquare;
						return true;
					}
					else
						return false;
				}
			}
			if(this.rotation==180){
				if(this.x<gameUImargin){
					if(session.gameBoard.movementAllowed(1)){
						this.x+=dimSquare;
						return true;
					}
					else
						return false;
				}
				if (this.x>c.width- gameUImargin - 4*dimSquare) {
					if(session.gameBoard.movementAllowed(-1)){
						this.x-=dimSquare;
						if(session.gameBoard.movementAllowed(-1)){
							this.x-=dimSquare;
							return true;
						}
						else{
							this.x+=dimSquare;
							return false;
						}					
					}
					else
						return false;
				}
			}
		break;
		case"L":
		case"Z":
		case"T":
		case"S":
			if(this.rotation==90){
				if(this.x>c.width- gameUImargin - 3*dimSquare){
					if(session.gameBoard.movementAllowed(-1)){
						this.x-=dimSquare;
						return true;
					}
					else
						return false;
				}
			}
			if(this.rotation==270){
				if(this.x<gameUImargin){
					if(session.gameBoard.movementAllowed(1)){
						this.x+=dimSquare;
						return true;
					}
					else
						return false;
				}
			}
		}
		return true;
	}
