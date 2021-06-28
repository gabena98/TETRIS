var shapes = ["S","I","O","T","J","Z","L"];
var c;
var cntx;
var session;
var ctrl;
var dimSquare;
var arrowKey;
var gameUImargin = 0;
var Menu;
var fetchedScores;
var currentPage = 1;
var fastSpeed=5;
var normalSpeed= 1;

function startGame(){
	session= new gameSession();
	arrowKey= new key();

	document.getElementById("scoreTable").style.display="none";
	document.getElementById("gameOver").style.display="none";
	document.getElementById("menuButtons").style.display="none";
	session.createGame();
}

function gameSession(){
	this.tetromino= this.newTetromino();
	this.nextTetromino= this.newTetromino();
	this.gameBoard= new tetrisGameBoard();
	this.gameOver=false;
}

gameSession.prototype.gameIteration=
function(){
	this.tetromino.y+=this.tetromino.speed;
	arrowKey.moveTDirection();
	arrowKey.rotateT();
	this.tetromino.gameCollision();
	this.tetromino.bottomLineCollision();
	this.gameBoard.lineCompleted();
}

gameSession.prototype.GameOver=
function(){
	this.gameOver=true;
	AjaxRequest('GET','./php/Ajax/scoreSubmit.php?Score=' + session.gameBoard.points,true,null,ScoreSubmitted);
}

gameSession.prototype.newTetromino=
function(){
	var img= new Image();
	var shape=shapes[Math.floor(Math.random()*7)];
	img.src="./sprites/" +shape+ "piece.png";
	return new tetromino(img,(c.width-2*dimSquare)/2,-5*dimSquare,shape,1);

}

function gameMenu(){
	c = document.getElementById("gameArea");
	cntx = c.getContext("2d");
	dimSquare = c.height/20;
	gameUImargin = (c.width - dimSquare*10)/2;
	var img = new Image();
	img.src = "./sprites/titolo.png";
	this.Title = img;
}

function ScoreSubmitted(response){
	console.log("inviato!");
}

function loadGameMenu(){
	document.getElementById("gameOver").style.display="none";
	document.getElementById("options").style.display="none";
	document.getElementById("scoreTable").style.display="none";
	document.getElementById("navigationArrow").style.display="none";
	document.getElementById("menuButtons").style.display="block";
	Menu = new gameMenu();
	Menu.displayTitle();
}

gameMenu.prototype.displayTitle=
function(){
	cntx.clearRect(0,0,c.width,c.height);
	cntx.drawImage(this.Title,(c.width - this.Title.width/4*3)/2,c.height/8,this.Title.width/4*3,this.Title.height/4*3);
}

function ShowOption(){
	cntx.clearRect(0,0,c.width,c.height);
	document.getElementById("menuButtons").style.display="none";
	document.getElementById("options").style.display="block";
}

function FromOptionToMenu(){
	document.getElementById("options").style.display="none";
	loadGameMenu();
}

function ShowLeaderboard(){
	cntx.clearRect(0,0,c.width,c.height);
	document.getElementById("scoreTable").style.display="block";
	document.getElementById("navigationArrow").style.display="block";
	document.getElementById("menuButtons").style.display="none";
	AjaxRequest('GET','./php/Ajax/leaderboard.php',true,null,ajaxResponse);
}

function FromLeaderboardToMenu()
{
	cntx.clearRect(0,0,c.width,c.height);
	document.getElementById("scoreTable").style.display="none";
	document.getElementById("navigationArrow").style.display="none";
	loadGameMenu();

}
