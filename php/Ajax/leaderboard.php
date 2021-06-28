<?php
	session_start();
	require_once __DIR__ . "/../databaseOperation.php";
	require_once __DIR__ . "/AjaxResponse.php";

	$response= new AjaxResponse();
	$result = leaderboardScore();
	
	if ($result===null || !$result){
		$response = new AjaxResponse("-1", "no scores to load");
		echo json_encode($response);
		return;
	}
	
	$message = "OK";
	$response = setResponse($result, $message);
	echo json_encode($response);
	return;
	
	function setResponse($result, $message){
		$response = new AjaxResponse("0", $message);
			
		$index = 0;
		while ($row = $result->fetch_assoc()){
			$gameScore = new gameScore();
			
			$gameScore->Ranking = $row['Ranking'];
			$gameScore->Username = $row['Username'];
			$gameScore->Score = $row['Score'];
			
			$response->data[$index] = $gameScore;
			$index++;
		}
		
		return $response;
	}
?>