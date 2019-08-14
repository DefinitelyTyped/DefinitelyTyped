// Type definitions for crypto-js v3.1.8
// Project: https://github.com/evanvosberg/crypto-js
// Definitions by: Michael Zabka <https://github.com/misak113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CryptoJS;
export as namespace CryptoJS;

declare var CryptoJS: CryptoJS.Hashes;
declare namespace CryptoJS {

	interface Base {
		create(): any;
	}

	interface BufferedBlockAlgorithm extends Base {}

	interface Hasher extends BufferedBlockAlgorithm {
		update(messageUpdate: WordArray|string): Hasher;
	}

	interface Cipher extends BufferedBlockAlgorithm {
		createEncryptor(secretPassphrase: string, option?: CipherOption): Encryptor;
		createDecryptor(secretPassphrase: string, option?: CipherOption): Decryptor;
	}

	interface BlockCipher extends Cipher {}

	interface StreamCipher extends Cipher {}

	interface CipherHelper {
		encrypt(message: string | LibWordArray, secretPassphrase: string | WordArray, option?: CipherOption): WordArray;
		decrypt(encryptedMessage: string | WordArray, secretPassphrase: string | WordArray, option?: CipherOption): DecryptedMessage;
	}
	interface Encryptor {
		process(messagePart: string): string;
		finalize(): string;
	}
	interface Decryptor {
		process(messagePart: string): string;
		finalize(): string;
	}
	interface LibWordArray {
		sigBytes: number,
		words: number[],
	}
	export interface WordArray {
		iv: string;
		salt: string;
		ciphertext: string;
		key?: string;
		toString(encoder?: Encoder): string;
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
		MD5(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		MD5(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA1(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA1(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA256(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA256(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA224(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA224(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA512(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA512(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA384(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA384(message: string | LibWordArray, ...options: any[]): WordArray;
		SHA3(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		SHA3(message: string | LibWordArray, ...options: any[]): WordArray;
		RIPEMD160(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		RIPEMD160(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacMD5(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacMD5(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA1(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA1(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA256(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA256(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA224(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA224(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA512(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA512(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA384(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA384(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacSHA3(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacSHA3(message: string | LibWordArray, ...options: any[]): WordArray;
		HmacRIPEMD160(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		HmacRIPEMD160(message: string | LibWordArray, ...options: any[]): WordArray;
		PBKDF2(message: string | LibWordArray, key?: string | WordArray, ...options: any[]): WordArray;
		PBKDF2(message: string | LibWordArray, ...options: any[]): WordArray;
		AES: CipherHelper;
		DES: CipherHelper;
		TripleDES: CipherHelper;
		RC4: CipherHelper;
		RC4Drop: CipherHelper;
		Rabbit: CipherHelper;
		RabbitLegacy: CipherHelper;
		EvpKDF: CipherHelper;
		algo: {
			AES: BlockCipher;
			DES: BlockCipher;
			TripleDES: BlockCipher;
			RC4: StreamCipher;
			RC4Drop: StreamCipher;
			Rabbit: StreamCipher;
			RabbitLegacy: StreamCipher;
			EvpKDF: Base;
			HMAC: Base;
			PBKDF2: Base;
			SHA1: Hasher;
			SHA3: Hasher;
			SHA256: Hasher;
			SHA384: Hasher;
			SHA512: Hasher;
			MD5: Hasher;
			RIPEMD160: Hasher;
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
		lib: {
			WordArray: {
				create: (v: any) => LibWordArray;
				random: (v: number) => string;
			};
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
