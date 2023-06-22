/// <reference types="node" />
import hmac = require('hmac-blake2b');

hmac.BYTES; // $ExpectType 64
hmac.KEYBYTES; // $ExpectType 128

hmac(new Uint8Array(), new Uint8Array(), new Uint8Array()); // $ExpectType void
hmac(new Uint8Array(), [new Uint8Array()] as const, new Uint8Array()); // $ExpectType void
hmac(Buffer.alloc(0), Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType void
hmac(Buffer.alloc(0), [Buffer.alloc(0)] as const, Buffer.alloc(0)); // $ExpectType void
hmac(Buffer.alloc(0), [new Uint8Array(), Buffer.alloc(0)] as const, Buffer.alloc(0)); // $ExpectType void
