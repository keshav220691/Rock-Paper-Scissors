let userScore = 0;
let ComputerScore = 0;

let userScorePara = document.querySelector(".user-score");
let compScorePara = document.querySelector(".comp-score");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".message");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const showWinner = (userWin) => {
  console.log(`${userWin ? "User Won" : "Computer won"}`);
  if (userWin) {
    userScore++;
    msg.innerText = "You Won!";
    userScorePara.innerText = userScore;
  } else {
    ComputerScore++;
    msg.innerText = "You loose.";
    compScorePara.innerText = ComputerScore;
  }
};

const drawGame = () => {
  msg.innerText = "Game Draw. Play again.";
};

const playGame = (userChoice) => {
  // computer choice
  const compChoice = genCompChoice();
  console.log("computer choice ", compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};
