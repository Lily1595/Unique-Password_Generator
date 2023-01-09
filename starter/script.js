// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Variables to  store user character type choices
let confirmSpecialCharacter, confirmNumericCharacter, confirmLowerCase, confirmUpperCase;

// 1. Function prompt user for password options 

function getPasswordOptions() {
  let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  console.log (confirmSpecialCharacter);
  let confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  console.log (confirmNumericCharacter);
  let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  console.log (confirmLowerCase);
  let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  console.log (confirmUpperCase);
  }
  getPasswordOptions();

  while ((confirmSpecialCharacter == false) && (confirmNumericCharacter == false) && (confirmLowerCase == false) && (confirmUpperCase == false)) {
    alert("Please select at least one character option!");
  }

// 2. Function to create list of possible characters from user's character options input.

function listOfCharacters() {
  let characterOptionsArray = [];

  if (getPasswordOptions.confirmSpecialCharacter === true) {
    characterOptionsArray = characterOptionsArray.concat(specialCharacters);
    console.log(characterOptionsArray);
  }
  if (getPasswordOptions.confirmNumericCharacter === true) {
    characterOptionsArray = characterOptionsArray.concat(numericCharacters);
    console.log(characterOptionsArray);
  }
  if (getPasswordOptions.confirmLowerCase === true) {
    characterOptionsArray = characterOptionsArray.concat(lowerCasedCharacters);
    console.log(characterOptionsArray);
  }
  if (getPasswordOptions.confirmUpperCase === true) {
    characterOptionsArray = characterOptionsArray.concat(upperCasedCharacters);
    console.log(characterOptionsArray);
  }
}

// 3. Function to choose length of password

function getPasswordLength() {
  let confirmLength = (prompt("How many characters would you like your password to contain? Please choose between 10 and 64!"));
  console.log(confirmLength);
  alert("Thank you. Your password length will be " + confirmLength + " characters");
}

// While Loop is user leaves field blank 
while (confirmLength == null) {
  alert("You can't leave the field blank! Please put in a number");
  confirmLength = prompt("Please input a number between 10 and 64!");
}

//If user does enter a value, run a while loop until the value entered meets acceptance criteria 
if (confirmLength !== null) {
  while (isNaN(confirmLength) || confirmLength === "" || confirmLength < 10 || confirmLength > 64) {
    confirmLength = prompt("Please input a number between 10 and 64!");
  }
}

 

// 4. Function to generate a random selection of characters from new array, equal to the chosen password length 

function randomArray(){
  let randomNumbers = [];
for (let i = 0; i < getPasswordLength.confirmLength; i++) {
  let randomNumber = Math.floor(Math.random() * characterOptionsArray.length);
  randomNumbers.push(randomNumber);
}
}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);