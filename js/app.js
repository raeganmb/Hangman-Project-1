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

// ***GENERATE SECRET WORD

const secretWord = document.querySelector("#word");
let answer = "";

function generateWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  console.log(answer);
  for (let idx = 0; idx < answer.length; idx++) {
    let space = document.createElement("div");
    space.setAttribute("id", idx);
    space.innerHTML = " ___ ";
    console.log(space);

    secretWord.appendChild(space);
  }
  console.log(secretWord);
}

generateWord();

function handleClick(evt) {
  console.log(evt.target);
}

let btns = document.querySelectorAll("button");
let btnsArr = Array.from(btns);
console.log(btnsArr);

for (let btn of btnsArr) {
  btn.addEventListener("click", function handleClick(event) {
    console.log("button clicked", event);
  });
}

// Create alphabet in HTML, style it
// on load, use loop to add event listeners to list items
// handleClick event listen to grab e.target.textContent

// guessedWord();

// ***ALPHABET BUTTONS

// alphabet.forEach(element=> {
//     let btn = document.createElement('button');
//     btn.keyboard = element;
//     document.appendChild(btn);
// })

// function generateButtons(alphabet) {
//     for(let i = 0; i < alphabet.length; i++) {
// container.append('<button>' + alphabet[i] + '</button>');
//     }
// }

// generateButtons();
