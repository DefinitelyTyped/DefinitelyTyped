import otpGenerator = require('otp-generator');

const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: true,
    upperCaseAlphabets: false,
}); // $ExpectType string
