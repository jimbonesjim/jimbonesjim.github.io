//Loads or makes the local storage
window.onload = function() {
    if(localStorage.bluescore&&localStorage.redscore&&localStorage.bluename&&localStorage.redname&&localStorage.lfscore&&localStorage.btscore&&localStorage.rtscore&&localStorage.lfname&&localStorage.lftoggle){
	    document.getElementById("bluescore").innerHTML = localStorage.bluescore;
		document.getElementById("redscore").innerHTML = localStorage.redscore;
		document.getElementById("bluename").innerHTML = localStorage.bluename;
		document.getElementById("redname").innerHTML = localStorage.redname;
		document.getElementById("lfname").innerHTML = localStorage.lfname;
		document.getElementById("lfscore").innerHTML = localStorage.lfscore;
		document.getElementById("btscore").innerHTML = localStorage.btscore;
		document.getElementById("rtscore").innerHTML = localStorage.rtscore;
		somethingLF();
		console.log("Loaded saved variables from localStorage.")
	} else {
	    localStorage.bluename = "Emerald St Wizards";
	    localStorage.redname = "Boise Spuds";
		localStorage.lfname = "Loyal Fans";
        localStorage.bluescore = 0;
	    localStorage.redscore = 0;
		localStorage.lfscore = 0;
		localStorage.btscore = 0;
		localStorage.rtscore = 0;
		localStorage.lftoggle = 't';
		localStorage.lcolor = "blue";
		localStorage.rcolor = "red";
	    document.getElementById("bluescore").innerHTML = localStorage.bluescore;
		document.getElementById("redscore").innerHTML = localStorage.redscore;
		document.getElementById("lfname").innerHTML = localStorage.lfname;
		document.getElementById("lfscore").innerHTML = localStorage.lfscore;
		document.getElementById("btscore").innerHTML = localStorage.btscore;
		document.getElementById("rtscore").innerHTML = localStorage.rtscore;
		document.getElementById("bluename").innerHTML = localStorage.bluename;
		document.getElementById("redname").innerHTML = localStorage.redname;
		console.log("Created new variables into localStorage.");
	}
	KEEPBUTTONSBLACK();
	changeColor("Left", localStorage.lcolor);
	changeColor("Right", localStorage.rcolor);
	console.log("Finished starting.");
	}

//adds and removes points to teams
function score(num, team) {	
    if (team == "blue"){
       if(num == "?"){
	      var n = prompt("points to blue team", "10");
		  if (isNaN(n)|| n === ""|| n == " "||n == null){
			return;
		  }
		  num = parseInt(n);
	   }
	   localStorage.bluescore = Number(localStorage.bluescore) + num;
	   document.getElementById("bluescore").innerHTML = localStorage.bluescore;
   } else if(team == "red"){
       if(num == "?"){
	       var n = prompt("points to red team", "10");
		   if (isNaN(n)|| n === ""|| n == " "||n == null){
		   return;
		   }
		   num = parseInt(n);
		}
		localStorage.redscore = Number(localStorage.redscore) + num;
	    document.getElementById("redscore").innerHTML = localStorage.redscore;
   } else if(team == "lf"){
       localStorage.lfscore = Number(localStorage.lfscore) + num;
	   document.getElementById("lfscore").innerHTML = localStorage.lfscore;
   } else if(team == "bt"){
     localStorage.btscore = Number(localStorage.btscore) + num;
	 document.getElementById("btscore").innerHTML = localStorage.btscore;
   } else if(team == "rt"){
     localStorage.rtscore = Number(localStorage.rtscore) + num;
	 document.getElementById("rtscore").innerHTML = localStorage.rtscore;
   } else {
     alert("An error occurred while trying to add a score.");
	 console.log("An error occurred while trying to add a score.");
	 return;
   }
   if (num < 0){
	   console.log("removed " + Math.abs(num) + " from the " + team + " team");
   } else if (num > 0){
	   console.log("added " + num + " to the " + team + " team");
   }}
   
 //reset the scores for the teams
function resetScore(team){
    if(confirm("Do you really want to reset the score for the " + team +" team")){
	 if(team == "blue"){
	    localStorage.bluescore = 0;
		document.getElementById("bluescore").innerHTML = localStorage.bluescore;
		localStorage.btscore = 0;
		document.getElementById("btscore").innerHTML = localStorage.btscore;
	} else if (team == "red"){
	    localStorage.redscore = 0;
		document.getElementById("redscore").innerHTML = localStorage.redscore;
		localStorage.rtscore = 0;
		document.getElementById("rtscore").innerHTML = localStorage.rtscore;
	} else if (team = "all"){
	    localStorage.clear();
		location.reload();
	}}else {
	return;
	}
	console.log("reset the " + team + " team's score and name.");
	}
	
//Toggle the Loyal Fan div to hide or show
function toggleLF(){
	var x = document.getElementById('loyalfans');
	var z = document.getElementById('togglelf');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		z.innerHTML = "Hide";
		localStorage.lftoggle = 't';
	} else {
		x.style.display = 'none';
		z.innerHTML = "Show";
		localStorage.lftoggle = 'f';
	}
	console.log("Toggled showing Loyal Fan area.");
	}
	
function somethingLF(){
	var x = document.getElementById('loyalfans');
	var z = document.getElementById('togglelf');
	if (localStorage.lftoggle == 'f'){
		x.style.display = 'none';
		z.innerHTML = "Show";
	}
}
	
//Toggle between 6 things and other things scoring
function switchShow(){
	var bt = document.getElementById('BT');
	var b6 = document.getElementById('B6');
	var rt = document.getElementById('RT');
	var r6 = document.getElementById('R6');
	var b = document.getElementById('otherthings');
	if (bt.style.display === 'none' && rt.style.display === 'none'){
		b6.style.display = 'none';
		r6.style.display = 'none';
		bt.style.display ='block';
		rt.style.display = 'block';
		b.innerHTML = "6 Things";
	} else {
		b6.style.display =  'block';
		r6.style.display =  'block';
		bt.style.display = 'none';
		rt.style.display = 'none';
		b.innerHTML = "Other Things";
	}
	console.log("Toggled between showing the 6 things or other things scoring.");
	}

//changes the name for the teams
function changeName(team) {
    if(team == "blue"){
	var btn = prompt("Set Blue Team Name", "Emerald St Wizards");
	if (btn == null){
	return;
	}
	if(btn == ""){
	localStorage.bluename = "Blue";
	} else {
	localStorage.bluename = btn;
	}
	document.getElementById("bluename").innerHTML = localStorage.bluename;
	console.log("Changed the " + team + " name to " + localStorage.bluename);
	} else if(team == "red"){
	var rtn = prompt("Set Red Team Name", "Boise Spuds");
	if (rtn == null){
	return;
	}
	if(rtn == ""){
	localStorage.redname = "Red";
	} else {
	localStorage.redname = rtn;
	}
	document.getElementById("redname").innerHTML = localStorage.redname;
	console.log("Changed the " + team + " name to " + localStorage.redname);
	} else if(team == "lf"){
	var lftn = prompt("Set Purple Team Name", "Loyal Fans");
	if (lftn == null){
	return;
	}
	if(lftn == ""){
	localStorage.lfname = "Purple";
	} else {
	localStorage.lfname = lftn;
	}
	document.getElementById("lfname").innerHTML = localStorage.lfname;
	console.log("Changed the " + team + " name to " + localStorage.lfname);
	}}
	
//changes the color for the teams
function changeColor(team, color) {
	if (team == "Left") {
		if (color == '?'){
		color = prompt("What Color would you like the " + team + " team to be", "blue");
		localStorage.lcolor = color;
		} else {
			color = localStorage.lcolor;
		}
		if (color == "White" || color == "white") {
			document.getElementById("BlueTeam").style.color = "Black";
		} else {
			document.getElementById("BlueTeam").style.color = "White";
			KEEPBUTTONSBLACK()
		}
		document.getElementById("BlueTeam").style.backgroundColor = color;
	} else if (team == "Right") {
		if (color == '?'){
		color = prompt("What Color would you like the " + team + " team to be", "red");
		localStorage.rcolor = color;
		} else {
			color = localStorage.rcolor;
		}
		if (color == "White" || color == "white") {
			document.getElementById("RedTeam").style.color = "Black";
		} else {
			document.getElementById("RedTeam").style.color = "White";
			KEEPBUTTONSBLACK()
		}
		document.getElementById("RedTeam").style.backgroundColor = color;
	}
	console.log("Changed the " + team + " team color to " + color);
}

function KEEPBUTTONSBLACK(){
	var d = document.getElementsByTagName("Button");
	n = d.length;
	for (i = 0; i < n; i++){
		d[i].style.color = "black";
	}
}