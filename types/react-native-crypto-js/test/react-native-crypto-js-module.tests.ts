/**
 * Test cases according to https://CryptoJS.gitbook.io/docs/
 */
import RNCryptoJS = require('react-native-crypto-js');

// Hashing
var hash: RNCryptoJS.lib.WordArray;
hash = RNCryptoJS.MD5('Message');
hash = RNCryptoJS.SHA1('Message');
hash = RNCryptoJS.SHA256('Message');
hash = RNCryptoJS.SHA512('Message');
hash = RNCryptoJS.SHA3('Message');
hash = RNCryptoJS.SHA3('Message', { outputLength: 512 });
hash = RNCryptoJS.SHA3('Message', { outputLength: 384 });
hash = RNCryptoJS.SHA3('Message', { outputLength: 256 });
hash = RNCryptoJS.SHA3('Message', { outputLength: 224 });
hash = RNCryptoJS.RIPEMD160('Message');

// Hasing Output
hash.toString(RNCryptoJS.enc.Base64);
hash.toString(RNCryptoJS.enc.Base64url);
hash.toString(RNCryptoJS.enc.Hex);

// Progressive Hashing
var sha256 = RNCryptoJS.algo.SHA256.create();
sha256.update('Message Part 1');
sha256.update('Message Part 2');
sha256.update('Message Part 3');
hash = sha256.finalize();

// HMAC
hash = RNCryptoJS.HmacMD5('Message', 'Secret Passphrase');
hash = RNCryptoJS.HmacSHA1('Message', 'Secret Passphrase');
hash = RNCryptoJS.HmacSHA256('Message', 'Secret Passphrase');
hash = RNCryptoJS.HmacSHA512('Message', 'Secret Passphrase');

// Progressive HMAC Hasing
var hmac = RNCryptoJS.algo.HMAC.create(RNCryptoJS.algo.SHA256, 'Secret Passphrase');
hmac.update('Message Part 1');
hmac.update('Message Part 2');
hmac.update('Message Part 3');
hash = hmac.finalize();

// PBKDF2
var salt = RNCryptoJS.lib.WordArray.random(128 / 8);
var key128Bits = RNCryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 128 / 32,
});
var key256Bits = RNCryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 256 / 32,
});
var key512Bits = RNCryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
});

var key512Bits1000Iterations = RNCryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
    iterations: 1000,
});

// Ciphers
var encrypted;
var decrypted;
encrypted = RNCryptoJS.AES.encrypt('Message', 'Secret Passphrase');
decrypted = RNCryptoJS.AES.decrypt(encrypted, 'Secret Passphrase');
encrypted = RNCryptoJS.DES.encrypt('Message', 'Secret Passphrase');
decrypted = RNCryptoJS.DES.decrypt(encrypted, 'Secret Passphrase');
encrypted = RNCryptoJS.TripleDES.encrypt('Message', 'Secret Passphrase');
decrypted = RNCryptoJS.TripleDES.decrypt(encrypted, 'Secret Passphrase');
encrypted = RNCryptoJS.Rabbit.encrypt('Message', 'Secret Passphrase');
decrypted = RNCryptoJS.Rabbit.decrypt(encrypted, 'Secret Passphrase');
encrypted = RNCryptoJS.RC4.encrypt('Message', 'Secret Passphrase');
decrypted = RNCryptoJS.RC4.decrypt(encrypted, 'Secret Passphrase');
encrypted = RNCryptoJS.RC4Drop.encrypt('Message', 'Secret Passphrase');
encrypted = RNCryptoJS.RC4Drop.encrypt('Message', 'Secret Passphrase', {
    drop: 3072 / 4,
});
decrypted = RNCryptoJS.RC4Drop.decrypt(encrypted, 'Secret Passphrase', {
    drop: 3072 / 4,
});

// .decrypt() returns WordArray
RNCryptoJS.AES.decrypt('Message', 'Secret Passphrase').toString(RNCryptoJS.enc.Utf8)

// Custome Key and IV
var key = RNCryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
var iv = RNCryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = RNCryptoJS.AES.encrypt('Message', key, { iv: iv });

// Block Modes and Padding
encrypted = RNCryptoJS.AES.encrypt('Message', 'Secret Passphrase', {
    mode: RNCryptoJS.mode.CFB,
    padding: RNCryptoJS.pad.AnsiX923,
});

// The Cipher Output
var JsonFormatter = {
    stringify: function (cipherParams: RNCryptoJS.lib.CipherParams) {
        // create json object with ciphertext
        var jsonObj: any = { ct: cipherParams.ciphertext.toString(RNCryptoJS.enc.Base64) };
        // optionally add iv or salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        // stringify json object
        return JSON.stringify(jsonObj);
    },
    parse: function (jsonStr: string) {
        // parse json string
        var jsonObj = JSON.parse(jsonStr);
        // extract ciphertext from json object, and create cipher params object
        var cipherParams = RNCryptoJS.lib.CipherParams.create({
            ciphertext: RNCryptoJS.enc.Base64.parse(jsonObj.ct),
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = RNCryptoJS.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = RNCryptoJS.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
    },
};
encrypted = RNCryptoJS.AES.encrypt('Message', 'Secret Passphrase', {
    format: JsonFormatter,
});
decrypted = RNCryptoJS.AES.decrypt(encrypted, 'Secret Passphrase', {
    format: JsonFormatter,
});

// Progressive Ciphering
key = RNCryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
iv = RNCryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
var aesEncryptor = RNCryptoJS.algo.AES.createEncryptor(key, { iv: iv });
var ciphertextPart1 = aesEncryptor.process('Message Part 1');
var ciphertextPart2 = aesEncryptor.process('Message Part 2');
var ciphertextPart3 = aesEncryptor.process('Message Part 3');
var ciphertextPart4 = aesEncryptor.finalize();
var aesDecryptor = RNCryptoJS.algo.AES.createDecryptor(key, { iv: iv });
var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
var plaintextPart5 = aesDecryptor.finalize();

// Enchoders
var words;
words = RNCryptoJS.enc.Base64.parse('SGVsbG8sIFdvcmxkIQ==');
var base64 = RNCryptoJS.enc.Base64.stringify(words);
words = RNCryptoJS.enc.Base64url.parse('SGVsbG8sIFdvcmxkIQ');
var base64url = RNCryptoJS.enc.Base64url.stringify(words);
words = RNCryptoJS.enc.Latin1.parse('Hello, World!');
var latin1 = RNCryptoJS.enc.Latin1.stringify(words);
words = RNCryptoJS.enc.Hex.parse('48656c6c6f2c20576f726c6421');
var hex = RNCryptoJS.enc.Hex.stringify(words);
words = RNCryptoJS.enc.Utf8.parse('𔭢');
var utf8 = RNCryptoJS.enc.Utf8.stringify(words);
words = RNCryptoJS.enc.Utf16.parse('Hello, World!');
var utf16 = RNCryptoJS.enc.Utf16.stringify(words);
words = RNCryptoJS.enc.Utf16LE.parse('Hello, World!');
var utf16 = RNCryptoJS.enc.Utf16LE.stringify(words);
