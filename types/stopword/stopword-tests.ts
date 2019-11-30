import stopword = require('stopword');

const oldString = 'you can even roll your own custom stopword list'.split(' ');
const stopwordLang = stopword.en;
stopword.removeStopwords(oldString, stopwordLang); // it's working
