import fileType = require("file-type");

fileType(new Buffer([0xFF, 0xD8, 0xFF]));
fileType(new Uint8Array([0xFF, 0xD8, 0xFF]));
