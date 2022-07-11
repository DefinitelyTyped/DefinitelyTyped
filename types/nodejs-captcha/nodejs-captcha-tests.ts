import * as captcha from 'nodejs-captcha';

const testConfig = {
	length: 8,
};

const newCaptcha = captcha(testConfig);

newCaptcha.value; // $ExpectType string
newCaptcha.image; // $ExpectType string
newCaptcha.width; // $ExpectType number
newCaptcha.height; // $ExpectType number