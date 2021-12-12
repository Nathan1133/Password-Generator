// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Variables and Arrays
var passwordCharacters;
var lowerCase;
var upperCase;
var number;
var specialCharacter;
var choice;

var arrayLower = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = [];
var arrayNubmbers = [];
var arraySpecial= [];





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Beginning of My Code

passwordCharacters = promt("How many Characters between 8 and 128 would you like your password?")


if () {


}