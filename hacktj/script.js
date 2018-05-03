var articlesPerSource = 5
var dict = { //integers 1-5, liberal to conservative
  "the-washington-post":    2,
  "the-wall-street-journal":4,
  "cnn":                    3,
  "the-huffington-post":    1,
  "business-insider":       3,
  "daily-mail":             5,
  "the-new-york-times":     2,
  "associated-press":       3,
  "the-telegraph":          4,
  "cnbc":                   3,
  "time":                   1,
  "bloomberg":              3,
  "the-economist":          2,
  "usa-today":              3
};
var sourceNameDict = {
  "the-washington-post":    "The Washington Post",
  "the-wall-street-journal": "The Wall Street Journal",
  "cnn":                    "CNN",
  "the-huffington-post":    "The Huffington Post",
  "business-insider":       "Business Insider",
  "daily-mail":             "Daily Mail",
  "the-new-york-times":     "The New York Times",
  "associated-press":       "Associated Press",
  "the-telegraph":          "The Telegraph",
  "cnbc":                   "CNBC",
  "time":                   "Time",
  "bloomberg":              "Bloomberg",
  "the-economist":          "The Economist",
  "usa-today":              "USA Today"
}

var table = ["Extremely Liberal", "Leaning Liberal", "Moderate", "Leaning Conservative", "Extremely Conservative"];
var rating = 3;
var currRow = 0;
var actualRow = document.createElement("div");
actualRow.className = "row";
var numTerms = 0;
var expectedTerms = 0;
window.onload = startFunct;

$(document).ready(function(){
    $('#zip5').keypress(function(e){
      if(e.keyCode==13)
      $('#lawmakers').click();
    });
    $('#actionButton').click(function() {
            $(this).find("hidden_form").toggleClass('open');
    });
});

function startFunct(){
    for(var key in dict){
        if(dict[key] == 3){
            expectedTerms++;
        }
    }
    for(var key in dict) {
        if(dict[key] == 3){
            getData(key, dict[key]);
            numTerms++;
        }
    }
}

function outputUpdate(val) {
    var button = document.getElementById("moreButton");
    button.innerHTML = "Show More";
    document.getElementById("moreButton").style.visibility="visible";
    document.getElementById("hiddenSources").className = "container hideContent";
    currRow = 0
	document.querySelector('#spectrum').value = table[val-1];
	//document.getElementById("spectrum").focus(). = "#ffffff" //still doesn't work/
    rating = val;
    var divTag = document.getElementById("sources");
    var hidTag = document.getElementById("hiddenSources");
    divTag.innerHTML = "" //resets innerHTML
    hidTag.innerHTML = ""
    actualRow.innerHTML = ""
    for(var key in dict){
        if(dict[key] == rating){
            expectedTerms++;
        }
    }
    for(var key in dict) {
        if(dict[key] == rating){
            getData(key, dict[key]);
            numTerms += 1
        }
    }
}
        
function getData(source, sourceRate){
    var string = "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=84fec8f09f6a485aaa3a084b4c368cb4";
    $.ajax({
		url: string,
		success: function(response){
		    var divTag = document.getElementById("sources");
		    var hidTag = document.getElementById("hiddenSources");
			var array = response.articles
			for(var index = 0; index < articlesPerSource; index++){
                var newDiv = document.createElement("div");
                newDiv.className = "col-md-4"
                newDiv.style.padding= "15px 40px 15px 40px";
                
                if(array[index].urlToImage.includes("http://") && source != "the-telegraph" && source != "daily-mail"){
                    var imgHttps = array[index].urlToImage.replace("http", "https")
                    var imgStr = "<img width = 200px src = " + imgHttps + ">";
                }
                else{
                    var imgStr = "<img width = 200px src = " + array[index].urlToImage + ">";
                }
                var urlStr = "<a href=" + array[index].url+ " target= 'blank'>" + array[index].title+ "</a>"
                newDiv.innerHTML =  urlStr + "<br>" + imgStr + "<br>" +array[index].description + "<br>"+ "Source: " + sourceNameDict[source] + "<br><br>";
                
                if(currRow%3 == 0){
                    if(currRow == 3){
                        divTag.appendChild(actualRow);
                    }
                    else if(currRow > 3){
                        hidTag.appendChild(actualRow);
                    }
                    var rowDiv = document.createElement("div");
                    rowDiv.className = "row"
                    rowDiv.appendChild(newDiv);
                    actualRow = rowDiv;
			    }
			    else{
			        actualRow.appendChild(newDiv);
			    }
			    currRow++;
			}
			if(numTerms == expectedTerms){
			    hidTag.appendChild(actualRow);
			}
		}
    })
}
function showHiddenFunct(){
    var button = document.getElementById("moreButton");
    var tag = document.getElementById("hiddenSources");
    console.log(tag.className)
    if(tag.className == "container hideContent"){
        button.innerHTML = "Show Less";
        tag.className = "container showContent";
    }
    else{
        button.innerHTML= "Show More";
        tag.className = "container hideContent";
    }
}
function actionButton() {
    //Show the hidden form first
    var obj = document.getElementById("hidden_form");
    obj.style.display = "block"; 
    document.getElementById("actionButton").disabled = "true";
    document.getElementById("actionButton").style.background= "#D3D3D3";
    
}

function displayLegislators(response) {
    var singleRow = document.createElement("div");
    singleRow.className = "row";
    var rowCount = 0; 
    var legDiv = document.getElementById("legislators");
    var containDiv = document.getElementById("legSection");
    for(var i = 0; i < response.length; i++){
        var imgStr = "<img width = 150px src = " + response[i].photo + ">";
        if(response[i].chamber != "OTHER"){
            var level = response[i].level.toLowerCase();
            level.charAt(0).toUpperCase();
            var chamber = response[i].chamber.toLowerCase()
            chamber.charAt(0).toUpperCase();
            var levelStr = "In the " + chamber + " at the " + level + " level";
        }
        else{
            var level = response[i].level.toLowerCase();
            level.charAt(0).toUpperCase();
            var levelStr = "In the executive branch at the " + level + " level";
        }
        var partyStr = "";
        if(response[i].party == "D"){
            partyStr = "Democrat"
        }
        else if(response[i].party == "R"){
            partyStr = "Republican"
        }
        else{
            partyStr = response[i].party
        }
    
        var oldPhone = response[i].contact.phone;
        if(oldPhone == ""){
            phoneStr = "Not Available"
        }
        else{
            var phoneStr = "(" + oldPhone.substring(2,5) + ") " +  oldPhone.substring(5,8)+ " - " + oldPhone.substring(8,11)
        }
        if(response[i].contact.facebook == null){
            var urlStr = "Facebook Not Availible"
        }
        else{
            var urlStr = "<a href=" + response[i].contact.facebook+ " target='_blank'>" + "Facebook Account" + "</a>"
        }
        console.log(response[i].contact.twitter);
        if(response[i].contact.twitter == null){
            var twitterStr = "Not Available";
        }
        else{
            var twitterStr = "<a href=" + "https://www.twitter.com/" + response[i].contact.twitter+ " target='_blank'> @" + response[i].contact.twitter + "</a>"
        }
        
        var contactInfo = "<h3>Contact Information</h3><br>Phone Number: " + phoneStr + "<br>" + urlStr + "<br>Twitter: " + twitterStr ;

        var oneDiv = document.createElement("div");
        oneDiv.className = "col-md-4"
        oneDiv.innerHTML = response[i].name.full_name + " - " + partyStr + "<br>" + imgStr + "<br>" + levelStr + "<br>" + contactInfo + "<br><br><br>";
        if(rowCount %3 == 0){
            containDiv.appendChild(singleRow);
            var rowDiv = document.createElement("div");
            rowDiv.className = "row"
            singleRow = rowDiv
        }
        singleRow.appendChild(oneDiv);
        rowCount++;
    }
    containDiv.appendChild(singleRow)
    legDiv.style.display = "block";
}

function findLegislators() {
    
    var objadd = document.getElementById("address1");
    var objzip = document.getElementById("zip5");
    
    var address = objadd.value;
    var zipcode = objzip.value;
    
    $.ajax({
        url: "https://hacktj.phone2action.com/2.0/legislators",
        type: "get",
        
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa("hacktj2017:p2ahacking"));
        },
        
        data: {
            address1: address,
            zip5: zipcode
            //Access-Control-Allow-Origin: *
        },
        
        success: function(response) {
            console.log(response);
            if(response.statusText == "Unprocessable Entity"){
                objadd.value = "";
                objzip.value = "";
                document.getElementById("errorDiv").innerHTML = "Something went wrong, try again"
                document.getElementById("lawmakers").disabled = "false";
            }
            else{
                document.getElementById("lawmakers").disabled = "true";
                document.getElementById("lawmakers").style.background= "#D3D3D3";
                document.getElementById("errorDiv").innerHTML = "";
                displayLegislators(response);
            }
        },
        
        error: function(xhr) {
            console.log("error")
            objadd.value = "";
            objzip.value = "";
            document.getElementById("errorDiv").innerHTML = "Something went wrong, try again"
            //Should enter the user inputted something incorrectly
            
            
            //console.log(xhr);
        }
    });
    
}
