<?php
session_start();
require_once __DIR__ ."/databaseOperation.php";

if(!isset($_SESSION['LoggedUser']) || !isset($_POST['NewPSWD']) || !isset($_POST['OldPSWD']) || !isset($_POST['ConfirmNewPSWD'])){
	$_SESSION['CPSWDError'] =1;
	header('Location: ../index.php');
	exit();
}

$username=$_SESSION['LoggedUser'];
$OldPSWD=$_POST['OldPSWD'];
$NewPSWD=$_POST['NewPSWD'];
$ConfirmNewPSWD=$_POST['ConfirmNewPSWD'];
if ($NewPSWD!=$ConfirmNewPSWD) {
	$_SESSION['CPSWDError']=2;
	header('Location: ../game.php');
	exit();
}

$check=trovaUtente($username,$OldPSWD);
if($check->num_rows<=0 ){
	$_SESSION['CPSWDError']=3;
	header('Location: ../game.php');
	exit();
}

$check= changePassword($username,$NewPSWD,$OldPSWD);
header('Location: ../game.php');

?>