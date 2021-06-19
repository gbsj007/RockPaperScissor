var uScore = 0;
var cScore = 0;
var userScoreDisplay = document.querySelector("#userScore");
var compScoreDisplay = document.querySelector("#compScore");
var resultDisplay = document.querySelector("#result p");
var rockDiv = document.querySelector("#r");
var paperDiv = document.querySelector("#p");
var scissorDiv = document.querySelector("#s");
var btn = document.querySelector("button");

function convertString(letter) {
	if (letter === "r") return "rock";
	if (letter === "p") return "paper";
	return "scissor"
}

function win(userChoice, compChoice) {
	uScore++;
	userScoreDisplay.textContent = uScore;
	compScoreDisplay.textContent = cScore;
	var userChoices = document.getElementById(userChoice);
	var smallUserWord = "user".fontsize(3).sub();
	var smallcompWord = "comp".fontsize(3).sub();
	resultDisplay.innerHTML = `${convertString(userChoice)}${smallUserWord} Beats ${convertString(compChoice)}${smallcompWord}. You win!`;
	userChoices.classList.add("greenGlow");
	setTimeout(function() { userChoices.classList.remove("greenGlow") }, 300);
}

function lose(userChoice, compChoice) {
	cScore++;
	userScoreDisplay.textContent = uScore;
	compScoreDisplay.textContent = cScore;
	var userChoices = document.getElementById(userChoice);
	var smallUserWord = "user".fontsize(3).sub();
	var smallcompWord = "comp".fontsize(3).sub();
	resultDisplay.innerHTML = `${convertString(userChoice)}${smallUserWord} Loses to ${convertString(compChoice)}${smallcompWord}. You lost!`;
	userChoices.classList.add("redGlow");
	setTimeout(function() { userChoices.classList.remove("redGlow") }, 300);
}

function draw(userChoice, compChoice) {
	var smallUserWord = "user".fontsize(3).sub();
	var smallcompWord = "comp".fontsize(3).sub();
	var userChoices = document.getElementById(userChoice);
	resultDisplay.innerHTML = `${convertString(userChoice)}${smallUserWord} Equals ${convertString(compChoice)}${smallcompWord}. It's draw!`;
	userChoices.classList.add("greyGlow");
	setTimeout(function() { userChoices.classList.remove("greyGlow") }, 300);
}

function generateCompChoice() {
	var choice = ["r","p","s"];
	var randomNum = Math.floor(Math.random() * 3);
	return choice[randomNum];
}

function game(userChoice) {
	var compChoice = generateCompChoice();
	switch(userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}

function main() {
	rockDiv.addEventListener("click", function(){
		game("r");
	});

	paperDiv.addEventListener("click", function(){
		game("p");
	});
	
	scissorDiv.addEventListener("click", function(){
		game("s");
	});

	btn.addEventListener("click", function(){
		uScore = 0;
		cScore = 0;
		userScoreDisplay.textContent = uScore;
		compScoreDisplay.textContent = cScore;
	});
}

main();