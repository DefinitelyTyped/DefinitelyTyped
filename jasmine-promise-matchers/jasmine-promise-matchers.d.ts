// Type definitions for jasmine-promise-matchers
// Project: https://github.com/bvaughn/jasmine-promise-matchers
// Definitions by: Matthew Hill <https://github.com/matthewjh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jasmine/jasmine.d.ts" />

declare function installPromiseMatchers(): void;

declare namespace jasmine {

	interface Matchers {
		/**
		 * Verifies that a Promise is (or has been) rejected.
		 */
		toBeRejected(): boolean;

		/**
		 * Verifies that a Promise is (or has been) rejected with the specified parameter.
		 */
		toBeRejectedWith(value: any): boolean;

		/**
		 * Verifies that a Promise is (or has been) resolved.
		 */
		toBeResolved(): boolean;

		/**
		 * Verifies that a Promise is (or has been) resolved with the specified parameter.
		 */
		toBeResolvedWith(value: any): boolean;
	}
}
