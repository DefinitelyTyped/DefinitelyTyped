import * as crypto from "crypto";
import xsalsa20 = require("xsalsa20");

const key = crypto.randomBytes(xsalsa20.KEYBYTES);
const nonce = crypto.randomBytes(xsalsa20.NONCEBYTES);

new xsalsa20(nonce, key); // $ExpectType Xor
const xor = xsalsa20(nonce, key);
xor; // $ExpectType Xor

xor.update(Buffer.from("hello")); // $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
xor.update(Buffer.from("hello"), Buffer.from("world")); // $ExpectType Buffer || Buffer<ArrayBuffer>
xor.update(Buffer.from("hello"), new Uint8Array()); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
xor.update(new Uint8Array()); // $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>

xor.finalize(); // $ExpectType void
