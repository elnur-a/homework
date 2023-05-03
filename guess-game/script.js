"use strict";

// select elements
const numberDiv = document.querySelector(".number"); //?
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".label-score");
const highScoreLabel = document.querySelector(".label-highscore");
const againBtn = document.querySelector(".again");

// console.log(Math.random()); //numbers btw 0 and 0.9999
// console.log(Math.random() * 10); //numbers btw 0 and 9.999

// console.log(Math.floor(3.35)); //3 like parseInt
// console.log(Math.ceil(3.35)); //4
// console.log(Math.round(3.35)); //3 if < .50 takes smaller side
// console.log(Math.round(3.55)); //4 if> .50 rounds up to next number

// all our numbers and scores
let winnerNum = Math.floor(Math.random() * 20 + 1); //to include 20 add +1
let currentScore = 20;
let heighScore = 0;
let guessNum;

const displayMessage = (message) => {
  message.textContent = message;
};
const checkBtnHandler = () => {
  //when user didnt put anything
  if (!guessNum) {
    return displayMessage("📌Please enter number!");
  }
  //1st case right answer
  if (guessNum === winnerNum) {
    document.querySelector("body").style.backgroundColor = "#3EC70B";
    displayMessage("🏆 You got the winner number!");
    numberDiv.textContent = guessNum;
    numberDiv.classList.add("rotate-num");
    heighScore = currentScore > heighScore ? currentScore : heighScore;
    highScoreLabel.textContent = `🥇Highscore: ${heighScore}`;
  } else {
    displayMessage(guessNum > winnerNum ? "😩too high" : "😢too low");
    currentScore--;
    scoreLabel.textContent = `💯score: ${currentScore}`;
  }
};

guessInput.addEventListener("change", (e) => {
  guessNum = parseInt(e.target.value);
});
const againBtnHandler = () => {
  document.querySelector("body").style.backgroundColor = "#222";
  numberDiv.textContent = "?";
  currentScore = 20;
  scoreLabel.textContent = `💯score: ${currentScore}`;
  guessInput.value = "";
  winnerNum = Math.floor(Math.random() * 20 + 1);
  numberDiv.classList.remove("rotate-num");
  message.textContent = "Start Guessing..";
};

checkBtn.addEventListener("click", checkBtnHandler);
againBtn.addEventListener("click", againBtnHandler);
