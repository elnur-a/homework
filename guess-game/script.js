"use strict";

//--select elements--//
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".label-score");
const highScoreLabel = document.querySelector(".label-highscore");
const numberDiv = document.querySelector(".number");

//--all our numbers and scores
let winnerNum = Math.round(Math.random() * 20 + 1);
let currentScore = 20;
let highScore = 0;
let guessNum;

const displayMessage = (message) => {
  message.textContent = message;
};

guessInput.addEventListener("change", (e) => {
  guessNum = parseInt(e.target.value);
});

checkBtn.addEventListener("click", () => {
  console.log(winnerNum);
  console.log(guessNum);

  //when user didnt put anything
  if (!guessNum) {
    displayMessage("📌 Please enter number");
  }

  // 1st case right answer
  if (guessNum === winnerNum) {
    document.querySelector("body").style.backgroundColor = "#3EC70B";
    displayMessage("🏆 You got the winner number");
    numberDiv.textContent = guessNum;
    highScore = currentScore > highScore ? currentScore : highScore;
    highScoreLabel.textContent = `🥇 Highscore: ${highScore}`;
  } else {
    displayMessage(guessNum > winnerNum ? "⬆️ too high..." : "⬇️ too low...");
    currentScore--;
    scoreLabel.textContent = `💯 Score: ${currentScore}`;
  }
});
