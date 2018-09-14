import franc = require('franc');

const testText = 'This is an example sentence';
const testOptions = {
    minLength: 3,
    whitelist: ['eng'],
    blacklist: [],
};

franc(testText);
franc(testText, testOptions);

franc.all(testText);
franc.all(testText, testOptions)[0];
