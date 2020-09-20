//Team variables with team info
let left = {
  name: "Mountain Bluebirds",
  color: "blue",
  score: 0,
  things: 0,
  six: [false, false, false, false, false, false],
};

let right = {
  name: "Boise Spuds",
  color: "red",
  score: 0,
  things: 0,
  six: [false, false, false, false, false, false],
};

let fans = {
  name: "Loyal Fans",
  score: 0,
  toggle: "t",
};

//DOM variables
const leftScoreEl = document.getElementById("leftscore");
const rightScoreEl = document.getElementById("rightscore");
const fansScoreEl = document.getElementById("lfscore");
const leftNameEl = document.getElementById("leftname");
const rightNameEl = document.getElementById("rightname");
const fansNameEl = document.getElementById("lfname");
const leftThingsEl = document.getElementById("ltscore");
const rightThingsEl = document.getElementById("rtscore");
const leftChecksEls = document.querySelectorAll(".leftChecks");
const rightChecksEls = document.querySelectorAll(".rightChecks");

//Adds event listener to left team checkboxes to save whenever a checkbox is clicked
leftChecksEls.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    left.six = checkedBoxs(leftChecksEls);
    save();
  });
});

rightChecksEls.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    right.six = checkedBoxs(rightChecksEls);
    save();
  });
});

// Localstorage save and load functions
function save() {
  localStorage.setItem("leftSave", JSON.stringify(left));
  localStorage.setItem("rightSave", JSON.stringify(right));
  localStorage.setItem("fanSave", JSON.stringify(fans));
  console.log("saved");
}

function load() {
  left = JSON.parse(localStorage.getItem("leftSave"));
  right = JSON.parse(localStorage.getItem("rightSave"));
  fans = JSON.parse(localStorage.getItem("fanSave"));
  console.log("Loaded saved variables from localStorage.");
}

//Checks which checkboxes are true/false
function checkedBoxs(els) {
  let checked = [];
  els.forEach(function (i) {
    checked.push(i.checked);
  });
  return checked;
}

//Loads or makes the local storage
window.onload = function () {
  if (
    localStorage.getItem("leftSave") &&
    localStorage.getItem("rightSave") &&
    localStorage.getItem("fanSave")
  ) {
    load();
  }
  leftScoreEl.innerHTML = left.score;
  rightScoreEl.innerHTML = right.score;
  leftNameEl.innerHTML = left.name;
  rightNameEl.innerHTML = right.name;
  fansNameEl.innerHTML = fans.name;
  fansScoreEl.innerHTML = fans.score;
  leftThingsEl.innerHTML = left.things;
  rightThingsEl.innerHTML = right.things;
  for (let box = 0; box < 6; box++) {
    leftChecksEls[box].checked = left.six[box];
    rightChecksEls[box].checked = right.six[box];
  }
  somethingLF();
  save();
  changeColor("left", left.color);
  changeColor("right", right.color);
  console.log("Finished starting.");
};
//adds and removes points to teams
function score(num, team) {
  if (num === "?") {
    const n = prompt("points to " + team + " team", "10");
    if (isNaN(n) || n === "" || n == " " || n === null) {
      return;
    }
    num = parseInt(n);
  }
  if (team === "left") {
    left.score = Number(left.score) + num;
    leftScoreEl.innerHTML = left.score;
  } else if (team === "right") {
    right.score = Number(right.score) + num;
    rightScoreEl.innerHTML = right.score;
  } else if (team === "fans") {
    fans.score = Number(fans.score) + num;
    fansScoreEl.innerHTML = fans.score;
  } else if (team === "lt") {
    left.things = Number(left.things) + num;
    leftThingsEl.innerHTML = left.things;
  } else if (team === "rt") {
    right.things = Number(right.things) + num;
    rightThingsEl.innerHTML = right.things;
  } else {
    alert("An error occurred while trying to add a score.");
    console.log("An error occurred while trying to add a score.");
    return;
  }
  if (num < 0) {
    console.log("removed " + Math.abs(num) + " from the " + team + " team");
  } else if (num > 0) {
    console.log("added " + num + " to the " + team + " team");
  }
  save();
}

//reset the scores for the teams
function resetScore(team) {
  if (
    confirm("Do you really want to reset the score for the " + team + " team")
  ) {
    if (team === "left") {
      left.score = left.things = 0;
      leftScoreEl.innerHTML = left.score;
      leftThingsEl.innerHTML = left.things;
      save();
    } else if (team === "right") {
      right.score = right.things = 0;
      rightScoreEl.innerHTML = right.score;
      rightThingsEl.innerHTML = right.things;
      save();
    } else if (team === "all") {
      localStorage.clear();
      location.reload();
    }
  } else {
    return;
  }
  console.log("reset the " + team + " team's score and name.");
}

let fansEl = document.getElementById("loyalfans");
let fansToggleEl = document.getElementById("togglelf");

//Toggle the Loyal Fan div to hide or show
function toggleLF() {
  if (fansEl.style.display === "none") {
    fansEl.style.display = "block";
    fansToggleEl.innerHTML = "Hide";
    fans.toggle = "t";
  } else {
    fansEl.style.display = "none";
    fansToggleEl.innerHTML = "Show";
    fans.toggle = "f";
  }
  console.log("Toggled showing Loyal Fan area.");
  save();
}

function somethingLF() {
  if (fans.toggle === "f") {
    fansEl.style.display = "none";
    fansToggleEl.innerHTML = "Show";
  }
}

//Toggle between 6 things and other things scoring
function switchShow() {
  var lt = document.getElementById("LT");
  var l6 = document.getElementById("L6");
  var rt = document.getElementById("RT");
  var r6 = document.getElementById("R6");
  var b = document.getElementById("otherthings");
  if (lt.style.display === "none" && rt.style.display === "none") {
    l6.style.display = r6.style.display = "none";
    lt.style.display = rt.style.display = "block";
    b.innerHTML = "6 Things";
  } else {
    l6.style.display = r6.style.display = "block";
    lt.style.display = rt.style.display = "none";
    b.innerHTML = "Other Things";
  }
  console.log("Toggled between showing the 6 things or other things scoring.");
  save();
}

//changes the name for the teams
function changeName(team) {
  if (team == "left") {
    var ltn = prompt("Set left Team Name", "Mountain Bluebirds");
    if (ltn === null) {
      return;
    }
    if (ltn === "") {
      left.name = "Left";
    } else {
      left.name = ltn;
    }
    leftNameEl.innerHTML = left.name;
    console.log("Changed the " + team + " name to " + left.name);
  } else if (team == "right") {
    var rtn = prompt("Set right Team Name", "Boise Spuds");
    if (rtn === null) {
      return;
    }
    if (rtn === "") {
      right.name = "Right";
    } else {
      right.name = rtn;
    }
    rightNameEl.innerHTML = right.name;
    console.log("Changed the " + team + " name to " + right.name);
  } else if (team == "fans") {
    var lftn = prompt("Set fans Team Name", "Loyal Fans");
    if (lftn === null) {
      return;
    }
    if (lftn === "") {
      fans.name = "Fans";
    } else {
      fans.name = lftn;
    }
    fansNameEl.innerHTML = fans.name;
    console.log("Changed the " + team + " name to " + fans.name);
  }
  save();
}

//checks if a color is valid
function isColor(strColor) {
  let s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

function getColor(team, suggested) {
  let color = prompt(
    "What Color would you like the " + team + " team to be",
    suggested
  );
  if (!isColor(color)) {
    alert(color + " is not a color!");
    color = getColor(team, suggested);
    return color;
  } else {
    return color;
  }
}

function blackorwhite(team, color) {
  let element = document.getElementById(team);
  if (color.toLowerCase() == "white" || color.toLowerCase() == "pink") {
    element.style.color = "black";
  } else {
    element.style.color = "white";
  }
}

//changes the color for the teams
function changeColor(team, color) {
  if (team == "left") {
    if (color == "?") {
      color = getColor(team, "blue");
    } else {
      color = left.color;
    }
    blackorwhite("LeftTeam", color);
    document.getElementById("LeftTeam").style.backgroundColor = color;
    left.color = color;
  } else if (team == "right") {
    if (color == "?") {
      color = getColor(team, "red");
    } else {
      color = right.color;
    }
    blackorwhite("RightTeam", color);
    document.getElementById("RightTeam").style.backgroundColor = color;
    right.color = color;
  }
  console.log("Changed the " + team + " team color to " + color);
  save();
}
