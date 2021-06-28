<?php
session_start();
require_once __DIR__ . "/databaseOperation.php";
if(!isset($_POST['username'])|| !isset($_POST['password'])){
	$_SESSION['LogError']=false;#controlla valore LogError
	header('Location: ../index.php');
	exit();
}

$username= $_POST['username'];
$password= $_POST['password'];
$check= trovaUtente($username,$password);
#print($check->num_rows);
if ($check->num_rows<=0 ) {
	$_SESSION['LogError']= true;
	header('Location: ../game.php');
	exit();
}

$_SESSION['LoggedUser']= $username;
$_SESSION['LogError']=false;
header('Location: ../game.php');
?>
