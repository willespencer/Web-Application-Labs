<html>
<head>
	<title>Ghost</title>
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
	<script type="text/javascript">
		var turn = 1;
		var letter1 = 0;
		var letter2 = 0;
		function getArray(){
			/*var string;*/
			var text = document.getElementById("word").value;
			var xhttp = new XMLHttpRequest();
  			xhttp.onreadystatechange = function() {
    			if (this.readyState == 4 && this.status == 200) {
     				var num = this.responseText;
     				console.log(num)
     				
            if(num == 0)
            {
              changeTurn();
              document.getElementById("output").innerHTML = "No possible word exists, Player " + turn + " Gains a Letter";
            }

            if(num == 1){
              document.getElementById("output").innerHTML = "A Possible Word Exists, Player " + turn + " Gains a Letter";
              
            }
            
            if(num == 2){
              changeTurn();
              document.getElementById("output").innerHTML = text + " is a Word, Player " + turn + " Gains a Letter";
            }

            document.getElementById("button").disabled = true;
            document.getElementById("word").value = "";

            if(turn == 1){
              document.getElementById("tableID").rows[0].cells[letter1].style.color = "white";
              letter1 = letter1 + 1;
            }
            else{
              document.getElementById("tableID").rows[1].cells[letter2].style.color = "white";
              letter2 = letter2 + 1;
            }
            if(num == 1)
            {
              changeTurn();
            }
            if(letter1 == 5){
              document.getElementById("info").innerHTML = "Player 2 Wins!"
              document.getElementById("word").disabled = true;
            }
            if(letter2 == 5){
              document.getElementById("info").innerHTML = "Player 1 Wins!"
              document.getElementById("word").disabled = true;
            }

    			}
  			}
  			xhttp.open("GET", "phpFile.php?string=" + text, true);
  			xhttp.send();
  		}
      function changeTurn(){
        var text = document.getElementById("word").value;
        if(text.length > 3){
          document.getElementById("button").disabled = false;
        }
        else{
          document.getElementById("button").disabled = true;
        }
        if(turn == 1){
          turn = 2;
          document.getElementById("info").style.color = "green"
        }
        else{
          turn = 1;
          document.getElementById("info").style.color = "blue"
        }
        document.getElementById("info").innerHTML = "Player " + turn + "'s Turn";

      }
	</script>

</head>
<body>
	<center>
	<h1>Ghost</h1>
	<img src="http://images.clipartpanda.com/duo-clipart-halloween_ghosts_duo_2.png" style = "width:200px"><br>
	<div id = "info" style ] "color:blue">Player 1's Turn</div>
	<input id = "word" oninput = "changeTurn()">
	<div id = "output"></div>
  <button id = "button" onclick = "getArray()" disabled>Challenge!</button>
  <br>Lives<br>
	<table id = "tableID">
		<tr id = "row1">
			<!-- <th style:"color:white">Player 1</th> -->
			<th>G</th><th>H</th><th>O</th><th>S</th><th>T</th>
		</tr>
		<tr id = "row2">
			<!-- <th style:"color:white">Player 2</th> -->
			<th>G</th><th>H</th><th>O</th><th>S</th><th>T</th>
		</tr>
	</table>
	</center>

</body>
</html>