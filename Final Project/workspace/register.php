<!--<html>
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
	<center><h2>Form Responses<h2></center>
-->
<?php
    $host="host=ec2-174-129-223-35.compute-1.amazonaws.com";
	$dbname="dbname=d30ujvaa6fccf3";
	$user="user=wxullgwaqwdcty";
	$port="port=5432";
	$password="password=CjWxbFGaF4Jc7nWPIb-qQQpMeG";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);
	
	$query = <<<CREATE
		CREATE TABLE IF NOT EXISTS Data(
			NAME varchar(255),
			TJ varchar(255),
			PASSWORD varchar(255),
			ID varchar(255),
			EMAIL varchar(255),
			RADIO varchar(255)
		);
CREATE;

/*$query = <<<DROP
		DROP TABLE Data;
DROP;*/

	$ret = pg_query($query);
	
	//Add some data

	$query = <<<ADD
		INSERT INTO Data(NAME, TJ, PASSWORD, ID, EMAIL, RADIO)
		VALUES('$_REQUEST[name]', '$_REQUEST[tj]', '$_REQUEST[pswd]', '$_REQUEST[fcps]',  '$_REQUEST[email]', '$_REQUEST[yesradio]');
		
ADD;
	$ret = pg_query($query);
	
	//Query our table
	

?>
<!--</center>
</body>
</html>-->