// Type definitions for x509.js 1.0
// Project: https://github.com/encharm/x509.js
// Definitions by: Stephane Moser <https://github.com/Moser-ss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'x509.js' {
	interface Certificate {
		publicModulus: string;
		publicExponent: string;
		subject: {
			commonName: string;
		};
		issuer: {
			commonName: string;
		};
		serial: string;
		notBefore: string;
		notAfter: string;
		altNames: string[];
		ocspList: string[];
	}
	interface Key {
		publicExponent: string;
		publicModulus: string;
	}

	function parseCert(certificate: string): Certificate;
	function parseKey(key: string): Key;
	function info(): number;

	export { parseCert, parseKey, info };
}