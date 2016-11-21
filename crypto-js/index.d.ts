// Type definitions for crypto-js v3.1.4
// Project: https://github.com/evanvosberg/crypto-js
// Definitions by: Michael Zabka <https://github.com/misak113/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

	export var hashes: Hashes;
}

declare module 'crypto-js' {
	import hashes = CryptoJS.hashes;
	export = hashes;
}
