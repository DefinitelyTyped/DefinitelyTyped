import isCompressed = require('is-compressed');

isCompressed('src/unicorn.zip');
// => true

isCompressed('src/unicorn.txt');
// => false
