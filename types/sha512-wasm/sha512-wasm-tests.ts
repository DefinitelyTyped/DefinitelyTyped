import Sha512 = require("sha512-wasm");

// test type exports
type S512 = Sha512;
type S512Ctor = typeof Sha512;
type HMAC = Sha512.HMAC;
type HMACCtor = typeof Sha512.HMAC;
type WASM = Sha512.Wasm;

Sha512.WASM_SUPPORTED; // $ExpectType boolean
Sha512.WASM; // $ExpectType false | Wasm
Sha512.SHA512_BYTES; // $ExpectType 64
Sha512.HMAC; // $ExpectType typeof HMAC

Sha512.ready(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
Sha512.ready(err => {
    err; // $ExpectType Error | undefined
});

const hash = Sha512(); // $ExpectType Sha512
new Sha512(); // $ExpectType Sha512

hash.finalized; // $ExpectType boolean
hash.digestLength; // $ExpectType number
hash.pointer; // $ExpectType number
hash.pos; // $ExpectType number
hash.wasm; // $ExpectType false | Wasm
if (hash.wasm) {
    hash.wasm.memory; // $ExpectType Memory
    hash.wasm.sha512(1, 1, 1, 1); // $ExpectType void
}

hash.update(new Uint8Array(0)); // $ExpectType Sha512
hash.update([1] as const); // $ExpectType Sha512
hash.update("hello"); // $ExpectType Sha512
hash.update("0ff", "hex"); // $ExpectType Sha512
hash.digest(); // $ExpectType Uint8Array
hash.digest(new Uint8Array(0)); // $ExpectType Uint8Array
hash.digest(new Uint8Array(0), 1); // $ExpectType Uint8Array
hash.digest(Buffer.alloc(0)); // $ExpectType Buffer
hash.digest(Buffer.alloc(0), 1); // $ExpectType Buffer
hash.digest("utf8"); // $ExpectType string

hash.ready(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
hash.ready(err => {
    err; // $ExpectType Error | undefined
});

if (Sha512.HMAC) {
    const hmac = new Sha512.HMAC(new Uint8Array(1)); // $ExpectType HMAC
    Sha512.HMAC(new Uint8Array(1)); // $ExpectType HMAC

    hmac.pad; // $ExpectType Uint8Array | Buffer
    hmac.inner; // $ExpectType Sha512
    hmac.outer; // $ExpectType Sha512

    hmac.update(new Uint8Array(0)); // $ExpectType HMAC
    hmac.update([1] as const); // $ExpectType HMAC
    hmac.update("hello"); // $ExpectType HMAC
    hmac.update("0ff", "hex"); // $ExpectType HMAC
    hmac.digest(); // $ExpectType Uint8Array
    hmac.digest(new Uint8Array(0)); // $ExpectType Uint8Array
    hmac.digest(new Uint8Array(0), 1); // $ExpectType Uint8Array
    hmac.digest(Buffer.alloc(0)); // $ExpectType Buffer
    hmac.digest(Buffer.alloc(0), 1); // $ExpectType Buffer
    hmac.digest("utf8"); // $ExpectType string
}
