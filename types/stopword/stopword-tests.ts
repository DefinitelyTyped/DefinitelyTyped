import stopword = require('stopword');

const oldString = 'you can even roll your own custom stopword list'.split(' ');
const stopwordLangId = stopword.id;

stopword.removeStopwords(oldString, stopwordLangId); // with custom stopwords
stopword.removeStopwords(oldString); // default stopwords (en)
