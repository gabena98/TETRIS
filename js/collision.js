tetromino.prototype.stopTetromino=
function(){
	session.gameBoard.addTetromino();
	if(session.gameOver==false){
		session.tetromino=session.nextTetromino;
		session.nextTetromino=session.newTetromino();
	}
}

tetromino.prototype.gameCollision=
function () {
	var i=0;
	var j=0;
	switch(this.icon){
		case"I":
			i=Math.floor((this.y+2*dimSquare)/dimSquare);
			j=Math.floor((this.x+2*dimSquare-gameUImargin)/dimSquare);
			if(this.rotation==0){
				if(i+2>=0 && i+2<20 && j>=0 && j< 10 && session.gameBoard.square[i+2][j].present)
					this.stopTetromino();
			}
			if(this.rotation==90){
				if(i+1 >= 0 && i+1 <20 && j-2>= 0 && j+1 <10 && (session.gameBoard.square[i+1][j-2].present || session.gameBoard.square[i+1][j-1].present 
					|| session.gameBoard.square[i+1][j].present || session.gameBoard.square[i+1][j+1].present))
					this.stopTetromino();
			}
			if(this.rotation==180){
				if(i+2>=0 && i+2<20 && j-1>=0 && j-1<10 && session.gameBoard.square[i+2][j-1].present)
					this.stopTetromino();
			}
			if(this.rotation==270){
				if(i >= 0 && i <20 && j-2>= 0 && j+1 <10 && (session.gameBoard.square[i][j-2].present || session.gameBoard.square[i][j-1].present 
					|| session.gameBoard.square[i][j].present || session.gameBoard.square[i][j+1].present))
					this.stopTetromino();
			}
		break;
		case "J":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i+1 >= 0 && i+1< 20 && j-1 >= 0 && j+1< 10 &&(session.gameBoard.square[i+1][j].present || session.gameBoard.square[i+1][j+1].present 
					||session.gameBoard.square[i+1][j-1].present))
					this.stopTetromino();
			}
			if (this.rotation == 90){
				if ( i >= 0 && i+2 < 20 && j >= 0 && j+1 < 10 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i][j+1].present))
					this.stopTetromino();
				else
					if (i+2>= 0 && i+2 < 20 && j >= 0 && j < 10 &&session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 		
			}
			if (this.rotation == 270){
				if ( i+2 >= 0 && i+2 < 20  && j-1>= 0 && j< 10 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+2][j-1].present))
					this.stopTetromino();
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && i+2 < 20 && j-1 >= 0 &&  j+1< 10 &&(session.gameBoard.square[i+2][j+1].present ||session.gameBoard.square[i+1][j].present||
					 session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
				else
					if (i+2>= 0 && i+2 < 20 && j+1 >= 0 && j+1 < 10 &&session.gameBoard.square[i+2][j+1].present)
						this.stopTetromino();	 
					
			}
		break;
		case "L":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i+1 >= 0 && i+2 < 20  && j-1 >= 0 && j+1 < 10  &&(session.gameBoard.square[i+2][j-1].present ||session.gameBoard.square[i+1][j].present ||
					 session.gameBoard.square[i+1][j+1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j-1 >= 0 && j-1 < 10) && session.gameBoard.square[i+2][j-1].present)
						this.stopTetromino();	 
			}
			if (this.rotation == 90){
				if ( i >= 0 && i+2<20 && j-1 >= 0 &&  j < 10 &&(session.gameBoard.square[i+2][j].present || session.gameBoard.square[i][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2<20 && j >= 0 && j < 10) &&session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && i+1 < 20 && j-1 >= 0 &&  j+1 < 10 &&(session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+1][j+1].present ||
					 session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
			}
			if (this.rotation == 270){
				if ( i+2 >= 0 && i+2< 20 && j>= 0 &&  j+1 < 10 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+2][j+1].present))
						this.stopTetromino();
			}
		break;
		case "O":
			i = Math.floor(this.y/dimSquare);
			j = Math.floor((this.x-gameUImargin)/dimSquare);
			if (i+2 >= 0 && i+2 < 20 && j >= 0 &&  j < 10  &&(session.gameBoard.square[i+2][j].present || session.gameBoard.square[i+2][j+1].present))
					this.stopTetromino();
			
		break;
		case "S":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+1][j+1].present ||
					 session.gameBoard.square[i+2][j-1].present))
						this.stopTetromino();
				else
					if (i+2>= 0 && i+2 < 20 && j-1 >= 0 && j < 10 && (session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+2][j-1].present))
						this.stopTetromino();	 				
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) && session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 
			}
			if (this.rotation == 180){
				if ( i >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 && (session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+1][j-1].present ||session.gameBoard.square[i][j+1].present))
						this.stopTetromino();
				else
					if ((i+1>= 0 && i+1 < 20 && j-1 >= 0 && j < 10) && (session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();	 					
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+2][j+1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j+1 >= 0 && j+1 < 10) && session.gameBoard.square[i+2][j+1].present)
						this.stopTetromino();	 
			}
		break;
		case"T":
			 i = Math.floor((this.y+dimSquare)/dimSquare);
			 j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+1][j+1].present ||session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 
					
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) && session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 				
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&(session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+1][j+1].present || session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j < 10 && j+1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+1][j+1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) && session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 
			}
		break;
		case "Z":
			i = Math.floor((this.y+dimSquare)/dimSquare);
			j = Math.floor((this.x+dimSquare-gameUImargin)/dimSquare);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+2][j].present ||session.gameBoard.square[i+2][j+1].present ||session.gameBoard.square[i+1][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j+1 < 10) && (session.gameBoard.square[i+2][j+1].present ||session.gameBoard.square[i+2][j].present))
						this.stopTetromino();	 		
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+2][j-1].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j-1 >= 0 && j-1 < 10) && session.gameBoard.square[i+2][j-1].present)
						this.stopTetromino();	 					
			}
			if (this.rotation == 180){
				if ( i >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&(session.gameBoard.square[i+1][j].present ||session.gameBoard.square[i+1][j+1].present ||session.gameBoard.square[i][j-1].present))
						this.stopTetromino();
				else
					if ((i+1>= 0 && i+1 < 20 && j >= 0 && j+1 < 10) &&(session.gameBoard.square[i+1][j+1].present || session.gameBoard.square[i+1][j].present))
						this.stopTetromino();	 				
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&(session.gameBoard.square[i+1][j+1].present || session.gameBoard.square[i+2][j].present))
						this.stopTetromino();
				else
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) && session.gameBoard.square[i+2][j].present)
						this.stopTetromino();	 					
			}	
		break;
	}
}

tetromino.prototype.bottomLineCollision=
function(){
	switch(this.icon){
		case "O":
			if(this.y >= c.height - this.sprite.height/4*3)
				this.stopTetromino();
		break;
		case "J":
			if( ((this.y >= c.height - this.sprite.height/4*3) && (this.rotation != 0))
				 ||
				((this.y >= c.height - this.sprite.height/2) && (this.rotation == 0)))
					this.stopTetromino();
		break;
		case "Z":
		case "L":
		case "S":
		case "T":
			if( ((this.y >= c.height - this.sprite.height/4*3) && (this.rotation != 180))
				 ||
				((this.y >= c.height - this.sprite.height/2) && (this.rotation == 180)))
					this.stopTetromino();
		break;
		case "I":
			if( ((this.y >= c.height - this.sprite.height/4*3) && (this.rotation == 0 || this.rotation == 180))
				 ||
				((this.y >= c.height - this.sprite.height/4*3*3/4) && (this.rotation == 90))
				 ||
				((this.y >= c.height - this.sprite.height/4*3*1/2) && (this.rotation == 270)))
					this.stopTetromino();
		break;
	}
}

tetrisGameBoard.prototype.movementAllowed=
function(direction){
	var i=0;
	var j=0;
	switch(session.tetromino.icon){
		case"I":
			i=Math.floor((session.tetromino.y+2*dimSquare)/dimSquare);
			j=Math.floor((session.tetromino.x+2*dimSquare-gameUImargin)/dimSquare);
			if(session.tetromino.rotation==0){
				if(direction==1){
					if ( i-2>= 0 && i+1< 20 && j>= 0 && j+1< 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j+1].present && !this.square[i-2][j+1].present)
							return true;
						else
							return false;
					}else{
						console.log("dx I");
						return true;				
					}
				}
				if(direction==-1){
					if (i-2>= 0 && i+1 <20 && j-1>= 0 && j< 10){
						if(!this.square[i][j-1].present && !this.square[i+1][j-1].present && !this.square[i-1][j-1].present && !this.square[i-2][j-1].present)
							return true;
						else
							return false;
						
					}else{
						console.log("sx I");
						return true;
					}
				}
			}
			if (session.tetromino.rotation == 90){
				if(direction == 1){
					if (i < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present)
							return true;
						else
							return false;
						
					}else
						return true;
					
				}
				if(direction == -1){
					if (i < 20 && i >= 0 && j-3 >= 0 && j < 10){
						if(!this.square[i][j-3].present)
							return true;
						else
							return false;
						
					}else
						return true;
					
				}
				
			}
			if (session.tetromino.rotation == 180){
				if(direction == 1){
					if (i+1 < 20 && i-2 >= 0 && j >= 0 && j < 10){
						if(!this.square[i][j].present && !this.square[i+1][j].present && !this.square[i-1][j].present && !this.square[i-2][j].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i+1 < 20 && i-2 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-2].present && !this.square[i-1][j-2].present && !this.square[i-2][j-2].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 270){
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i-1][j+2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-3 >= 0 && j < 10){
						if(!this.square[i-1][j-3].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
		break;
		case"J":
			i= Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j= Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i-1][j].present)
							return true;
						else
							return false;
					}else{
						console.log("->");
						return true;
					}
				}
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i-1][j-2].present && !this.square[i][j-2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 90){
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j+2].present)
							return true;
						else
							return false;
						
					}else{
						console.log("vado a destra");
						return true;
					}
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.square[i-1][j-1].present && !this.square[i][j-1].present && !this.square[i+1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 180){
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j+2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				
			}
			if (session.tetromino.rotation == 270){
				if(direction == 1){
					if (i-1>= 0 && i+1< 20 && j >= 0 && j+1 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i-1][j-1].present && !this.square[i+1][j-2].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				
			}
		break;
		case"L":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if(direction == 1){
					if ( i >= 0 && i+1 < 20 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if ( i-1 >= 0 && i+1 < 20 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-2].present)
							return true;
						else
							return false;
					}else
						return true;
				}		
			}
			if (session.tetromino.rotation == 90){
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}	
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i-1][j-2].present && !this.square[i][j-1].present && !this.square[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
						
			}
			if (session.tetromino.rotation == 180){
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i-1][j+2].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i-1][j].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				
			}
			if (session.tetromino.rotation == 270){
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+2].present && !this.square[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i-1][j-1].present && !this.square[i+1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}	
		break;
		case"O":
			i= Math.floor(session.tetromino.y/dimSquare);
			j= Math.floor((session.tetromino.x-gameUImargin)/dimSquare);
			if(direction == -1){//sinistra
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!this.square[i][j-1].present && !this.square[i+1][j-1].present)
						return true;
					else
						return false;
				}else
					return true;
			}
			if(direction == 1){//destra
				if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
					if(!this.square[i][j+2].present && !this.square[i+1][j+2].present)
						return true;
					else
						return false;
				}else
					return true;
			}
		break;
		case"S":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if(direction == 1){
					if (i+1< 20 && i>= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}	
				if(direction == -1){
					if (i+1< 20 && i>= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i+1][j-2].present && !this.square[i][j-1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
						
			}
			if (session.tetromino.rotation == 90){
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i-1][j-2].present && !this.square[i+1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				
			}
			if (session.tetromino.rotation == 180){
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+1].present && !this.square[i-1][j+2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				
			}
			if (session.tetromino.rotation == 270){
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j+2].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i+1][j].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				
			}	
		break;
		case"T":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if(direction == 1){
					if ( i>= 0 && i+1< 20  && j>= 0 && j+2< 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j+1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				if(direction == -1){
					if ( i>= 0 && i+1 < 20 && j-2>= 0 && j< 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
							
			}
			if (session.tetromino.rotation == 90){
				if(direction == -1){
					if (i+1< 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-1].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == 1){
					if (i+1< 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+1].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 180){
				if(direction == 1){
					if (i< 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == -1){
					if (i< 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
						
					}else
						return true;
				}
				
			}
			if (session.tetromino.rotation == 270){
				if(direction == 1){
					if (i+1< 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i+1][j+1].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}	
				if(direction == -1){
					if (i+1< 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i+1][j-1].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
						
			}
		break;
		case"Z":
			i = Math.floor((session.tetromino.y+dimSquare)/dimSquare);
			j = Math.floor((session.tetromino.x+dimSquare-gameUImargin)/dimSquare);
			if (session.tetromino.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j+2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-2].present && !this.square[i+1][j-2].present && !this.square[i-1][j-1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.square[i][j+1].present && !this.square[i+1][j].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 180){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i-1][j-2].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i-1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}
			}
			if (session.tetromino.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.square[i][j-1].present && !this.square[i+1][j-1].present && !this.square[i-1][j].present)
							return true;
						else
							return false;
					}else
						return true;
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.square[i][j+2].present && !this.square[i-1][j+2].present && !this.square[i+1][j+1].present)
							return true;
						else
							return false;
					}else
						return true;
				}			
			}
		break;
	}
}

