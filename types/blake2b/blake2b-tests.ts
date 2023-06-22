/// <reference types="node" />
import blake2b = require('blake2b');

// test type exports
type Blake2b = blake2b.Blake2b;

blake2b.WASM_SUPPORTED; // $ExpectType boolean
blake2b.WASM_LOADED; // $ExpectType boolean

blake2b.BYTES_MIN; // $ExpectType 16
blake2b.BYTES_MAX; // $ExpectType 64
blake2b.BYTES; // $ExpectType 32
blake2b.KEYBYTES_MIN; // $ExpectType 16
blake2b.KEYBYTES_MAX; // $ExpectType 64
blake2b.KEYBYTES; // $ExpectType 32
blake2b.SALTBYTES; // $ExpectType 16
blake2b.PERSONALBYTES; // $ExpectType 16

blake2b.ready(() => {}); // $ExpectType void

const output = new Uint8Array(64);

const b2b = blake2b(output.length); // $ExpectType Blake2b
blake2b(output.length, new Uint8Array(blake2b.KEYBYTES_MIN)); // $ExpectType Blake2b
blake2b(output.length, Buffer.alloc(blake2b.KEYBYTES_MIN)); // $ExpectType Blake2b
blake2b(output.length, new Uint8Array(blake2b.KEYBYTES_MIN), new Uint8Array(blake2b.SALTBYTES)); // $ExpectType Blake2b
blake2b(output.length, new Uint8Array(blake2b.KEYBYTES_MIN), Buffer.alloc(blake2b.SALTBYTES)); // $ExpectType Blake2b
// $ExpectType Blake2b
blake2b(
    output.length,
    new Uint8Array(blake2b.KEYBYTES_MIN),
    new Uint8Array(blake2b.SALTBYTES),
    new Uint8Array(blake2b.PERSONALBYTES),
);
// $ExpectType Blake2b
blake2b(
    output.length,
    new Uint8Array(blake2b.KEYBYTES_MIN),
    new Uint8Array(blake2b.SALTBYTES),
    Buffer.alloc(blake2b.PERSONALBYTES),
);
// $ExpectType Blake2b
blake2b(
    output.length,
    new Uint8Array(blake2b.KEYBYTES_MIN),
    new Uint8Array(blake2b.SALTBYTES),
    new Uint8Array(blake2b.PERSONALBYTES),
    true,
);

b2b.update(new Uint8Array()); // $ExpectType Blake2b
b2b.update(Buffer.alloc(0)); // $ExpectType Blake2b

b2b.digest(); // $ExpectType Uint8Array
b2b.digest('binary'); // $ExpectType Uint8Array
b2b.digest(new Uint8Array()); // $ExpectType Uint8Array
b2b.digest(Buffer.alloc(0)); // $ExpectType Buffer
b2b.digest('hex'); // $ExpectType string
