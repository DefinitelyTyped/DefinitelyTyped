import { crypto } from "k6/experimental/webcrypto";

const aesCryptoKey = crypto.subtle.generateKey(
    {
        name: "AES-CBC",
        length: 256,
    },
    true,
    ["encrypt", "decrypt"],
);

//
// crypto.getRandomValues
//

// @ts-expect-error
crypto.getRandomValues(8);

//
// crypto.rangomUUID
//

// @ts-expect-error
crypto.randomUUID(new Uint8Array(8));

//
// crypto.sublte.decrypt
//

// @ts-expect-error
crypto.subtle.decrypt();
// @ts-expect-error
crypto.subtle.decrypt(8);
// @ts-expect-error
crypto.subtle.decrypt("foo");
// @ts-expect-error
crypto.subtle.decrypt("AES-CBC", null);
// @ts-expect-error
crypto.subtle.decrypt({ name: "AES-CBC" }, null);
// @ts-expect-error
crypto.subtle.decrypt({ name: "AES-CBC" }, aesCryptoKey, null);

//
// crypto.subtle.digest
//

// @ts-expect-error
crypto.subtle.digest();
// @ts-expect-error
crypto.subtle.digest(8);
// @ts-expect-error
crypto.subtle.digest("SHA-256", null);

//
// crypto.subtle.encrypt
//

// @ts-expect-error
crypto.subtle.encrypt();
// @ts-expect-error
crypto.subtle.encrypt(8);
// @ts-expect-error
crypto.subtle.encrypt("foo");
// @ts-expect-error
crypto.subtle.encrypt("AES-CBC", null);
// @ts-expect-error
crypto.subtle.encrypt({ name: "AES-CBC" }, null);
// @ts-expect-error
crypto.subtle.encrypt({ name: "AES-CBC" }, aesCryptoKey, null);

//
// crypto.subtle.exportKey
//

// @ts-expect-error
crypto.subtle.exportKey();
// @ts-expect-error
crypto.subtle.exportKey(8);
// @ts-expect-error
crypto.subtle.exportKey("raw", null);

//
// crypto.subtle.generateKey
//

// @ts-expect-error
crypto.subtle.generateKey();
// @ts-expect-error
crypto.subtle.generateKey(8);

//
// crypto.subtle.importKey
//

// @ts-expect-error
crypto.subtle.importKey();
// @ts-expect-error
crypto.subtle.importKey(8);
// @ts-expect-error
crypto.subtle.importKey("raw", null);

//
// crypto.subtle.sign
//

// @ts-expect-error
crypto.subtle.sign();
// @ts-expect-error
crypto.subtle.sign(8);
// @ts-expect-error
crypto.subtle.sign("HMAC", null);
// @ts-expect-error
crypto.subtle.sign({ name: "HMAC" }, null);
// @ts-expect-error
crypto.subtle.sign({ name: "HMAC" }, aesCryptoKey, null);

//
// crypto.subtle.verify
//

// @ts-expect-error
crypto.subtle.verify();
// @ts-expect-error
crypto.subtle.verify(8);
// @ts-expect-error
crypto.subtle.verify("HMAC", null);
// @ts-expect-error
crypto.subtle.verify({ name: "HMAC" }, null);
// @ts-expect-error
crypto.subtle.verify({ name: "HMAC" }, aesCryptoKey, null);
