import * as crypto from "crypto";
import xsalsa20 = require("xsalsa20");

const key = crypto.randomBytes(xsalsa20.KEYBYTES);
const nonce = crypto.randomBytes(xsalsa20.NONCEBYTES);

new xsalsa20(nonce, key); // $ExpectType Xor
const xor = xsalsa20(nonce, key);
xor; // $ExpectType Xor

xor.update(Buffer.from("hello")); // $ExpectType Uint8Array
xor.update(Buffer.from("hello"), Buffer.from("world")); // $ExpectType Buffer
xor.update(Buffer.from("hello"), new Uint8Array()); // $ExpectType Uint8Array
xor.update(new Uint8Array()); // $ExpectType Uint8Array

xor.finalize(); // $ExpectType void
