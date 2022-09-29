import otpGenerator = require('otp-generator');

// $ExpectType string
const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: true,
    upperCaseAlphabets: false,
});
