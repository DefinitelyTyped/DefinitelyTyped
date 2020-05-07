// Type definitions for tape-promise 4.0
// Project: https://github.com/jprichardson/tape-promise#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import tape = require('tape');
import { TestOptions, StreamOptions } from 'tape';
export { TestOptions, StreamOptions };

export interface TestCase {
	(test: Test): void | PromiseLike<void>;
}

// tslint:disable: ban-types
export interface Test extends tape.Test {
	test(name: string, cb: TestCase): void;
	test(name: string, opts: TestOptions, cb: TestCase): void;

	/**
	 * Assert that the promise settles with a rejection result.
	 *
	 * @param expected if present, must be a RegExp or Function, which is used to test the exception object.
	 */
	rejects(promise: PromiseLike<any> | (() => PromiseLike<any>), msg?: string): Promise<void>;
	rejects(
		promise: PromiseLike<any> | (() => PromiseLike<any>),
		expected?: RegExp | Function,
		msg?: string,
	): Promise<void>;

	/**
	 * Assert that the promise resolves successfully.
	 */
	doesNotReject(promise: PromiseLike<any> | (() => PromiseLike<any>), msg?: string): Promise<void>;
	doesNotReject(
		promise: PromiseLike<any> | (() => PromiseLike<any>),
		expected?: RegExp | Function,
		msg?: string,
	): Promise<void>;
}
// tslint:enable: ban-types

// tslint:disable: unified-signatures
interface AsyncTapeFunction {
	/**
	 * Create a new test with an optional name string and optional opts object.
	 * cb(t) fires with the new test object t once all preceding tests have finished.
	 * Tests execute serially.
	 */
	(name: string, cb: TestCase): void;
	(name: string, opts: TestOptions, cb: TestCase): void;
	(cb: TestCase): void;
	(opts: TestOptions, cb: TestCase): void;

	/**
	 * Generate a new test that will be skipped over.
	 */
	skip(name: string, cb: TestCase): void;
	skip(name: string, opts: TestOptions, cb: TestCase): void;
	skip(cb: TestCase): void;
	skip(opts: TestOptions, cb: TestCase): void;

	/**
	 * Like test(name?, opts?, cb) except if you use .only this
	 * is the only test case that will run for the entire process,
	 * all other test cases using tape will be ignored.
	 */
	only(name: string, cb: TestCase): void;
	only(name: string, opts: TestOptions, cb: TestCase): void;
	only(cb: TestCase): void;
	only(opts: TestOptions, cb: TestCase): void;

	/**
	 * Create a new test harness instance, which is a function like test(),
	 * but with a new pending stack and test state.
	 */
	createHarness(): AsyncTapeFunction & typeof tape;
}
// tslint:enable: unified-signatures

export default function tapePromiseFactory(tapeTest: any): AsyncTapeFunction & typeof tape;
