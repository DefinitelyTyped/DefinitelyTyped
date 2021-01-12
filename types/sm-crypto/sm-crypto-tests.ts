import { sm2, sm3, sm4 } from 'sm-crypto';

const message = "Hello World!";

// get key pair
const keypair = sm2.generateKeyPairHex();

const publicKey = keypair.publicKey;
const privateKey = keypair.privateKey;

// encrypt & decrypt
const encryptData = sm2.doEncrypt(message, publicKey, 1); // encrypt result
const decryptData = sm2.doDecrypt(encryptData, privateKey, 1); // decrypt result

// signature
// pure sign + generate elliptic curve points
const sigValueHex = sm2.doSignature(message, privateKey); // sign
const verifyResult = sm2.doVerifySignature(message, sigValueHex, publicKey); // verify sign result

// pure sign
const sigValueHex2 = sm2.doSignature(message, privateKey, {
    // speed up sign by passing in elliptic curve points that have been generated in advance
    pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()],
}); // sign
const verifyResult2 = sm2.doVerifySignature(message, sigValueHex2, publicKey); // verify sign result

// pure sign + generate elliptic curve points + der encoding
const sigValueHex3 = sm2.doSignature(message, privateKey, {
    der: true,
}); // sign
const verifyResult3 = sm2.doVerifySignature(message, sigValueHex3, publicKey, {
    der: true,
}); // verify sign result

// pure sign + generate elliptic curve points + sm3
const sigValueHex4 = sm2.doSignature(message, privateKey, {
    hash: true,
}); // sign
const verifyResult4 = sm2.doVerifySignature(message, sigValueHex4, publicKey, {
    hash: true,
}); // verify sign result

// pure sign + generate elliptic curve points + sm3 without deriving the public key
const sigValueHex5 = sm2.doSignature(message, privateKey, {
    hash: true,
    publicKey, // if we passing in public key, we can skip deriving the public key in sm3, it will be more faster than previous method
});
const verifyResult5 = sm2.doVerifySignature(message, sigValueHex5, publicKey, {
    hash: true,
    publicKey,
});

// obtain a elliptic curve point
const poin = sm2.getPoint(); // can using in sm2 sign

// sm3
const hashData = sm3('abc');

// sm4
const key = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10];

// encrypt
const sm4EncryptData = sm4.encrypt([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10], key);

// decrypt
const sm4DecryptData = sm4.decrypt([0x68, 0x1e, 0xdf, 0x34, 0xd2, 0x06, 0x96, 0x5e, 0x86, 0xb3, 0xe9, 0x4f, 0x53, 0x6e, 0x42, 0x46], key);
