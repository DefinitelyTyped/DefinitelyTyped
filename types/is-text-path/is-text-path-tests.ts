import isTextPath = require('is-text-path');

isTextPath('src/unicorn.txt');
// => true

isTextPath('src/unicorn.png');
// => false
