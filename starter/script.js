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

let userPassArr = []
let passwordLength = undefined

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
  
  function getPasswordLength () {
    let numOfChar = Number(
      prompt("How many characters would you like in your password? Please choose a value between 10-64)")
    );
    if (numOfChar >= 10 && numOfChar <= 64) {
      return numOfChar;
    } else {
      alert(
        "Sorry, your password requires a minimum of 10 characters and a maximum of 64. Please try again."
      );
      return getPasswordLength();
    }
  };

//Function to convert the password length input into a number, because otherwise it's still a string?)
function convertToNumber() {
  let passwordLength = Number(getPasswordLength.confirmLength);
  return;
}
convertToNumber()


//Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Function for storing random characters in userPassArr variable based on user choices
function constructPassword() {

  if (getPasswordOptions.confirmLowerCase == true) {
    userPassArr += getRandom(lowerCasedCharacters);
  }
  if (getPasswordOptions.confirmUpperCase == true) {
    userPassArr += getRandom(upperCasedCharacters);
  }
  if (getPasswordOptions.confirmNumericCharacter == true) {
    userPassArr += getRandom(numericCharacters);
  }
  if (getPasswordOptions.confirmSpecialCharacter == true) {
    userPassArr += getRandom(specialCharacters);
  }
}
constructPassword()

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