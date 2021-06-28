<?php
require_once __DIR__ . "/DataBaseManager/dbConfig.php";
require_once __DIR__ . "/DataBaseManager/dbManager.php";

function Registration($username,$password,$email){
	global $tetris;
	$username = $tetris->avoidSqlInjection($username);
	$password = $tetris->avoidSqlInjection($password);
	$email = $tetris->avoidSqlInjection($email);
	$query= 'CALL registration(\'' . $username . '\' , \'' . $password . '\', \'' . $email . '\');';
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito;

}

function AlreadyRegistered($username,$email){
	global $tetris;
	$username = $tetris->avoidSqlInjection($username);
	$email = $tetris->avoidSqlInjection($email);
	$query = 'SELECT Username,Email '
				 . ' FROM Users '
				 . ' WHERE Username = \'' . $username . '\' OR '
				 . ' Email = \'' . $email . '\';';
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito;
}

function trovaUtente($username,$password){
	global $tetris;
	$username = $tetris->avoidSqlInjection($username);
	$password = $tetris->avoidSqlInjection($password);
	$query = 'CALL TrovaUtente(\'' . $username . '\', \'' . $password . '\');';
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito;
}

function changePassword($username,$newPassword,$oldPassword){
	global $tetris;
	$username = $tetris->avoidSqlInjection($username);
	$oldPassword = $tetris->avoidSqlInjection($oldPassword);
	$newPassword = $tetris->avoidSqlInjection($newPassword);
	$query = 'CALL changePassword(\'' . $username . '\' , \''. $oldPassword . '\' , \'' . $newPassword . '\');';
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito; 
}

function scoreSubmit($username,$score){
	global $tetris;
	$username = $tetris->avoidSqlInjection($username);
	$score = $tetris->avoidSqlInjection($score);
	$query = 'CALL insertScore(\'' . $username . '\', \'' . $score . '\');';	
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito;
	
}

function leaderboardScore(){
	global $tetris;
	$query = 'CALL showHighscores();';	
	$esito = $tetris->executeQuery($query);
	$tetris->EndConnection();
	return $esito;
}

?>