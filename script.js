// Initialize score vars
let roundCounter = 0;
let humanScore = 0;
let computerScore = 0;

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

// function playGame() {
//   // Reset score vars on game start
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//     console.log("User: " + humanScore);
//     console.log("CPU: " + computerScore);
//   }

//   if (humanScore > computerScore) {
//     console.log("User wins!");
//   } else if (humanScore < computerScore) {
//     console.log("CPU wins!");
//   } else {
//     console.log("It's a tie!");
//   }
// }

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    roundCounter++;
    const resultDiv = document.querySelector("#resultDiv");
    const result = document.createElement("p");
    result.textContent =
      "You lose the round! Your Score: " +
      humanScore +
      " | CPU Score: " +
      computerScore;
    resultDiv.appendChild(result);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundCounter++;
    const resultDiv = document.querySelector("#resultDiv");
    const result = document.createElement("p");
    result.textContent =
      "You win the round! Your Score: " +
      humanScore +
      " | CPU Score: " +
      computerScore;
    resultDiv.appendChild(result);
  } else {
    roundCounter++;
    const resultDiv = document.querySelector("#resultDiv");
    const result = document.createElement("p");
    result.textContent =
      "It's a tie! Your Score: " +
      humanScore +
      " | CPU Score: " +
      computerScore;
    resultDiv.appendChild(result);
  }
}

//DOM Buttons
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  checkScore(roundCounter);
});

btnPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
  checkScore(roundCounter);
});

btnScissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
  checkScore(roundCounter);
});

// Game Start
// playGame();
function checkScore(roundCounter) {
  if (roundCounter >= 5) {
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
    if (humanScore > computerScore) {
      const resultDiv = document.querySelector("#resultDiv");
      const result = document.createElement("p");
      result.textContent =
        "You win the game! Your Score: " +
        humanScore +
        " | CPU Score: " +
        computerScore;
      result.style.cssText = "font-weight: 800;";
      resultDiv.appendChild(result);
    } else if (humanScore < computerScore) {
      const resultDiv = document.querySelector("#resultDiv");
      const result = document.createElement("p");
      result.textContent =
        "You lose the game! Your Score: " +
        humanScore +
        " | CPU Score: " +
        computerScore;
      result.style.cssText = "font-weight: 800;";
      resultDiv.appendChild(result);
    } else {
      const resultDiv = document.querySelector("#resultDiv");
      const result = document.createElement("p");
      result.textContent =
        "The game ends in a tie! Your Score: " +
        humanScore +
        " | CPU Score: " +
        computerScore;
      result.style.cssText = "font-weight: 800;";
      resultDiv.appendChild(result);
    }
  }
}
