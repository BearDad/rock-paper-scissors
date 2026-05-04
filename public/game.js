function game() {
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
    return x;
  }

  function getHumanChoice() {
    choice = prompt("Rock, paper, scissors").toUpperCase();
    // console.clear();
    if (choice == "ROCK") {
      return 1;
    } else if (choice == "PAPER") {
      return 2;
    } else if (choice == "SCISSORS") {
      return 3;
    } else return undefined;
  }

  function compare() {
    const x = getComputerChoice();
    const y = getHumanChoice();
    if (x < y) {
      humanScore++;
      return "You win.";
    } else if (x > y) {
      computerScore++;
      return " Computer wins.";
    } else if (y === undefined) {
      return "Invalid Option.";
    } else return "Draw. ";
  }
  function score() {
    return "Your score: " + humanScore + "    Computer score: " + computerScore;
  }
  function round() {
    console.log(compare());
    console.log(score());
    console.log("rounds played: " + (rounds + 1));
    rounds++;

    if (rounds < 5) {
      round();
    } else finalScore();
  }
  console.log(rounds);
  function finalScore() {
    if (computerScore > humanScore) {
      return alert("Computer wins");
    } else if (computerScore < humanScore) {
      return alert("You win.");
    } else return alert("It's a draw.");
  }
  round();
}
