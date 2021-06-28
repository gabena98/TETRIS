<?php
	session_start();
	require_once __DIR__ . "/databaseOperation.php";

	if (!isset($_POST['username']) ||
		!isset($_POST['email']) ||
		!isset($_POST['password']) ||
		!isset($_POST['confirmedPassword'])) {
		$_SESSION['regError']=1;
		header('Location: ./registrationPage.php');
		exit();
	}
	 $username=$_POST['username'];
	 $password=$_POST['password'];
	 $confirmedPassword=$_POST['confirmedPassword'];
	 $email=$_POST['email'];

	 if ($confirmedPassword != $password){
		$_SESSION['regError'] = 2;
		header('Location: ./registrationPage.php');
		exit;
	}

	$check=AlreadyRegistered($username,$email);

	if ($check->num_rows<=0 || $check=== null) {
		Registration($username,$password,$email);
		header('Location: ../index.php');
		exit;
	}
	$_SESSION['regError']=3;
	header('Location: ./registrationPage.php');
?>