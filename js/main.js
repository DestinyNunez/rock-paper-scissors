//Get buttons hooked up
//Create function that grabs the input from the user when they press the buttons rock paper or scissors.
//Create function that will take users input and compare it to the computers input
//Create function that will display the results and the winner.

document.querySelector("#rock").addEventListener('click', playerThrowsRock);

document.querySelector("#paper").addEventListener('click', playerThrowsPaper);

document.querySelector("#scissors").addEventListener('click', playerThrowsScissors);


let botScore = 0;
let playerScore = 0;

function playerThrowsRock() {
  let botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "rock");
}


function playerThrowsScissors() {
	let botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "scissors");
}


function playerThrowsPaper() {
	let botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "paper");
}


function getRandomWeapon() {
  let randomNumber = Math.random();
  let botsWeapon = randomNumber;

  if (randomNumber < .33) {
    botsWeapon = "scissors";
  } else if (randomNumber > .55) {
    botsWeapon = "rock";
  } else if (randomNumber < .6666) {
    botsWeapon = "paper";
  }
  return botsWeapon;
}


function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("There was a tie");
  } else if (
    (botsWeapon == "scissors" && playersWeapon == "paper") ||
    (botsWeapon == "paper" && playersWeapon == "rock") ||
    (botsWeapon == "rock" && playersWeapon == "scissors")
  ) {
    increaseBotScore();
  } else if (
    (playersWeapon == "scissors" && botsWeapon == "paper") ||
    (playersWeapon == "paper" && botsWeapon == "rock") ||
    (playersWeapon == "rock" && botsWeapon == "scissors")
  ) {
    increasePlayerScore();
  }
}


function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  displayCompleteMessage("Sorry, you're a loser");
}

function increasePlayerScore() {
	playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  displayCompleteMessage("Winner!");
}

function displayCompleteMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}
