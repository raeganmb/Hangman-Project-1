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

// GENERATE IMAGE

function generateImg() {
  let img = document.createElement("img");
  img.src = "assets/img00.jpg";
  let src = document.getElementById("stickman");
  src.appendChild(img);
}
generateImg();

//GENERATE SECRET WORD

const secretWord = document.querySelector("#word");
let answer = "";

function generateWord() {
  answer = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(answer);
  for (let idx = 0; idx < answer.length; idx++) {
    let space = document.createElement("div");
    let spaceIdx = "s" + idx;
    space.setAttribute("id", spaceIdx);
    space.setAttribute("class", "letter");
    // console.log(space);
    secretWord.appendChild(space);
  }
}
generateWord();

// KEYBOARD CLICK EVENT/EVENT HANDLER

let btns = document.querySelectorAll("button");
let btnsArr = Array.from(btns);

for (let btn of btnsArr) {
  btn.addEventListener("click", handleClick);
}

let winCounter = 0;
let livesRemaining = 6;
let livesVal = document.getElementById("wrong");
livesVal.textContent = livesRemaining;

function handleClick(evt) {
  console.log(evt.target);
  console.log(answer);
  0;
  if (evt.target.id != "reset") {
    if (answer.includes(evt.target.textContent)) {
      for (let idx = 0; idx < answer.length; idx++) {
        // console.log(answer[idx], "triggered");
        if (evt.target.textContent === answer[idx]) {
          let secretDiv = "s" + idx;
          let letter = document.getElementById(secretDiv);
          letter.textContent = evt.target.textContent;
          winCounter++;
        }
      }
    } else {
      console.log(imgs);
      livesRemaining--;
      livesVal.textContent = livesRemaining;
      let img1 = document.querySelector("img");
      img1.remove();
      let img2 = document.createElement("img");
      img2.src = imgs[0];
      let src = document.getElementById("stickman");
      src.appendChild(img2);
      imgs.shift();
      console.log(imgs);
    }
    if (winCounter === answer.length) {
      btnsArr.forEach((btn) => {
        if (btn.id != "reset") btn.disabled = true;
      });
    }
    if (livesRemaining === 0) {
    }
    evt.target.disabled = true;
  }
}

// RESET BUTTON

const playAgain = document.querySelector("#reset");
playAgain.addEventListener("click", reset);

function reset(evt) {
  livesRemaining = 6;
  let livesVal = document.getElementById("wrong");
  livesVal.textContent = livesRemaining;
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

document.querySelectorAll
  });
}


function checkForWin() {
if (winCounter === answer.length){
let winner = document.querySelector("#lives");
winner.remove();
}
return(`You win!!`)
} 

function checkForLoss() {

}