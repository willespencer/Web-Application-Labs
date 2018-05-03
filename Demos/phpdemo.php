<html>
<head>
	<title>PHP</title>
	<script type="text/javascript">
		function doStuff(){
			var text = document.getElementById("toOutput").value;
			var xhttp = new XMLHttpRequest();
  			xhttp.onreadystatechange = function() {
    			if (this.readyState == 4 && this.status == 200) {
     				document.getElementById("outputDiv").innerHTML = this.responseText;
    			}
  			}
  			xhttp.open("GET", "phpdemo2.php?numIn=" + text, true);
  			xhttp.send();
		}
	</script>
</head>
<body>
	
	<?php
		echo "<input id = 'toOutput'>";
	?>
	<button id = "changeStuff" onclick = "doStuff()">Click me</button>
	<div id = "outputDiv"></div>
</body>
</html>