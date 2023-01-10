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

let userOptions = {};

/* FUNCTION TO CHOOSE LENGTH OF PW
- convert user input to number 
- if the number inputted is within parameters then return numOfChar
- if the number inputted is outside parameters then alert the user to try again and restart the function
*/
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
    return getPasswordLength();
  }
};


/*FUNCTION TO CHOOSE CHARACTER OPTIONS 
- make an object which holds all the booleans for lower,upper, special and numeric cases
- if they are all false or 'cancel' then alert to 'please select at least one option' and restart the function
- otherwise, the user has performed the task correctly and we return char 
*/
function characterOptions() {
  let char = {
    confirmLowerCase: confirm("Click OK to confirm if you would like to include lowercase characters"),
    confirmUpperCase: confirm("Click OK to confirm if you would like to include uppercase characters"),
    confirmNumericCharacter: confirm("Click OK to confirm if you would like to include numeric characters"),
    confirmSpecialCharacter: confirm("Click OK to confirm if you would like to include special characters"),
  };
  if ((char.confirmLowerCase === false) && (char.confirmUpperCase === false) && (char.confirmSpecialCharacter === false) && (char.confirmNumericCharacter === false)) {
    alert("Please select at least one character option!");
    return characterOptions();
  } else {
    return char;
  }
};

/*FUNCTION TO STORE PASSWORD OPTIONS 
- create an object which stores the number of characters and the characters chosen by the user 
- console.log to check they are correct 
*/
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

/*FUNCTION TO GENERATE PASSWORD 
- create a function which will generate the password when called 
- call storeUserOptions 
- save time by creating new variable equal to the user characters and length selected 
- create a new empty array which will be where all the users chosen characters are stored 
- the loop will run according to the length of password that the user input 
- whichever boolean questions the user clicked 'OK' to, the corresponding RANDOMISED array will be pushed to the new array 'charArray'
*/
function generatePassword() {
  storeUserOptions()
  let userLength = userOptions.numOfChar;
  let charArray = [];

  //find way to get random character order and correct legnth of password!! and get rid of commas at the bottom 

  for (let i = 0; i < userLength; i++) {
    while (charArray.length < i){
    let booleanchoice = [Math.floor(Math.random() * 4)]
    console.log(booleanchoice);
    if((userOptions.userCharacters.confirmLowerCase) && (booleanchoice == 0)){
      charArray.push(getRandom(lowerCasedCharacters))
    }if((userOptions.userCharacters.confirmUpperCase) && (booleanchoice == 1)){
      charArray.push(getRandom(upperCasedCharacters))
    }if((userOptions.userCharacters.confirmNumericCharacter) && (booleanchoice == 2)){
      charArray.push(getRandom(numericCharacters))
    }if((userOptions.userCharacters.confirmSpecialCharacter) && (booleanchoice == 3)){
      charArray.push(getRandom(specialCharacters))
    }
  }
  return charArray;
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