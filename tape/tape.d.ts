// Type definitions for tape v2.12.3
// Project: https://github.com/substack/tape
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'tape' {
	export = tape;

	/**
	 * Create a new test with an optional name string. cb(t) fires with the new test object t once all preceeding tests have finished. Tests execute serially.
	 */
	function tape(name: string, cb: tape.TestCase): void;
	module tape {

		interface TestCase {
			(test: Test): void;
		}

		/**
		 * Generate a new test that will be skipped over.
		 */
		export function skip(name: string, cb: tape.TestCase): void;

		/**
		 * Like test(name, cb) except if you use .only this is the only test case that will run for the entire process, all other test cases using tape will be ignored
		 */
		export function only(name: string, cb: tape.TestCase): void;

		/**
		 * Create a new test harness instance, which is a function like test(), but with a new pending stack and test state.
		 */
		export function createHarness(): typeof tape;
		/**
		 * Create a stream of output, bypassing the default output stream that writes messages to console.log().
		 */
		export function createStream(opts?: any): NodeJS.ReadableStream;

		interface Test {
			/**
			 * Create a subtest with a new test handle st from cb(st) inside the current test  cb(st) will only fire when t finishes. Additional tests queued up after t will not be run until all subtests finish.
			 */
			test(name: string, cb: tape.TestCase): void;

			/**
			 * Declare that n assertions should be run. end() will be called automatically after the nth assertion. If there are any more assertions after the nth, or after end() is called, they will generate errors.
			 */
			plan(n: number): void;

			/**
			 * Declare the end of a test explicitly.
			 */
			end(): void;

			/**
			 * Generate a failing assertion with a message msg.
			 */
			fail(msg?: string): void;

			/**
			 * Generate a passing assertion with a message msg.
			 */
			pass(msg?: string): void;

			/**
			 * Generate an assertion that will be skipped over.
			 */
			skip(msg?: string): void;

			/**
			 * Assert that value is truthy with an optional description message msg.
			 */
			ok(value: any, msg?: string): void;
			true(value: any, msg?: string): void;
			assert(value: any, msg?: string): void;

			/**
			 * Assert that value is falsy with an optional description message msg.
			 */
			notOk(value: any, msg?: string): void;
			false(value: any, msg?: string): void;
			notok(value: any, msg?: string): void;

			/**
			 * Assert that err is falsy. If err is non-falsy, use its err.message as the description message.
			 */
			error(err: any, msg?: string): void;
			ifError(err: any, msg?: string): void;
			ifErr(err: any, msg?: string): void;
			iferror(err: any, msg?: string): void;

			/**
			 * Assert that a === b with an optional description msg.
			 */
			equal(a: any, b: any, msg?: string): void;
			equals(a: any, b: any, msg?: string): void;
			isEqual(a: any, b: any, msg?: string): void;
			is(a: any, b: any, msg?: string): void;
			strictEqual(a: any, b: any, msg?: string): void;
			strictEquals(a: any, b: any, msg?: string): void;

			/**
			 * Assert that a !== b with an optional description msg.
			 */
			notEqual(a: any, b: any, msg?: string): void;
			notEquals(a: any, b: any, msg?: string): void;
			notStrictEqual(a: any, b: any, msg?: string): void;
			notStrictEquals(a: any, b: any, msg?: string): void;
			isNotEqual(a: any, b: any, msg?: string): void;
			isNot(a: any, b: any, msg?: string): void;
			not(a: any, b: any, msg?: string): void;
			doesNotEqual(a: any, b: any, msg?: string): void;
			isInequal(a: any, b: any, msg?: string): void;

			/**
			 * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
			 */
			deepEqual(a: any, b: any, msg?: string): void;
			deepEquals(a: any, b: any, msg?: string): void;
			isEquivalent(a: any, b: any, msg?: string): void;
			same(a: any, b: any, msg?: string): void;

			/**
			 * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
			 */
			notDeepEqual(a: any, b: any, msg?: string): void;
			notEquivalent(a: any, b: any, msg?: string): void;
			notDeeply(a: any, b: any, msg?: string): void;
			notSame(a: any, b: any, msg?: string): void;
			isNotDeepEqual(a: any, b: any, msg?: string): void;
			isNotDeeply(a: any, b: any, msg?: string): void;
			isNotEquivalent(a: any, b: any, msg?: string): void;
			isInequivalent(a: any, b: any, msg?: string): void;

			/**
			 * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
			 */
			deepLooseEqual(a: any, b: any, msg?: string): void;
			looseEqual(a: any, b: any, msg?: string): void;
			looseEquals(a: any, b: any, msg?: string): void;

			/**
			 * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
			 */
			notDeepLooseEqual(a: any, b: any, msg?: string): void;
			notLooseEqual(a: any, b: any, msg?: string): void;
			notLooseEquals(a: any, b: any, msg?: string): void;

			/**
			 * Assert that the function call fn() throws an exception.
			 */
			throws(fn: () => void, expected: any, msg?: string): void;

			/**
			 * Assert that the function call fn() does not throw an exception.
			 */
			doesNotThrow(fn: () => void, expected: any, msg?: string): void;
		}
	}
}
