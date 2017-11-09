/// <reference types="node" />

import fs = require('fs');
import magic = require('magic-number');

var buffer: any = new Buffer(100);
buffer.write('7z', 'binary');
fs.writeFile('test.love', buffer, function(err: any) {
    console.log(magic.detectFile('test.love')); // => 'application/7z-x-compressed'
    fs.unlinkSync('test.love');
});
