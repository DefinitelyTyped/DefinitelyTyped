// Type definitions for crypto-js v3.1.3
// Project: https://github.com/evanvosberg/crypto-js
// Definitions by: Michael Zabka <https://github.com/misak113/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module CryptoJS {
	type Hash = (message: string, key?: string, ...options: any[]) => string;

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
		AES: Hash;
		TripleDES: Hash;
		RC4: Hash;
		Rabbit: Hash;
		RabbitLegacy: Hash;
		EvpKDF: Hash;
		format: {
			OpenSSL: Hash;
			Hex: Hash;
		};
		enc: {
			Latin1: Hash;
			Utf8: Hash;
			Hex: Hash;
			Utf16: Hash;
			Base64: Hash;
		};
		mode: {
			CFB: Hash;
			CTR: Hash;
			CTRGladman: Hash;
			OFB: Hash;
			ECB: Hash;
		};
		pad: {
			Pkcs7: Hash;
			Ansix923: Hash;
			Iso10126: Hash;
			Iso97971: Hash;
			ZeroPadding: Hash;
			NoPadding: Hash;
		};
	}

	export var hashes: Hashes;
}

declare module 'crypto-js' {
	import hashes = CryptoJS.hashes;
	export = hashes;
}
