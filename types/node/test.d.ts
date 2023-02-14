/**
 * The `node:test` module provides a standalone testing module.
 * @see [source](https://github.com/nodejs/node/blob/v18.x/lib/test.js)
 */
declare module 'node:test' {
    /**
     * Programmatically start the test runner.
     * @since v18.9.0
     * @param options Configuration options for running tests.
     * @returns A {@link TapStream} that emits events about the test execution.
     */
    function run(options?: RunOptions): TapStream;

    /**
     * The `test()` function is the value imported from the test module. Each invocation of this
     * function results in the creation of a test point in the TAP output.
     *
     * The {@link TestContext} object passed to the fn argument can be used to perform actions
     * related to the current test. Examples include skipping the test, adding additional TAP
     * diagnostic information, or creating subtests.
     *
     * `test()` returns a {@link Promise} that resolves once the test completes. The return value
     * can usually be discarded for top level tests. However, the return value from subtests should
     * be used to prevent the parent test from finishing first and cancelling the subtest as shown
     * in the following example.
     *
     * ```js
     * test('top level test', async (t) => {
     *   // The setTimeout() in the following subtest would cause it to outlive its
     *   // parent test if 'await' is removed on the next line. Once the parent test
     *   // completes, it will cancel any outstanding subtests.
     *   await t.test('longer running subtest', async (t) => {
     *     return new Promise((resolve, reject) => {
     *       setTimeout(resolve, 1000);
     *     });
     *   });
     * });
     * ```
     * @since v18.0.0
     * @param name The name of the test, which is displayed when reporting test results.
     *    Default: The `name` property of fn, or `'<anonymous>'` if `fn` does not have a name.
     * @param options Configuration options for the test
     * @param fn The function under test. The first argument to this function is a
     *    {@link TestContext} object. If the test uses callbacks, the callback function is
     *    passed as the second argument. Default: A no-op function.
     * @returns A {@link Promise} resolved with `undefined` once the test completes.
     */
    function test(name?: string, fn?: TestFn): Promise<void>;
    function test(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function test(options?: TestOptions, fn?: TestFn): Promise<void>;
    function test(fn?: TestFn): Promise<void>;

    /**
     * @since v18.6.0
     * @param name The name of the suite, which is displayed when reporting suite results.
     *    Default: The `name` property of fn, or `'<anonymous>'` if `fn` does not have a name.
     * @param options Configuration options for the suite
     * @param fn The function under suite. Default: A no-op function.
     */
    function describe(name?: string, options?: TestOptions, fn?: SuiteFn): void;
    function describe(name?: string, fn?: SuiteFn): void;
    function describe(options?: TestOptions, fn?: SuiteFn): void;
    function describe(fn?: SuiteFn): void;
    namespace describe {
        // Shorthand for skipping a suite, same as `describe([name], { skip: true }[, fn])`.
        function skip(name?: string, options?: TestOptions, fn?: SuiteFn): void;
        function skip(name?: string, fn?: SuiteFn): void;
        function skip(options?: TestOptions, fn?: SuiteFn): void;
        function skip(fn?: SuiteFn): void;

        // Shorthand for marking a suite as `TODO`, same as `describe([name], { todo: true }[, fn])`.
        function todo(name?: string, options?: TestOptions, fn?: SuiteFn): void;
        function todo(name?: string, fn?: SuiteFn): void;
        function todo(options?: TestOptions, fn?: SuiteFn): void;
        function todo(fn?: SuiteFn): void;
    }

    /**
     * @since v18.6.0
     * @param name The name of the test, which is displayed when reporting test results.
     *    Default: The `name` property of fn, or `'<anonymous>'` if `fn` does not have a name.
     * @param options Configuration options for the test
     * @param fn The function under test. If the test uses callbacks, the callback function is
     *    passed as the second argument. Default: A no-op function.
     */
    function it(name?: string, options?: TestOptions, fn?: ItFn): void;
    function it(name?: string, fn?: ItFn): void;
    function it(options?: TestOptions, fn?: ItFn): void;
    function it(fn?: ItFn): void;
    namespace it {
        // Shorthand for skipping a test, same as `it([name], { skip: true }[, fn])`.
        function skip(name?: string, options?: TestOptions, fn?: ItFn): void;
        function skip(name?: string, fn?: ItFn): void;
        function skip(options?: TestOptions, fn?: ItFn): void;
        function skip(fn?: ItFn): void;

        // Shorthand for marking a test as `TODO`, same as `it([name], { todo: true }[, fn])`.
        function todo(name?: string, options?: TestOptions, fn?: ItFn): void;
        function todo(name?: string, fn?: ItFn): void;
        function todo(options?: TestOptions, fn?: ItFn): void;
        function todo(fn?: ItFn): void;
    }

    /**
     * The type of a function under test. The first argument to this function is a
     * {@link TestContext} object. If the test uses callbacks, the callback function is passed as
     * the second argument.
     */
    type TestFn = (t: TestContext, done: (result?: any) => void) => any;

    /**
     * The type of a function under Suite.
     * If the test uses callbacks, the callback function is passed as an argument
     */
    type SuiteFn = (done: (result?: any) => void) => void;

    /**
     * The type of a function under test.
     * If the test uses callbacks, the callback function is passed as an argument
     */
    type ItFn = (done: (result?: any) => void) => any;

    interface RunOptions {
        /**
         * If a number is provided, then that many files would run in parallel.
         * If truthy, it would run (number of cpu cores - 1) files in parallel.
         * If falsy, it would only run one file at a time.
         * If unspecified, subtests inherit this value from their parent.
         * @default true
         */
        concurrency?: number | boolean | undefined;

        /**
         * An array containing the list of files to run.
         * If unspecified, the test runner execution model will be used.
         */
        files?: readonly string[] | undefined;

        /**
         * Allows aborting an in-progress test execution.
         * @default undefined
         */
        signal?: AbortSignal | undefined;

        /**
         * A number of milliseconds the test will fail after.
         * If unspecified, subtests inherit this value from their parent.
         * @default Infinity
         */
        timeout?: number | undefined;

        /**
         * Sets inspector port of test child process.
         * If a nullish value is provided, each process gets its own port,
         * incremented from the primary's `process.debugPort`.
         */
        inspectPort?: number | (() => number) | undefined;
    }

    /**
     * A successful call of the `run()` method will return a new `TapStream` object,
     * streaming a [TAP](https://testanything.org/) output.
     * `TapStream` will emit events in the order of the tests' definitions.
     * @since v18.9.0
     */
    interface TapStream extends NodeJS.ReadableStream {
        addListener(event: 'test:diagnostic', listener: (message: string) => void): this;
        addListener(event: 'test:fail', listener: (data: TestFail) => void): this;
        addListener(event: 'test:pass', listener: (data: TestPass) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        emit(event: 'test:diagnostic', message: string): boolean;
        emit(event: 'test:fail', data: TestFail): boolean;
        emit(event: 'test:pass', data: TestPass): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'test:diagnostic', listener: (message: string) => void): this;
        on(event: 'test:fail', listener: (data: TestFail) => void): this;
        on(event: 'test:pass', listener: (data: TestPass) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: 'test:diagnostic', listener: (message: string) => void): this;
        once(event: 'test:fail', listener: (data: TestFail) => void): this;
        once(event: 'test:pass', listener: (data: TestPass) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'test:diagnostic', listener: (message: string) => void): this;
        prependListener(event: 'test:fail', listener: (data: TestFail) => void): this;
        prependListener(event: 'test:pass', listener: (data: TestPass) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'test:diagnostic', listener: (message: string) => void): this;
        prependOnceListener(event: 'test:fail', listener: (data: TestFail) => void): this;
        prependOnceListener(event: 'test:pass', listener: (data: TestPass) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    }

    interface TestFail {
        /**
         * The test duration.
         */
        duration: number;

        /**
         * The failure casing test to fail.
         */
        error: Error;

        /**
         * The test name.
         */
        name: string;

        /**
         * The ordinal number of the test.
         */
        testNumber: number;

        /**
         * Present if `context.todo` is called.
         */
        todo?: string;

        /**
         * Present if `context.skip` is called.
         */
        skip?: string;
    }

    interface TestPass {
        /**
         * The test duration.
         */
        duration: number;

        /**
         * The test name.
         */
        name: string;

        /**
         * The ordinal number of the test.
         */
        testNumber: number;

        /**
         * Present if `context.todo` is called.
         */
        todo?: string;

        /**
         * Present if `context.skip` is called.
         */
        skip?: string;
    }

    /**
     * An instance of `TestContext` is passed to each test function in order to interact with the
     * test runner. However, the `TestContext` constructor is not exposed as part of the API.
     * @since v18.0.0
     */
    interface TestContext {
        /**
         * This function is used to create a hook running before each subtest of the current test.
         * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
         *    the second argument. Default: A no-op function.
         * @param options Configuration options for the hook.
         * @since v18.8.0
         */
        beforeEach: typeof beforeEach;

        /**
         * This function is used to create a hook that runs after the current test finishes.
         * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
         *    the second argument. Default: A no-op function.
         * @param options Configuration options for the hook.
         * @since v18.13.0
         */
        after: typeof after;

        /**
         * This function is used to create a hook running after each subtest of the current test.
         * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
         *    the second argument. Default: A no-op function.
         * @param options Configuration options for the hook.
         * @since v18.8.0
         */
        afterEach: typeof afterEach;

        /**
         * This function is used to write TAP diagnostics to the output. Any diagnostic information is
         * included at the end of the test's results. This function does not return a value.
         * @param message Message to be displayed as a TAP diagnostic.
         * @since v18.0.0
         */
        diagnostic(message: string): void;

        /**
         * The name of the test.
         * @since v18.8.0
         */
        readonly name: string;

        /**
         * If `shouldRunOnlyTests` is truthy, the test context will only run tests that have the `only`
         * option set. Otherwise, all tests are run. If Node.js was not started with the `--test-only`
         * command-line option, this function is a no-op.
         * @param shouldRunOnlyTests Whether or not to run `only` tests.
         * @since v18.0.0
         */
        runOnly(shouldRunOnlyTests: boolean): void;

        /**
         * Can be used to abort test subtasks when the test has been aborted.
         * @since v18.7.0
         */
        readonly signal: AbortSignal;

        /**
         * This function causes the test's output to indicate the test as skipped. If `message` is
         * provided, it is included in the TAP output. Calling `skip()` does not terminate execution of
         * the test function. This function does not return a value.
         * @param message Optional skip message to be displayed in TAP output.
         * @since v18.0.0
         */
        skip(message?: string): void;

        /**
         * This function adds a `TODO` directive to the test's output. If `message` is provided, it is
         * included in the TAP output. Calling `todo()` does not terminate execution of the test
         * function. This function does not return a value.
         * @param message Optional `TODO` message to be displayed in TAP output.
         * @since v18.0.0
         */
        todo(message?: string): void;

        /**
         * This function is used to create subtests under the current test. This function behaves in
         * the same fashion as the top level {@link test} function.
         * @since v18.0.0
         * @param name The name of the test, which is displayed when reporting test results.
         *    Default: The `name` property of fn, or `'<anonymous>'` if `fn` does not have a name.
         * @param options Configuration options for the test
         * @param fn The function under test. This first argument to this function is a
         *    {@link TestContext} object. If the test uses callbacks, the callback function is
         *    passed as the second argument. Default: A no-op function.
         * @returns A {@link Promise} resolved with `undefined` once the test completes.
         */
        test: typeof test;
    }

    interface TestOptions {
        /**
         * If a number is provided, then that many tests would run in parallel.
         * If truthy, it would run (number of cpu cores - 1) tests in parallel.
         * For subtests, it will be `Infinity` tests in parallel.
         * If falsy, it would only run one test at a time.
         * If unspecified, subtests inherit this value from their parent.
         * @default false
         */
        concurrency?: number | boolean | undefined;

        /**
         * If truthy, and the test context is configured to run `only` tests, then this test will be
         * run. Otherwise, the test is skipped.
         * @default false
         */
        only?: boolean | undefined;

        /**
         * Allows aborting an in-progress test.
         * @since v18.8.0
         */
        signal?: AbortSignal | undefined;

        /**
         * If truthy, the test is skipped. If a string is provided, that string is displayed in the
         * test results as the reason for skipping the test.
         * @default false
         */
        skip?: boolean | string | undefined;

        /**
         * A number of milliseconds the test will fail after. If unspecified, subtests inherit this
         * value from their parent.
         * @default Infinity
         * @since v18.7.0
         */
        timeout?: number | undefined;

        /**
         * If truthy, the test marked as `TODO`. If a string is provided, that string is displayed in
         * the test results as the reason why the test is `TODO`.
         * @default false
         */
        todo?: boolean | string | undefined;
    }

    /**
     * This function is used to create a hook running before running a suite.
     * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
     *    the second argument. Default: A no-op function.
     * @param options Configuration options for the hook.
     * @since v18.8.0
     */
    function before(fn?: HookFn, options?: HookOptions): void;

    /**
     * This function is used to create a hook running after running a suite.
     * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
     *    the second argument. Default: A no-op function.
     * @param options Configuration options for the hook.
     * @since v18.8.0
     */
    function after(fn?: HookFn, options?: HookOptions): void;

    /**
     * This function is used to create a hook running before each subtest of the current suite.
     * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
     *    the second argument. Default: A no-op function.
     * @param options Configuration options for the hook.
     * @since v18.8.0
     */
    function beforeEach(fn?: HookFn, options?: HookOptions): void;

    /**
     * This function is used to create a hook running after each subtest of the current test.
     * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
     *    the second argument. Default: A no-op function.
     * @param options Configuration options for the hook.
     * @since v18.8.0
     */
    function afterEach(fn?: HookFn, options?: HookOptions): void;

    /**
     * The hook function. If the hook uses callbacks, the callback function is passed as the
     * second argument.
     */
    type HookFn = (done: (result?: any) => void) => any;

    /**
     * Configuration options for hooks.
     * @since v18.8.0
     */
    interface HookOptions {
        /**
         * Allows aborting an in-progress hook.
         */
        signal?: AbortSignal | undefined;

        /**
         * A number of milliseconds the hook will fail after. If unspecified, subtests inherit this
         * value from their parent.
         * @default Infinity
         */
        timeout?: number | undefined;
    }

    export { test as default, run, test, describe, it, before, after, beforeEach, afterEach };
}
