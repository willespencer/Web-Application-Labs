<html>
<head>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="stylesheet.css">	
	<title>Political Survey</title>
	<script>
		function funct(){
			var list = document.getElementById('select2');
			while(list.hasChildNodes()){
				list.removeChild(list.childNodes[0]);
			}
			var value = document.getElementById('select').value;
			if(value == 'Ideology'){
				var option = document.createElement('option');
				option.text = 'Liberal';
				option.name = 'Liberal';
				list.appendChild(option);
				var option2 = document.createElement('option');
				option2.text = 'Moderate';
				option2.name = 'Moderate';
				list.appendChild(option2);
				var option3 = document.createElement('option');
				option3.text = 'Conservative';
				option3.name = 'Conservative';
				list.appendChild(option3);
			}
				
			if(value == 'Candidate'){
				var option = document.createElement('option');
				option.text = 'Hillary Clinton';
				option.name = 'Clinton';
				list.appendChild(option);
				var option2 = document.createElement('option');
				option2.text = 'Donald Trump';
				option2.name = 'Trump';
				list.appendChild(option2);
				var option3 = document.createElement('option');
				option3.text = 'Gary Johnson';
				option3.name = 'Johnson';
				list.appendChild(option3);
				var option4 = document.createElement('option');
				option4.text = 'Jill Stein';
				option4.name = 'Stein';
				list.appendChild(option4);
			}
			if(value == 'Issue'){
				var option = document.createElement('option');
				option.text = 'Immigration';
				option.name = 'Immigration';
				list.appendChild(option);
				var option2 = document.createElement('option');
				option2.text = 'Foreign Policy';
				option2.name = 'Foreign Policy';
				list.appendChild(option2);
				var option3 = document.createElement('option');
				option3.text = 'Healthcare';
				option3.name = 'Healthcare';
				list.appendChild(option3);
				var option4 = document.createElement('option');
				option4.text = 'Social Issues';
				option4.name = 'Social Issues';
				list.appendChild(option4);
				var option5 = document.createElement('option');
				option5.text = 'Economy';
				option5.name = 'Economy';
				list.appendChild(option5);
				var option6 = document.createElement('option');
				option6.text = 'Environment/Science Issues';
				option6.name = 'Environment/Science Issues';
				list.appendChild(option6);
				var option7 = document.createElement('option');
				option7.text = 'Education';
				option7.name = 'Education';
				list.appendChild(option7);
			}
			if(value == 'Leader'){
				var option = document.createElement('option');
				option.text = 'Kind';
				option.name = 'Kind';
				list.appendChild(option);
				var option2 = document.createElement('option');
				option2.text = 'Honest';
				option2.name = 'Honest';
				list.appendChild(option2);
				var option3 = document.createElement('option');
				option3.text = 'Trustworthy';
				option3.name = 'Trustworthy';
				list.appendChild(option3);
				var option4 = document.createElement('option');
				option4.text = 'Confident';
				option4.name = 'Confident';
				list.appendChild(option4);
				var option5 = document.createElement('option');
				option5.text = 'Opinionated';
				option5.name = 'Opinionated';
				list.appendChild(option5);
				var option6 = document.createElement('option');
				option6.text = 'Strong/Powerful';
				option6.name = 'Strong/Powerful';
				list.appendChild(option6);
			}
			var key= document.getElementById('select')
			if(key.hasAttribute('size')){
				if(value == 'Ideology'){
					list.setAttribute('size', '3')
				}
					
				if(value == 'Candidate'){
					list.setAttribute('size', '4')
				}
					
				if(value == 'Issue'){
					list.setAttribute('size', '7')
				}
					
				if(value == 'Leader'){
					list.setAttribute('size', '6')
				}

				
			}
				
		}
		function fullList(){
			var list1= document.getElementById("select")
			var list2 = document.getElementById("select2")
			if(list1.hasAttribute("size")){
				list1.removeAttribute("size")
				list2.removeAttribute("size")
			}
			else{
				list1.setAttribute("size", "4")
				var value = document.getElementById('select').value;
				if(value == "Ideology"){
					list2.setAttribute("size", "3")
				}
					
				if(value == "Candidate"){
					list2.setAttribute("size", "4")
				}
					
				if(value == "Issue"){
					list2.setAttribute("size", "7")
				}
					
				if(value == "Leader"){
					list2.setAttribute("size", "6")
				}
					
			}
		}
	</script>
</head>
<body>
	<div class = "form-group"><center><h2>Political Opinions Survey</h2></center></div>
	<center><a href="C:\Users\wille\Documents\Web App\Course Index.html" id = "hyper">Return to homepage</a></center>
	
	<form action="Lab5php.php" method="post">
		<div class = "form-group form-group col-lg-4 col-lg-offset-4">
			Current Date:<br>
			<input type='date' name='datename' class = 'form-control question' required autofocus>
		</div><br><br><br><br>
		<fieldset>
			<legend class = "form-group col-lg-4 col-lg-offset-4">Personal Information</legend>
			<div class = "form-group col-lg-4 col-lg-offset-4">
				Name:<br>
				<input type='text' name='username' class = 'form-control question' required autocomplete placeholder = 'First_Name Last_Name'><br>

				City:<br>
				<input type='text' name='cityname' class = 'form-control question' required autocomplete><br>
			
				State:<br>
				<input pattern = "^\w\w$"type='text' name='statename' class = 'form-control question' placeholder = 'VA'required autocomplete><br>
	
				Zip:<br>
				<input pattern = "^\d\d\d\d\d$" type='text' name='zipname' class = 'form-control question' required autocomplete><br>
		
				Email:<br>
				<input type='email' name='emailname' class = 'form-control question' placeholder = 'example@host.com' required autocomplete><br>
			</div>

		</fieldset>

		<fieldset>
			<legend class = "form-group col-lg-4 col-lg-offset-4">Political Opinions</legend><br><br><br><center>
			<input type='radio' name = "list" value = "Dropdown" onclick = "dropList()"checked onchange = fullList()> Dropdown List <br>
			<input type = "radio" name = "list" value = "FullList" onclick = "fullList()"> View Full List<br></center>
			<br>
			<div class = "form-group col-lg-4 col-lg-offset-4">
				<select value = 'select' class = "form-control" name='select' id = 'select' onchange = 'funct()'>
  					<option class = "form-control" value='Ideology' id = 'Ideology' selected>Political Ideology?</option> 
  					<option class = "form-control" value='Candidate' id = 'Candidate' >Prefered Presidential Candidate?</option>
  					<option class = "form-control" value='Issue' id = 'Issue' >Most Important Issue?</option>
  					<option class = "form-control" value='Leader' id = 'Leader' >Most Important Leadership Quality?</option>
				</select><br>
				<select value = "select2" class = "form-control" name="select2" id = "select2">
  					<option class = "form-control" name='Liberal'>Liberal</option> 
  					<option class = "form-control" name='Moderate'>Moderate</option>
  					<option class = "form-control" name='Conservative'>Conservative</option>
				</select><br>
			</div>
		</fieldset>

		<br>
		<center>Additional Comments:<br></center>
		<textarea rows="6" cols = "50", id = "comment" class = "question form-group col-lg-4 col-lg-offset-4" name = "comments"></textarea>

		<br><br>
		<div class = "form-group col-lg-4 col-lg-offset-4">
			<input type="submit" class = "form-control">
		</div>
		
	</form>
</body>
</html>