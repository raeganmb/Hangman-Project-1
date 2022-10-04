const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

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

let answer = "";
let maxWrong = 6;
let wrong = 6;

function generateWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function guessedWord() {

}

generateWord();
