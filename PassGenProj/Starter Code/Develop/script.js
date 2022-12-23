// Assignment code here


// Get references to the #generate element

function updateRangeValue(value) {
  document.getElementById("rangeValue").innerText = value;
};
var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", function() {
  writePassword(document.getElementById("rangeValue").innerText);
});

// Write password to the #password input
function writePassword(value) {
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeNumeric = document.getElementById("numeric").checked;
  var includeSpecial = document.getElementById("special").checked;

  var password = "";

  if (includeUppercase) {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password = password + upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  }

  if (includeLowercase) {
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    password = password + lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  }

  if (includeNumeric) {
    var numChars = "0123456789";
    password = password + numChars.charAt(Math.floor(Math.random() * numChars.length));
  }

  if (includeSpecial) {
    var specialChars = "!@#$%^&*";
    password = password + specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  for (var i = 0; i < value - 4; i++) {
    var charSet;

    if (includeUppercase && includeLowercase && includeNumeric && includeSpecial) {
      charSet = upperChars + lowerChars + numChars + specialChars;
    } else if (includeUppercase && includeLowercase && includeNumeric) {
      charSet = upperChars + lowerChars + numChars;
    } else if (includeUppercase && includeLowercase && includeSpecial) {
      charSet = upperChars + lowerChars + specialChars;
    } else if (includeUppercase && includeNumeric && includeSpecial) {
      charSet = upperChars + numChars + specialChars;
    } else if (includeLowercase && includeNumeric && includeSpecial) {
      charSet = lowerChars + numChars + specialChars;
    } else if (includeUppercase && includeNumeric) {
      charSet = upperChars + numChars;
    } else if (includeUppercase && includeSpecial) {
      charSet = upperChars && specialChars;
    } else if (includeLowercase && includeNumeric) {
      charSet = lowerChars + numChars;
    }
  }


  var passwordText = document.getElementById("password");

  passwordText.value = password;

  function updateRangeValue(value) {
    document.getElementById("rangeValue").innerText = value;
  }

}

// Add event listener to generate button

