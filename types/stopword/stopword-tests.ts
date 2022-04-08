import sw = require('stopword');

const oldString = 'you can even roll your own custom stopword list'.split(' ');
const stopwordLangId = sw.id;

sw.removeStopwords(oldString, stopwordLangId); // with custom stopwords
sw.removeStopwords(oldString); // default stopwords (en)
