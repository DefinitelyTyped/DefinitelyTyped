import bs58check = require("bs58check");

const buf = Buffer.from("42", "hex");
const str = bs58check.encode(buf);
str; // $ExpectType string

bs58check.decode(str); // $ExpectType Buffer
bs58check.decodeUnsafe(str); // $ExpectType Buffer | undefined
