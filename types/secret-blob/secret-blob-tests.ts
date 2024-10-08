import * as secretBlob from "secret-blob";

secretBlob.keygen(); // $ExpectType SecureBuffer
secretBlob.keygen(Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBuffer>

secretBlob.encrypt(Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
secretBlob.encrypt(Buffer.alloc(0), Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBufferLike>

secretBlob.encryptLength(Buffer.alloc(0)); // $ExpectType number

secretBlob.decrypt(Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType SecureBuffer
secretBlob.decrypt(Buffer.alloc(0), Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer || Buffer<ArrayBuffer>

secretBlob.decryptLength(Buffer.alloc(0)); // $ExpectType number

secretBlob.KEYBYTES; // $ExpectType number
secretBlob.HEADERBYTES; // $ExpectType number
