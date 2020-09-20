// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables containing all the characters and number needed. 
var upperCase = [
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
];
var lowerCase = [
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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Function that will generate the Random Password. 
// First we promped the user for a number of characters. If they have bad input then the "return" stops the code. 
function generatePassword() {
  var passLength = prompt(
    "Choose a number of characters from 8 to 128 for your password."
  );
  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
    alert("Invalid input numbers must be grater than 8 and lower than 128");
    return;
  }

// variables storing all of the users answers using "confirm" in order to return a boolean
// if user returns all "false" booleans then "return" stops the code.
  var userUpper = confirm("Would you like a Upper case letter?");
  var userLower = confirm("Would you like a Lower case letter?");
  var userNum = confirm("Would you like a number?");
  var userSpecial = confirm("Would you like to use special Characters");

  if (!userUpper && !userLower && !userNum && !userSpecial) {
    alert("You have to select atleast one of these.");
    return;
  }

// This Code is creating an array concatnating all of the users answers in "userChoices"
  var assuringChoices = [];
  var usersChoices = [];
  if (userUpper) {
    usersChoices = usersChoices.concat(upperCase);
    var randomUpper = Math.floor(Math.random() * upperCase.length);
    assuringChoices += upperCase[randomUpper];
  }
  if (userLower) {
    usersChoices = usersChoices.concat(lowerCase);
    var randomLower = Math.floor(Math.random() * lowerCase.length);
    assuringChoices += lowerCase[randomLower];
  }
  if (userNum) {
    usersChoices = usersChoices.concat(numbers);
    var randomNum = Math.floor(Math.random() * numbers.length);
    assuringChoices += numbers[randomNum];
  }
  if (userSpecial) {
    usersChoices = usersChoices.concat(specialChar);
    var randomSpecial = Math.floor(Math.random() * specialChar.length);
    assuringChoices += specialChar[randomSpecial];
  }

  // This For loop Creates a random Password using the "userChoices" array and returning it to password1
  var password1 = " ";
  password1 = password1.concat(assuringChoices);
  for (var i = 0; i < passLength - assuringChoices.length; i++) {
    var randomNumber = Math.floor(Math.random() * usersChoices.length);
    password1 += usersChoices[randomNumber];
  }
//  // Write password to the #password input
// "Ui9^fjei"
  
  //var passwordText = document.querySelector("#password");
  
  //This is returing the value of password so we can use the function in a global scope.
  return password1;
}




// This function is writing the password to the password ID 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Adding an event listener to start the entire function when the button is pressed. 
generateBtn.addEventListener("click", writePassword);
