let humanScore = 0;
let computerScore = 0;
let rounds = 0;
function getComputerChoice() {
  x = Math.random();
  if (x > 0 && x < 0.33) {
    return 1;
  } else if (x >= 0.33 && x < 0.66) {
    return 2;
  } else if (x >= 0.66 && x < 1) {
    return 3;
  }
}

function getHumanChoice(choice) {
  choice = choice.toUpperCase();
  if (choice == "ROCK") {
    compare(1);
  } else if (choice == "PAPER") {
    compare(2);
  } else if (choice == "SCISSORS") {
    compare(3);
  } else compare(undefined);
}

function compare(y) {
  const x = getComputerChoice();
  const text = document.getElementById("result");
  if (y === undefined) return "invalid option";
  rounds++;
  console.log(rounds);
  if (x < y) {
    humanScore++;
    text.textContent = "You win.";
  } else if (x > y) {
    computerScore++;
    text.textContent = "Computer wins";
  } else if (x == y) {
    text.textContent = "It's a draw";
  }
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;
  if (rounds == 5) finalScore();
}
function score() {
  return "Your score: " + humanScore + "    Computer score: " + computerScore;
}
function finalScore() {
  const text = document.getElementById("finalResultText");
  text.classList.remove("hidden");
  if (computerScore > humanScore) {
    text.textContent = "Computer wins";
  } else if (computerScore < humanScore) {
    text.textContent = "You win.";
  } else if (computerScore == humanScore) text.textContent = "It's a draw.";
  endGame();
}
function endGame() {
  document.getElementById("restartBtn").classList.remove("hidden");

  ["rBtn", "sBtn", "pBtn"].forEach((id) => {
    document.getElementById(id).disabled = true;
  });
}
function reset() {
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;

  ["restartBtn", "finalResultText"].forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });

  ["rBtn", "sBtn", "pBtn"].forEach((id) => {
    document.getElementById(id).disabled = false;
  });

  rounds = 0;
  humanScore = 0;
  computerScore = 0;
}
// round();
