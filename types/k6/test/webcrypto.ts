import { crypto, CryptoKey, CryptoKeyPair } from "k6/experimental/webcrypto";

const aesCryptoKeyPromise = crypto.subtle.generateKey(
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

aesCryptoKeyPromise.then((aesCryptoKey: CryptoKey) => {
    crypto.subtle.exportKey("raw", aesCryptoKey);
    crypto.subtle.exportKey("jwk", aesCryptoKey);
});

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

crypto.subtle.importKey(
    "raw",
    new Uint8Array([
        109,
        151,
        76,
        33,
        232,
        253,
        176,
        90,
        94,
        40,
        146,
        227,
        139,
        208,
        245,
        139,
        69,
        215,
        55,
        197,
        43,
        122,
        160,
        178,
        228,
        104,
        4,
        115,
        138,
        159,
        119,
        49,
    ]),
    { name: "AES-GCM" },
    true,
    ["decrypt"],
);

crypto.subtle.importKey(
    "jwk",
    {
        kty: "oct",
        ext: true,
        key_ops: ["decrypt", "encrypt"],
        alg: "A256GCM",
        k: "9Id_8iG6FkGOWmc1S203vGVnTExtpDGxdQN7v7OV9Uc",
    },
    { name: "AES-GCM" },
    true,
    ["decrypt"],
);

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

//
// crypto.subtle.deriveBits
//

crypto.subtle.generateKey(
    {
        name: "ECDH",
        namedCurve: "P-256",
    },
    true,
    ["deriveKey", "deriveBits"],
).then((cryptoKeyPair: CryptoKeyPair) => {
    // $ExpectType Promise<ArrayBuffer>
    crypto.subtle.deriveBits(
        {
            name: "ECDH",
            public: cryptoKeyPair.publicKey,
        },
        cryptoKeyPair.privateKey,
        256,
    );
});

// @ts-expect-error
crypto.subtle.deriveBits();
// @ts-expect-error
crypto.subtle.deriveBits(8);
// @ts-expect-error
crypto.subtle.deriveBits("ECDH", null);
