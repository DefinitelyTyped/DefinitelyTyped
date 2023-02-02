import * as secretBlob from 'secret-blob';

secretBlob.keygen(); // $ExpectType SecureBuffer
secretBlob.keygen(Buffer.alloc(0)); // $ExpectType Buffer

secretBlob.encrypt(Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer
secretBlob.encrypt(Buffer.alloc(0), Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer

secretBlob.encryptLength(Buffer.alloc(0)); // $ExpectType number

secretBlob.decrypt(Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType SecureBuffer
secretBlob.decrypt(Buffer.alloc(0), Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType Buffer

secretBlob.decryptLength(Buffer.alloc(0)); // $ExpectType number

secretBlob.KEYBYTES; // $ExpectType number
secretBlob.HEADERBYTES; // $ExpectType number
