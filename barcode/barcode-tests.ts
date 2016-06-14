/// <reference path="barcode.d.ts" />
import barcode = require('barcode');
import path = require('path');

var code39 = barcode('code39', {
    data: "it works",
    width: 400,
    height: 100,
});

code39.getStream(function (err, readStream) {
    if (err) throw err;

    // 'readStream' is an instance of ReadableStream
});

var outfile = path.join(__dirname, 'imgs', 'mycode.png');
code39.saveImage(outfile, function (err) {
    if (err) throw err;

    console.log('File has been written!');
});