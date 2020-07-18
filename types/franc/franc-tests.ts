import detect = require('franc');

const testText = 'This is an example sentence';
const testOptions = {
    minLength: 3,
    whitelist: ['eng'],
    blacklist: [],
};

detect(testText);
detect(testText, testOptions);

detect.all(testText);
detect.all(testText, testOptions)[0];
