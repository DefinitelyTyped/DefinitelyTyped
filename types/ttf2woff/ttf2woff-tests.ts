import ttf2woff = require("ttf2woff");

const input = new Uint8Array(10);
let result: Buffer = ttf2woff(input);
result = ttf2woff(input, {});
result = ttf2woff(input, { metadata: "string meta data" });
