var pokemonOn = 1;
firstTime = true
function sendNameRequest(){
	/*Ideas: Make a team?  FIX WEAKNESSES TO ACCOUNT FOR 2 TYPES
	FIX HEIGHT DOUBLING EVERY TIME
	Find pokemon to beat? etc.?
	I Need something original/cool
	*/

	/*$("#clicker").attr("disabled", true)
	$("#addTeam").attr("disabled", false)*/
	var urlToGoTo = "https://pokeapi.co/api/v2/pokemon/";
	$.ajax({
		url: (urlToGoTo + $("#input").val()).toLowerCase(), 
		success: function(response){
			console.log(response)

			var image = response.sprites.front_default
			var height = 0
			$("#image").show();
			$("#image").attr('src', image);
			$("#image").on("load", function(){
				if(firstTime == true){ /*Only doubles first time*/
					var height = $("#image").height()
					$("#image").height(height * 2);
					firstTime = false
				}
			})
			$("#number").html("#" + response.id)


			var name = response.name;
			name = upperCase(name);
			$("#name").html(name)
			
			var typeArray = response.types;
			if(typeArray.length == 1){
				var numTypes = 1
				$("#type").html("Type: " + upperCase(typeArray[0].type.name));
			}
			else{
				var numTypes = 2
				$("#type").html("Types: " + upperCase(typeArray[0].type.name) + ", " + upperCase(typeArray[1].type.name));
			}
			sendTypeRequest(numTypes, typeArray)
		}
	})
}
function sendTypeRequest(numTypes, typeArray){
	/*Type Information*/
	console.log(numTypes)
	var originalSuper = []
	var originalLittle = []
	$("#littleEffect").html("Resistances: ")
	$("#superEffect").html("Weaknesses: ")
	$("#noEffect").html("No Effect:")
	var secondTime = false
	var noEffectBool = false
	for (var i = 0; i < numTypes; i++) {
		var urlToGoTo = "https://pokeapi.co/api/v2/type/";
		$.ajax({
			url: urlToGoTo + typeArray[i].type.name,
			success: function(response){
				var littleEffectArray = response.damage_relations.half_damage_from;
				var superEffectArray = response.damage_relations.double_damage_from;
				var noEffectArray = response.damage_relations.no_damage_from
				
				if(numTypes == 2){
					for(x = 0; x < noEffectArray.length; x++)
					{
						$("#noEffect").html($("#noEffect").html()+ " " + upperCase(noEffectArray[x].name))
						noEffectBool = true;
					}
					if(noEffectBool == false){
						$("#noEffect").html($("#noEffect").html()+ " None")
						noEffectBool = true;
					}
					
					if(secondTime == true)
						killDuplicates(originalLittle, originalSuper, littleEffectArray, superEffectArray)
					if(secondTime == false){
						originalLittle = littleEffectArray;
						originalSuper = superEffectArray
						secondTime = true
					}
					
				}
				else{
					for(x = 0; x < littleEffectArray.length; x++)
					{
						$("#littleEffect").html($("#littleEffect").html()+ " " + upperCase(littleEffectArray[x].name))
					}
					for(x = 0; x < superEffectArray.length; x++)
					{
						$("#superEffect").html($("#superEffect").html()+ " " + upperCase(superEffectArray[x].name))
					}
				}

					
					
			}
		})
	}
	
}

function killDuplicates(originalLittle, originalSuper, littleEffectArray, superEffectArray){
	console.log(originalLittle)
	/*Changes them to strings*/
	for(x = 0; x < originalLittle.length; x++){
		originalLittle[x] = originalLittle[x].name
	}
	for(x = 0; x < originalSuper.length; x++){
		originalSuper[x] = originalSuper[x].name
	}
	for(x = 0; x < littleEffectArray.length; x++){
		littleEffectArray[x] = littleEffectArray[x].name
	}
	for(x = 0; x < superEffectArray.length; x++){
		superEffectArray[x] = superEffectArray[x].name
	}
	/*Combines the two*/
	for(x = 0; x < originalLittle.length; x++){
		if(littleEffectArray.indexOf(originalLittle[x]) == -1)
			littleEffectArray.push(originalLittle[x])
	}
	for(x = 0; x < originalSuper.length; x++){
		if(superEffectArray.indexOf(originalSuper[x]) == -1)
			superEffectArray.push(originalSuper[x])
	}
/*	Gets rid of things in both*/
	for(x = 0; x < littleEffectArray.length; x++){
		if(superEffectArray.indexOf(littleEffectArray[x]) != -1){
			index = superEffectArray.indexOf(littleEffectArray[x])
			superEffectArray.splice(index, 1)
			littleEffectArray.splice(x, 1)
			x--
		}
	}
	//Output
	console.log(littleEffectArray)
	for(x = 0; x < littleEffectArray.length; x++){
		$("#littleEffect").html( $("#littleEffect").html() + upperCase(littleEffectArray[x]) + " ")
	}
		
	for(x = 0; x < superEffectArray.length; x++){
		$("#superEffect").html( $("#superEffect").html() + upperCase(superEffectArray[x]) + " ")

	}
		

}

function upperCase(str){
	
	str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    	return letter.toUpperCase();
	});
	return str;
}
function addFunct(){
	var id = "#teamImage" + pokemonOn
	var image = $("#image").attr("src");
	console.log(image)
	$(id).attr('src', image);
	clearData();
	$("#addTeam").attr("disabled", true)
	$("#clicker").attr("disabled", false)
	pokemonOn++;
	if(pokemonOn == 7){
		$("#clicker").attr("disabled", true)
		$("input").attr("disabled", true)
		$("complete").html("Team Built!")
	}
}
function clearData(){
	var height = $("#image").height()
	$("#image").hide();
	$("#number").html("")
	$("#name").html("")
	$("#type").html("")
	$("#superEffect").html("")
	$("#littleEffect").html("")
	$("#noEffect").html("")
	
}