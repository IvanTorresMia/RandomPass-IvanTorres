// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables needed
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

function generatePassword() {
  var passLength = prompt(
    "Choose a number of characters from 8 to 128 for your password."
  );
  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
    alert("Invalid input numbers must be grater than 8 and lower than 128");
    return;
  }

  var userUpper = confirm("Would you like a Upper case letter?");
  var userLower = confirm("Would you like a Lower case letter?");
  var userNum = confirm("Would you like a number?");
  var userSpecial = confirm("Would you like to use special Characters");

  if (!userUpper && !userLower && !userNum && !userSpecial) {
    alert("You have to select atleast one of these.");
    return;
  }

  var usersChoices = [];
  if (userUpper) {
    usersChoices = usersChoices.concat(upperCase);
  }
  if (userLower) {
    usersChoices = usersChoices.concat(lowerCase);
  }
  if (userNum) {
    usersChoices = usersChoices.concat(numbers);
  }
  if (userSpecial) {
    usersChoices = usersChoices.concat(specialChar);
  }

  // console.log(usersChoices);
  
  var password1 = "Ui9^";
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * usersChoices.length);
    password1 += usersChoices[randomNumber];
  }
 // Write password to the #password input
"Ui9^fjei"
  
  //var passwordText = document.querySelector("#password");
  
  //passwordText.value = password1;
  return password1;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
