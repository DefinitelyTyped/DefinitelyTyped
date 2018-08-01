import * as otplib from "otplib";

const secretValue = otplib.authenticator.generateSecret();
const tokenValue = otplib.authenticator.generate(secretValue);

let isValid = otplib.authenticator.check(tokenValue, secretValue);
isValid = otplib.authenticator.verify({secret: secretValue, token: tokenValue});
