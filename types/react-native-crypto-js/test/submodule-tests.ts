import Core = require('react-native-crypto-js/core');
import X64Core = require('react-native-crypto-js/x64-core');
import LibTypedarrays = require('react-native-crypto-js/lib-typedarrays');
// ---
import MD5 = require('react-native-crypto-js/md5');
import SHA1 = require('react-native-crypto-js/sha1');
import SHA256 = require('react-native-crypto-js/sha256');
import SHA224 = require('react-native-crypto-js/sha224');
import SHA512 = require('react-native-crypto-js/sha512');
import SHA384 = require('react-native-crypto-js/sha384');
import SHA3 = require('react-native-crypto-js/sha3');
import RIPEMD160 = require('react-native-crypto-js/ripemd160');
// ---
import HmacMD5 = require('react-native-crypto-js/hmac-md5');
import HmacSHA1 = require('react-native-crypto-js/hmac-sha1');
import HmacSHA256 = require('react-native-crypto-js/hmac-sha256');
import HmacSHA224 = require('react-native-crypto-js/hmac-sha224');
import HmacSHA512 = require('react-native-crypto-js/hmac-sha512');
import HmacSHA384 = require('react-native-crypto-js/hmac-sha384');
import HmacSHA3 = require('react-native-crypto-js/hmac-sha3');
import HmacRIPEMD160 = require('react-native-crypto-js/hmac-ripemd160');
// ---
import PBKDF2 = require('react-native-crypto-js/pbkdf2');
// ---
import AES = require('react-native-crypto-js/aes');
import TripleDES = require('react-native-crypto-js/tripledes');
import RC4 = require('react-native-crypto-js/rc4');
import Rabbit = require('react-native-crypto-js/rabbit');
import RabbitLegacy = require('react-native-crypto-js/rabbit-legacy');
import EvpKDF = require('react-native-crypto-js/evpkdf');
// ---
import FormatOpenSSL = require('react-native-crypto-js/format-openssl');
import FormatHex = require('react-native-crypto-js/format-hex');
// ---
import EncLatin1 = require('react-native-crypto-js/enc-latin1');
import EncUtf8 = require('react-native-crypto-js/enc-utf8');
import EncHex = require('react-native-crypto-js/enc-hex');
import EncUtf16 = require('react-native-crypto-js/enc-utf16');
import EncBase64 = require('react-native-crypto-js/enc-base64');
import EncBase64url = require('react-native-crypto-js/enc-base64url');
// ---
import ModeCFB = require('react-native-crypto-js/mode-cfb');
import ModeCTR = require('react-native-crypto-js/mode-ctr');
import ModeCTRGladman = require('react-native-crypto-js/mode-ctr-gladman');
import ModeOFB = require('react-native-crypto-js/mode-ofb');
import ModeECB = require('react-native-crypto-js/mode-ecb');
// ---
import PadPkcs7 = require('react-native-crypto-js/pad-pkcs7');
import PadAnsiX923 = require('react-native-crypto-js/pad-ansix923');
import PadIso10126 = require('react-native-crypto-js/pad-iso10126');
import PadIso97971 = require('react-native-crypto-js/pad-iso97971');
import PadZeroPadding = require('react-native-crypto-js/pad-zeropadding');
import PadNoPadding = require('react-native-crypto-js/pad-nopadding');

// Hashing
let hash: Core.lib.WordArray;
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
const sha256 = Core.algo.SHA256.create();
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
const hmac = Core.algo.HMAC.create(Core.algo.SHA256, 'Secret Passphrase');
hmac.update('Message Part 1');
hmac.update('Message Part 2');
hmac.update('Message Part 3');
hash = hmac.finalize();

// PBKDF2
const salt = Core.lib.WordArray.random(128 / 8);
const key128Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 128 / 32,
});
const key256Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 256 / 32,
});
const key512Bits = PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
});

const key512Bits1000Iterations = PBKDF2('Secret Passphrase', salt, {
    keySize: 512 / 32,
    iterations: 1000,
});

// Ciphers
let encrypted;
let decrypted;
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
let key = EncHex.parse('000102030405060708090a0b0c0d0e0f');
let iv = EncHex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = AES.encrypt('Message', key, { iv });

// Block Modes and Padding
encrypted = AES.encrypt('Message', 'Secret Passphrase', {
    mode: ModeCFB,
    padding: PadAnsiX923,
});

// The Cipher Output
const JsonFormatter = {
    stringify(cipherParams: Core.lib.CipherParams) {
        // create json object with ciphertext
        const jsonObj: any = { ct: cipherParams.ciphertext.toString(EncBase64) };
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
    parse(jsonStr: string) {
        // parse json string
        const jsonObj = JSON.parse(jsonStr);
        // extract ciphertext from json object, and create cipher params object
        const cipherParams = Core.lib.CipherParams.create({
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
const aesEncryptor = Core.algo.AES.createEncryptor(key, { iv });
const ciphertextPart1 = aesEncryptor.process('Message Part 1');
const ciphertextPart2 = aesEncryptor.process('Message Part 2');
const ciphertextPart3 = aesEncryptor.process('Message Part 3');
const ciphertextPart4 = aesEncryptor.finalize();
const aesDecryptor = Core.algo.AES.createDecryptor(key, { iv });
const plaintextPart1 = aesDecryptor.process(ciphertextPart1);
const plaintextPart2 = aesDecryptor.process(ciphertextPart2);
const plaintextPart3 = aesDecryptor.process(ciphertextPart3);
const plaintextPart4 = aesDecryptor.process(ciphertextPart4);
const plaintextPart5 = aesDecryptor.finalize();

// Enchoders
let words;
words = EncBase64.parse('SGVsbG8sIFdvcmxkIQ==');
const base64 = EncBase64.stringify(words);
words = EncBase64url.parse('SGVsbG8sIFdvcmxkIQ');
const base64url = EncBase64url.stringify(words);
words = EncLatin1.parse('Hello, World!');
const latin1 = EncLatin1.stringify(words);
words = EncHex.parse('48656c6c6f2c20576f726c6421');
const hex = EncHex.stringify(words);
words = EncUtf8.parse('𔭢');
const utf8 = EncUtf8.stringify(words);
words = EncUtf16.parse('Hello, World!');
const utf16 = EncUtf16.stringify(words);
words = Core.enc.Utf16LE.parse('Hello, World!');
const utf16_le = Core.enc.Utf16LE.stringify(words);
