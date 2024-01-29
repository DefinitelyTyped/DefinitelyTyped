/// <reference types="node" />

export = tape;

/**
 * Create a new test with an optional name string and optional opts object.
 * cb(t) fires with the new test object t once all preceding tests have finished.
 * Tests execute serially.
 */
declare function tape(name: string, cb: tape.TestCase): void;
declare function tape(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
declare function tape(cb: tape.TestCase): void;
declare function tape(opts: tape.TestOptions, cb: tape.TestCase): void;

declare namespace tape {
    interface TestCase {
        (test: Test): void | Promise<void>;
    }

    /**
     * Available opts options for the tape function.
     */
    interface TestOptions {
        /** See test.skip. */
        skip?: boolean | undefined;
        /** Set a timeout for the test, after which it will fail. See tape.timeoutAfter. */
        timeout?: number | undefined;
        /**
         * Configure max depth of expected/actual object printing. Environmental variable
         * NODE_TAPE_OBJECT_PRINT_DEPTH can set the desired default depth for all tests;
         * locally-set values will take precedence.
         */
        objectPrintDepth?: number | undefined;
        /** Test will be allowed to fail. */
        todo?: boolean | undefined;
    }

    /**
     * Available options for tape assertions.
     */
    interface AssertOptions {
        /** Skip the assertion. Can also be a message explaining why the test is skipped. */
        skip?: boolean | string | undefined;
        /** Allows the assertion to fail. */
        todo?: boolean | string | undefined;
        /** An optional description of the assertion. */
        message?: string | undefined;
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
    export function createHarness(opts?: { autoclose?: boolean; noOnly?: boolean }): typeof tape;

    /**
     * Create a memoized test harness instance, which is a function like test(), but with a new pending stack and test state.
     */
    export function getHarness(
        opts?: {
            noOnly?: boolean;
            exit?: boolean;
            stream?: ReturnType<typeof import("through")>;
        } & StreamOptions,
    ): typeof tape;

    /**
     * Create a stream of output, bypassing the default output stream that writes messages to console.log().
     * By default stream will be a text stream of TAP output, but you can get an object stream instead by setting opts.objectMode to true.
     */
    export function createStream(opts?: tape.StreamOptions): NodeJS.ReadableStream;

    export interface Test {
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
        true: Test["ok"];
        assert: Test["ok"];

        /**
         * Assert that value is falsy with an optional description message msg.
         */
        notOk(value: any, msg?: string, extra?: AssertOptions): void;
        false: Test["notOk"];
        notok: Test["notOk"];

        /**
         * Assert that err is falsy.
         * If err is non-falsy, use its err.message as the description message.
         */
        error(err: any, msg?: string, extra?: AssertOptions): void;
        ifError: Test["error"];
        ifErr: Test["error"];
        iferror: Test["error"];

        /**
         * Assert that a === b with an optional description msg.
         */
        equal(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        equals: Test["equal"];
        isEqual: Test["equal"];
        is: Test["equal"];
        strictEqual: Test["equal"];
        strictEquals: Test["equal"];

        /**
         * Assert that a !== b with an optional description msg.
         */
        notEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notEquals: Test["notEqual"];
        notStrictEqual: Test["notEqual"];
        notStrictEquals: Test["notEqual"];
        isNotEqual: Test["notEqual"];
        isNot: Test["notEqual"];
        not: Test["notEqual"];
        doesNotEqual: Test["notEqual"];
        isInequal: Test["notEqual"];

        /**
         * Assert that actual == expected with an optional description of the assertion msg.
         */
        looseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        looseEquals: Test["looseEqual"];

        /**
         * Assert that actual != expected with an optional description of the assertion msg.
         */
        notLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notLooseEquals: Test["looseEqual"];

        /**
         * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
         */
        deepEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        deepEquals: Test["deepEqual"];
        isEquivalent: Test["deepEqual"];
        same: Test["deepEqual"];

        /**
         * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with strict comparisons (===) on leaf nodes and an optional description msg.
         */
        notDeepEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;
        notEquivalent: Test["notDeepEqual"];
        notDeeply: Test["notDeepEqual"];
        notSame: Test["notDeepEqual"];
        isNotDeepEqual: Test["notDeepEqual"];
        isNotDeeply: Test["notDeepEqual"];
        isNotEquivalent: Test["notDeepEqual"];
        isInequivalent: Test["notDeepEqual"];

        /**
         * Assert that a and b have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
         */
        deepLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that a and b do not have the same structure and nested values using node's deepEqual() algorithm with loose comparisons (==) on leaf nodes and an optional description msg.
         */
        notDeepLooseEqual(actual: any, expected: any, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that the function call fn() throws an exception. expected, if present, must be a RegExp, Function, or Object.
         */
        throws(fn: () => void, msg?: string, extra?: AssertOptions): void;
        throws(fn: () => void, exceptionExpected: object, msg?: string, extra?: AssertOptions): void;

        /**
         * Assert that the function call fn() does not throw an exception.
         */
        doesNotThrow(fn: () => void, msg?: string, extra?: AssertOptions): void;
        doesNotThrow(fn: () => void, exceptionExpected: RegExp | Function, msg?: string, extra?: AssertOptions): void;

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
