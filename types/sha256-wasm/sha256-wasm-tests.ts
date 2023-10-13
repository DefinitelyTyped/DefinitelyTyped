import Sha256 = require("sha256-wasm");

// test type exports
type S256 = Sha256;
type S256Ctor = typeof Sha256;
type HMAC = Sha256.HMAC;
type HMACCtor = typeof Sha256.HMAC;
type WASM = Sha256.Wasm;

Sha256.WASM_SUPPORTED; // $ExpectType boolean
Sha256.WASM; // $ExpectType false | Wasm
Sha256.SHA256_BYTES; // $ExpectType 32
Sha256.HMAC; // $ExpectType typeof HMAC

Sha256.WASM; // $ExpectType false | Wasm
if (Sha256.WASM) {
    Sha256.WASM.memory; // $ExpectType Memory
    Sha256.WASM.sha256(1, 1, 1, 1); // $ExpectType void
}

Sha256.ready(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
Sha256.ready(err => {
    err; // $ExpectType Error | undefined
});

const hash = Sha256(); // $ExpectType Sha256
new Sha256(); // $ExpectType Sha256

hash.finalized; // $ExpectType boolean
hash.digestLength; // $ExpectType number
hash.pointer; // $ExpectType number
hash.pos; // $ExpectType number

hash.update(new Uint8Array(0)); // $ExpectType Sha256
hash.update([1] as const); // $ExpectType Sha256
hash.update("hello"); // $ExpectType Sha256
hash.update("0ff", "hex"); // $ExpectType Sha256
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

if (Sha256.HMAC) {
    const hmac = new Sha256.HMAC(new Uint8Array(1)); // $ExpectType HMAC
    Sha256.HMAC(new Uint8Array(1)); // $ExpectType HMAC

    hmac.pad; // $ExpectType Uint8Array | Buffer
    hmac.inner; // $ExpectType Sha256
    hmac.outer; // $ExpectType Sha256

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
