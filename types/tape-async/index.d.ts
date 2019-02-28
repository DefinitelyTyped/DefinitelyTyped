// Type definitions for tape-async v2.3
// Project: https://github.com/parro-it/tape-async
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import tapeSync = require("tape");
export = tape;

declare function tape(name: string, cb: tape.TestCase): void
declare function tape(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
declare function tape(cb: tape.TestCase): void;
declare function tape(opts: tape.TestOptions, cb: tape.TestCase): void;

declare namespace tape {

	interface TestCase {
		(test: Test): void | Iterator<any> | PromiseLike<void>;
	}

	/**
	 * Available opts options for the tape function.
	 */
	interface TestOptions extends tapeSync.TestOptions {
	}

	/**
	 * Options for the createStream function.
	 */
	interface StreamOptions extends tapeSync.StreamOptions {
	}

	/**
	 * Generate a new test that will be skipped over.
	 */
	export function skip(name: string, cb: tape.TestCase): void;
	export function skip(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
	export function skip(cb: tape.TestCase): void;
	export function skip(opts: tape.TestOptions, cb: tape.TestCase): void;

	/**
	 * The onFinish hook will get invoked when ALL tape tests have finished right before tape is about to print the test summary.
	 */
	export function onFinish(cb: () => void): void;

	/**
	 * Like test(name?, opts?, cb) except if you use .only this is the only test case that will run for the entire process, all other test cases using tape will be ignored.
	 */
	export function only(name: string, cb: tape.TestCase): void;
	export function only(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
	export function only(cb: tape.TestCase): void;
	export function only(opts: tape.TestOptions, cb: tape.TestCase): void;

	/**
	 * Create a new test harness instance, which is a function like test(), but with a new pending stack and test state.
	 */
	export function createHarness(): typeof tape;
	/**
	 * Create a stream of output, bypassing the default output stream that writes messages to console.log().
	 * By default stream will be a text stream of TAP output, but you can get an object stream instead by setting opts.objectMode to true.
	 */
	export function createStream(opts?: tape.StreamOptions): NodeJS.ReadableStream;

	interface Test extends tapeSync.Test {
		/**
		 * Create a subtest with a new test handle st from cb(st) inside the current test.
		 * cb(st) will only fire when t finishes.
		 * Additional tests queued up after t will not be run until all subtests finish.
		 */
		test(name: string, cb: tape.TestCase): void;
		test(name: string, opts: TestOptions, cb: tape.TestCase): void;
	}
}
