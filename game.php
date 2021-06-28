<?php
	session_start();
	if (!isset($_SESSION['LoggedUser']))
		header("Location: ./index.php");
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Gabriele Benanti">
		<meta name="keywords" content="game">
		<link rel="stylesheet" href="./css/tetris.css" type="text/css">
		<link rel="icon" href="./sprites/titolo.png" >
		<script src="./js/Ajax/ajaxManager.js"></script>
		<script src="./js/tetrisGame.js"></script>
		<script src="./js/gameBoard.js"></script>
		<script src="./js/tetromino.js"></script>
		<script src="./js/create.js"></script>
		<script src="./js/move&rotate.js"></script>
		<script src="./js/collision.js"></script>
		<script src="./js/Ajax/leaderboard.js"></script>
		<title>Tetris Game</title>

	</head>
	<body onload="loadGameMenu()">
		<div id="gameBox">

			<canvas id="gameArea" width="480" height="480" style="border:1px solid #d3d3d3; background-color: #87CEFA;"></canvas>

			<div id="menuButtons">
				<button class="Mbutton" onclick="startGame()">Inizia il gioco</button><br><br>
				<button class="Mbutton" onclick="location.href='./html/howtoplay.html'"> Come si gioca</button><br><br>
				<button class="Mbutton" onclick="ShowOption()">Opzioni</button><br><br>
				<button class="Mbutton" onclick="ShowLeaderboard()">Classifica</button><br>
			</div>

			<div id="options">
				<?php if (isset($_SESSION['LoggedUser']))echo "<p style='color:black'>Logged in as '" . $_SESSION['LoggedUser'] . "'</p>";?>
				<button class="Mbutton" onclick="location.href='./php/logout.php'">Logout</button><br><br><br>
				<form method="post" id="Option" action="./php/changePswd.php">
					<input type="password" name="OldPSWD" placeholder="vecchia password" required><br>
					<input type="password" name="NewPSWD" placeholder="nuova password" required><br>
					<input type="password" name="ConfirmNewPSWD" placeholder="conferma la nuova password" required><br><br>
					<input type="submit" class="Mbutton" value="Cambia la password"><br><br>
					<?php if (isset($_SESSION['CPSWDError']) && $_SESSION['CPSWDError'] == 1){
							echo "<p style='color:black'>Errore</p>";
							echo "<script>window.onload=getContext();window.onload=ShowOption();</script>";
							$_SESSION['CPSWDError'] = 0;
						  }
						  if (isset($_SESSION['CPSWDError']) && $_SESSION['CPSWDError'] == 2){
							echo "<p style='color:black'>Errore: le password non combaciano</p>";
							echo "<script>window.onload=getContext();window.onload=ShowOption();</script>";
							$_SESSION['CPSWDError'] = 0;
						  }
						  if (isset($_SESSION['CPSWDError']) && $_SESSION['CPSWDError'] == 3){
							echo "<p style='color:black'>Errore: password non corretta</p>";
							echo "<script>window.onload=getContext();window.onload=ShowOption();</script>";
							$_SESSION['CPSWDError'] = 0;
						  }
					?>
				</form>
				<button class="Mbutton" onclick="FromOptionToMenu()">Torna al menu principale</button>
			</div>

			<table id="scoreTable">
				<tr>
					<th>Posizione</th>
					<th>Username</th>
					<th>Punteggio</th>
				</tr>
			</table>

			<div id="gameOver">
				<button class="Mbutton" onclick="startGame()">Gioca di nuovo</button><br><br>
				<button class="Mbutton" onclick="loadGameMenu()">Menu principale</button>
			</div>

			<div id="navigationArrow">
				<button class="button" onclick="PreviousPage()">&larr;</button>
				<button class="button" onclick="FromLeaderboardToMenu()">Torna al menu principale</button>
				<button class="button" onclick="NextPage()">&rarr;</button>		
			</div>
		</div>
	</body>