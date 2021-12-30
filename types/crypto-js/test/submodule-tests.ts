import Core = require('crypto-js/core');
import X64Core = require('crypto-js/x64-core');
import LibTypedarrays = require('crypto-js/lib-typedarrays');
// ---
import MD5 = require('crypto-js/md5');
import SHA1 = require('crypto-js/sha1');
import SHA256 = require('crypto-js/sha256');
import SHA224 = require('crypto-js/sha224');
import SHA512 = require('crypto-js/sha512');
import SHA384 = require('crypto-js/sha384');
import SHA3 = require('crypto-js/sha3');
import RIPEMD160 = require('crypto-js/ripemd160');
// ---
import HmacMD5 = require('crypto-js/hmac-md5');
import HmacSHA1 = require('crypto-js/hmac-sha1');
import HmacSHA256 = require('crypto-js/hmac-sha256');
import HmacSHA224 = require('crypto-js/hmac-sha224');
import HmacSHA512 = require('crypto-js/hmac-sha512');
import HmacSHA384 = require('crypto-js/hmac-sha384');
import HmacSHA3 = require('crypto-js/hmac-sha3');
import HmacRIPEMD160 = require('crypto-js/hmac-ripemd160');
// ---
import PBKDF2 = require('crypto-js/pbkdf2');
// ---
import AES = require('crypto-js/aes');
import TripleDES = require('crypto-js/tripledes');
import RC4 = require('crypto-js/rc4');
import Rabbit = require('crypto-js/rabbit');
import RabbitLegacy = require('crypto-js/rabbit-legacy');
import EvpKDF = require('crypto-js/evpkdf');
// ---
import FormatOpenSSL = require('crypto-js/format-openssl');
import FormatHex = require('crypto-js/format-hex');
// ---
import EncLatin1 = require('crypto-js/enc-latin1');
import EncUtf8 = require('crypto-js/enc-utf8');
import EncHex = require('crypto-js/enc-hex');
import EncUtf16 = require('crypto-js/enc-utf16');
import EncBase64 = require('crypto-js/enc-base64');
import EncBase64url = require('crypto-js/enc-base64url');
// ---
import ModeCFB = require('crypto-js/mode-cfb');
import ModeCTR = require('crypto-js/mode-ctr');
import ModeCTRGladman = require('crypto-js/mode-ctr-gladman');
import ModeOFB = require('crypto-js/mode-ofb');
import ModeECB = require('crypto-js/mode-ecb');
// ---
import PadPkcs7 = require('crypto-js/pad-pkcs7');
import PadAnsiX923 = require('crypto-js/pad-ansix923');
import PadIso10126 = require('crypto-js/pad-iso10126');
import PadIso97971 = require('crypto-js/pad-iso97971');
import PadZeroPadding = require('crypto-js/pad-zeropadding');
import PadNoPadding = require('crypto-js/pad-nopadding');

// Hashing
var hash: Core.lib.WordArray;
hash = MD5('Message');
hash = SHA1('Message');
hash = SHA256('Message');
hash = SHA512('Message');
hash = SHA3('Message');
hash = SHA3('Message', { outputLength: 512 });
hash = SHA3('Message', { outputLength: 384 });
hash = SHA3('Message', { outputLength: 256 });
hash = SHA3('Message', { outputLength: 224 });
hash = RIPEMD160('Message');

// Hasing Output
hash.toString(EncBase64);
hash.toString(EncBase64url);
hash.toString(EncHex);

// Progressive Hashing
var sha256 = Core.algo.SHA256.create();
sha256.update('Message Part 1');
sha256.update('Message Part 2');
sha256.update('Message Part 3');
hash = sha256.finalize();

// HMAC
hash = HmacMD5('Message', 'Secret Passphrase');
hash = HmacSHA1('Message', 'Secret Passphrase');
hash = HmacSHA256('Message', 'Secret Passphrase');
hash = HmacSHA512('Message', 'Secret Passphrase');

// Progressive HMAC Hasing
var hmac = Core.algo.HMAC.create(Core.algo.SHA256, 'Secret Passphrase');
hmac.update('Message Part 1');
hmac.update('Message Part 2');
hmac.update('Message Part 3');
hash = hmac.finalize();

// PBKDF2
var salt = Core.lib.WordArray.random(128 / 8);
var key128Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 128 / 32,
});
var key256Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 256 / 32,
});
var key512Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
});

var key512Bits1000Iterations = PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
    iterations: 1000,
});

// Ciphers
var encrypted;
var decrypted;
encrypted = AES.encrypt('Message', 'Secret Passphrase');
decrypted = AES.decrypt(encrypted, 'Secret Passphrase');
encrypted = Core.DES.encrypt('Message', 'Secret Passphrase');
decrypted = Core.DES.decrypt(encrypted, 'Secret Passphrase');
encrypted = TripleDES.encrypt('Message', 'Secret Passphrase');
decrypted = TripleDES.decrypt(encrypted, 'Secret Passphrase');
encrypted = Rabbit.encrypt('Message', 'Secret Passphrase');
decrypted = Rabbit.decrypt(encrypted, 'Secret Passphrase');
encrypted = RC4.encrypt('Message', 'Secret Passphrase');
decrypted = RC4.decrypt(encrypted, 'Secret Passphrase');
encrypted = Core.RC4Drop.encrypt('Message', 'Secret Passphrase');
encrypted = Core.RC4Drop.encrypt('Message', 'Secret Passphrase', {
    drop: 3072 / 4,
});
decrypted = Core.RC4Drop.decrypt(encrypted, 'Secret Passphrase', {
    drop: 3072 / 4,
});

// Custome Key and IV
var key = EncHex.parse('000102030405060708090a0b0c0d0e0f');
var iv = EncHex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = AES.encrypt('Message', key, { iv: iv });

// Block Modes and Padding
encrypted = AES.encrypt('Message', 'Secret Passphrase', {
    mode: ModeCFB,
    padding: PadAnsiX923,
});

// The Cipher Output
var JsonFormatter = {
    stringify: function (cipherParams: Core.lib.CipherParams) {
        // create json object with ciphertext
        var jsonObj: any = { ct: cipherParams.ciphertext.toString(EncBase64) };
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
        var cipherParams = Core.lib.CipherParams.create({
            ciphertext: EncBase64.parse(jsonObj.ct),
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = EncHex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = EncHex.parse(jsonObj.s);
        }
        return cipherParams;
    },
};
encrypted = AES.encrypt('Message', 'Secret Passphrase', {
    format: JsonFormatter,
});
decrypted = AES.decrypt(encrypted, 'Secret Passphrase', {
    format: JsonFormatter,
});

// Progressive Ciphering
key = EncHex.parse('000102030405060708090a0b0c0d0e0f');
iv = EncHex.parse('101112131415161718191a1b1c1d1e1f');
var aesEncryptor = Core.algo.AES.createEncryptor(key, { iv: iv });
var ciphertextPart1 = aesEncryptor.process('Message Part 1');
var ciphertextPart2 = aesEncryptor.process('Message Part 2');
var ciphertextPart3 = aesEncryptor.process('Message Part 3');
var ciphertextPart4 = aesEncryptor.finalize();
var aesDecryptor = Core.algo.AES.createDecryptor(key, { iv: iv });
var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
var plaintextPart5 = aesDecryptor.finalize();

// Enchoders
var words;
words = EncBase64.parse('SGVsbG8sIFdvcmxkIQ==');
var base64 = EncBase64.stringify(words);
words = EncBase64url.parse('SGVsbG8sIFdvcmxkIQ');
var base64url = EncBase64url.stringify(words);
words = EncLatin1.parse('Hello, World!');
var latin1 = EncLatin1.stringify(words);
words = EncHex.parse('48656c6c6f2c20576f726c6421');
var hex = EncHex.stringify(words);
words = EncUtf8.parse('𔭢');
var utf8 = EncUtf8.stringify(words);
words = EncUtf16.parse('Hello, World!');
var utf16 = EncUtf16.stringify(words);
words = Core.enc.Utf16LE.parse('Hello, World!');
var utf16 = Core.enc.Utf16LE.stringify(words);
