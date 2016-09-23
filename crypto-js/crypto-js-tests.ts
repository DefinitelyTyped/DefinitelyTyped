import CryptoJS = require('crypto-js');

// Hashers
var str: string;
str = CryptoJS.MD5('some message');
str = CryptoJS.MD5('some message', 'some key');

str = CryptoJS.SHA1('some message');
str = CryptoJS.SHA1('some message', 'some key', { any: true });

str = CryptoJS.format.OpenSSL('some message');
str = CryptoJS.format.OpenSSL('some message', 'some key');


// Ciphers
var encrypted: CryptoJS.WordArray;
var decrypted: CryptoJS.DecryptedMessage;

encrypted = <CryptoJS.WordArray>CryptoJS.AES.encrypt("Message", "Secret Passphrase");
decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

encrypted = <CryptoJS.WordArray>CryptoJS.DES.encrypt("Message", "Secret Passphrase");
decrypted = CryptoJS.DES.decrypt(encrypted, "Secret Passphrase");

encrypted = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");
decrypted = CryptoJS.TripleDES.decrypt(encrypted, "Secret Passphrase");


encrypted = CryptoJS.Rabbit.encrypt("Message", "Secret Passphrase");
decrypted = CryptoJS.Rabbit.decrypt(encrypted, "Secret Passphrase");

encrypted = CryptoJS.RC4.encrypt("Message", "Secret Passphrase");
decrypted = CryptoJS.RC4.decrypt(encrypted, "Secret Passphrase");

encrypted = CryptoJS.RC4Drop.encrypt("Message", "Secret Passphrase");
encrypted = CryptoJS.RC4Drop.encrypt("Message", "Secret Passphrase", { drop: 3072 / 4 });
decrypted = CryptoJS.RC4Drop.decrypt(encrypted, "Secret Passphrase", { drop: 3072 / 4 });

var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
var iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
encrypted = CryptoJS.AES.encrypt("Message", key, { iv: iv });

encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase", {
	mode: CryptoJS.mode.CFB,
	padding: CryptoJS.pad.AnsiX923
});


// The Cipher Output
encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
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
			ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
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
		var cipherParams = (<any>CryptoJS).lib.CipherParams.create({
			ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
		});
		// optionally extract iv and salt
		if (jsonObj.iv) {
			cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
		}
		if (jsonObj.s) {
			cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
		} return cipherParams;
	}
};
encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase", {
	format: JsonFormatter
});
alert(encrypted);
// {"ct":"tZ4MsEnfbcDOwqau68aOrQ==","iv":"8a8c8fd8fe33743d3638737ea4a00698","s":"ba06373c8f57179c"}
decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", {
	format: JsonFormatter
});
alert(decrypted.toString(CryptoJS.enc.Utf8)); // Message


// Progressive Ciphering
var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
var iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');
var aesEncryptor = CryptoJS.algo.AES.createEncryptor(key, { iv: iv });
var ciphertextPart1 = aesEncryptor.process("Message Part 1");
var ciphertextPart2 = aesEncryptor.process("Message Part 2");
var ciphertextPart3 = aesEncryptor.process("Message Part 3");
var ciphertextPart4 = aesEncryptor.finalize();
var aesDecryptor = CryptoJS.algo.AES.createDecryptor(key, { iv: iv });
var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
var plaintextPart5 = aesDecryptor.finalize();


// Encoders
var words = CryptoJS.enc.Base64.parse('SGVsbG8sIFdvcmxkIQ==');
var base64 = CryptoJS.enc.Base64.stringify(words);
var words = CryptoJS.enc.Latin1.parse('Hello, World!');
var latin1 = CryptoJS.enc.Latin1.stringify(words);
var words = CryptoJS.enc.Hex.parse('48656c6c6f2c20576f726c6421');
var hex = CryptoJS.enc.Hex.stringify(words);
var words = CryptoJS.enc.Utf8.parse('𤭢');
var utf8 = CryptoJS.enc.Utf8.stringify(words);
var words = CryptoJS.enc.Utf16.parse('Hello, World!');
var utf16 = CryptoJS.enc.Utf16.stringify(words);
var words = CryptoJS.enc.Utf16LE.parse('Hello, World!');
var utf16 = CryptoJS.enc.Utf16LE.stringify(words);
