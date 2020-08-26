var left = {
    name: "Mountain Bluebirds",
    color: "blue",
    score: 0,
    things: 0
};

var right = {
    name: "Boise Spuds",
    color: "red",
    score: 0,
    things: 0
};

var fans = {
    name: "Loyal Fans",
    score: 0,
    toggle: 't'
};

//Loads or makes the local storage
window.onload = function() {
    if (localStorage.getItem("leftSave") && localStorage.getItem("rightSave") && localStorage.getItem("fanSave")) {
        left = JSON.parse(localStorage.getItem("leftSave"));
        right = JSON.parse(localStorage.getItem("rightSave"));
        fans = JSON.parse(localStorage.getItem("fanSave"));
		console.log("Loaded saved variables from localStorage.")
    }
    document.getElementById("bluescore").innerHTML = left.score;
    document.getElementById("redscore").innerHTML = right.score;
    document.getElementById("bluename").innerHTML = left.name;
    document.getElementById("redname").innerHTML = right.name;
    document.getElementById("lfname").innerHTML = fans.name;
    document.getElementById("lfscore").innerHTML = fans.score;
    document.getElementById("btscore").innerHTML = left.things;
    document.getElementById("rtscore").innerHTML = right.things;
    somethingLF();
    save();
	KEEPBUTTONSBLACK();
	changeColor("Left", left.color);
	changeColor("Right", right.color);
	console.log("Finished starting.");
	}

function save() {
    localStorage.setItem('leftSave', JSON.stringify(left));
    localStorage.setItem('rightSave', JSON.stringify(right));
    localStorage.setItem('fanSave', JSON.stringify(fans));
    console.log("saved");
}

//adds and removes points to teams
function score(num, team) {
    if (num == "?") {
        var n = prompt("points to " + team + " team", "10");
        if (isNaN(n)|| n === ""|| n == " "||n == null){
			return;
        }
        num = parseInt(n);
    }
    if (team == "left"){
	   left.score = Number(left.score) + num;
	   document.getElementById("bluescore").innerHTML = left.score;
   } else if(team == "right"){
		right.score = Number(right.score) + num;
	    document.getElementById("redscore").innerHTML = right.score;
   } else if(team == "fans"){
      fans.score = Number(fans.score) + num;
	   document.getElementById("lfscore").innerHTML = fans.score;
   } else if(team == "lt"){
     left.things = Number(left.things) + num;
	 document.getElementById("btscore").innerHTML = left.things;
   } else if(team == "rt"){
     right.things = Number(right.things) + num;
	 document.getElementById("rtscore").innerHTML = right.things;
   } else {
     alert("An error occurred while trying to add a score.");
	 console.log("An error occurred while trying to add a score.");
	 return;
   }
   if (num < 0){
	   console.log("removed " + Math.abs(num) + " from the " + team + " team");
   } else if (num > 0){
	   console.log("added " + num + " to the " + team + " team");
   }
    save();
}
   
 //reset the scores for the teams
function resetScore(team){
    if(confirm("Do you really want to reset the score for the " + team +" team")){
	 if(team == "left"){
	    left.score = 0;
		document.getElementById("bluescore").innerHTML = left.score;
		left.things = 0;
		document.getElementById("btscore").innerHTML = left.things;
         save();
	} else if (team == "right"){
	    right.score = 0;
		document.getElementById("redscore").innerHTML = right.score;
		right.things = 0;
		document.getElementById("rtscore").innerHTML = right.things;
        save();
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
		fans.toggle = 't';
	} else {
		x.style.display = 'none';
		z.innerHTML = "Show";
		fans.toggle = 'f';
	}
	console.log("Toggled showing Loyal Fan area.");
    save();
	}
	
function somethingLF(){
	var x = document.getElementById('loyalfans');
	var z = document.getElementById('togglelf');
	if (fans.toggle == 'f'){
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
		b6.style.display  = r6.style.display = 'none';
		bt.style.display = rt.style.display ='block';
		b.innerHTML = "6 Things";
	} else {
		b6.style.display = r6.style.display =  'block';
		bt.style.display = rt.style.display = 'none';
		b.innerHTML = "Other Things";
	}
	console.log("Toggled between showing the 6 things or other things scoring.");
    save();
}

//changes the name for the teams
function changeName(team) {
    if(team == "left"){
	var btn = prompt("Set left Team Name", "Mountain Bluebirds");
	if (btn == null){
	return;
	}
	if(btn == ""){
	left.name = "Left";
	} else {
	left.name = btn;
	}
	document.getElementById("bluename").innerHTML = left.name;
	console.log("Changed the " + team + " name to " + left.name);
	} else if(team == "right"){
	var rtn = prompt("Set right Team Name", "Boise Spuds");
	if (rtn == null){
	return;
	}
	if(rtn == ""){
	right.name = "Right";
	} else {
	right.name = rtn;
	}
	document.getElementById("redname").innerHTML = right.name;
	console.log("Changed the " + team + " name to " + right.name);
	} else if(team == "fans"){
	var lftn = prompt("Set fans Team Name", "Loyal Fans");
	if (lftn == null){
	return;
	}
	if(lftn == ""){
	fans.name = "Fans";
	} else {
	fans.name = lftn;
	}
	document.getElementById("lfname").innerHTML = fans.name;
	console.log("Changed the " + team + " name to " + fans.name);
	}
    save();
}
	
//changes the color for the teams
function changeColor(team, color) {
	if (team == "left") {
		if (color == '?'){
		color = prompt("What Color would you like the " + team + " team to be", "blue");
		left.color = color;
		} else {
			color = left.color;
		}
		if (color == "White" || color == "white") {
			document.getElementById("BlueTeam").style.color = "Black";
		} else {
			document.getElementById("BlueTeam").style.color = "White";
			KEEPBUTTONSBLACK()
		}
		document.getElementById("BlueTeam").style.backgroundColor = color;
	} else if (team == "right") {
		if (color == '?'){
		color = prompt("What Color would you like the " + team + " team to be", "red");
		right.color = color;
		} else {
			color = right.color;
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
    save();
}

function KEEPBUTTONSBLACK(){
	var d = document.getElementsByTagName("Button");
	n = d.length;
	for (i = 0; i < n; i++){
		d[i].style.color = "black";
	}
}
