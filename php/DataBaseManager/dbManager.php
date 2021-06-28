<?php
require_once __DIR__ . "/dbConfig.php";

$tetris = new DBmanager();

class DBmanager{
	private $mysql_conn = null;

	function DBmanager(){
		$this->StartConnection();
		
	}

	function StartConnection(){
		if(!$this->open()){
			global $dbHostname;
			global $dbName;
			global $dbUsername;
			global $dbPassword;

			$this->mysql_conn = new mysqli($dbHostname,$dbUsername,$dbPassword,$dbName);
			if($this->mysql_conn->connect_error){
    			exit("Errore: impossibile stabilire una connessione " . $this->mysql_conn->connect_error);
    		}
		}
	}
	# cotrolla se la connessione è aperta
	function open(){
		return ($this->mysql_conn != null);
	}

	function executeQuery($queryText){
		if($this->open())
			 return $this->mysql_conn->query($queryText);
		else{
			$this->StartConnection();
			return $this->mysql_conn->query($queryText);
		}
	}

	function avoidSqlInjection($value){
		if ($this->open()) {
			return $this->mysql_conn->real_escape_string($value);
		}
		else{
			$this->StartConnection();
			return $this->mysql_conn->real_escape_string($value);
		}

	}

	function EndConnection(){
		if($this->mysql_conn!== null)
			$this->mysql_conn->close();
		$this->mysql_conn=null;
	}
}

?>