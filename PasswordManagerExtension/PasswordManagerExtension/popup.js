document.addEventListener('DOMContentLoaded', function() {
  var generateBtn = document.getElementById('generateBtn');
  var passwordOutput = document.getElementById('passwordOutput');
  var lengthInput = document.getElementById('lengthInput');
  var specialCharsCheckbox = document.getElementById('specialCharsCheckbox');
  var numbersCheckbox = document.getElementById('numbersCheckbox');
  var uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
  var modeToggle = document.getElementById('modeToggle');

  generateBtn.addEventListener('click', function() {
    var passwordLength = parseInt(lengthInput.value);
    var includeSpecialChars = specialCharsCheckbox.checked;
    var includeNumbers = numbersCheckbox.checked;
    var includeUppercase = uppercaseCheckbox.checked;

    var generatedPassword = generatePassword(passwordLength, includeSpecialChars, includeNumbers, includeUppercase);
    passwordOutput.value = generatedPassword;
    copyToClipboard(generatedPassword);
  });

  modeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', modeToggle.checked);
  });

  function generatePassword(length, includeSpecialChars, includeNumbers, includeUppercase) {
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "!@#$%^&*()_-+=<>?";
    var numbers = "0123456789";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (includeSpecialChars) {
      charset += specialChars;
    }
    if (includeNumbers) {
      charset += numbers;
    }
    if (includeUppercase) {
      charset += uppercase;
    }

    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
});
