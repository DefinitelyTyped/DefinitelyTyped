/// <reference types="node" />
import Sha256 = require("sha256-universal");

// test type exports
type Sha256 = Sha256.Sha256;
type HMACCtor = Sha256.HMACCtor;
type HMAC = Sha256.HMAC;

Sha256.WASM_SUPPORTED; // $ExpectType boolean
Sha256.WASM_LOADED; // $ExpectType boolean
Sha256.SHA256_BYTES; // $ExpectType 32
Sha256.HMAC; // $ExpectType HMACCtor | undefined

Sha256.ready(() => {}); // $ExpectType void

const hash = Sha256(); // $ExpectType Sha256

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

if (Sha256.HMAC) {
    const hmac = new Sha256.HMAC(new Uint8Array(1)); // $ExpectType HMAC
    Sha256.HMAC(new Uint8Array(1)); // $ExpectType HMAC

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
