// Assignment code here

//array of possible alphabetical values
var passwordValuesLower = "abcdefghijklmnopqrstuvwxyz";
var passwordValuesLowerArray = passwordValuesLower.split('');

var passwordValuesUpper = passwordValuesLower.toUpperCase();
var passwordValuesUpperArray = passwordValuesUpper.split('');

//array of possible numeric values
var passwordNumericValues = "1234567890";
var passwordNumericValuesArray = passwordNumericValues.split('');

//array of possible special characters
var passwordSpecialValues = "!\"#$%&'()*+,-./:;<=>?@[\}^_`{|}~";
var passwordSpecialValuesArray = passwordSpecialValues.split('');

//generatePassword function
function generatePassword() {

  //choose password length
  var passwordLength = window.prompt("Enter desired password length (must be between 8 and 128 characters):");
  
  //if statements for length validation
  console.log(passwordLength);
  while ((passwordLength < 8) || (passwordLength > 128) || isNaN(passwordLength) || (passwordLength == null)) {
    if(passwordLength == null) {
      window.alert("You must enter a number.")
    }
    else if(passwordLength < 8) {
    window.alert("The password length you entered is too short. Enter a length greater than 8 and less than 128.")
    }
    else if(passwordLength > 128) {
    window.alert("The password length you entered is too long. Enter a length greater than 8 and less than 128.")
    }
    else if(isNaN(passwordLength)){
      window.alert("Please enter a number.");
    }
    passwordLength = window.prompt("Enter desired password length (must be between 8 and 128 characters):");
  }

  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  //validation for user answers - make sure at least one true value selected
  while ((lowerCase == false) && (upperCase === false) && (numeric == false) && (special == false)) {
    window.alert("You must select at least one character type.");
    lowerCase = confirm("Do you want to include lowercase characters?");
    upperCase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");
  }
  
  //creating blank array for generated password
  var passwordArray = [];

  //ONE TRUE
  //code for lowerCase only selected
  if((lowerCase == true) && (upperCase === false) && (numeric == false) && (special == false)) {
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValuesLowerArray[Math.floor(Math.random() * passwordValuesLowerArray.length)];
        passwordArray[i] = randomValue;
      }
    }

  //code for upperCase only selected
  else if((lowerCase == false) && (upperCase === true) && (numeric == false) && (special == false)) {
    for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValuesUpperArray[Math.floor(Math.random() * passwordValuesUpperArray.length)];
      passwordArray[i] = randomValue;
    }
  }

    //code for numeric only selected
    else if((lowerCase == false) && (upperCase === false) && (numeric == true) && (special == false)) {  
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordNumericValuesArray[Math.floor(Math.random() * passwordNumericValuesArray.length)];
        passwordArray[i] = randomValue;
      }
    }

    //code for special characters only selected
    else if((lowerCase == false) && (upperCase === false) && (numeric == false) && (special == true)) {
      
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordSpecialValuesArray[Math.floor(Math.random() * passwordSpecialValuesArray.length)];
        passwordArray[i] = randomValue;
      }
    }

    //TWO TRUE
    //lowercase and uppercase
    else if ((lowerCase == true) && (upperCase === true) && (numeric == false) && (special == false)) {

      var passwordValues = passwordValuesLower.concat(passwordValuesUpper);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //lowercase and numeric
    else if ((lowerCase == true) && (upperCase === false) && (numeric == true) && (special == false)) {

      var passwordValues = passwordValuesLower.concat(passwordNumericValues);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //lowercase and special
    else if ((lowerCase == true) && (upperCase === false) && (numeric == false) && (special == true)) {

      var passwordValues = passwordValuesLower.concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //uppercase and numeric
    else if ((lowerCase == false) && (upperCase === true) && (numeric == true) && (special == false)) {

      var passwordValues = passwordValuesUpper.concat(passwordNumericValues);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //uppercase and special
    else if ((lowerCase == false) && (upperCase === true) && (numeric == false) && (special == true)) {

      var passwordValues = passwordValuesUpper.concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //numeric and special
    else if ((lowerCase == false) && (upperCase === false) && (numeric == true) && (special == true)) {

      var passwordValues = passwordNumericValues.concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
        var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
        passwordArray[i] = randomValue;
      }
    }

    //THREE TRUE
    //lowercase uppercase numeric
    else if ((lowerCase == true) && (upperCase === true) && (numeric == true) && (special == false)) {

      var passwordValues = passwordValuesLower.concat(passwordValuesUpper).concat(passwordNumericValues);
      for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
      passwordArray[i] = randomValue;
      }
    }

    //lowercase uppercase special
    else if ((lowerCase == true) && (upperCase === true) && (numeric == false) && (special == true)) {

      var passwordValues = passwordValuesLower.concat(passwordValuesUpper).concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
      passwordArray[i] = randomValue;
      }
    }

    //lowercase numeric special
    else if ((lowerCase == true) && (upperCase === false) && (numeric == true) && (special == true)) {

      var passwordValues = passwordValuesLower.concat(passwordNumericValues).concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
      passwordArray[i] = randomValue;
      }
    }

    //uppercase numeric special
    else if ((lowerCase == false) && (upperCase === true) && (numeric == true) && (special == true)) {

      var passwordValues = passwordValuesUpper.concat(passwordNumericValues).concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
      passwordArray[i] = randomValue;
      }
    }

    //FOUR TRUE
    else if ((lowerCase == true) && (upperCase === true) && (numeric == true) && (special == true)) {

      var passwordValues = passwordValuesUpper.concat(passwordValuesLower).concat(passwordNumericValues).concat(passwordSpecialValues);
      for (var i = 0; i < passwordLength; i++) {
      var randomValue = passwordValues[Math.floor(Math.random() * passwordValues.length)];
      passwordArray[i] = randomValue;
      }
    }

    var password = passwordArray.join("");
    console.log(password);

    return password;
  }

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