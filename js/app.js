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

let imgs = [
  "assets/img01.jpg",
  "assets/img02.jpg",
  "assets/img03.jpg",
  "assets/img04.jpg",
  "assets/img05.jpg",
  "assets/img06.jpg",
];

const secretWord = document.querySelector("#word");
const playAgain = document.querySelector("#reset");
let answer = "";
let btns = document.querySelectorAll("button");
let btnsArr = Array.from(btns);
let winCounter = 0;
let livesRemaining = 6;
let livesVal = document.getElementById("wrong");
livesVal.textContent = livesRemaining;
let img = document.createElement("img");
let src = document.getElementById("stickman");

function generateImg() {
  img.src = "assets/img00.jpg";
  src.appendChild(img);
}
generateImg();

function generateWord() {
  answer = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(answer);
  for (let idx = 0; idx < answer.length; idx++) {
    let space = document.createElement("div");
    let spaceIdx = "s" + idx;
    space.setAttribute("id", spaceIdx);
    space.setAttribute("class", "letter");

    secretWord.appendChild(space);
  }
}
generateWord();

for (let btn of btnsArr) {
  btn.addEventListener("click", handleClick);
}

function handleClick(evt) {
  if (evt.target.id != "reset") {
    if (answer.includes(evt.target.textContent)) {
      for (let idx = 0; idx < answer.length; idx++) {
        if (evt.target.textContent === answer[idx]) {
          let secretDiv = "s" + idx;
          let letter = document.getElementById(secretDiv);
          letter.textContent = evt.target.textContent;
          winCounter++;
        }
      }
    } else {
      livesRemaining--;
      livesVal.textContent = livesRemaining;
      let img1 = document.querySelector("img");
      img1.remove();
      let img2 = document.createElement("img");
      img2.src = imgs[0];
      let src = document.getElementById("stickman");
      src.appendChild(img2);
      imgs.shift();
    }

    evt.target.disabled = true;
  }
  checkForWin();
  checkForLoss();
}

playAgain.addEventListener("click", reset);

function reset(evt) {
  livesRemaining = 6;
  let livesVal = document.getElementById("lives");
  livesVal.textContent = `Lives Remaining:`;
  let wrong = document.getElementById("wrong");
  wrong.innerText = livesRemaining;
  imgs = [
    "assets/img01.jpg",
    "assets/img02.jpg",
    "assets/img03.jpg",
    "assets/img04.jpg",
    "assets/img05.jpg",
    "assets/img06.jpg",
  ];
  let img1 = document.querySelector("img");
  img1.remove();
  generateImg();

  btnsArr.forEach((btn) => {
    btn.disabled = false;
  });

  let spaces = document.querySelectorAll(".letter");
  for (let idx = 0; idx < spaces.length; idx++) {
    spaces[idx].remove();
  }
  generateWord();
}

function checkForWin() {
  if (winCounter === answer.length) {
    let removeText = document.querySelector("#lives");
    removeText.textContent = "You win!";
    let removeWrong = document.getElementById("wrong");
    removeWrong.textContent = "";
    btnsArr.forEach((btn) => {
      if (btn.id != "reset") btn.disabled = true;
    });
  }
}

function checkForLoss() {
  if (livesRemaining === 0) {
    let removeText = document.querySelector("#lives");
    removeText.textContent = "You lose!";
    let removeWrong = document.getElementById("wrong");
    removeWrong.textContent = "";
    btnsArr.forEach((btn) => {
      if (btn.id != "reset") btn.disabled = true;
    });
  }
}
