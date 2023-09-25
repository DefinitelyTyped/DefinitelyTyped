/// <reference types="node" />
import Sha512 = require("sha512-universal");

// test type exports
type Sha512 = Sha512.Sha512;
type HMACCtor = Sha512.HMACCtor;
type HMAC = Sha512.HMAC;

Sha512.WASM_SUPPORTED; // $ExpectType boolean
Sha512.WASM_LOADED; // $ExpectType boolean
Sha512.SHA512_BYTES; // $ExpectType 64
Sha512.HMAC; // $ExpectType HMACCtor | undefined

Sha512.ready(() => {}); // $ExpectType void

const hash = Sha512(); // $ExpectType Sha512

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

if (Sha512.HMAC) {
    const hmac = new Sha512.HMAC(new Uint8Array(1)); // $ExpectType HMAC
    Sha512.HMAC(new Uint8Array(1)); // $ExpectType HMAC

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
