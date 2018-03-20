import jpeg = require("jpeg-js");
import fs = require("fs");

const x = fs.readFileSync("hello.jpg");
const decoded = jpeg.decode(x, true);

const { width, height } = decoded;

width;          // $ExpectType number
height;         // $ExpectType number
decoded.data;   // $ExpectType Uint8Array

fs.writeFileSync("re-encoded.jpg", jpeg.encode({
    width, height, data: decoded.data
}, 50));
