const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

let score = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".psrGame__signs");
  hands.style.display = "none";

  let contest = document.querySelector(".psrGame__contest");
  contest.style.display = "flex";

  document.getElementById("userPick").src = handOptions[hand];
  let computerHand = pickComputerHand();
  referee(hand, computerHand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let computer = hands[Math.floor(Math.random() * 3)];

  document.getElementById("computerPick").src = handOptions[computer];
  return computer;
};

const referee = (uHand, cHand) => {
  console.log("Hello From Refree!");
  setDecision("Fuck you");
  if (uHand == "paper" && cHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (uHand == "paper" && cHand == "rock") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
  if (uHand == "paper" && cHand == "paper") {
    setDecision("It's a tie!");
  }
  if (uHand == "rock" && cHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
  if (uHand == "rock" && cHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (uHand == "rock" && cHand == "rock") {
    setDecision("It's a tie!");
  }
  if (uHand == "scissors" && cHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (uHand == "scissors" && cHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (uHand == "scissors" && cHand == "paper") {
    setDecision("YOU WIN!");
    setScore(score + 1);
  }
};

const setDecision = (decision) => {
    document.querySelector(".psrGame__decision h2").innerText = decision;
};

const setScore = (SCORE) => {
    score = SCORE;
    document.querySelector(".psrGame__score h1").innerText = SCORE;
};

const restartGame = () => {
    let hands = document.querySelector(".psrGame__signs");
    hands.style.display = "flex";
  
    let contest = document.querySelector(".psrGame__contest");
    contest.style.display = "none";

}