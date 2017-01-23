// Type definitions for crypto-js v3.1.4
// Project: https://github.com/evanvosberg/crypto-js
// Definitions by: Michael Zabka <https://github.com/misak113/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var CryptoJS: CryptoJS.Hashes;
declare namespace CryptoJS {
	type Hash = (message: string, key?: string, ...options: any[]) => string;
	interface Cipher {
		encrypt(message: string, secretPassphrase: string, option?: CipherOption): WordArray;
		decrypt(encryptedMessage: string | WordArray, secretPassphrase: string, option?: CipherOption): DecryptedMessage;
	}
	interface CipherAlgorythm {
		createEncryptor(secretPassphrase: string, option?: CipherOption): Encriptor;
		createDecryptor(secretPassphrase: string, option?: CipherOption): Decryptor;
	}
	interface Encriptor {
		process(messagePart: string): string;
		finalize(): string;
	}
	interface Decryptor {
		process(messagePart: string): string;
		finalize(): string;
	}
	export interface WordArray {
		iv: string;
		salt: string;
		ciphertext: string;
		key?: string;
	}
	export type DecryptedMessage = {
		toString(encoder?: Encoder): string;
	};
	interface CipherOption {
		iv?: string;
		mode?: Mode;
		padding?: Padding;
		[option: string]: any;
	}
	interface Encoder {
		parse(encodedMessage: string): any;
		stringify(words: any): string;
	}

	interface Mode {}
	interface Padding {}

	export interface Hashes {
		MD5: Hash;
		SHA1: Hash;
		SHA256: Hash;
		SHA224: Hash;
		SHA512: Hash;
		SHA384: Hash;
		SHA3: Hash;
		RIPEMD160: Hash;
		HmacMD5: Hash;
		HmacSHA1: Hash;
		HmacSHA256: Hash;
		HmacSHA224: Hash;
		HmacSHA512: Hash;
		HmacSHA384: Hash;
		HmacSHA3: Hash;
		HmacRIPEMD160: Hash;
		PBKDF2: Hash;
		AES: Cipher;
		DES: Cipher;
		TripleDES: Cipher;
		RC4: Cipher;
		RC4Drop: Cipher;
		Rabbit: Cipher;
		RabbitLegacy: Cipher;
		EvpKDF: Cipher;
		algo: {
			AES: CipherAlgorythm;
			DES: CipherAlgorythm;
			TrippleDES: CipherAlgorythm;
			RC4: CipherAlgorythm;
			RC4Drop: CipherAlgorythm;
			Rabbit: CipherAlgorythm;
			RabbitLegacy: CipherAlgorythm;
			EvpKDF: CipherAlgorythm;
		};
		format: {
			OpenSSL: any;
			Hex: any;
		};
		enc: {
			Latin1: Encoder;
			Utf8: Encoder;
			Hex: Encoder;
			Utf16: Encoder;
			Utf16LE: Encoder;
			Base64: Encoder;
		};
		mode: {
			CBC: Mode;
			CFB: Mode;
			CTR: Mode;
			CTRGladman: Mode;
			OFB: Mode;
			ECB: Mode;
		};
		pad: {
			Pkcs7: Padding;
			AnsiX923: Padding;
			Iso10126: Padding;
			Iso97971: Padding;
			ZeroPadding: Padding;
			NoPadding: Padding;
		};
	}

}

declare module "crypto-js" {
	var CryptoJS: CryptoJS.Hashes;
	export = CryptoJS;
}

/* --------------------------------- */
declare module "crypto-js/core" {
	var core: any;
	export = core;
}

declare module "crypto-js/x64-core" {
	var x64: any;
	export = x64;
}

declare module "crypto-js/lib-typedarrays" {
	var libWordArray: any;
	export = libWordArray;
}

/* --------------------------------- */
declare module "crypto-js/md5" {
	var MD5: CryptoJS.Hash;
	export = MD5;
}

declare module "crypto-js/sha1" {
	var SHA1: CryptoJS.Hash;
	export = SHA1;
}

declare module "crypto-js/sha256" {
	var SHA256: CryptoJS.Hash;
	export = SHA256;
}

declare module "crypto-js/sha224" {
	var SHA224: CryptoJS.Hash;
	export = SHA224;
}

declare module "crypto-js/sha512" {
	var SHA512: CryptoJS.Hash;
	export = SHA512;
}

declare module "crypto-js/sha384" {
	var SHA384: CryptoJS.Hash;
	export = SHA384;
}

declare module "crypto-js/sha3" {
	var SHA3: CryptoJS.Hash;
	export = SHA3;
}

declare module "crypto-js/ripemd160" {
	var RIPEMD160: CryptoJS.Hash;
	export = RIPEMD160;
}

/* --------------------------------- */
declare module "crypto-js/hmac-md5" {
	var HmacMD5: CryptoJS.Hash;
	export = HmacMD5;
}

declare module "crypto-js/hmac-sha1" {
	var HmacSHA1: CryptoJS.Hash;
	export = HmacSHA1;
}

declare module "crypto-js/hmac-sha256" {
	var HmacSHA256: CryptoJS.Hash;
	export = HmacSHA256;
}

declare module "crypto-js/hmac-sha224" {
	var HmacSHA224: CryptoJS.Hash;
	export = HmacSHA224;
}

declare module "crypto-js/hmac-sha512" {
	var HmacSHA512: CryptoJS.Hash;
	export = HmacSHA512;
}

declare module "crypto-js/hmac-sha384" {
	var HmacSHA384: CryptoJS.Hash;
	export = HmacSHA384;
}

declare module "crypto-js/hmac-sha3" {
	var HmacSHA3: CryptoJS.Hash;
	export = HmacSHA3;
}

declare module "crypto-js/hmac-ripemd160" {
	var HmacRIPEMD160: CryptoJS.Hash;
	export = HmacRIPEMD160;
}

/* --------------------------------- */
declare module "crypto-js/pbkdf2" {
	var PBKDF2: CryptoJS.Hash;
	export = PBKDF2;
}

/* --------------------------------- */
declare module "crypto-js/aes" {
	var AES: CryptoJS.Cipher;
	export = AES;
}

declare module "crypto-js/tripledes" {
	var TripleDES: CryptoJS.Cipher;
	export = TripleDES;
}

declare module "crypto-js/rc4" {
	var RC4: CryptoJS.Cipher;
	export = RC4;
}

declare module "crypto-js/rabbit" {
	var Rabbit: CryptoJS.Cipher;
	export = Rabbit;
}

declare module "crypto-js/rabbit-legacy" {
	var RabbitLegacy: CryptoJS.Cipher;
	export = RabbitLegacy;
}

declare module "crypto-js/evpkdf" {
	var EvpKDF: CryptoJS.Cipher;
	export = EvpKDF;
}

/* --------------------------------- */
declare module "crypto-js/format-openssl" {
	var FormatOpenssl: any;
	export = FormatOpenssl;
}

declare module "crypto-js/format-hex" {
	var FormatHex: any;
	export = FormatHex;
}

/* --------------------------------- */
declare module "crypto-js/enc-latin1" {
	var encLatin1: CryptoJS.Encoder;
	export = encLatin1;
}

declare module "crypto-js/enc-utf8" {
	var encUtf8: CryptoJS.Encoder;
	export = encUtf8;
}

declare module "crypto-js/enc-hex" {
	var encHex: CryptoJS.Encoder;
	export = encHex;
}

declare module "crypto-js/enc-utf16" {
	var encUtf16: CryptoJS.Encoder;
	export = encUtf16;
}

declare module "crypto-js/enc-base64" {
	var encBase64: CryptoJS.Encoder;
	export = encBase64;
}

/* --------------------------------- */
declare module "crypto-js/mode-cfb" {
	var modeCFB: CryptoJS.Mode;
	export = modeCFB;
}

declare module "crypto-js/mode-ctr" {
	var modeCTR: CryptoJS.Mode;
	export = modeCTR;
}

declare module "crypto-js/mode-ctr-gladman" {
	var modeCTRGladman: CryptoJS.Mode;
	export = modeCTRGladman;
}

declare module "crypto-js/mode-ofb" {
	var modeOFB: CryptoJS.Mode;
	export = modeOFB;
}

declare module "crypto-js/mode-ecb" {
	var modeECB: CryptoJS.Mode;
	export = modeECB;
}

/* --------------------------------- */
declare module "crypto-js/pad-pkcs7" {
	var padPkcs7: CryptoJS.Padding;
	export = padPkcs7;
}

declare module "crypto-js/pad-ansix923" {
	var padAnsiX923: CryptoJS.Padding;
	export = padAnsiX923;
}

declare module "crypto-js/pad-iso10126" {
	var padIso10126: CryptoJS.Padding;
	export = padIso10126;
}

declare module "crypto-js/pad-iso97971" {
	var padIso97971: CryptoJS.Padding;
	export = padIso97971;
}

declare module "crypto-js/pad-zeropadding" {
	var padZeroPadding: CryptoJS.Padding;
	export = padZeroPadding;
}

declare module "crypto-js/pad-nopadding" {
	var padNoPadding: CryptoJS.Padding;
	export = padNoPadding;
}
