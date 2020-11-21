import ttf2woff = require('ttf2woff');

const input = new Uint8Array(10);
const result: Buffer = ttf2woff(input);
