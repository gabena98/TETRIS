<?php
session_start();
unset($_SESSION['LoggedUser']);
session_destroy();
header('Location: ../index.php');
?>