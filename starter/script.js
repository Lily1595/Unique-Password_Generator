// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

//Call getpassword function 
getPasswordOptions ()

// Function to prompt user for password options
function getPasswordOptions() {
let confirmLength = (prompt("How many characters would you like your password to contain?"));
if (confirmLength <= 9 || confirmLength >= 64) {
  alert("Password length must be between 10-64 characters, please try again");
}
let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
let confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
if(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
  alert("Please choose at least one character type")}
}

// Store choices in new array 

let characterOptionsArray = []

if (getPasswordOptions.confirmSpecialCharacter) {
  characterOptionsArray+getPasswordOptions.confirmSpecialCharacter.concat();
  console.log(characteroptionsArray)
}
else if (getPasswordOptions.confirmNumericCharacter) {
  characterOptionsArray+getPasswordOptions.confirmNumericCharacter.concat();
  console.log(characteroptionsArray)
}
else if (getPasswordOptions.confirmLowerCase) {
  characterOptionsArray+getPasswordOptions.confirmLowerCase.concat();
  console.log(characteroptionsArray)
}
else if (getPasswordOptions.confirmUpperCase) {
  characterOptionsArray+getPasswordOptions.confirmUpperCase.concat();
  console.log(characteroptionsArray)
}
else {
  alert("You must have at least 1 type")
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);