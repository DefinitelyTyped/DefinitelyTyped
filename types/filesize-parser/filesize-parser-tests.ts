import filesizeParser = require("filesize-parser");

const size: number = filesizeParser("200kb"); // $ExpectType number
const sizeWithBase: number = filesizeParser("300mb", { base: 10 }); // $ExpectType number
const sizeWithNumber: number = filesizeParser(100, { base: 10 }); // $ExpectType number
