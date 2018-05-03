<?php
    $host="host=ec2-174-129-223-35.compute-1.amazonaws.com";
	$dbname="dbname=d30ujvaa6fccf3";
	$user="user=wxullgwaqwdcty";
	$port="port=5432";
	$password="password=CjWxbFGaF4Jc7nWPIb-qQQpMeG";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);

	
	//Query our table
	
	$query = <<<HELP
		SELECT * FROM Data;
HELP;

	$ret = pg_query($query);
	$userList = [];
	$passList = [];
	$checkList = [];

	$array = pg_fetch_row($ret);
	while($array != FALSE){
		array_push($userList, $array[1]);
		array_push($passList, $array[2]);
		array_push($checkList, $array[5]);
		
		$array = pg_fetch_row($ret);
	}
	$user = (string) $_REQUEST["user"];
	$pass = $_REQUEST["pass"];
	$key = array_search($user, $userList);
	
	if(is_numeric($key) and array_search($pass, $passList) == $key){
	/*	$values = array_values($checkList);*/
		if($checkList[$key] == "on"){
			echo(1);
		}
		else{
			echo(3); /*should be 2 if decide to allow non officers to login*/
		}
			
	}
	else{
		echo(3);
	}

?>
