import { crypto, pem2ab } from 'crypto';

export async function onClientRequest(request: EW.IngressClientRequest) {
    const raw_key = new Uint8Array([93, 210, 19, 203, 234, 199, 254, 16, 118, 129, 214, 61, 229, 117, 91, 33]);
    const iv = new Uint8Array([237, 234, 45, 119, 168, 16, 178, 26, 14, 182, 253, 39, 79, 181, 180, 219]);
    const data1 = new Uint8Array([44, 237, 221, 235, 17, 155, 115, 79, 8, 211, 94, 216, 92, 183, 9, 106, 15, 210, 0, 52, 92, 163, 2, 222, 130, 70, 80, 132, 80, 243, 28, 110, 25, 18, 20, 98, 63, 51, 5, 136, 72, 206, 212, 46, 255, 220, 131, 188, 133, 109]);
    const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELScIYCjf+IOluv9pppNv0xIGXTBp
KlSNHLY0ZX554kjI8DknO3x8J5z+H31OX7spkrI6xdqj9Q0Ouoy6UmjJ3w==
-----END PUBLIC KEY-----`;
    const signature = new Uint8Array([77, 125, 140, 9, 158, 214, 29, 176, 0, 44, 34, 9, 111, 158, 2, 97, 66, 238, 89, 240, 146, 171, 200, 99, 133, 231, 60, 89, 44, 156, 26, 7, 111, 198, 231, 11, 224, 154, 151, 224, 84, 120, 183, 185, 175, 34, 165, 99, 240, 102, 21, 251, 211, 191, 61, 224, 181, 30, 10, 108, 93, 192, 218, 43]);
    const data2 = new Uint8Array([104, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]);
    const data3 = new Uint8Array([84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 97]);
    const algorithm = "SHA-1";
    const array = new Uint32Array(1);

    /**
     * Imports the key
     * @param format string describing the data format of the key to import
     * @param keyData An ArrayBuffer, a TypedArray, a DataView, or a JSONWebKey object containing the key
     * @param algorithm An object defining the type of key to import
     * @param extractable A boolean value indicating whether it will be possible to export the key
     * @param keyUsages An array indicating the operations that can be done with the key
     *
     * @returns A promise that fulfills with the imported key as a CryptoKey object.
     */
    const imported_key = await crypto.subtle.importKey(
        "raw",
        raw_key,
        { name: "AES-CBC" },
        false,
        ["encrypt", "decrypt"]);

    /**
     * Imports the key
     * @param format string describing the data format of the key to import
     * @param keyData An ArrayBuffer, a TypedArray, a DataView, or a JSONWebKey object containing the key
     * @param algorithm An object defining the type of key to import
     * @param extractable A boolean value indicating whether it will be possible to export the key
     * @param keyUsages An array indicating the operations that can be done with the key
     *
     * @returns A promise that fulfills with the imported key as a CryptoKey object.
     */
    const cryptoKey = await crypto.subtle.importKey(
        "spki",
        pem2ab(pemEncodedKey),
        { name: "ECDSA", namedCurve: "P-256" },
        false,
        ["verify"]);

    /**
     * Encrypts data
     * @param algorithm An object specifying the algorithm to be used
     * @param key A CryptoKey containing the key to be used for encryption
     * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be encrypted
     *
     * @returns A promise that fulfills with an ArrayBuffer containing the ciphertext
     */
    const encrypted_data = await crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv
        },
        imported_key,
        data1);

    /**
     * Decrypts the encrypted data
     * @param algorithm An object specifying the algorithm to be used
     * @param key A CryptoKey containing the key to be used for decryption
     * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be decrypted
     *
     * @returns A promise that fulfills with an ArrayBuffer containing the plaintext
     */
    crypto.subtle.decrypt({ name: "AES-CBC", iv }, imported_key, encrypted_data)
        .then(() => {
            request.respondWith(200, {}, 'pass');
        })
        .catch(e => {
            request.respondWith(501, {}, 'failure: ' + e);
        });

    /**
     * Verify a digital signature
     * @param algorithm An object specifying the algorithm to be used
     * @param key A CryptoKey containing the key that will be used to verify the signature
     * @param signature ArrayBuffer containing the signature to verify
     * @param data ArrayBuffer containing the data whose signature is to be verified
     *
     * @returns A promise that fulfills with a boolean value: true if the signature is valid, false otherwise
     */
    await crypto.subtle.verify(
        {
            name: "ECDSA",
            hash: "SHA-256",
        },
        cryptoKey,
        signature,
        data2);

    /**
     * Generate a digest of the given data
     * @param algorithm A string or an object that includes the name property, the string names the hash functions to use
     * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be digested
     *
     * @returns A promise that fulfills with an ArrayBuffer containing the digest
     */
    crypto.subtle.digest(algorithm, data3.buffer)
        .then(hash => {
            const hashArray = Array.from(new Uint8Array(hash));  // convert buffer to byte array
            const hashHex = bytesToHex(hashArray); // convert bytes to hex string
            request.respondWith(200, {}, `${algorithm}: digest (hex): ${hashHex}`);
        })
        .catch(e => {
            request.respondWith(501, {}, `${algorithm}: failure: ${e}`);
        });

    /**
     * A function that allows you to get cryptographically strong random values
     * @param typeArray: An integer-based TypedArray
     *
     * @returns The same array passed as typedArray but with its contents replaced with the newly generated random numbers
     */
    crypto.getRandomValues(array);
    request.addHeader("X-Random-Number", array[0].toString());
}

function bytesToHex(bytes: number[]) {
    const hex = [];
    let i = 0;
    for (; i < bytes.length; i++) {
        const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xF).toString(16));
    }
    return hex.join("");
}
