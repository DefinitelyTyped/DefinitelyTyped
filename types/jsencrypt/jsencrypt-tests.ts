import JSEncrypt from "jsencrypt";

const encrypt = new JSEncrypt();
encrypt.getPrivateKey();
encrypt.getPublicKey();

// $ExpectType string | false
const encrypted = encrypt.encrypt("Test");
console.log(encrypted);

if (encrypted) {
    const decrypted = encrypt.decrypt(encrypted);
    console.log(decrypted);
}

// $ExpectType JSEncryptRSAKey
encrypt.getKey();

// $ExpectType string
encrypt.getPrivateKeyB64();

// $ExpectType string
encrypt.getPublicKeyB64();
