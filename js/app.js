const words = [
  "javascript",
  "callback",
  "functions",
  "github",
  "markdown",
  "terminal",
  "repository",
  "undefined",
  "stylesheet",
  "element",
  "variable",
  "flexbox",
  "browser",
  "iterator",
  "method",
  "console",
  "devtools",
  "attribute",
  "constructor",
  "instantiate",
];

const imgs = [
  "assets/img00.jpg",
  "assets/img01.jpg",
  "assets/img02.jpg",
  "assets/img03.jpg",
  "assets/img04.jpg",
  "assets/img05.jpg",
  "assets/img06.jpg",
];

const secretWord = document.querySelector("#word");
let answer = "";

function generateWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  console.log(answer);
  for (let idx = 0; idx < answer.length; idx++) {
    let space = document.createElement("div");
    space.setAttribute("id", idx);
    space.innerHTML = " __ ";
    // console.log(space);

    secretWord.appendChild(space);
  }
  //   console.log(secretWord);
}

generateWord();

function generateImg() {
  let img = document.createElement("img");
  img.src = "assets/img00.jpg";
  let src = document.getElementById("stickman");
  src.appendChild(img);
}

//   for (let idx = 0; idx < imgs.length; idx++) {
//     stickman.setAttribute("id", idx);
//   }
//   console.log(stickman);
// }

generateImg();

function handleClick(evt) {}

let btns = document.querySelectorAll("button");
let btnsArr = Array.from(btns);
// console.log(btnsArr);

for (let btn of btnsArr) {
  btn.addEventListener("click", handleClick);
}

//

const playAgain = document.querySelector("#reset");
let livesRemaining = document.querySelector("#wrong");

playAgain.addEventListener("click", reset);

function reset() {}
reset();

// function checkForLetter(answer) {
// let guessedLetter = [];
// for (let idx = 0; idx <= answer.length; idx++) {
//     if (letter === answer)
// }
// }
// function checkForWin() {}

//check for win, if win return "You win!", else return "You lose! Click Play Again!"

//onClick, loop through "answer" for truthy elements,
//push element into " __ " element.  If no truthy element,
//change img (p id="stickman") and lives remaining
//(span id="wrong") = -1

//add event listener for play again button (id = reset),
//onClick generate img1 and generate new secret word

// handleClick event listen to grab e.target.textContent ?
