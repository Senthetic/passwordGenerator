// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
 var generateBtn = document.querySelector("#generate");
 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 var numbs ="0123456789";
 var specialChars = " !#$%&'()*+-,./:;<>=?@[]{}\^_`~";
 var passLength = prompt("How long would you like your password? (1-8)");
 console.log(passLength);
 var parsedLength = parseInt(passLength);
 console.log(parsedLength);
 var numLower = prompt("How many lowercase letters?");
 var parsedLower = parseInt(numLower);
 var numHigher = prompt("How many uppercase letters?");
 var parsedHigher = parseInt(numHigher);
 var numNumb = prompt("How many numbers?");
 var parsedNumb = parseInt(numNumb);
 var numSpecial = prompt("How many special characters?");
 var parsedSpecial = parseInt(numSpecial);

 var currentPassword = "";

// Write password to the #password input
function writePassword() {
  
  console.log("writePassword Called");
  var password = generatePassword();
  console.log(password);
  
  var passwordText = document.querySelector("#password");
  //event.preventDefault;
  passwordText.textContent = password;
  //document.body.appendChild(passwordText);
  alert("Your customized password is: " + password);

}
function generatePassword(){
console.log("generatePassword entered");

  for(var i = 0; i<=parsedLength;i++){
    console.log("loop started");
    var typePass = getRandomIntInclusive(1,4);
    console.log("typepass = " + typePass);
    //if there is no more available slots for the character type increase or decrease typePass
    if((typePass == 1 &&parsedNumb==0)||(typePass == 2&&parsedHigher ==0)||(typePass==3&&parsedLower==0)||(typePass==4&&parsedSpecial==0)){
      if(typePass==4&&parsedLower!=0){
        console.log("typePass decreased");
        typePass--;
      }
      else{
        console.log("typePass increased");
        typePass++;
      }
    }
    if(typePass == 1&&parsedNumb!=0){
      var x = getRandomIntInclusive(0,10);
      console.log(x);
      currentPassword =currentPassword.concat(x);
      console.log(currentPassword);
      parsedNumb--;
    }
    else if(typePass == 2&&parsedHigher!=0){
      var x = getRandomIntInclusive(0,26);
      var y = (alphabet.charAt(x)).toUpperCase();
      console.log(x,y);
      currentPassword = currentPassword.concat(y);
      console.log(currentPassword);
      parsedHigher--;
    }
    else if(typePass == 3&&parsedLower!=0){
      var x = getRandomIntInclusive(0,26);
      var y = alphabet.charAt(x);
      console.log(x,y);
      currentPassword = currentPassword.concat(y);
      console.log(currentPassword);
      parsedLower--;
    }
    else if(typePass == 4&&parsedSpecial!=0){
      var x = getRandomIntInclusive(0,26);
      var y = specialChars.charAt(x);
      console.log(x,y);
      currentPassword =  currentPassword.concat(y);
      console.log(currentPassword);
      parsedHigher--;
    }
    else{

    }
    
}
console.log(currentPassword);
return currentPassword;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
