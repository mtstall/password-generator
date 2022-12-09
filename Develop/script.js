// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//my code

//array of possible password values
var passwordValues = "abcdefghijklmnopqrstuvwxyz";
var passwordValuesArray = passwordValues.split('');
console.log(passwordValuesArray);

//generatePassword function
function generatePassword() {

  //choosing password length
  var passwordLength = window.prompt("Enter desired password length (must be between 8 and 128 characters):");
  
  //if statements for length validation
  console.log(passwordLength);
  while ((passwordLength < 8) || (passwordLength > 128)) {
    if(passwordLength < 8) {
    window.alert("The password length you entered is too short. Enter a length greater than 8 and less than 128.")
    }
    if(passwordLength > 128) {
    window.alert("The password length you entered is too long. Enter a length greater than 8 and less than 128.")
    }
    passwordLength = window.prompt("Enter desired password length (must be between 8 and 128 characters):");
  }

  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  while ((lowerCase == false) && (upperCase === false) && (numeric == false) && (special == false)) {
    window.alert("You must select at least one character type.");
    lowerCase = confirm("Do you want to include lowercase characters?");
    upperCase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");
  }

  //code for lowerCase only selected
  if((lowerCase == true) && (upperCase === false) && (numeric == false) && (special == false)) {
      var passwordArray = [];

      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValuesArray[Math.floor(Math.random() * passwordValuesArray.length)];
        passwordArray[i] = randomValue;
      }
      var password = passwordArray.join("");
      console.log(password);
    }

  //code for upperCase only selected
  if((lowerCase == false) && (upperCase === true) && (numeric == false) && (special == false)) {
    var passwordArray = [];

    for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValuesArray[Math.floor(Math.random() * passwordValuesArray.length)];
      passwordArray[i] = randomValue;
    }
    var password = passwordArray.join("");
    password = password.toUpperCase();
    console.log(password);
  }


  }

generatePassword();
