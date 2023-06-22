// Type definitions for tap 15.0
// Project: https://github.com/tapjs/node-tap
// Definitions by: zkldi <https://github.com/zkldi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: can be removed as soon as https://github.com/tapjs/node-tap/pull/607 is merged

/// <reference types="node" />
import { EventEmitter } from "events";

/**
 * Tap v15 deprecates **ALL** synonyms for assertions.
 */
declare class DeprecatedAssertionSynonyms {
    /**
     * @deprecated use ok() instead.
     */
    true: Assertions.Basic;
    /**
     * @deprecated use ok() instead.
     */
    assert: Assertions.Basic;

    /**
     * @deprecated use teardown() instead.
     */
    tearDown(fn: () => void | Promise<void>): void;

    /**
     * @deprecated use notOk() instead.
     */
    false: Assertions.Basic;
    /**
     * @deprecated use assertNot() instead.
     */
    assertNot: Assertions.Basic;

    /**
     * @deprecated use error() instead.
     */
    ifErr: Assertions.Basic;
    /**
     * @deprecated use error() instead.
     */
    ifError: Assertions.Basic;

    /**
     * @deprecated use doesNotThrow() instead.
     */
    notThrow: Assertions.DoesNotThrow;

    /**
     * @deprecated use throws() instead.
     */
    throw: Assertions.Throws;

    /**
     * @deprecated use equal() instead.
     */
    equals: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    isEqual: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    is: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    strictEqual: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    strictEquals: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    strictIs: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    isStrict: Assertions.Equal;
    /**
     * @deprecated use equal() instead.
     */
    isStrictly: Assertions.Equal;

    /**
     * @deprecated use not() instead.
     */
    notEqual: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    notEquals: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    inequal: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    notStrictEqual: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    notStrictEquals: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    isNotEqual: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    isNot: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    doesNotEqual: Assertions.NotEqual;
    /**
     * @deprecated use not() instead.
     */
    isInequal: Assertions.NotEqual;

    /**
     * @deprecated use same() instead.
     */
    equivalent: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    looseEqual: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    looseEquals: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    deepEqual: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    deepEquals: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    isLoose: Assertions.Equal;
    /**
     * @deprecated use same() instead.
     */
    looseIs: Assertions.Equal;

    /**
     * @deprecated use notSame() instead.
     */
    inequivalent: Assertions.NotEqual;
    /**
     * @deprecated use notSame() instead.
     */
    looseInequal: Assertions.NotEqual;
    /**
     * @deprecated use notSame() instead.
     */
    notDeep: Assertions.NotEqual;
    /**
     * @deprecated use notSame() instead.
     */
    deepInequal: Assertions.NotEqual;
    /**
     * @deprecated use notSame() instead.
     */
    notLoose: Assertions.NotEqual;
    /**
     * @deprecated use notSame() instead.
     */
    looseNot: Assertions.NotEqual;

    /**
     * @deprecated use strictSame() instead.
     */
    strictEquivalent: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    strictDeepEqual: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    sameStrict: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    deepIs: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    isDeeply: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    isDeep: Assertions.Equal;
    /**
     * @deprecated use strictSame() instead.
     */
    strictDeepEquals: Assertions.Equal;

    /**
     * @deprecated use strictNotSame() instead.
     */
    strictInequivalent: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    strictDeepInequal: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    notSameStrict: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    deepNot: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    notDeeply: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    strictDeepInequals: Assertions.NotEqual;
    /**
     * @deprecated use strictNotSame() instead.
     */
    notStrictSame: Assertions.NotEqual;

    /**
     * @deprecated use match() instead.
     */
    matches: Assertions.Match;
    /**
     * @deprecated use match() instead.
     */
    similar: Assertions.Match;
    /**
     * @deprecated use match() instead.
     */
    like: Assertions.Match;
    /**
     * @deprecated use match() instead.
     */
    isLike: Assertions.Match;
    /**
     * @deprecated use match() instead.
     */
    isSimilar: Assertions.Match;

    /**
     * @deprecated use notMatch() instead.
     */
    dissimilar: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    unsimilar: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    notSimilar: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    unlike: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    isUnlike: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    notLike: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    isNotLike: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    doesNotHave: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    isNotSimilar: Assertions.Match;
    /**
     * @deprecated use notMatch() instead.
     */
    isDissimilar: Assertions.Match;

    /**
     * @deprecated use type() instead.
     */
    isa: Assertions.Type;
    /**
     * @deprecated use type() instead.
     */
    isA: Assertions.Type;

    /**
     * @deprecated use has() instead.
     */
    hasFields: Assertions.Match;
    /**
     * @deprecated use has() instead.
     */
    includes: Assertions.Match;
    /**
     * @deprecated use has() instead.
     */
    include: Assertions.Match;
    /**
     * @deprecated use has() instead.
     */
    contains: Assertions.Match;
}

declare namespace Assertions {
    type Basic = (obj: any, message?: string, extra?: Options.Assert) => boolean;
    interface Throws {
        (fn?: (...args: any[]) => any, expectedError?: any, message?: string, extra?: Options.Assert): boolean;
        (fn?: (...args: any[]) => any, expectedError?: any, extra?: Options.Assert): boolean;
    }
    type DoesNotThrow = (fn?: (...args: any[]) => any, message?: string, extra?: Options.Assert) => boolean;
    type Equal = (found: any, wanted: any, message?: string, extra?: Options.Assert) => boolean;
    type NotEqual = (found: any, notWanted: any, message?: string, extra?: Options.Assert) => boolean;
    type Match = (
        found: any,
        pattern: any,
        message?: string,
        extra?: Options.Assert,
    ) => boolean;
    type Type = (
        found: any,
        type: string | (new (...args: any[]) => object),
        message?: string,
        extra?: Options.Assert,
    ) => boolean;
}

declare namespace Options {
    interface Bag {
        [key: string]: any;
    }

    interface Pragma {
        [key: string]: boolean;
    }

    interface Assert extends Bag {
        todo?: boolean | string | undefined;
        skip?: boolean | string | undefined;
        diagnostic?: boolean | undefined;
    }

    interface Spawn extends Assert {
        bail?: boolean | undefined;
        timeout?: number | undefined;
    }

    interface Test extends Assert {
        timeout?: number | undefined;
        bail?: boolean | undefined;
        autoend?: boolean | undefined;
        buffered?: boolean | undefined;
        jobs?: number | undefined;
        grep?: RegExp[] | undefined;
        only?: boolean | undefined;
        runOnly?: boolean | undefined;
    }
}

declare global {
    namespace Tap {
        class Test extends DeprecatedAssertionSynonyms {
            constructor(options?: Options.Test);

            /**
             * Run the supplied function when t.end() is called, or when t.plan is met.
             *
             * This function can return a promise to support async actions.
             * @see {@link https://node-tap.org/docs/api/test-lifecycle-events}
             * @param fn
             */
            teardown(fn: () => void | Promise<void>): void;

            /**
             * Fail the test with a timeout error if it goes longer than the specified number of ms.
             *
             * Call t.setTimeout(0) to remove the timeout setting.
             *
             * When this is called on the top-level tap object, it sets the runners timeout value
             * to the specified value for that test process as well.
             */
            setTimeout(n: number): void;

            /**
             * Call the end() method on all child tests, and then on this one.
             */
            endAll(): void;

            /**
             * Automatically end() the test on the next turn of the event loop after its internal queue is drained.
             */
            autoend(value: boolean): void;

            /**
             * When an uncaught exception is raised in the context of a test,
             * then this method is used to handle the error. It fails the test,
             * and prints out appropriate information about the stack, message, current test,
             * and so on.
             *
             * Generally, you never need to worry about this directly.
             */
            threw(error: Error, extra?: Error, proxy?: Test): void;

            /**
             * Sets a pragma switch for a set of boolean keys in the argument.
             *
             * The only pragma currently supported by the TAP parser is strict,
             * which tells the parser to treat non-TAP output as a failure.
             */
            pragma(set: Options.Pragma): void;

            /**
             * Specify that a given number of tests are going to be run.
             *
             * This may only be called before running any asserts or child tests.
             */
            plan(n: number, comment?: string): void;

            /**
             * Call when tests are done running. This is not necessary if t.plan() was used,
             * or if the test function returns a Promise.
             *
             * If you call t.end() explicitly more than once, an error will be raised.
             */
            end(): void;

            /**
             * Create a subtest.
             *
             * Returns a Promise which resolves with the parent when the child test is completed.
             * @param name - The name for this subtest.
             * @param extra - Any options this subtest should adhere to.
             * @param cb - The function containing the sub-tests. If not present, the test
             * will automatically be marked as a todo.
             */
            test(name: string, extra?: Options.Test, cb?: (t: Test) => Promise<void> | void): Promise<void>;

            /**
             * Create a subtest.
             *
             * Returns a Promise which resolves with the parent when the child test is completed.
             * @param name - The name for this subtest.
             * @param cb - The function containing the sub-tests. If not present, the test
             * will automatically be marked as a todo.
             */
            test(name: string, cb?: (t: Test) => Promise<void> | void): Promise<void>;

            /**
             * Exactly the same as t.test(), but adds todo: true in the options.
             */
            todo(name: string, cb?: (t: Test) => Promise<void> | void): Promise<void>;
            todo(name: string, extra?: Options.Test, cb?: (t: Test) => Promise<void> | void): Promise<void>;

            /**
             * Exactly the same as t.test(), but adds skip: true in the options.
             */
            skip(name: string, cb?: (t: Test) => Promise<void> | void): Promise<void>;
            skip(name: string, extra?: Options.Test, cb?: (t: Test) => Promise<void> | void): Promise<void>;

            /**
             * Exactly the same as t.test(), but adds only: true in the options.
             *
             * @see {@link https://node-tap.org/docs/api/only}
             */
            only(name: string, cb?: (t: Test) => Promise<void> | void): Promise<void>;
            only(name: string, extra?: Options.Test, cb?: (t: Test) => Promise<void> | void): Promise<void>;

            current(): Test;

            /**
             * Parse standard input as if it was a child test named /dev/stdin.
             *
             * Returns a Promise which resolves with the parent when the input stream is
             * completed.
             */
            stdin(name: string, extra?: Options.Bag): Promise<void>;

            /**
             * Sometimes, instead of running a child test directly inline, you might
             * want to run a TAP producting test as a child process, and treat its
             * standard output as the TAP stream.
             *
             * Returns a Promise which resolves with the parent when the child process
             * is completed.
             *
             * @see {@link https://node-tap.org/docs/api/advanced/#tspawncommand-arguments-options-name}
             */
            spawn(cmd: string, args: string, options?: Options.Bag, name?: string, extra?: Options.Spawn): Promise<void>;

            done(): void;

            /**
             * Return true if everything so far is ok.
             */
            passing(): boolean;

            pass(message?: string, extra?: Options.Assert): boolean;

            fail(message?: string, extra?: Options.Assert): boolean;

            /**
             * This is used for creating assertion methods on the Test class.
             *
             * @param name The name of the assertion method.
             * @param length The amount of arguments the assertion has.
             * @param fn The code to be ran when this assertion is called.
             *
             * @example
             * // Add an assertion that a string is in Title Case
             * // It takes one argument (the string to be tested)
             * t.Test.prototype.addAssert('titleCase', 1, function (str, message, extra) {
             *     message = message || 'should be in Title Case'
             *     // the string in Title Case
             *     const tc = str.toLowerCase().replace(/\b./, match => match.toUpperCase())
             *     // should always return another assert call, or
             *     // this.pass(message) or this.fail(message, extra)
             *     return this.equal(str, tc, message, extra)
             * })
             *
             * t.titleCase('This Passes')
             * t.titleCase('however, tHis tOTaLLy faILS')
             */
            addAssert(name: string, length: number, fn: (...args: any[]) => boolean): boolean;

            comment(message: string, ...args: any[]): void;

            /**
             * Use this when things are severely broken, and cannot be reasonably handled. Immediately terminates the entire test run.
             */
            bailout(reason?: string): void;

            /**
             * Run the provided function once before any tests are ran.
             * If this function returns a promise, it will wait for the promise to
             * resolve, before running any tests.
             */
            before(fn: () => any): void;

            /**
             * Before any child test (or any children of any child tests, etc.) the
             * supplied function is called with the test object that it's prefixing.
             *
             * If the function returns a Promise, then that is used as the indication of
             * doneness. Thus, async functions automatically end when all of their
             * awaited Promises are complete.
             */
            beforeEach(fn: (() => any) | ((childTest: any) => any)): void;

            /**
             * This is called after each child test (or any children of any child tests,
             * on down the tree). Like beforeEach, it's called with the child test
             * object, and can return a Promise to perform asynchronous operations.
             */
            afterEach(fn: (() => any) | ((childTest: any) => any)): void;

            /**
             * Formats a string from a snapshot. This can be used to remove variables
             * and replace them with sentinel values.
             *
             * @see {@link https://node-tap.org/docs/api/snapshot-testing/}
             *
             * @example
             * t.cleanSnapshot = s => {
             *     return s.replace(/ time=[0-9]+$/g, ' time={time}')
             * }
             */
            cleanSnapshot: (s: string) => string;

            /**
             * Formats the data argument of any snapshot into this string.
             *
             * @see {@link https://node-tap.org/docs/api/snapshot-testing/}
             *
             * @example t.formatSnapshot = object => JSON.stringify(object)
             */
            formatSnapshot: (obj: any) => string;

            /**
             * Create a fixture object to specify hard links and symbolic links
             * in the fixture definition object passed to t.testdir().
             */
            fixture(type: "symlink" | "link", content: string): Fixture.Instance;
            fixture(type: "file", content: string | Buffer): Fixture.Instance;
            fixture(type: "dir", content: Fixture.Spec): Fixture.Instance;

            /**
             * Create a fresh directory with the specified fixtures,
             * which is deleted on test teardown. Returns the directory name.
             *
             * @see {@link https://node-tap.org/docs/api/fixtures/}
             */
            testdir(spec?: Fixture.Spec): string;

            readonly testdirName: string;

            /**
             * This is an object which is inherited by child tests, and is a handy place to put
             * various contextual information.
             *
             * t.context will only be inherited by child tests if it is an object.
             *
             * This typically will be used with lifecycle events, such as beforeEach or afterEach.
             * @see {@link https://node-tap.org/docs/api/test-lifecycle-events}
             */
            context: any;

            /**
             * This is a read-only property set to the string value provided
             * as the name argument to t.test(), or an empty string if no name is provided.
             */
            readonly name: string;

            /**
             * Set to true to only run child tests that have only: true
             * set in their options (or are run with t.only(), which is the same thing).
             */
            runOnly: boolean;

            /**
             * If you set the t.jobs property to a number greater than 1,
             * then it will enable parallel execution of all of this test's children.
             */
            jobs: number;

            // TODO: Investigate whether - using generics - this could
            // return the type of module provided unioned with the mocks?

            /**
             * Takes a path to a module and returns the specified module in context of the
             * mocks provided.
             *
             * @see {@link https://node-tap.org/docs/api/mocks/}
             *
             * @param modulePath - The string path to the module that is being required,
             * relative to the current test file.
             * @param mocks - The key/value pairs of paths (relative to the current test)
             * and the value that should be returned when anything in the loaded module requires
             * those modules.
             */
            mock(modulePath: string, mocks: Record<string, any>): any;

            // ----
            // Assertions below this line!
            // ----

            /**
             * Verifies that the object is truthy.
             */
            ok: Assertions.Basic;

            /**
             * Verifies that the object is not truthy.
             */
            notOk: Assertions.Basic;

            /**
             * If the object is an error, then the assertion fails.
             *
             * Note: if an error is encountered unexpectedly,
             * it's often better to simply throw it. The Test object will handle this as a failure.
             */
            error: Assertions.Basic;

            /**
             * Verify that the event emitter emits the named event before the end of the test.
             */
            emits(eventEmitter: EventEmitter, event: string, message?: string, extra?: Options.Assert): void;

            /**
             * Verifies that the promise (or promise-returning function) rejects.
             *
             * If an expected error is provided,
             * then also verify that the rejection matches the expected error.
             */
            rejects(
                promiseOrFn: Promise<any> | ((...args: any[]) => Promise<any>),
                expectedError: any,
                message?: string,
                extra?: Options.Assert,
            ): Promise<void>;
            rejects(
                promiseOrFn: Promise<any> | ((...args: any[]) => Promise<any>),
                message?: string,
                extra?: Options.Assert,
            ): Promise<void>;

            /**
             * Verifies that the promise (or promise-returning function) resolves,
             * making no expectation about the value that the promise resolves to.
             */
            resolves(
                promiseOrFn: Promise<any> | ((...args: any[]) => Promise<any>),
                message?: string,
                extra?: Options.Assert,
            ): Promise<void>;

            /**
             * Verifies that the promise (or promise-returning function) resolves
             * and that the value of the promise matches the wanted pattern using t.match.
             *
             * @see match
             */
            resolveMatch(
                promiseOrFn: Promise<any> | ((...args: any[]) => Promise<any>),
                wanted: any,
                message?: string,
                extra?: Options.Assert,
            ): Promise<void>;

            /**
             * Verifies that the promise (or promise-returning function) resolves, and
             * furthermore that the value of the promise matches the snapshot.
             *
             * Note: since promises always reject and resolve asynchronously, this
             * assertion is implemented asynchronously. As such, it does not return a
             * boolean to indicate its passing status. Instead, it returns a Promise
             * that resolves when it is completed.
             */
            resolveMatchSnapshot(
                promiseOrFn: Promise<any> | ((...args: any[]) => Promise<any>),
                message?: string,
                extra?: Options.Assert,
            ): Promise<void>;

            // WARN: This is not described in the documentation formally anymore?

            /**
             * Checks if the output in data matches the data with this snapshot name.
             *
             * @see {@link https://node-tap.org/docs/api/snapshot-testing/}
             */
            matchSnapshot(output: any, message?: string, extra?: Options.Assert): boolean;

            /**
             * Expect the function to throw an error.
             * If an expected error is provided, then also verify that the thrown error
             * matches the expected error.
             *
             * If the function has a name, and the message is not provided,
             * then the function name will be used as the message.
             *
             * If the function is not provided, then this will be treated as a todo test.
             */
            throws: Assertions.Throws;

            /**
             * Verify that the provided function does not throw.
             *
             * If the function has a name, and the message is not provided,
             * then the function name will be used as the message.
             *
             * If the function is not provided, then this will be treated as a todo test.
             *
             * Note: If an error is encountered unexpectedly,
             * it's often better to simply throw it. The Test object will handle this as a failure.
             */
            doesNotThrow: Assertions.DoesNotThrow;

            /**
             * Expect the function to throw an uncaught exception at some point in the future,
             * before the test ends.
             * If the test ends without having thrown the expected error, then the test fails.
             *
             * If the error is thrown synchronously, or within a promise,
             * then the t.throws() or t.rejects() methods are more appropriate.
             *
             * If called multiple times, then the uncaught exception errors must be emitted in the order called.
             */
            expectUncaughtException(
                fn?: (...args: any[]) => any,
                expectedError?: Error,
                message?: string,
                extra?: Options.Assert,
            ): boolean;

            /**
             * Verify that the object found is exactly the same (that is, ===)
             * to the object that is wanted.
             */
            equal: Assertions.Equal;

            /**
             * Inverse of t.equal().
             *
             * Verify that the object found is not exactly the same (that is, !==)
             * as the object that is wanted.
             */
            not: Assertions.NotEqual;

            /**
             * Verify that the found object is deeply equivalent to the wanted object.
             *
             * Uses non-strict equality for scalars (ie, ==).
             */
            same: Assertions.Equal;

            /**
             * Inverse of t.same().
             *
             * Verify that the found object is not deeply equivalent to the unwanted object.
             * Uses non-strict inequality (ie, !=) for scalars.
             */
            notSame: Assertions.NotEqual;

            /**
             * Strict version of t.same().
             *
             * Verify that the found object is deeply equivalent to the wanted object.
             * Uses strict equality for scalars (ie, ===).
             */
            strictSame: Assertions.Equal;

            /**
             * Inverse of t.strictSame().
             *
             * Verify that the found object is not deeply equivalent to the unwanted object.
             * Uses strict equality for scalars (ie, ===).
             */
            strictNotSame: Assertions.NotEqual;

            /**
             * Verify that the found object contains all of the provided fields,
             * and that they are of the same type and value as the pattern provided.
             *
             * @see has
             */
            hasStrict: Assertions.Match;

            /**
             * Verify that the found object matches the pattern provided.
             *
             * If pattern is a regular expression, and found is a string, then verify that the string matches the pattern.
             * If the pattern is a string, and found is a string, then verify that the pattern occurs within the string somewhere.
             * If pattern is an object, then verify that all of the (enumerable) fields in the pattern match the corresponding fields in the object using this same algorithm.
             *
             * This is useful when you want to verify that an object has a certain set of required fields, but additional fields are ok.
             *
             * @example {x:/a[sdf]{3}/} would successfully match {x:'asdf',y:'z'}.
             */
            match: Assertions.Match;

            /**
             * Verify that the found object contains all of the provided fields, and that they coerce to the same values, even if the types do not match.
             *
             * This does not do advanced/loose matching based on constructor, regexp patterns, and so on, like t.match() does.
             * You may specify key: undefined in the pattern to ensure that a field is not defined in the found object,
             * but it will not differentiate between a missing property and a property set to undefined.
             */
            has: Assertions.Match;

            /**
             * Verify that the found object contains the provided property and that it is not undefined. Searches the prototype chain as well as "own" properties.
             *
             * @example t.hasProp({ a: 1, b: 2 }, 'a') would succeed, while both t.hasProp({ a: 1, b: 2 }, 'c') and t.hasProp({ a: undefined, b: 2 }, 'a') would fail.
             */
            hasProp: Assertions.Match;

            /**
             * Verifies that the object found contains each of the property names in propertyList, and that they are not undefined. Searches prototype chain as well as "own" properties.
             *
             * @example t.hasProps({ a: 1, b: 2 }, ['a', 'b']) would succeed, while both t.hasProp({ a: 1, b: 2 }, ['a', 'c']) and t.hasProp({ a: undefined, b: 2 }, ['a', 'b']) would fail.
             */
            hasProps: Assertions.Match;

            /**
             * Inverse of match().
             *
             * Verify that the found object does not match the pattern provided.
             */
            notMatch: Assertions.Match;

            /**
             * Verify that the object is of the type provided.
             *
             * Type can be a string that matches the typeof value of the object,
             * or the string name of any constructor in the object's prototype chain,
             * or a constructor function in the object's prototype chain.
             *
             * @example type(new Date(), "object") - true
             * @example type(new Date(), "Date") - true
             * @example type(new Date(), Date) - true
             */
            type: Assertions.Type;
        }

        namespace Fixture {
            interface Instance {
                type: "symlink" | "link" | "file" | "dir";
                content: string | Buffer | Spec;
            }

            interface Spec {
                [pathname: string]: string | Buffer | Instance | Spec;
            }
        }

        interface MochaIt {
            (name?: string, fn?: (a: any) => any): void;
            skip: (name?: string, fn?: (a: any) => any) => void;
            todo: (name?: string, fn?: (a: any) => any) => void;
        }

        interface Mocha {
            it: MochaIt;
            describe: (name?: string, fn?: (a: any) => any) => void;
            global: () => void;
        }

        // Little hack to simulate the Test class on the tap export
        interface TestConstructor {
            new(options?: Options.Test): Test;
            prototype: Test;
        }

        class Tap extends Test {
            Test: TestConstructor;
            mocha: Mocha;
            mochaGlobals: () => void;
        }
    }
}

declare const tap: Tap.Tap;
export = tap;
