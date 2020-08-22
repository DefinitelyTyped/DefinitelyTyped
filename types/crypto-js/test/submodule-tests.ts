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

// Hashers
var wordArray: CryptoJS.WordArray;
wordArray = MD5('some message');
wordArray = MD5('some message', 'some key');

wordArray = SHA1('some message');
wordArray = SHA1('some message', 'some key', { any: true });

wordArray = FormatOpenSSL('some message');
wordArray = FormatOpenSSL('some message', 'some key');


// Ciphers
var encrypted: CryptoJS.WordArray;
var decrypted: CryptoJS.DecryptedMessage;

encrypted = <CryptoJS.WordArray>AES.encrypt("Message", "Secret Passphrase");
decrypted = AES.decrypt(encrypted, "Secret Passphrase");

encrypted = <CryptoJS.WordArray>Core.DES.encrypt("Message", "Secret Passphrase");
decrypted = Core.DES.decrypt(encrypted, "Secret Passphrase");

encrypted = TripleDES.encrypt("Message", "Secret Passphrase");
decrypted = TripleDES.decrypt(encrypted, "Secret Passphrase");


encrypted = Rabbit.encrypt("Message", "Secret Passphrase");
decrypted = Rabbit.decrypt(encrypted, "Secret Passphrase");

encrypted = RC4.encrypt("Message", "Secret Passphrase");
decrypted = RC4.decrypt(encrypted, "Secret Passphrase");

encrypted = Core.RC4Drop.encrypt("Message", "Secret Passphrase");
encrypted = Core.RC4Drop.encrypt("Message", "Secret Passphrase", { drop: 3072 / 4 });
decrypted = Core.RC4Drop.decrypt(encrypted, "Secret Passphrase", { drop: 3072 / 4 });

var key = EncHex.parse('000102030405060708090a0b0c0d0e0f');
var iv = EncHex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = AES.encrypt("Message", key, { iv: iv });

encrypted = AES.encrypt("Message", "Secret Passphrase", {
    mode: ModeCFB,
    padding: PadAnsiX923
});


// The Cipher Output
encrypted = AES.encrypt("Message", "Secret Passphrase");
alert(encrypted.key);
// 74eb593087a982e2a6f5dded54ecd96d1fd0f3d44a58728cdcd40c55227522223
alert(encrypted.iv);
// 7781157e2629b094f0e3dd48c4d786115
alert(encrypted.salt);
// 7a25f9132ec6a8b34
alert(encrypted.ciphertext);
// 73e54154a15d1beeb509d9e12f1e462a0
alert(encrypted);
// U2FsdGVkX1+iX5Ey7GqLND5UFUoV0b7rUJ2eEvHkYqA=

var JsonFormatter = {
    stringify: function(cipherParams: any) {
        // create json object with ciphertext
        var jsonObj: any = {
            ct: cipherParams.ciphertext.toString(EncBase64)
        };
        // optionally add iv and salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        // stringify json object
        return JSON.stringify(jsonObj);
    },
    parse: function (jsonStr: any) {
        // parse json string
        var jsonObj = JSON.parse(jsonStr);
        // extract ciphertext from json object, and create cipher params object
        var cipherParams = (<any>Core).lib.CipherParams.create({
            ciphertext: EncBase64.parse(jsonObj.ct)
        });
        // optionally extract iv and salt
        if (jsonObj.iv) {
            cipherParams.iv = EncHex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = EncHex.parse(jsonObj.s);
        } return cipherParams;
    }
};
encrypted = AES.encrypt("Message", "Secret Passphrase", {
    format: JsonFormatter
});
alert(encrypted);
// {"ct":"tZ4MsEnfbcDOwqau68aOrQ==","iv":"8a8c8fd8fe33743d3638737ea4a00698","s":"ba06373c8f57179c"}
decrypted = AES.decrypt(encrypted, "Secret Passphrase", {
    format: JsonFormatter
});
alert(decrypted.toString(EncUtf8)); // Message


// Progressive Ciphering
var key = EncHex.parse('000102030405060708090a0b0c0d0e0f');
var iv = EncHex.parse('101112131415161718191a1b1c1d1e1f');
var aesEncryptor = Core.algo.AES.createEncryptor(key, { iv: iv });
var ciphertextPart1 = aesEncryptor.process("Message Part 1");
var ciphertextPart2 = aesEncryptor.process("Message Part 2");
var ciphertextPart3 = aesEncryptor.process("Message Part 3");
var ciphertextPart4 = aesEncryptor.finalize();
var aesDecryptor = Core.algo.AES.createDecryptor(key, { iv: iv });
var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
var plaintextPart5 = aesDecryptor.finalize();


// Encoders
var words = EncBase64.parse('SGVsbG8sIFdvcmxkIQ==');
var base64 = EncBase64.stringify(words);
var words = EncLatin1.parse('Hello, World!');
var latin1 = EncLatin1.stringify(words);
var words = EncHex.parse('48656c6c6f2c20576f726c6421');
var hex = EncHex.stringify(words);
var words = EncUtf8.parse('𤭢');
var utf8 = EncUtf8.stringify(words);
var words = EncUtf16.parse('Hello, World!');
var utf16 = EncUtf16.stringify(words);
var words = Core.enc.Utf16LE.parse('Hello, World!');
var utf16 = Core.enc.Utf16LE.stringify(words);
