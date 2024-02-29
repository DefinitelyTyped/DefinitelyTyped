import ttf2eot = require("ttf2eot");

const input = new Uint8Array(10);
const result: Buffer = ttf2eot(input);
