import levenshtein = require('damerau-levenshtein');

const response = levenshtein('test', 'test2');

const response2 = levenshtein('test', 'test2', 5);
