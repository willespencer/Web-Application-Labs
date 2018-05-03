var counter = 0
var intev;
var paused = false;
var nameArray = ["bush", "fiorina", "carson", "webb", "sanders", "paul", "o'malley", "chafee", "cruz", "trump", "christie", "pataki", "huckabee", "graham", "jindal", "clinton", "kasich", "walker", "santorum", "rubio", "perry"];
var urlArray = ["http://videos.usatoday.net/Brightcove2/29906170001/2015/04/29906170001_4147791626001_XXX-CAP-Down-Carly-Fiorina-hdb381.jpg", "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/09/19/it-s-time-to-pull-the-plug-on-dr-ben-carson-s-campaign/jcr:content/image.crop.800.500.jpg/48087751.cached.jpg", "http://www.allthingsdemocrat.com/wp-content/uploads/2015/07/jim-webb-pointing-1.jpg", "http://www.slate.com/content/dam/slate/blogs/xx_factor/2016/01/26/bernie_sanders_just_can_t_get_it_right_with_women_s_groups/505435298-democratic-presidential-candidate-senator-bernie.jpg.CROP.promo-xlarge2.jpg", "https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA.jpg", "https://www.americarisingpac.org/wp-content/uploads/2015/01/omalley-lol.jpeg", "http://www.adweek.com/fishbowldc/wp-content/uploads/sites/10/2015/06/Chafee.jpg", "https://regularrightguy.files.wordpress.com/2013/11/ted-cruz-ap.jpg", "https://www.askideas.com/media/48/Donald-Trump-Making-Funny-Face-Photo.jpg", "http://p.fod4.com/p/media/d2b7a1b4c6/iJPrc7RZTwzobU5Oog7e_yNDruYR6RUyrNiinFPjD_Chris-Christie.jpg", "http://media1.s-nbcnews.com/j/newscms/2015_22/1047206/150528-george-pataki-mn-0800_3489e8ee99dcde93d7fa1de34375f5ad.nbcnews-fp-1200-800.jpg", "http://cdn.theatlantic.com/newsroom/img/upload/wire/2013/12/13/AP376545007508/original.jpg", "http://rightweb.irc-online.org/wp-content/uploads/2016/03/lindsey-graham1.jpg", "http://www.nationalmemo.com/wp-content/uploads/2012/11/jindal-668x501.jpg", "https://www.askideas.com/media/48/Funny-Sad-Face-Hillary-Clinton-Picture.jpg", "http://17663-presscdn-0-49.pagely.netdna-cdn.com/wp-content/uploads/2016/01/john-kasich-funny-face-.jpg", "http://extras.mnginteractive.com/live/media/site569/2013/0730/20130730__ScottWalker_skybox_300.jpg", "https://sites.stedwards.edu/chrisdm-culf333110fa2014-bsifuen2/files/2014/11/santorum-Credit-Reuters-Brian-Losness-14y33gw.jpg", "https://i.ytimg.com/vi/hf5fG311EXU/maxresdefault.jpg", "https://oddmanout215.files.wordpress.com/2011/08/perry.jpg", "https://ninidee.files.wordpress.com/2013/10/winner2.jpg"]
/*window.onload= function(){
	counter = 0;
}*/
function countDown(){
	var picture = document.getElementById("image");
	var timer = document.getElementById("timeLeft").innerHTML;
	var seconds = timer.substring(2);
	var mins = timer.substring(0,1);
	if(seconds == 0 && mins != 0 && paused == false){
		seconds = 59;
		mins = mins - 1;
		document.getElementById("timeLeft").innerHTML= mins + ":" + seconds;
	}
	else if(seconds != 0 && paused == false){
		seconds = seconds - 1;
		if(seconds < 10)
			document.getElementById("timeLeft").innerHTML= mins + ":0" + seconds;
		else
			document.getElementById("timeLeft").innerHTML= mins + ":" + seconds;
	}
	/*if(timer != 0 && paused == false)
		document.getElementById("timeLeft").innerHTML = timer - 1;*/
	else if(paused == false){
		picture.setAttribute("src", "http://www.imagesbuddy.com/images/86/2013/08/loser-graphic.png")
		window.clearInterval(intev);
		var text = document.getElementById("answer");
		text.disabled = true;
		}
	}
function startFunct(){
	var picture = document.getElementById("image");
	picture.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/50/JebBush.jpg");
	intev= window.setInterval(countDown, 1000);
	counter = 1;
	numCorrect = 0;
	var button = document.getElementById("start");
	button.disabled = true;
	var text = document.getElementById("answer");
	text.disabled = false;
	var button3 = document.getElementById("pause");
	button3.disabled = false;
	var button4 = document.getElementById("restart");
	button4.disabled = false;
	var button5 = document.getElementById("skip");
	button5.disabled = false;

}
function skipFunct(){
	var picture = document.getElementById("image");
	picture.setAttribute("src", urlArray[counter - 1])
	counter++;
	var text = document.getElementById("answer");
	document.getElementById("answer").value = "";
	if(counter == 22){
		var text = document.getElementById("answer");
		text.disabled = true;
		var button3 =  document.getElementById("pause");
		button3.disabled = true;	 
		window.clearInterval(intev);
		var button4 =  document.getElementById("skip");
		button4.disabled = true;
	}
	
}

function pauseFunct(){
	var text = document.getElementById("answer");
	var picture = document.getElementById("image");
	var button4 = document.getElementById("skip");

	if(document.getElementById("pause").innerHTML == "Pause Game"){
		document.getElementById("pause").innerHTML = "Unpause Game";
		picture.setAttribute("src", "https://www.scirra.com/images/articles/paused.png");
		text.disabled = true;
		paused = true
		button4.disabled = true;
	}
	else{
		if(counter > 1)
			picture.setAttribute("src", urlArray[counter - 2])
		else
			picture.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/50/JebBush.jpg");
		text.disabled = false;
		document.getElementById("pause").innerHTML = "Pause Game";
		paused = false;
		button4.disabled = false;
	}
	
}
function restartFunct(){
	var text = document.getElementById("answer");
	var button1 =  document.getElementById("start");
	var button2 =  document.getElementById("restart");
	var button3 =  document.getElementById("pause");
	var picture = document.getElementById("image");
	var button4 = document.getElementById("skip");
	counter = 0;
	numCorrect = 0;
	paused = false;
	button1.disabled = false;
	button2.disabled = true;
	button4.disabled = true;
	text.disabled = true;
	button3.disabled = true;
	document.getElementById("prog").innerHTML = "Number Correct: 0/21";
	clearTimeout(intev);
	document.getElementById("pause").innerHTML = "Pause Game";
	document.getElementById("timeLeft").innerHTML="5:00";
	picture.setAttribute("src", "http://images.clipartpanda.com/start-clipart-start-button-clipart-1.jpg");

}
function checkCorrect(){
	var answer = document.getElementById("answer").value;
	var picture = document.getElementById("image");
	if((answer.toLowerCase() == nameArray[counter - 1]) || (nameArray[counter - 1] == "o'malley" && answer.toLowerCase() == "omalley") ||  (nameArray[counter - 1] == "cruz" && answer.toLowerCase() == "zodiac killer")){ 
		picture.setAttribute("src", urlArray[counter - 1])
		document.getElementById("answer").value = "";
		if(counter == 21){
			var text = document.getElementById("answer");
			text.disabled = true;
			var button3 =  document.getElementById("pause");
			button3.disabled = true;	
			var button4 =  document.getElementById("skip");
			button4.disabled = true;	 
			window.clearInterval(intev);
			counter--;
		}
		counter++;
		numCorrect++;
	}
	var prog = document.getElementById("prog").innerHTML = "Number Correct: " + (numCorrect)+ "/21";
	
}