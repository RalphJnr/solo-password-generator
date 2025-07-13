// const characters = ["A","B","C","D","E","F",
// "G","H","I","J","K","L","M","N","O","P","Q",
// "R","S","T","U","V","W","X","Y","Z","a","b",
// "c","d","e","f","g","h","i","j","k","l","m",
// "n","o","p","q","r","s","t","u","v","w","x",
// "y","z", "0", "1", "2", "3", "4", "5", "6",
// "7", "8", "9","~","`","!","@","#","$","%","^",
// "&","*","(",")","_","-","+","=","{","[","}","]",
// ",","|",":",";","<",">",".","?",
// "/"];

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pass1El = document.querySelector(".pass1");
let pass2El = document.querySelector(".pass2");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let userInput;
let randomPass1;
let randomPass2;

function getRandomText() {
  let randomNum = Math.floor(Math.random() * characters.length);
  let guess = characters[randomNum];
  return guess;
}

function getRandomPass(user = 15) {
  let password = "";
  for (let i = 0; i < user; i++) {
    password += getRandomText();
  }
  console.log(password);
  console.log(password.length);
  return password;
}

function inputText(event) {
  let element = event.target;
  userInput = Number(element.value);
}

function copy(event) {
  console.log(event.target);
  let element = event.target;
  let text = element.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied the text: " + text);
    })
    .catch((err) => {
      alert("Failed to copy text ");
    });
}

function generatePass() {
  randomPass1 = getRandomPass(userInput);
  randomPass2 = getRandomPass(userInput);
  pass1El.textContent = randomPass1;
  pass2El.textContent = randomPass2;
}
