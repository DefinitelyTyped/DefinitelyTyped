// Type definitions for chai-fuzzy 1.3.0
// Project: http://chaijs.com/plugins/chai-fuzzy
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
	namespace Chai {
		interface Assertion {
			/**
			 * Compare object attributes and values rather than checking to see if
			 * they're the same reference.
			 */
			like(expected: any, message?: string): Assertion;
			/**
			 * Compare object attributes and values rather than checking to see if
			 * they're the same reference.
			 */
			notLike(expected: any, message?: string): Assertion;
			/**
			 * Check the first level of the container for a value like the one provided.
			 */
			containOneLike(expected: any, message?: string): Assertion;
			/**
			 * Check the first level of the container for a value like the one provided.
			 */
			notContainOneLike(expected: any, message?: string): Assertion;
			/**
			 * Check that the given javascript object is like the JSON-ified expected
			 * value. Useful for checking stringification and parsing of an object.
			 */
			jsonOf(expected: any, message?: string): Assertion;
			/**
			 * Check that the given javascript object is like the JSON-ified expected
			 * value. Useful for checking stringification and parsing of an object.
			 */
			notJsonOf(expected: any, message?: string): Assertion;
		}

		interface Assert {
			/**
			 * Compare object attributes and values rather than checking to see if
			 * they're the same reference.
			 */
			like(actual: any, expected: any, message?: string): void;
			/**
			 * Compare object attributes and values rather than checking to see if
			 * they're the same reference.
			 */
			notLike(actual: any, expected: any, message?: string): void;
			/**
			 * Check the first level of the container for a value like the one provided.
			 */
			containOneLike(actual: any, expected: any, message?: string): void;
			/**
			 * Check the first level of the container for a value like the one provided.
			 */
			notContainOneLike(actual: any, expected: any, message?: string): void;
			/**
			 * Check that the given javascript object is like the JSON-ified expected
			 * value. Useful for checking stringification and parsing of an object.
			 */
			jsonOf(actual: any, expected: any, message?: string): void;
			/**
			 * Check that the given javascript object is like the JSON-ified expected
			 * value. Useful for checking stringification and parsing of an object.
			 */
			notJsonOf(actual: any, expected: any, message?: string): void;
		}
	}
}

declare const chaiFuzzy: Chai.ChaiPlugin;
export = chaiFuzzy;

