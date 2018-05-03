<!DOCTYPE html>
<html>
    <head>
        <title>MEME</title>
    </head>
    <body>
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
        	
        	echo("<table><tr><th>Name</th><th>TJ Username</th><th>Password</th><th>FCPS ID</th><th>Email</th><th>Radio</th></tr>");
        	$array = pg_fetch_row($ret);
        	while($array != FALSE){
        		echo("<tr>");
        		for($x = 0; $x < 6; $x++){
        			echo("<th>" . $array[$x] . "</th>");
        		}
        		
        		
        		echo("</tr>");
        		$array = pg_fetch_row($ret);
        	}
        
        ?>
    </body>
</html>
    