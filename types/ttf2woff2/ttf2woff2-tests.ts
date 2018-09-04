import ttf2woff2 = require('ttf2woff2');

const input = Buffer.alloc(10);
const result: Buffer = ttf2woff2(input);
