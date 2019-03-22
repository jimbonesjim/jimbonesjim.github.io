let userScore = 0;
let computerScore = 0;
let numberOfGames = 0;
const numberOfGames_span = document.getElementById("games");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const soundtoggle_div = document.getElementById("toggle-sound");
const smallUserWord = "user".fontsize(2.5).sub();
const smallCompWord = "comp".fontsize(2.5).sub();
const winSound = new Audio('sounds/win.mp3');
winSound.volume = 0.2;
const loseSound = new Audio('sounds/lose.mp3');
loseSound.volume = 0.35;
const drawSound = new Audio('sounds/draw.mp3');
drawSound.volume = 0.35;
muted = false;

function getComputerChoice() {

	const choices = ['r','p','s'];
	return choices[Math.floor(Math.random() * 3.459)];

}

function convertToWord(letter) {

	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";

}

function win(userChoice, computerChoice) {

	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
	winSound.play();
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 555);

}

function lose(userChoice, computerChoice) {

	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lost...`;
	loseSound.play();
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 555);

}

function draw(userChoice) {

	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `You both picked ${convertToWord(userChoice)}. It's a draw.`;
	drawSound.play();
	userChoice_div.classList.add('yellow-glow');
	setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 555);

}

function game(userChoice, computerChoice){

	switch(userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice);
			break;
	}

	numberOfGames++;
	numberOfGames_span.innerHTML = numberOfGames;

}

function toggleSound(){

	if (!muted) {
		muted = true;
		winSound.volume = 0.0;
		drawSound.volume = 0.0;
		loseSound.volume = 0.0;
		soundtoggle_div.src = "images/muted.png";
	} else {
		muted = false;
		winSound.volume = 0.2;
		drawSound.volume = 0.35;
		loseSound.volume = 0.35;
		soundtoggle_div.src = "images/sound.png";
	}
}

function main() {

	rock_div.addEventListener('click', () => game("r", getComputerChoice()));
	paper_div.addEventListener('click', () => game("p", getComputerChoice()));
	scissors_div.addEventListener('click', () => game("s", getComputerChoice()));
	soundtoggle_div.addEventListener('click', () => toggleSound());

}

main();