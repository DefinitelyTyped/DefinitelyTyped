/// <reference types="node" />
import blake2b = require("blake2b-wasm");

// test type exports
type Blake2b = blake2b.Blake2b;
type Blake2bWasm = blake2b.Blake2bWasm;

blake2b.BYTES_MIN; // $ExpectType 16
blake2b.BYTES_MAX; // $ExpectType 64
blake2b.BYTES; // $ExpectType 32
blake2b.KEYBYTES_MIN; // $ExpectType 16
blake2b.KEYBYTES_MAX; // $ExpectType 64
blake2b.KEYBYTES; // $ExpectType 32
blake2b.SALTBYTES; // $ExpectType 16
blake2b.PERSONALBYTES; // $ExpectType 16
const wasm = blake2b.WASM; // $ExpectType Blake2bWasm | null
blake2b.SUPPORTED; // $ExpectType boolean

blake2b.ready(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
blake2b.ready(err => {
    err; // $ExpectType Error | undefined
});

const hash = blake2b(); // $ExpectType Blake2b
blake2b(32, new Uint8Array(8)); // $ExpectType Blake2b
blake2b(32, new Uint8Array(8), new Uint8Array(8)); // $ExpectType Blake2b
blake2b(32, new Uint8Array(8), new Uint8Array(8), new Uint8Array(8)); // $ExpectType Blake2b
blake2b(32, new Uint8Array(8), new Uint8Array(8), new Uint8Array(8), true); // $ExpectType Blake2b
new blake2b(); // $ExpectType Blake2b
new blake2b(32, new Uint8Array(8)); // $ExpectType Blake2b
new blake2b(32, new Uint8Array(8), new Uint8Array(8)); // $ExpectType Blake2b
new blake2b(32, new Uint8Array(8), new Uint8Array(8), new Uint8Array(8)); // $ExpectType Blake2b
new blake2b(32, new Uint8Array(8), new Uint8Array(8), new Uint8Array(8), true); // $ExpectType Blake2b

hash.digestLength; // $ExpectType number
hash.finalized; // $ExpectType boolean
hash.pointer; // $ExpectType number

hash.update(new Uint8Array(10)); // $ExpectType Blake2b
hash.digest(); // $ExpectType Uint8Array
hash.digest("binary"); // $ExpectType Uint8Array
hash.digest("hex"); // $ExpectType string
hash.digest(new Uint8Array(10)); // $ExpectType Uint8Array
hash.digest(Buffer.alloc(10)); // $ExpectType Buffer
hash.final(); // $ExpectType Uint8Array
hash.final("binary"); // $ExpectType Uint8Array
hash.final("hex"); // $ExpectType string
hash.final(new Uint8Array(10)); // $ExpectType Uint8Array
hash.final(Buffer.alloc(10)); // $ExpectType Buffer
hash.ready(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
hash.ready(err => {
    err; // $ExpectType Error | undefined
});
hash.getPartialHash(); // $ExpectType Uint8Array
hash.setPartialHash([1]); // $ExpectType void
hash.setPartialHash(new Uint8Array(1)); // $ExpectType void

if (wasm) {
    wasm.memory; // $ExpectType Memory
    wasm.blake2b_init(1, 1); // $ExpectType void
    wasm.blake2b_update(1, 1, 1); // $ExpectType void
    wasm.blake2b_final(1); // $ExpectType void
    wasm.blake2b_compress(1); // $ExpectType void
}
