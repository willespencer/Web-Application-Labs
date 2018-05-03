<?php 
	$string = $_REQUEST["string"];
	$myfile = file_get_contents("wordlist.txt");
	$pattern = ("/\s" . $string . "/m");
	$value = preg_match($pattern, $myfile);
	if($value == 0){
		echo($value);
	}
	else if(strlen($string) > 3){
		$pattern2 = ("/\s" . $string . "\s/m");
		$value2 = preg_match($pattern2, $myfile);
		$value2 = $value2 + 1;
		echo($value2); //return something if word exists vs if it is a word
	}
	else{
		echo(1);
	}
 ?>