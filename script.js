// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
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

let userOptions = {};

//FUNCTION TO CHOOSE LENGTH OF PW
function getPasswordLength() {
  let numOfChar = Number(
    prompt("How many characters would you like in your password? Please choose a value between 10-64)")
  );
  if (numOfChar >= 10 && numOfChar <= 64) {
    return numOfChar;
  } else {
    alert(
      "Sorry, your password requires a minimum of 10 characters and a maximum of 64. Please try again."
    );
    // This is recursion // when a function calls itself within the function
    return getPasswordLength();
  }
};

//FUNCTION TO CHOOSE CHARACTER OPTIONS 
var longArray = []
function characterOptions() {

  if (confirm("Click OK to confirm if you would like to include lowercase characters")) {
    longArray = longArray.concat(lowerCasedCharacters)
  }
  if (confirm("Click OK to confirm if you would like to include uppercase characters")) {
    longArray = longArray.concat(upperCasedCharacters)
  }
  if (confirm("Click OK to confirm if you would like to include numeric characters")) {
    longArray = longArray.concat(numericCharacters)
  }
  if (confirm("Click OK to confirm if you would like to include special characters")) {
    longArray = longArray.concat(specialCharacters)
  }
  if (longArray.length === 0) {
    alert("Please select at least one character option!");
    return characterOptions();
  } else {
    return longArray
  }
};

//FUNCTION TO STORE PASSWORD OPTIONS 
function storeUserOptions() {
  userOptions = {
    numOfChar: getPasswordLength(),
    userCharacters: characterOptions(),
  }
  console.log(userOptions.numOfChar);
  console.log(userOptions.userCharacters);
}

//FUNCTION FOR GETTING RANDOM ELEMENT FROM ARRAY
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//FUNCTION TO GENERATE PASSWORD 

function generatePassword() {
  storeUserOptions()
  let userLength = userOptions.numOfChar;
  let charArray = [];

  for (let i = 0; i < userLength; i++) {
    if (userOptions.userCharacters) {
      charArray.push(getRandom(longArray))
    }
  }
  console.log(charArray);
  return charArray.join('');
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
