<?php
	session_start();
	require_once __DIR__ . "/../databaseOperation.php";
	require_once __DIR__ . "/AjaxResponse.php";

	$Username = $_SESSION['LoggedUser'];
	$Score = $_GET['Score'];
	scoreSubmit($Username,$Score);
	$message = "Score submitted";
	$response = new AjaxResponse("0", $message);
	echo json_encode($response);
	return;
?>