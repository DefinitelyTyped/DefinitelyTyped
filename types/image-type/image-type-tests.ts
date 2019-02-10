import imageType = require('file-type');

imageType(new Buffer([0xFF, 0xD8, 0xFF]));
imageType(new Uint8Array([0xFF, 0xD8, 0xFF]));
