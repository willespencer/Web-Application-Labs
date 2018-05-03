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
    
    $emailList = [];
    
    
    $array = pg_fetch_row($ret);
	while($array != FALSE){
	    if($_REQUEST[memcheck] == "true" and $array[5] == "off"){
	        array_push($emailList, $array[4]);
		    echo($array[4].", ");
	    } 
	    else if($_REQUEST[offcheck] == "true" and $array[5] == "on"){
		    array_push($emailList, $array[4]);
		    echo($array[4].", ");
	    }
	    $array = pg_fetch_row($ret);
    }

?>