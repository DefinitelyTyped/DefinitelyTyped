/**
 * Test cases according to https://cryptojs.gitbook.io/docs/
 */

// Hashing
var hash: CryptoJS.lib.WordArray;
hash = CryptoJS.MD5('Message');
hash = CryptoJS.SHA1('Message');
hash = CryptoJS.SHA256('Message');
hash = CryptoJS.SHA512('Message');
hash = CryptoJS.SHA3('Message');
hash = CryptoJS.SHA3('Message', { outputLength: 512 });
hash = CryptoJS.SHA3('Message', { outputLength: 384 });
hash = CryptoJS.SHA3('Message', { outputLength: 256 });
hash = CryptoJS.SHA3('Message', { outputLength: 224 });
hash = CryptoJS.RIPEMD160('Message');

// Hasing Output
hash.toString(CryptoJS.enc.Base64);
hash.toString(CryptoJS.enc.Base64url);
hash.toString(CryptoJS.enc.Hex);

// Progressive Hashing
var sha256 = CryptoJS.algo.SHA256.create();
sha256.update('Message Part 1');
sha256.update('Message Part 2');
sha256.update('Message Part 3');
hash = sha256.finalize();

// HMAC
hash = CryptoJS.HmacMD5('Message', 'Secret Passphrase');
hash = CryptoJS.HmacSHA1('Message', 'Secret Passphrase');
hash = CryptoJS.HmacSHA256('Message', 'Secret Passphrase');
hash = CryptoJS.HmacSHA512('Message', 'Secret Passphrase');

// Progressive HMAC Hasing
var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, 'Secret Passphrase');
hmac.update('Message Part 1');
hmac.update('Message Part 2');
hmac.update('Message Part 3');
hash = hmac.finalize();

// PBKDF2
var salt = CryptoJS.lib.WordArray.random(128 / 8);
var key128Bits = CryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 128 / 32,
});
var key256Bits = CryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 256 / 32,
});
var key512Bits = CryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
});

var key512Bits1000Iterations = CryptoJS.PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
    iterations: 1000,
});

// Ciphers
var encrypted;
var decrypted;
encrypted = CryptoJS.AES.encrypt('Message', 'Secret Passphrase');
decrypted = CryptoJS.AES.decrypt(encrypted, 'Secret Passphrase');
encrypted = CryptoJS.DES.encrypt('Message', 'Secret Passphrase');
decrypted = CryptoJS.DES.decrypt(encrypted, 'Secret Passphrase');
encrypted = CryptoJS.TripleDES.encrypt('Message', 'Secret Passphrase');
decrypted = CryptoJS.TripleDES.decrypt(encrypted, 'Secret Passphrase');
encrypted = CryptoJS.Rabbit.encrypt('Message', 'Secret Passphrase');
decrypted = CryptoJS.Rabbit.decrypt(encrypted, 'Secret Passphrase');
encrypted = CryptoJS.RC4.encrypt('Message', 'Secret Passphrase');
decrypted = CryptoJS.RC4.decrypt(encrypted, 'Secret Passphrase');
encrypted = CryptoJS.RC4Drop.encrypt('Message', 'Secret Passphrase');
encrypted = CryptoJS.RC4Drop.encrypt('Message', 'Secret Passphrase', {
    drop: 3072 / 4,
});
decrypted = CryptoJS.RC4Drop.decrypt(encrypted, 'Secret Passphrase', {
    drop: 3072 / 4,
});

// Custome Key and IV
var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
var iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = CryptoJS.AES.encrypt('Message', key, { iv: iv });

// Block Modes and Padding
encrypted = CryptoJS.AES.encrypt('Message', 'Secret Passphrase', {
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.AnsiX923,
});

// The Cipher Output
var JsonFormatter = {
    stringify: function (cipherParams: CryptoJS.lib.CipherParams) {
        // create json object with ciphertext
        var jsonObj: any = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
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
        var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct),
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
    },
};
encrypted = CryptoJS.AES.encrypt('Message', 'Secret Passphrase', {
    format: JsonFormatter,
});
decrypted = CryptoJS.AES.decrypt(encrypted, 'Secret Passphrase', {
    format: JsonFormatter,
});

// Progressive Ciphering
key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
var aesEncryptor = CryptoJS.algo.AES.createEncryptor(key, { iv: iv });
var ciphertextPart1 = aesEncryptor.process('Message Part 1');
var ciphertextPart2 = aesEncryptor.process('Message Part 2');
var ciphertextPart3 = aesEncryptor.process('Message Part 3');
var ciphertextPart4 = aesEncryptor.finalize();
var aesDecryptor = CryptoJS.algo.AES.createDecryptor(key, { iv: iv });
var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
var plaintextPart5 = aesDecryptor.finalize();

// Enchoders
var words;
words = CryptoJS.enc.Base64.parse('SGVsbG8sIFdvcmxkIQ==');
var base64 = CryptoJS.enc.Base64.stringify(words);
words = CryptoJS.enc.Base64url.parse('SGVsbG8sIFdvcmxkIQ');
var base64url = CryptoJS.enc.Base64url.stringify(words);
words = CryptoJS.enc.Latin1.parse('Hello, World!');
var latin1 = CryptoJS.enc.Latin1.stringify(words);
words = CryptoJS.enc.Hex.parse('48656c6c6f2c20576f726c6421');
var hex = CryptoJS.enc.Hex.stringify(words);
words = CryptoJS.enc.Utf8.parse('𔭢');
var utf8 = CryptoJS.enc.Utf8.stringify(words);
words = CryptoJS.enc.Utf16.parse('Hello, World!');
var utf16 = CryptoJS.enc.Utf16.stringify(words);
words = CryptoJS.enc.Utf16LE.parse('Hello, World!');
var utf16 = CryptoJS.enc.Utf16LE.stringify(words);
