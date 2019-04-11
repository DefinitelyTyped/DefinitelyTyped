import fs = require('fs');
import gzipSize = require('gzip-size');

const string = 'Lorem ipsum dolor sit amet.';

console.log(string.length);

gzipSize(string).then(size => console.log(size));

console.log(gzipSize.sync(string));

const stream = fs.createReadStream("index.d.ts");
const gstream = stream.pipe(gzipSize.stream()).on("gzip-size", size => console.log(size));
console.log(gstream.gzipSize); // Could be a number or undefined. Recommended to use "gzip-size" event instead

gzipSize.file("index.d.ts").then(size => console.log(size));
