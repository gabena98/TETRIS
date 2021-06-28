<?php
	session_start();
	if (isset($_SESSION['LoggedUser'])){
		header( 'Location: ./game.php');
		exit;
	}
?>


<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Gabriele Benanti">
		<meta name="keywords" content="game">
		<link rel="icon" href="./sprites/titolo.png">
		<link rel="stylesheet" type="text/css" href="./css/tetris.css"> 
		<title>Login</title>
	</head>
	<body>
		<div id="titlecontainer">
			<img src="./sprites/titolo.png" alt="tetris title">
		</div>
		<div id="logincontainer">
			<form id="loginform" method="post" action="./php/login.php">
				<input type="text" class="Text" name="username" placeholder="username"  autofocus required autocomplete="username">
				<br>
				<input type="password" class="Text" name="password"
				placeholder="password" required autocomplete="current-password">
				<br>
				<input type="submit" name="button" class="button" value="login">
				<?php
						if (isset($_SESSION['LogError']) && $_SESSION['LogError']){
							echo "<br><br>Errore: username o password non corretti";
							$_SESSION['LogError'] = false;
						}
				?> 
			</form>
			<br>
			<p>Non hai un account?</p>
			<a href="./php/registrationPage.php">Registrati qui</a>
		</div>
	</body>
</html>