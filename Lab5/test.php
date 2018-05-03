<?php
	//Instantiate our DB object (Ctrl D, Ctrl Shift right-arrow and ctrl right-arrow)
	$host="host=ec2-174-129-223-35.compute-1.amazonaws.com";
	$dbname="dbname=d30ujvaa6fccf3";
	$user="user=wxullgwaqwdcty";
	$port="port=5432";
	$password="password=CjWxbFGaF4Jc7nWPIb-qQQpMeG";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);
	//Create a Table try/catch
	$query = <<<CREATE
		CREATE TABLE Football(
			TeamName varchar(255),
			NumberOfWins int
		)
CREATE;
	$ret = pg_query($query);
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		echo("It Worked!!!");
	}
	//Add some data
	$query = <<<CREATE
		INSERT INTO Football VALUES(
			Redskins, 4
		)
CREATE;
	$ret = pg_query($query);
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		echo("It Worked!!!");
	}
	//Query our table
?>