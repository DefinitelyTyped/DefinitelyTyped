import captcha = require('nodejs-captcha');

const testConfig = {
	length: 8,
};

const newCaptcha = captcha(testConfig);

newCaptcha // $ExpectType object
