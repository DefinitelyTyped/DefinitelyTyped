/// <reference types="node" />

import * as crypto from "node:crypto";
import Chacha20 = require("chacha20-universal");

const xor = new Chacha20(new Uint8Array(10), new Uint8Array(10)); // $ExpectType Chacha20
new Chacha20(new Uint8Array(10), new Uint8Array(10), 1); // $ExpectType Chacha20
new Chacha20(crypto.randomBytes(32), crypto.randomBytes(24)); // $ExpectType Chacha20
new Chacha20(crypto.randomBytes(32), crypto.randomBytes(24), 1); // $ExpectType Chacha20

xor.finalized; // $ExpectType boolean
xor.pos; // $ExpectType number
xor.state; // $ExpectType Uint32Array

xor.update(new Uint8Array(10), new Uint8Array(10)); // $ExpectType void
xor.update(Buffer.alloc(1), Buffer.from("world")); // $ExpectType void

xor.final(); // $ExpectType void
