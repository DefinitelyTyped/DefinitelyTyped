import bufferSplit = require("buffer-split");

const buf = Buffer.from("Hello world!");
const delimiter = Buffer.from(" ");

bufferSplit(buf, delimiter); // $ExpectType Buffer[] || Buffer<ArrayBufferLike>[]
bufferSplit(buf, delimiter, true); // $ExpectType Buffer[] || Buffer<ArrayBufferLike>[]
