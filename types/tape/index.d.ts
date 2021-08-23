// Type definitions for tape v4.13.2
// Project: https://github.com/substack/tape
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Haoqun Jiang <https://github.com/sodatea>
//                 Dennis Schwartz <https://github.com/DennisSchwartz>
//                 Michael Henretty <https://github.com/mikehenrty>
//                 Rafał Ostrowski <https://github.com/rostrowski>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = tape;

/**
 * Create a new test with an optional name string and optional opts object.
 * cb(t) fires with the new test object t once all preceeding tests have finished.
 * Tests execute serially.
 */
declare function tape(name: string, cb: tape.TestCase): void;
declare function tape(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
declare function tape(cb: tape.TestCase): void;
declare function tape(opts: tape.TestOptions, cb: tape.TestCase): void;

declare namespace tape {
    interface TestCase {
        (test: Test): void;
    }

    /**
     * Available opts options for the tape function.
     */
    interface TestOptions {
        skip?: boolean | undefined; // true/false. See test.skip.
        todo?: boolean | undefined; // true/false. Test will be allowed to fail.
        timeout?: number | undefined; // Set a timeout for the test, after which it will fail. See tape.timeoutAfter.
    }

    /**
     * Available options for tape assertions.
     */
    interface AssertOptions {
        skip?: boolean | string | undefined; // Skip the assertion. Can also be a message explaining why the test is skipped.
        todo?: boolean | string | undefined; // Allows the assertion to fail.
        message?: string | undefined; // An optional description of the assertion.
    }

    /**
     * Options for the createStream function.
     */
    interface StreamOptions {
        objectMode?: boolean | undefined;
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
     * The onFailure hook will get invoked whenever any tape tests have failed.
     */
    export function onFailure(cb: () => void): void;

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

    interface Test {
        /**
         * Create a subtest with a new test handle st from cb(st) inside the current test.
         * cb(st) will only fire when t finishes.
         * Additional tests queued up after t will not be run until all subtests finish.
         */
        test(name: string, cb: tape.TestCase): void;
        test(name: string, opts: TestOptions, cb: tape.TestCase): void;

        /**
         * Declare that n assertions should be run. end() will be called automatically after the nth assertion.
         * If there are any more assertions after the nth, or after end() is called, they will generate errors.
         */
        plan(n: number): void;

        /**
         * Declare the end of a test explicitly.
         * If err is passed in t.end will assert that it is falsey.
         */
        end(err?: any): void;

        /**
         * Generate a failing assertion with a message msg.
         */
        fail(msg?: string, extra?: AssertOptions): void;

        /**
         * Generate a passing assertion with a message msg.
         */
        pass(msg?: string, extra?: AssertOptions): void;

        /**
         * Automatically timeout the test after X ms.
         */
        timeoutAfter(ms: number): void;

        /**
         * Generate an assertion that will be skipped over.
         */
        skip(msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that value is truthy with an optional description message msg.
         */
        ok(value: any, msg?: string, extra?: AssertOptions): void;
        true(value: any, msg?: string, extra?: AssertOptions): void;
        assert(value: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that value is falsy with an optional description message msg.
         */
        notOk(value: any, msg?: string, extra?: AssertOptions): void;
        false(value: any, msg?: string, extra?: AssertOptions): void;
        notok(value: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that err is falsy.
         * If err is non-falsy, use its err.message as the description message.
         */
        error(err: any, msg?: string, extra?: AssertOptions): void;
        ifError(err: any, msg?: string, extra?: AssertOptions): void;
        ifErr(err: any, msg?: string, extra?: AssertOptions): void;
        iferror(err: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a === b with an optional description msg.
         */
        equal(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        equals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        is(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        strictEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        strictEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a !== b with an optional description msg.
         */
        notEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notStrictEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notStrictEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isNotEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isNot(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        not(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        doesNotEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isInequal(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
         */
        deepEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        deepEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isEquivalent(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        same(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
         */
        notDeepEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notEquivalent(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notDeeply(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notSame(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isNotDeepEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isNotDeeply(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isNotEquivalent(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        isInequivalent(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
         */
        deepLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        looseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        looseEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
         */
        notDeepLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notLooseEquals(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that the function call fn() throws an exception.
         * expected, if present, must be a RegExp or Function, which is used to test the exception object.
         */
        throws(fn: () => void, msg?: string): void;
        throws(fn: () => void, exceptionExpected: RegExp | Function, msg?: string): void;

        /**
         * Assert that the function call fn() does not throw an exception.
         */
        doesNotThrow(fn: () => void, msg?: string): void;
        doesNotThrow(fn: () => void, exceptionExpected: RegExp | Function, msg?: string): void;

        /**
         * Print a message without breaking the tap output.
         * (Useful when using e.g. tap-colorize where output is buffered & console.log will print in incorrect order vis-a-vis tap output.)
         */
        comment(msg: string): void;

        /**
         * Assert that string matches the RegExp regexp. Will throw (not just fail) when the first two arguments are the wrong type.
         */
        match(actual: string, expected: RegExp, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that string does not match the RegExp regexp. Will throw (not just fail) when the first two arguments are the wrong type.
         */
        doesNotMatch(actual: string, expected: RegExp, msg?: string, extra?: AssertOptions): void;

        /**
         * Register a callback to run after the individual test has completed. Multiple registered teardown callbacks will run in order.
         */
        teardown(callback: () => void | Promise<void>): void;
    }
}
