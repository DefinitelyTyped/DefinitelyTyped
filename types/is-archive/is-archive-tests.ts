import isArchive = require('is-archive');

isArchive('src/unicorn.zip');
// => true

isArchive('src/unicorn.txt');
// => false
