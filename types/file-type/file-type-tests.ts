import fileType = require("file-type");

// $ExpectType FileTypeResult | null
fileType(new Buffer([0xFF, 0xD8, 0xFF]));
fileType(new Uint8Array([0xFF, 0xD8, 0xFF]));

// $ExpectType number
fileType.minimumBytes;
