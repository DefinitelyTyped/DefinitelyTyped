import readdir = require('readdir-stream');

var rs: NodeJS.ReadableStream;

rs = readdir('foo');
