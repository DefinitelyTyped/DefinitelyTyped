// Type definitions for credential
// Project: https://github.com/ericelliott/credential
// Definitions by: Phú <https://github.com/phuvo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'credential' {

	type HashCallback = (err: Error, hash: string) => void;
	type VerifyCallback = (err: Error, isValid: boolean) => void;

	module credential {
		function hash(password: string, callback: HashCallback): void;
		function verify(hash: string, password: string, callback: VerifyCallback): void;
	}

	export = credential;

}
