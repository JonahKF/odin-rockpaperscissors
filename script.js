function getComputerChoice() {
  randInt = Math.random();
  if (randInt <= 0.33) {
    return "rock";
  } else if (randInt >= 0.33 && randInt <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  while (true) {
    humanInput = prompt();
    if (humanInput.toLowerCase() === "rock") {
      return "rock";
    } else if (humanInput.toLowerCase() === "paper") {
      return "paper";
    } else if (humanInput.toLowerCase() === "scissors") {
      return "scissors";
    } else {
      console.log("Not a valid input!");
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  // console.log(computerSelection);
  console.log("User: " + humanScore);
  console.log("CPU: " + computerScore);
  // }

  if (humanScore > computerScore) {
    console.log("User wins!");
  } else if (humanScore < computerScore) {
    console.log("CPU wins!");
  } else {
    console.log("It's a tie!");
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You lose!");
    computerScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("It's a tie!");
  }
}

//DOM Buttons
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

btnPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

btnScissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});


// Game Start
playGame();
