// Type definitions for jasmine-es6-promise-matchers
// Project: https://github.com/bvaughn/jasmine-es6-promise-matchers
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="jasmine" />

declare namespace JasminePromiseMatchers  {
	export function install():void;
	export function uninstall():void;
}

declare namespace jasmine {

	interface Matchers<T> {
		/**
		 * Verifies that a Promise is (or has been) rejected.
		 */
		toBeRejected(done?: () => void): boolean;

		/**
		 * Verifies that a Promise is (or has been) rejected with the specified parameter.
		 */
		toBeRejectedWith(value: any, done?: () => void): boolean;

		/**
		 * Verifies that a Promise is (or has been) resolved.
		 */
		toBeResolved(done?: () => void): boolean;

		/**
		 * Verifies that a Promise is (or has been) resolved with the specified parameter.
		 */
		toBeResolvedWith(value: any, done?: () => void): boolean;
	}
}
