// Type definitions for jasmine-es6-promise-matchers
// Project: https://github.com/bvaughn/jasmine-es6-promise-matchers
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jasmine/jasmine.d.ts" />

declare module JasminePromiseMatchers  {
	export function install():void;
	export function uninstall():void;
}

declare module jasmine {
	
	interface Matchers {
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