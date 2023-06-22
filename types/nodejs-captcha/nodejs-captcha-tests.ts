import captcha = require('nodejs-captcha');

// test type exports
type Opts = captcha.Options;
type Cap = captcha.Captcha;

const generatedCaptcha = captcha(); // $ExpectType Captcha
captcha({ charset: ['1', '2', '3'] }); // $ExpectType Captcha
captcha({ charset: ['1', '2', '3'] as const }); // $ExpectType Captcha
captcha({ height: 300 }); // $ExpectType Captcha
captcha({ width: 500 }); // $ExpectType Captcha
captcha({ length: 30 }); // $ExpectType Captcha
captcha({ numberOfCircles: 100 }); // $ExpectType Captcha
captcha({ value: '123' }); // $ExpectType Captcha

generatedCaptcha.height; // $ExpectType number
generatedCaptcha.width; // $ExpectType number
generatedCaptcha.value; // $ExpectType string
generatedCaptcha.image; // $ExpectType string
