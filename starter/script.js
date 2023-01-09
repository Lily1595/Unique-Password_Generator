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

// Global Variables 
let passwordLength;
let confirmLength;
let confirmLowerCase;
let confirmUpperCase;
let confirmNumericCharacter;
let confirmSpecialCharacter;
let userPassArr = [];
let randomArraySelection;

// Function prompt user for password options 

function getPasswordOptions() {
  let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  let confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
if ((confirmSpecialCharacter === false) && (confirmNumericCharacter === false) && (confirmLowerCase === false) && (confirmUpperCase === false)) {
  alert("Please select at least one character option!");
  getPasswordOptions();
  return;
}}
getPasswordOptions();

// Function to choose length of password

function getPasswordLength() {
  let confirmLength = prompt("How many characters would you like your password to contain? Please choose between 10 and 64!");
  if (isNaN(confirmLength) || confirmLength < 10 || confirmLength > 64) {
    alert("Please choose between 10 and 64");
    getPasswordLength();
    return;
}}
getPasswordLength();

/* While Loop is user leaves field blank 
while (confirmLength == null) {
  alert("You can't leave the field blank! Please put in a number");
  getPasswordLength()
}*/

/* If user does enter a value, run a while loop until the value entered meets acceptance criteria 
if (confirmLength !== null) {
  while (isNaN(confirmLength) || confirmLength < 10 || confirmLength > 64) {
    getPasswordLength();
  }
} */

//Function to convert the password length input into a number 
function convertToNumber() {
  let passwordLength = Number(confirmLength);
}

//Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Function for storing random characters in userPassArr variable based on user choices
function constructPassword() {

  if (confirmLowerCase == true) {
    userPassArr += getRandom(lowerCasedCharacters);
  }
  if (confirmUpperCase == true) {
    userPassArr += getRandom(upperCasedCharacters);
  }
  if (confirmNumericCharacter == true) {
    userPassArr += getRandom(numericCharacters);
  }
  if (confirmSpecialCharacter == true) {
    userPassArr += getRandom(specialCharacters);
  }
}
//Function to make sure the password is the appropriate length based on user input 
function generatePassword() {
  while (userPassArr.length < passwordLength) {
    constructPassword();
  }
}
generatePassword();

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