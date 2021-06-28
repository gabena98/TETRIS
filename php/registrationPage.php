<?php
	session_start();
?>


<!DOCTYPE html>
<html lang="it">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Gabriele Benanti">
	<meta name="keywords" content="tetrisGame">
	<link rel="stylesheet" type="text/css" href="../css/tetris.css">
	<link rel="icon" href="../sprites/titolo.png">
	<title>registration page</title>
</head>
<body>
	<div id="titleBox">
		<img src="../sprites/titolo.png" alt="tetris title">		
	</div>
	<div id="loginBox">
		<form id="loginForm" method="post" action="./registration.php">
			<input type="text" class="inputValue" name="username"
			placeholder="username" required autofocus><br>
			<input type="email" class="inputValue" name="email" placeholder="email" required><br>
			<input type="password" class="inputValue" name="password"
			placeholder="password" required><br>
			<input type="password" class="inputValue" name="confirmedPassword" placeholder="Conferma la password" required><br>
			<input type="submit" class="button" name="Registrati" value="Registrati">
			<?php
					if (isset($_SESSION['regError']) && $_SESSION['regError']==1){
						echo "<br><br>Errore";
						$_SESSION['regError'] = 0;
					}
					if (isset($_SESSION['regError']) && $_SESSION['regError']==2){
						echo "<br><br>Errore: password non corrisponde";
						$_SESSION['regError'] = 0;
					}
					if (isset($_SESSION['regError']) && $_SESSION['regError']==3){
						echo "<br><br>Errore: username o email già usati";
						$_SESSION['regError'] = 0;
					}
				?>
		</form>
		<br>
		<p>Hai già un account?</p> 
		<a href="../index.php">Accedi qui</a>
	</div>
</body>
</html>