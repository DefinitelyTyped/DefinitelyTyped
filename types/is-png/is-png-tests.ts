import isPng = require("is-png");

const uint8Array = new Uint8Array(0);
isPng(uint8Array); // $ExpectType boolean

const buffer = Buffer.from(uint8Array);
isPng(buffer); // $ExpectType boolean
