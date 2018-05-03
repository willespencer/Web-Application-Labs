<html>
<head>
	<title>Data Table</title>
	<style type="text/css">
		body{
			background-color: rgb(121,242,121);
		}
		table, th, td{
			border: 2px solid black;
			font-size: 17;
		}
	</style>
</head>
<body>
	<center><h2>Form Responses<h2>
<?php
	//Instantiate our DB object (Ctrl D, Ctrl Shift right-arrow and ctrl right-arrow)
	$host="host=ec2-174-129-223-35.compute-1.amazonaws.com";
	$dbname="dbname=d30ujvaa6fccf3";
	$user="user=wxullgwaqwdcty";
	$port="port=5432";
	$password="password=CjWxbFGaF4Jc7nWPIb-qQQpMeG";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);
	//Create a Table try/catch
	/*$query = <<<RESTART
		DROP TABLE Data;
RESTART;

	$ret = pg_query($query);
	
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		echo("Deleted <br>");
	}*/

	$query = <<<CREATE
		CREATE TABLE IF NOT EXISTS Data(
			Date date,
			Name varchar(255),
			City varchar(255),
			State varchar(255),
			Zip int,
			Email varchar(255),
			Value1 varchar(255),
			Value2 varchar(255),
			Comments varchar(255)
		);
CREATE;
	
	$ret = pg_query($query);
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		/*echo("Created <br>");*/
	}
	//Add some data

	$query = <<<ADD
		INSERT INTO Data(Date, Name, City, State, Zip, Email, Value1, Value2, Comments) 
		VALUES('$_POST[datename]'::date, '$_POST[username]', '$_POST[cityname]', '$_POST[statename]', $_POST[zipname], '$_POST[emailname]', '$_POST[select]', '$_POST[select2]', '$_POST[comments]');
ADD;

	$ret = pg_query($query);
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		/*echo("Added <br>");*/
	}
	//Query our table
	$query = <<<HELP
		SELECT * FROM Data;
HELP;

	$ret = pg_query($query);
	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		echo("<table><tr><th>Date</th><th>Name</th><th>City</th><th>State</th><th>Zip</th><th>Email</th><th>Question</th><th>Answer</th><th>Comments</th></tr>");
		$array = pg_fetch_row($ret);
		while($array != FALSE){
			echo("<tr>");
			for($x = 0; $x < 9; $x++){
				echo("<th>" . $array[$x] . "</th>");
			}
			echo("</tr>");
			$array = pg_fetch_row($ret);
		}
	}
?>
</center>
</body>
</html>
