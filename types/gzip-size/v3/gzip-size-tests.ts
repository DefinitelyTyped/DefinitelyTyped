import gzipSize = require('gzip-size');

const string = 'Lorem ipsum dolor sit amet.';

console.log(string.length);

console.log(gzipSize.sync(string));
