import { crypto, pem2ab } from 'crypto';

const raw_key = new Uint8Array([93, 210, 19, 203, 234, 199, 254, 16, 118, 129, 214, 61, 229, 117, 91, 33]);
const iv = new Uint8Array([237, 234, 45, 119, 168, 16, 178, 26, 14, 182, 253, 39, 79, 181, 180, 219]);
const data = new Uint8Array([44, 237, 221, 235, 17, 155, 115, 79, 8, 211, 94, 216, 92, 183, 9, 106, 15, 210, 0, 52, 92, 163, 2, 222, 130, 70, 80, 132, 80, 243, 28, 110, 25, 18, 20, 98, 63, 51, 5, 136, 72, 206, 212, 46, 255, 220, 131, 188, 133, 109]);
const signature = new Uint8Array([77, 125, 140, 9, 158, 214, 29, 176, 0, 44, 34, 9, 111, 158, 2, 97, 66, 238, 89, 240, 146, 171, 200, 99, 133, 231, 60, 89, 44, 156, 26, 7, 111, 198, 231, 11, 224, 154, 151, 224, 84, 120, 183, 185, 175, 34, 165, 99, 240, 102, 21, 251, 211, 191, 61, 224, 181, 30, 10, 108, 93, 192, 218, 43]);
const algorithm = "SHA-1";
const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELScIYCjf+IOluv9pppNv0xIGXTBp
KlSNHLY0ZX554kjI8DknO3x8J5z+H31OX7spkrI6xdqj9Q0Ouoy6UmjJ3w==
-----END PUBLIC KEY-----`;
const array = new Uint32Array(1);

crypto.subtle.importKey("pkcs8", raw_key, { name: "RANDOM" }, true, ["encrypt", "decrypt", "sign"]);
crypto.subtle.importKey("spki", raw_key, { name: "RANDOM" }, true, ["wrapKey"]);
crypto.subtle
    .importKey("raw", raw_key, "AES-CBC", false, ["encrypt", "decrypt"])
    .then((imported_key) => {
        crypto.subtle.encrypt({
            name: "AES-CBC",
            iv
        }, imported_key, data)
            .then(encrypted_data => {
                crypto.subtle.decrypt(
                    {
                        name: "AES-CBC",
                        iv
                    },
                    imported_key,
                    encrypted_data);
            });

        crypto.subtle.verify(
            {
                name: "ECDSA",
                hash: "SHA-256",
            },
            imported_key,
            signature,
            data);
    }
    );

crypto.subtle.digest(algorithm, data.buffer);

pem2ab(pemEncodedKey);

crypto.getRandomValues(array);
