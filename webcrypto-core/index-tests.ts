import * as crypto from "webcrypto-core";

const subtle = new crypto.SubtleCrypto();

const key: NativeCryptoKey = null;

subtle.generateKey({ name: "AES-CBC", length: 128 }, true, ["encrypt"])
    .then(aesKey => {
        console.log(aesKey.algorithm);
    });

// export key
subtle.exportKey("raw", key)
    .then(data => {
        console.log(key.algorithm);
    });

subtle.exportKey("jwk", key)
    .then(data => {
        console.log(key.algorithm);
    });

subtle.importKey("raw", new Uint8Array(16), { name: "AES-CBC", length: 128 }, true, ["encrypt"])
    .then(data => {
        console.log(key.algorithm);
    });

subtle.encrypt({ name: "AES-CBC", iv: new Uint8Array(16) }, key, new Uint8Array(20))
    .then(data => {
        const enc = new Uint8Array(data);
        console.log(enc);
    });

subtle.decrypt({ name: "AES-CBC", iv: new Uint8Array(16) }, key, new Uint8Array(20))
    .then(data => {
        const dec = new Uint8Array(data);
        console.log(dec);
    });