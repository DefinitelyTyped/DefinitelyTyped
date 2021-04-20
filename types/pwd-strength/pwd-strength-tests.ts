import pwdStrength = require('pwd-strength');

let isValid = pwdStrength('P@55w0Rd');

isValid = pwdStrength('P@55w0Rd', {
  debug: true,
  minUpperChars: 2,
  minLowerChars: 2,
  minPasswordLength: 10,
  maxConsecutiveRepeatingChars: 3,
  minSpecialChars: 3,
  lang: {
    weak: 'Poor',
    average: 'Medium',
    strong: 'Strong',
    secure: 'Secure',
    minPasswordChar: 'You should have at least %s char.',
    minPasswordChars: 'You should have at least %s chars.',
    minLowerChar: 'You should have at least %s lowercase char.',
    minLowerChars: 'You should have at least %s lowercase chars.',
    minUpperChar: 'You should have at least %s uppercase char.',
    minUpperChars: 'You should have at least %s uppercase chars.',
    minSpecialChar: 'You should have at least %s special char.',
    minSpecialChars: 'You should have at least %s special chars.',
    maxConsecutiveRepeatingChars: 'You should have at most %s repeating chars.',
  },
});
