function password_generator(len) {

  let passlength = prompt("Please enter your password length.");
  if (passlength < 8 || passlength > 128) {
    alert("Passwords must be at least 8 characters or no more than 128 characters.");
    password_generator()
  }
  let upperCase = confirm("Would you like uppercase?");
  let lowerCase = confirm("Would you like lowercase?");
  let specialCharacters = confirm("Would you like special characters?");
  let numbers = confirm("Would you like numbers?");

  console.log(passlength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialCharacters);
  console.log(numbers);

  // structure and math from https://stackoverflow.com/a/16548229/17557927
  // modified by me for different combinations of characters


  var length = (len) ? (len) : (passlength);
  var stringLower = "abcdefghijklmnopqrstuvwxyz";
  var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while (password.length < length) {
    entity1 = Math.ceil(stringLower.length * Math.random() * Math.random());
    entity11 = Math.ceil(stringUpper.length * Math.random() * Math.random());
    entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
    hold = stringLower.charAt(entity1);
    hold11 = stringUpper.charAt(entity11);
    if (lowerCase == true) {
      character += hold;
    } else if (lowerCase == false) {
      character += "";
    }
    if (upperCase == true) {
      character += hold11;
    } else if (upperCase == false) {
      character += "";
    }
    if (numbers == true) {
      character += numeric.charAt(entity2);
    } else if (numbers == false) {
      character += "";
    }
    if (specialCharacters == true) {
      character += punctuation.charAt(entity3);
    } else if (specialCharacters == false) {
      character += "";
    }
    password = character;
  }
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  document.getElementById('password').innerHTML = password.substr(0, len);
}