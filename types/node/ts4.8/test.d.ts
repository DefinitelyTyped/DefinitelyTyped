/**
 * The `node:test` module facilitates the creation of JavaScript tests.
 * To access it:
 *
 * ```js
 * import test from 'node:test';
 * ```
 *
 * This module is only available under the `node:` scheme. The following will not
 * work:
 *
 * ```js
 * import test from 'test';
 * ```
 *
 * Tests created via the `test` module consist of a single function that is
 * processed in one of three ways:
 *
 * 1. A synchronous function that is considered failing if it throws an exception,
 * and is considered passing otherwise.
 * 2. A function that returns a `Promise` that is considered failing if the`Promise` rejects, and is considered passing if the `Promise` resolves.
 * 3. A function that receives a callback function. If the callback receives any
 * truthy value as its first argument, the test is considered failing. If a
 * falsy value is passed as the first argument to the callback, the test is
 * considered passing. If the test function receives a callback function and
 * also returns a `Promise`, the test will fail.
 *
 * The following example illustrates how tests are written using the`test` module.
 *
 * ```js
 * test('synchronous passing test', (t) => {
 *   // This test passes because it does not throw an exception.
 *   assert.strictEqual(1, 1);
 * });
 *
 * test('synchronous failing test', (t) => {
 *   // This test fails because it throws an exception.
 *   assert.strictEqual(1, 2);
 * });
 *
 * test('asynchronous passing test', async (t) => {
 *   // This test passes because the Promise returned by the async
 *   // function is not rejected.
 *   assert.strictEqual(1, 1);
 * });
 *
 * test('asynchronous failing test', async (t) => {
 *   // This test fails because the Promise returned by the async
 *   // function is rejected.
 *   assert.strictEqual(1, 2);
 * });
 *
 * test('failing test using Promises', (t) => {
 *   // Promises can be used directly as well.
 *   return new Promise((resolve, reject) => {
 *     setImmediate(() => {
 *       reject(new Error('this will cause the test to fail'));
 *     });
 *   });
 * });
 *
 * test('callback passing test', (t, done) => {
 *   // done() is the callback function. When the setImmediate() runs, it invokes
 *   // done() with no arguments.
 *   setImmediate(done);
 * });
 *
 * test('callback failing test', (t, done) => {
 *   // When the setImmediate() runs, done() is invoked with an Error object and
 *   // the test fails.
 *   setImmediate(() => {
 *     done(new Error('callback failure'));
 *   });
 * });
 * ```
 *
 * If any tests fail, the process exit code is set to `1`.
 * @since v18.0.0, v16.17.0
 * @see [source](https://github.com/nodejs/node/blob/v20.4.0/lib/test.js)
 */
declare module "node:test" {
    import { Readable } from "node:stream";
    import { AsyncResource } from "node:async_hooks";
    /**
     * ```js
     * import { tap } from 'node:test/reporters';
     * import { run } from 'node:test';
     * import process from 'node:process';
     * import path from 'node:path';
     *
     * run({ files: [path.resolve('./tests/test.js')] })
     *   .compose(tap)
     *   .pipe(process.stdout);
     * ```
     * @since v18.9.0, v16.19.0
     * @param options Configuration options for running tests. The following properties are supported:
     */
    function run(options?: RunOptions): TestsStream;
    /**
     * The `test()` function is the value imported from the `test` module. Each
     * invocation of this function results in reporting the test to the `TestsStream`.
     *
     * The `TestContext` object passed to the `fn` argument can be used to perform
     * actions related to the current test. Examples include skipping the test, adding
     * additional diagnostic information, or creating subtests.
     *
     * `test()` returns a `Promise` that resolves once the test completes.
     * if `test()` is called within a `describe()` block, it resolve immediately.
     * The return value can usually be discarded for top level tests.
     * However, the return value from subtests should be used to prevent the parent
     * test from finishing first and cancelling the subtest
     * as shown in the following example.
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
     *
     * The `timeout` option can be used to fail the test if it takes longer than`timeout` milliseconds to complete. However, it is not a reliable mechanism for
     * canceling tests because a running test might block the application thread and
     * thus prevent the scheduled cancellation.
     * @since v18.0.0, v16.17.0
     * @param [name='The name'] The name of the test, which is displayed when reporting test results.
     * @param options Configuration options for the test. The following properties are supported:
     * @param [fn='A no-op function'] The function under test. The first argument to this function is a {@link TestContext} object. If the test uses callbacks, the callback function is passed as the
     * second argument.
     * @return Resolved with `undefined` once the test completes, or immediately if the test runs within {@link describe}.
     */
    function test(name?: string, fn?: TestFn): Promise<void>;
    function test(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function test(options?: TestOptions, fn?: TestFn): Promise<void>;
    function test(fn?: TestFn): Promise<void>;
    namespace test {
        export { after, afterEach, before, beforeEach, describe, it, mock, only, run, skip, test, todo };
    }
    /**
     * The `describe()` function imported from the `node:test` module. Each
     * invocation of this function results in the creation of a Subtest.
     * After invocation of top level `describe` functions,
     * all top level tests and suites will execute.
     * @param [name='The name'] The name of the suite, which is displayed when reporting test results.
     * @param options Configuration options for the suite. supports the same options as `test([name][, options][, fn])`.
     * @param [fn='A no-op function'] The function under suite declaring all subtests and subsuites. The first argument to this function is a {@link SuiteContext} object.
     * @return Immediately fulfilled with `undefined`.
     */
    function describe(name?: string, options?: TestOptions, fn?: SuiteFn): Promise<void>;
    function describe(name?: string, fn?: SuiteFn): Promise<void>;
    function describe(options?: TestOptions, fn?: SuiteFn): Promise<void>;
    function describe(fn?: SuiteFn): Promise<void>;
    namespace describe {
        /**
         * Shorthand for skipping a suite, same as `describe([name], { skip: true }[, fn])`.
         */
        function skip(name?: string, options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function skip(name?: string, fn?: SuiteFn): Promise<void>;
        function skip(options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function skip(fn?: SuiteFn): Promise<void>;
        /**
         * Shorthand for marking a suite as `TODO`, same as `describe([name], { todo: true }[, fn])`.
         */
        function todo(name?: string, options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function todo(name?: string, fn?: SuiteFn): Promise<void>;
        function todo(options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function todo(fn?: SuiteFn): Promise<void>;
        /**
         * Shorthand for marking a suite as `only`, same as `describe([name], { only: true }[, fn])`.
         * @since v18.15.0
         */
        function only(name?: string, options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function only(name?: string, fn?: SuiteFn): Promise<void>;
        function only(options?: TestOptions, fn?: SuiteFn): Promise<void>;
        function only(fn?: SuiteFn): Promise<void>;
    }
    /**
     * Shorthand for `test()`.
     *
     * The `it()` function is imported from the `node:test` module.
     * @since v18.6.0, v16.17.0
     */
    function it(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function it(name?: string, fn?: TestFn): Promise<void>;
    function it(options?: TestOptions, fn?: TestFn): Promise<void>;
    function it(fn?: TestFn): Promise<void>;
    namespace it {
        /**
         * Shorthand for skipping a test, same as `it([name], { skip: true }[, fn])`.
         */
        function skip(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
        function skip(name?: string, fn?: TestFn): Promise<void>;
        function skip(options?: TestOptions, fn?: TestFn): Promise<void>;
        function skip(fn?: TestFn): Promise<void>;
        /**
         * Shorthand for marking a test as `TODO`, same as `it([name], { todo: true }[, fn])`.
         */
        function todo(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
        function todo(name?: string, fn?: TestFn): Promise<void>;
        function todo(options?: TestOptions, fn?: TestFn): Promise<void>;
        function todo(fn?: TestFn): Promise<void>;
        /**
         * Shorthand for marking a test as `only`, same as `it([name], { only: true }[, fn])`.
         * @since v18.15.0
         */
        function only(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
        function only(name?: string, fn?: TestFn): Promise<void>;
        function only(options?: TestOptions, fn?: TestFn): Promise<void>;
        function only(fn?: TestFn): Promise<void>;
    }
    /**
     * Shorthand for skipping a test, same as `test([name], { skip: true }[, fn])`.
     * @since v20.2.0
     */
    function skip(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function skip(name?: string, fn?: TestFn): Promise<void>;
    function skip(options?: TestOptions, fn?: TestFn): Promise<void>;
    function skip(fn?: TestFn): Promise<void>;
    /**
     * Shorthand for marking a test as `TODO`, same as `test([name], { todo: true }[, fn])`.
     * @since v20.2.0
     */
    function todo(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function todo(name?: string, fn?: TestFn): Promise<void>;
    function todo(options?: TestOptions, fn?: TestFn): Promise<void>;
    function todo(fn?: TestFn): Promise<void>;
    /**
     * Shorthand for marking a test as `only`, same as `test([name], { only: true }[, fn])`.
     * @since v20.2.0
     */
    function only(name?: string, options?: TestOptions, fn?: TestFn): Promise<void>;
    function only(name?: string, fn?: TestFn): Promise<void>;
    function only(options?: TestOptions, fn?: TestFn): Promise<void>;
    function only(fn?: TestFn): Promise<void>;
    /**
     * The type of a function under test. The first argument to this function is a
     * {@link TestContext} object. If the test uses callbacks, the callback function is passed as
     * the second argument.
     */
    type TestFn = (t: TestContext, done: (result?: any) => void) => void | Promise<void>;
    /**
     * The type of a function under Suite.
     */
    type SuiteFn = (s: SuiteContext) => void | Promise<void>;
    interface TestShard {
        /**
         * A positive integer between 1 and `<total>` that specifies the index of the shard to run.
         */
        index: number;
        /**
         * A positive integer that specifies the total number of shards to split the test files to.
         */
        total: number;
    }
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
        /**
         * That can be used to only run tests whose name matches the provided pattern.
         * Test name patterns are interpreted as JavaScript regular expressions.
         * For each test that is executed, any corresponding test hooks, such as `beforeEach()`, are also run.
         */
        testNamePatterns?: string | RegExp | string[] | RegExp[];
        /**
         * If truthy, the test context will only run tests that have the `only` option set
         */
        only?: boolean;
        /**
         * A function that accepts the TestsStream instance and can be used to setup listeners before any tests are run.
         */
        setup?: (root: Test) => void | Promise<void>;
        /**
         * Whether to run in watch mode or not.
         * @default false
         */
        watch?: boolean | undefined;
        /**
         * Running tests in a specific shard.
         * @default undefined
         */
        shard?: TestShard | undefined;
    }
    class Test extends AsyncResource {
        concurrency: number;
        nesting: number;
        only: boolean;
        reporter: TestsStream;
        runOnlySubtests: boolean;
        testNumber: number;
        timeout: number | null;
    }
    /**
     * A successful call to `run()` method will return a new `TestsStream` object, streaming a series of events representing the execution of the tests.`TestsStream` will emit events, in the
     * order of the tests definition
     * @since v18.9.0, v16.19.0
     */
    class TestsStream extends Readable implements NodeJS.ReadableStream {
        addListener(event: "test:diagnostic", listener: (data: DiagnosticData) => void): this;
        addListener(event: "test:fail", listener: (data: TestFail) => void): this;
        addListener(event: "test:pass", listener: (data: TestPass) => void): this;
        addListener(event: "test:plan", listener: (data: TestPlan) => void): this;
        addListener(event: "test:start", listener: (data: TestStart) => void): this;
        addListener(event: "test:stderr", listener: (data: TestStderr) => void): this;
        addListener(event: "test:stdout", listener: (data: TestStdout) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        emit(event: "test:diagnostic", data: DiagnosticData): boolean;
        emit(event: "test:fail", data: TestFail): boolean;
        emit(event: "test:pass", data: TestPass): boolean;
        emit(event: "test:plan", data: TestPlan): boolean;
        emit(event: "test:start", data: TestStart): boolean;
        emit(event: "test:stderr", data: TestStderr): boolean;
        emit(event: "test:stdout", data: TestStdout): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "test:diagnostic", listener: (data: DiagnosticData) => void): this;
        on(event: "test:fail", listener: (data: TestFail) => void): this;
        on(event: "test:pass", listener: (data: TestPass) => void): this;
        on(event: "test:plan", listener: (data: TestPlan) => void): this;
        on(event: "test:start", listener: (data: TestStart) => void): this;
        on(event: "test:stderr", listener: (data: TestStderr) => void): this;
        on(event: "test:stdout", listener: (data: TestStdout) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: "test:diagnostic", listener: (data: DiagnosticData) => void): this;
        once(event: "test:fail", listener: (data: TestFail) => void): this;
        once(event: "test:pass", listener: (data: TestPass) => void): this;
        once(event: "test:plan", listener: (data: TestPlan) => void): this;
        once(event: "test:start", listener: (data: TestStart) => void): this;
        once(event: "test:stderr", listener: (data: TestStderr) => void): this;
        once(event: "test:stdout", listener: (data: TestStdout) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "test:diagnostic", listener: (data: DiagnosticData) => void): this;
        prependListener(event: "test:fail", listener: (data: TestFail) => void): this;
        prependListener(event: "test:pass", listener: (data: TestPass) => void): this;
        prependListener(event: "test:plan", listener: (data: TestPlan) => void): this;
        prependListener(event: "test:start", listener: (data: TestStart) => void): this;
        prependListener(event: "test:stderr", listener: (data: TestStderr) => void): this;
        prependListener(event: "test:stdout", listener: (data: TestStdout) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "test:diagnostic", listener: (data: DiagnosticData) => void): this;
        prependOnceListener(event: "test:fail", listener: (data: TestFail) => void): this;
        prependOnceListener(event: "test:pass", listener: (data: TestPass) => void): this;
        prependOnceListener(event: "test:plan", listener: (data: TestPlan) => void): this;
        prependOnceListener(event: "test:start", listener: (data: TestStart) => void): this;
        prependOnceListener(event: "test:stderr", listener: (data: TestStderr) => void): this;
        prependOnceListener(event: "test:stdout", listener: (data: TestStdout) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    }
    /**
     * An instance of `TestContext` is passed to each test function in order to
     * interact with the test runner. However, the `TestContext` constructor is not
     * exposed as part of the API.
     * @since v18.0.0, v16.17.0
     */
    class TestContext {
        /**
         * This function is used to create a hook running before subtest of the current test.
         * @param fn The hook function. If the hook uses callbacks, the callback function is passed as
         *    the second argument. Default: A no-op function.
         * @param options Configuration options for the hook.
         * @since v20.1.0
         */
        before: typeof before;
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
         * This function is used to write diagnostics to the output. Any diagnostic
         * information is included at the end of the test's results. This function does
         * not return a value.
         *
         * ```js
         * test('top level test', (t) => {
         *   t.diagnostic('A diagnostic message');
         * });
         * ```
         * @since v18.0.0, v16.17.0
         * @param message Message to be reported.
         */
        diagnostic(message: string): void;
        /**
         * The name of the test.
         * @since v18.8.0, v16.18.0
         */
        readonly name: string;
        /**
         * If `shouldRunOnlyTests` is truthy, the test context will only run tests that
         * have the `only` option set. Otherwise, all tests are run. If Node.js was not
         * started with the `--test-only` command-line option, this function is a
         * no-op.
         *
         * ```js
         * test('top level test', (t) => {
         *   // The test context can be set to run subtests with the 'only' option.
         *   t.runOnly(true);
         *   return Promise.all([
         *     t.test('this subtest is now skipped'),
         *     t.test('this subtest is run', { only: true }),
         *   ]);
         * });
         * ```
         * @since v18.0.0, v16.17.0
         * @param shouldRunOnlyTests Whether or not to run `only` tests.
         */
        runOnly(shouldRunOnlyTests: boolean): void;
        /**
         * ```js
         * test('top level test', async (t) => {
         *   await fetch('some/uri', { signal: t.signal });
         * });
         * ```
         * @since v18.7.0, v16.17.0
         */
        readonly signal: AbortSignal;
        /**
         * This function causes the test's output to indicate the test as skipped. If`message` is provided, it is included in the output. Calling `skip()` does
         * not terminate execution of the test function. This function does not return a
         * value.
         *
         * ```js
         * test('top level test', (t) => {
         *   // Make sure to return here as well if the test contains additional logic.
         *   t.skip('this is skipped');
         * });
         * ```
         * @since v18.0.0, v16.17.0
         * @param message Optional skip message.
         */
        skip(message?: string): void;
        /**
         * This function adds a `TODO` directive to the test's output. If `message` is
         * provided, it is included in the output. Calling `todo()` does not terminate
         * execution of the test function. This function does not return a value.
         *
         * ```js
         * test('top level test', (t) => {
         *   // This test is marked as `TODO`
         *   t.todo('this is a todo');
         * });
         * ```
         * @since v18.0.0, v16.17.0
         * @param message Optional `TODO` message.
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
        /**
         * Each test provides its own MockTracker instance.
         */
        readonly mock: MockTracker;
    }
    /**
     * An instance of `SuiteContext` is passed to each suite function in order to
     * interact with the test runner. However, the `SuiteContext` constructor is not
     * exposed as part of the API.
     * @since v18.7.0, v16.17.0
     */
    class SuiteContext {
        /**
         * The name of the suite.
         * @since v18.8.0, v16.18.0
         */
        readonly name: string;
        /**
         * Can be used to abort test subtasks when the test has been aborted.
         * @since v18.7.0, v16.17.0
         */
        readonly signal: AbortSignal;
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
     *
     * ```js
     * describe('tests', async () => {
     *   before(() => console.log('about to run some test'));
     *   it('is a subtest', () => {
     *     assert.ok('some relevant assertion here');
     *   });
     * });
     * ```
     * @since v18.8.0, v16.18.0
     * @param [fn='A no-op function'] The hook function. If the hook uses callbacks, the callback function is passed as the second argument.
     * @param options Configuration options for the hook. The following properties are supported:
     */
    function before(fn?: HookFn, options?: HookOptions): void;
    /**
     * This function is used to create a hook running after  running a suite.
     *
     * ```js
     * describe('tests', async () => {
     *   after(() => console.log('finished running tests'));
     *   it('is a subtest', () => {
     *     assert.ok('some relevant assertion here');
     *   });
     * });
     * ```
     * @since v18.8.0, v16.18.0
     * @param [fn='A no-op function'] The hook function. If the hook uses callbacks, the callback function is passed as the second argument.
     * @param options Configuration options for the hook. The following properties are supported:
     */
    function after(fn?: HookFn, options?: HookOptions): void;
    /**
     * This function is used to create a hook running
     * before each subtest of the current suite.
     *
     * ```js
     * describe('tests', async () => {
     *   beforeEach(() => console.log('about to run a test'));
     *   it('is a subtest', () => {
     *     assert.ok('some relevant assertion here');
     *   });
     * });
     * ```
     * @since v18.8.0, v16.18.0
     * @param [fn='A no-op function'] The hook function. If the hook uses callbacks, the callback function is passed as the second argument.
     * @param options Configuration options for the hook. The following properties are supported:
     */
    function beforeEach(fn?: HookFn, options?: HookOptions): void;
    /**
     * This function is used to create a hook running
     * after each subtest of the current test.
     *
     * ```js
     * describe('tests', async () => {
     *   afterEach(() => console.log('finished running a test'));
     *   it('is a subtest', () => {
     *     assert.ok('some relevant assertion here');
     *   });
     * });
     * ```
     * @since v18.8.0, v16.18.0
     * @param [fn='A no-op function'] The hook function. If the hook uses callbacks, the callback function is passed as the second argument.
     * @param options Configuration options for the hook. The following properties are supported:
     */
    function afterEach(fn?: HookFn, options?: HookOptions): void;
    /**
     * The hook function. If the hook uses callbacks, the callback function is passed as the
     * second argument.
     */
    type HookFn = (s: SuiteContext, done: (result?: any) => void) => any;
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
    interface MockFunctionOptions {
        /**
         * The number of times that the mock will use the behavior of `implementation`.
         * Once the mock function has been called `times` times,
         * it will automatically restore the behavior of `original`.
         * This value must be an integer greater than zero.
         * @default Infinity
         */
        times?: number | undefined;
    }
    interface MockMethodOptions extends MockFunctionOptions {
        /**
         * If `true`, `object[methodName]` is treated as a getter.
         * This option cannot be used with the `setter` option.
         */
        getter?: boolean | undefined;
        /**
         * If `true`, `object[methodName]` is treated as a setter.
         * This option cannot be used with the `getter` option.
         */
        setter?: boolean | undefined;
    }
    type Mock<F extends Function> = F & {
        mock: MockFunctionContext<F>;
    };
    type NoOpFunction = (...args: any[]) => undefined;
    type FunctionPropertyNames<T> = {
        [K in keyof T]: T[K] extends Function ? K : never;
    }[keyof T];
    /**
     * The `MockTracker` class is used to manage mocking functionality. The test runner
     * module provides a top level `mock` export which is a `MockTracker` instance.
     * Each test also provides its own `MockTracker` instance via the test context's`mock` property.
     * @since v19.1.0, v18.13.0
     */
    class MockTracker {
        /**
         * This function is used to create a mock function.
         *
         * The following example creates a mock function that increments a counter by one
         * on each invocation. The `times` option is used to modify the mock behavior such
         * that the first two invocations add two to the counter instead of one.
         *
         * ```js
         * test('mocks a counting function', (t) => {
         *   let cnt = 0;
         *
         *   function addOne() {
         *     cnt++;
         *     return cnt;
         *   }
         *
         *   function addTwo() {
         *     cnt += 2;
         *     return cnt;
         *   }
         *
         *   const fn = t.mock.fn(addOne, addTwo, { times: 2 });
         *
         *   assert.strictEqual(fn(), 2);
         *   assert.strictEqual(fn(), 4);
         *   assert.strictEqual(fn(), 5);
         *   assert.strictEqual(fn(), 6);
         * });
         * ```
         * @since v19.1.0, v18.13.0
         * @param [original='A no-op function'] An optional function to create a mock on.
         * @param implementation An optional function used as the mock implementation for `original`. This is useful for creating mocks that exhibit one behavior for a specified number of calls and
         * then restore the behavior of `original`.
         * @param options Optional configuration options for the mock function. The following properties are supported:
         * @return The mocked function. The mocked function contains a special `mock` property, which is an instance of {@link MockFunctionContext}, and can be used for inspecting and changing the
         * behavior of the mocked function.
         */
        fn<F extends Function = NoOpFunction>(original?: F, options?: MockFunctionOptions): Mock<F>;
        fn<F extends Function = NoOpFunction, Implementation extends Function = F>(
            original?: F,
            implementation?: Implementation,
            options?: MockFunctionOptions,
        ): Mock<F | Implementation>;
        /**
         * This function is used to create a mock on an existing object method. The
         * following example demonstrates how a mock is created on an existing object
         * method.
         *
         * ```js
         * test('spies on an object method', (t) => {
         *   const number = {
         *     value: 5,
         *     subtract(a) {
         *       return this.value - a;
         *     },
         *   };
         *
         *   t.mock.method(number, 'subtract');
         *   assert.strictEqual(number.subtract.mock.calls.length, 0);
         *   assert.strictEqual(number.subtract(3), 2);
         *   assert.strictEqual(number.subtract.mock.calls.length, 1);
         *
         *   const call = number.subtract.mock.calls[0];
         *
         *   assert.deepStrictEqual(call.arguments, [3]);
         *   assert.strictEqual(call.result, 2);
         *   assert.strictEqual(call.error, undefined);
         *   assert.strictEqual(call.target, undefined);
         *   assert.strictEqual(call.this, number);
         * });
         * ```
         * @since v19.1.0, v18.13.0
         * @param object The object whose method is being mocked.
         * @param methodName The identifier of the method on `object` to mock. If `object[methodName]` is not a function, an error is thrown.
         * @param implementation An optional function used as the mock implementation for `object[methodName]`.
         * @param options Optional configuration options for the mock method. The following properties are supported:
         * @return The mocked method. The mocked method contains a special `mock` property, which is an instance of {@link MockFunctionContext}, and can be used for inspecting and changing the
         * behavior of the mocked method.
         */
        method<
            MockedObject extends object,
            MethodName extends FunctionPropertyNames<MockedObject>,
        >(
            object: MockedObject,
            methodName: MethodName,
            options?: MockFunctionOptions,
        ): MockedObject[MethodName] extends Function ? Mock<MockedObject[MethodName]>
            : never;
        method<
            MockedObject extends object,
            MethodName extends FunctionPropertyNames<MockedObject>,
            Implementation extends Function,
        >(
            object: MockedObject,
            methodName: MethodName,
            implementation: Implementation,
            options?: MockFunctionOptions,
        ): MockedObject[MethodName] extends Function ? Mock<MockedObject[MethodName] | Implementation>
            : never;
        method<MockedObject extends object>(
            object: MockedObject,
            methodName: keyof MockedObject,
            options: MockMethodOptions,
        ): Mock<Function>;
        method<MockedObject extends object>(
            object: MockedObject,
            methodName: keyof MockedObject,
            implementation: Function,
            options: MockMethodOptions,
        ): Mock<Function>;

        /**
         * This function is syntax sugar for `MockTracker.method` with `options.getter`set to `true`.
         * @since v19.3.0, v18.13.0
         */
        getter<
            MockedObject extends object,
            MethodName extends keyof MockedObject,
        >(
            object: MockedObject,
            methodName: MethodName,
            options?: MockFunctionOptions,
        ): Mock<() => MockedObject[MethodName]>;
        getter<
            MockedObject extends object,
            MethodName extends keyof MockedObject,
            Implementation extends Function,
        >(
            object: MockedObject,
            methodName: MethodName,
            implementation?: Implementation,
            options?: MockFunctionOptions,
        ): Mock<(() => MockedObject[MethodName]) | Implementation>;
        /**
         * This function is syntax sugar for `MockTracker.method` with `options.setter`set to `true`.
         * @since v19.3.0, v18.13.0
         */
        setter<
            MockedObject extends object,
            MethodName extends keyof MockedObject,
        >(
            object: MockedObject,
            methodName: MethodName,
            options?: MockFunctionOptions,
        ): Mock<(value: MockedObject[MethodName]) => void>;
        setter<
            MockedObject extends object,
            MethodName extends keyof MockedObject,
            Implementation extends Function,
        >(
            object: MockedObject,
            methodName: MethodName,
            implementation?: Implementation,
            options?: MockFunctionOptions,
        ): Mock<((value: MockedObject[MethodName]) => void) | Implementation>;
        /**
         * This function restores the default behavior of all mocks that were previously
         * created by this `MockTracker` and disassociates the mocks from the`MockTracker` instance. Once disassociated, the mocks can still be used, but the`MockTracker` instance can no longer be
         * used to reset their behavior or
         * otherwise interact with them.
         *
         * After each test completes, this function is called on the test context's`MockTracker`. If the global `MockTracker` is used extensively, calling this
         * function manually is recommended.
         * @since v19.1.0, v18.13.0
         */
        reset(): void;
        /**
         * This function restores the default behavior of all mocks that were previously
         * created by this `MockTracker`. Unlike `mock.reset()`, `mock.restoreAll()` does
         * not disassociate the mocks from the `MockTracker` instance.
         * @since v19.1.0, v18.13.0
         */
        restoreAll(): void;
        timers: MockTimers;
    }
    const mock: MockTracker;
    interface MockFunctionCall<
        F extends Function,
        ReturnType = F extends (...args: any) => infer T ? T
            : F extends abstract new(...args: any) => infer T ? T
            : unknown,
        Args = F extends (...args: infer Y) => any ? Y
            : F extends abstract new(...args: infer Y) => any ? Y
            : unknown[],
    > {
        /**
         * An array of the arguments passed to the mock function.
         */
        arguments: Args;
        /**
         * If the mocked function threw then this property contains the thrown value.
         */
        error: unknown | undefined;
        /**
         * The value returned by the mocked function.
         *
         * If the mocked function threw, it will be `undefined`.
         */
        result: ReturnType | undefined;
        /**
         * An `Error` object whose stack can be used to determine the callsite of the mocked function invocation.
         */
        stack: Error;
        /**
         * If the mocked function is a constructor, this field contains the class being constructed.
         * Otherwise this will be `undefined`.
         */
        target: F extends abstract new(...args: any) => any ? F : undefined;
        /**
         * The mocked function's `this` value.
         */
        this: unknown;
    }
    /**
     * The `MockFunctionContext` class is used to inspect or manipulate the behavior of
     * mocks created via the `MockTracker` APIs.
     * @since v19.1.0, v18.13.0
     */
    class MockFunctionContext<F extends Function> {
        /**
         * A getter that returns a copy of the internal array used to track calls to the
         * mock. Each entry in the array is an object with the following properties.
         * @since v19.1.0, v18.13.0
         */
        readonly calls: Array<MockFunctionCall<F>>;
        /**
         * This function returns the number of times that this mock has been invoked. This
         * function is more efficient than checking `ctx.calls.length` because `ctx.calls`is a getter that creates a copy of the internal call tracking array.
         * @since v19.1.0, v18.13.0
         * @return The number of times that this mock has been invoked.
         */
        callCount(): number;
        /**
         * This function is used to change the behavior of an existing mock.
         *
         * The following example creates a mock function using `t.mock.fn()`, calls the
         * mock function, and then changes the mock implementation to a different function.
         *
         * ```js
         * test('changes a mock behavior', (t) => {
         *   let cnt = 0;
         *
         *   function addOne() {
         *     cnt++;
         *     return cnt;
         *   }
         *
         *   function addTwo() {
         *     cnt += 2;
         *     return cnt;
         *   }
         *
         *   const fn = t.mock.fn(addOne);
         *
         *   assert.strictEqual(fn(), 1);
         *   fn.mock.mockImplementation(addTwo);
         *   assert.strictEqual(fn(), 3);
         *   assert.strictEqual(fn(), 5);
         * });
         * ```
         * @since v19.1.0, v18.13.0
         * @param implementation The function to be used as the mock's new implementation.
         */
        mockImplementation(implementation: Function): void;
        /**
         * This function is used to change the behavior of an existing mock for a single
         * invocation. Once invocation `onCall` has occurred, the mock will revert to
         * whatever behavior it would have used had `mockImplementationOnce()` not been
         * called.
         *
         * The following example creates a mock function using `t.mock.fn()`, calls the
         * mock function, changes the mock implementation to a different function for the
         * next invocation, and then resumes its previous behavior.
         *
         * ```js
         * test('changes a mock behavior once', (t) => {
         *   let cnt = 0;
         *
         *   function addOne() {
         *     cnt++;
         *     return cnt;
         *   }
         *
         *   function addTwo() {
         *     cnt += 2;
         *     return cnt;
         *   }
         *
         *   const fn = t.mock.fn(addOne);
         *
         *   assert.strictEqual(fn(), 1);
         *   fn.mock.mockImplementationOnce(addTwo);
         *   assert.strictEqual(fn(), 3);
         *   assert.strictEqual(fn(), 4);
         * });
         * ```
         * @since v19.1.0, v18.13.0
         * @param implementation The function to be used as the mock's implementation for the invocation number specified by `onCall`.
         * @param onCall The invocation number that will use `implementation`. If the specified invocation has already occurred then an exception is thrown.
         */
        mockImplementationOnce(implementation: Function, onCall?: number): void;
        /**
         * Resets the call history of the mock function.
         * @since v19.3.0, v18.13.0
         */
        resetCalls(): void;
        /**
         * Resets the implementation of the mock function to its original behavior. The
         * mock can still be used after calling this function.
         * @since v19.1.0, v18.13.0
         */
        restore(): void;
    }
    type Timer = "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout";
    /**
     * Mocking timers is a technique commonly used in software testing to simulate and
     * control the behavior of timers, such as `setInterval` and `setTimeout`,
     * without actually waiting for the specified time intervals.
     *
     * The `MockTracker` provides a top-level `timers` export
     * which is a `MockTimers` instance.
     * @since v20.4.0
     * @experimental
     */
    class MockTimers {
        /**
         * Enables timer mocking for the specified timers.
         *
         * **Note:** When you enable mocking for a specific timer, its associated
         * clear function will also be implicitly mocked.
         *
         * Example usage:
         *
         * ```js
         * import { mock } from 'node:test';
         * mock.timers.enable(['setInterval']);
         * ```
         *
         * The above example enables mocking for the `setInterval` timer and
         * implicitly mocks the `clearInterval` function. Only the `setInterval`and `clearInterval` functions from `node:timers`,`node:timers/promises`, and`globalThis` will be mocked.
         *
         * Alternatively, if you call `mock.timers.enable()` without any parameters:
         *
         * All timers (`'setInterval'`, `'clearInterval'`, `'setTimeout'`, and `'clearTimeout'`)
         * will be mocked. The `setInterval`, `clearInterval`, `setTimeout`, and `clearTimeout`functions from `node:timers`, `node:timers/promises`,
         * and `globalThis` will be mocked.
         * @since v20.4.0
         */
        enable(timers?: Timer[]): void;
        /**
         * This function restores the default behavior of all mocks that were previously
         * created by this `MockTimers` instance and disassociates the mocks
         * from the `MockTracker` instance.
         *
         * **Note:** After each test completes, this function is called on
         * the test context's `MockTracker`.
         *
         * ```js
         * import { mock } from 'node:test';
         * mock.timers.reset();
         * ```
         * @since v20.4.0
         */
        reset(): void;
        /**
         * Advances time for all mocked timers.
         *
         * **Note:** This diverges from how `setTimeout` in Node.js behaves and accepts
         * only positive numbers. In Node.js, `setTimeout` with negative numbers is
         * only supported for web compatibility reasons.
         *
         * The following example mocks a `setTimeout` function and
         * by using `.tick` advances in
         * time triggering all pending timers.
         *
         * ```js
         * import assert from 'node:assert';
         * import { test } from 'node:test';
         *
         * test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) => {
         *   const fn = context.mock.fn();
         *
         *   context.mock.timers.enable(['setTimeout']);
         *
         *   setTimeout(fn, 9999);
         *
         *   assert.strictEqual(fn.mock.callCount(), 0);
         *
         *   // Advance in time
         *   context.mock.timers.tick(9999);
         *
         *   assert.strictEqual(fn.mock.callCount(), 1);
         * });
         * ```
         *
         * Alternativelly, the `.tick` function can be called many times
         *
         * ```js
         * import assert from 'node:assert';
         * import { test } from 'node:test';
         *
         * test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) => {
         *   const fn = context.mock.fn();
         *   context.mock.timers.enable(['setTimeout']);
         *   const nineSecs = 9000;
         *   setTimeout(fn, nineSecs);
         *
         *   const twoSeconds = 3000;
         *   context.mock.timers.tick(twoSeconds);
         *   context.mock.timers.tick(twoSeconds);
         *   context.mock.timers.tick(twoSeconds);
         *
         *   assert.strictEqual(fn.mock.callCount(), 1);
         * });
         * ```
         * @since v20.4.0
         */
        tick(milliseconds: number): void;
        /**
         * Triggers all pending mocked timers immediately.
         *
         * The example below triggers all pending timers immediately,
         * causing them to execute without any delay.
         *
         * ```js
         * import assert from 'node:assert';
         * import { test } from 'node:test';
         *
         * test('runAll functions following the given order', (context) => {
         *   context.mock.timers.enable(['setTimeout']);
         *   const results = [];
         *   setTimeout(() => results.push(1), 9999);
         *
         *   // Notice that if both timers have the same timeout,
         *   // the order of execution is guaranteed
         *   setTimeout(() => results.push(3), 8888);
         *   setTimeout(() => results.push(2), 8888);
         *
         *   assert.deepStrictEqual(results, []);
         *
         *   context.mock.timers.runAll();
         *
         *   assert.deepStrictEqual(results, [3, 2, 1]);
         * });
         * ```
         *
         * **Note:** The `runAll()` function is specifically designed for
         * triggering timers in the context of timer mocking.
         * It does not have any effect on real-time system
         * clocks or actual timers outside of the mocking environment.
         * @since v20.4.0
         */
        runAll(): void;
        /**
         * Calls {@link MockTimers.reset()}.
         */
        [Symbol.dispose](): void;
    }
    export {
        after,
        afterEach,
        before,
        beforeEach,
        describe,
        it,
        Mock,
        mock,
        only,
        run,
        skip,
        test,
        test as default,
        todo,
    };
}

interface TestLocationInfo {
    /**
     * The column number where the test is defined, or
     * `undefined` if the test was run through the REPL.
     */
    column?: number;
    /**
     * The path of the test file, `undefined` if test is not ran through a file.
     */
    file?: string;
    /**
     * The line number where the test is defined, or
     * `undefined` if the test was run through the REPL.
     */
    line?: number;
}
interface DiagnosticData extends TestLocationInfo {
    /**
     * The diagnostic message.
     */
    message: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
}
interface TestFail extends TestLocationInfo {
    /**
     * Additional execution metadata.
     */
    details: {
        /**
         * The duration of the test in milliseconds.
         */
        duration_ms: number;
        /**
         * The error thrown by the test.
         */
        error: Error;
        /**
         * The type of the test, used to denote whether this is a suite.
         * @since 20.0.0, 19.9.0, 18.17.0
         */
        type?: "suite";
    };
    /**
     * The test name.
     */
    name: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
    /**
     * The ordinal number of the test.
     */
    testNumber: number;
    /**
     * Present if `context.todo` is called.
     */
    todo?: string | boolean;
    /**
     * Present if `context.skip` is called.
     */
    skip?: string | boolean;
}
interface TestPass extends TestLocationInfo {
    /**
     * Additional execution metadata.
     */
    details: {
        /**
         * The duration of the test in milliseconds.
         */
        duration_ms: number;
        /**
         * The type of the test, used to denote whether this is a suite.
         * @since 20.0.0, 19.9.0, 18.17.0
         */
        type?: "suite";
    };
    /**
     * The test name.
     */
    name: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
    /**
     * The ordinal number of the test.
     */
    testNumber: number;
    /**
     * Present if `context.todo` is called.
     */
    todo?: string | boolean;
    /**
     * Present if `context.skip` is called.
     */
    skip?: string | boolean;
}
interface TestPlan extends TestLocationInfo {
    /**
     * The nesting level of the test.
     */
    nesting: number;
    /**
     * The number of subtests that have ran.
     */
    count: number;
}
interface TestStart extends TestLocationInfo {
    /**
     * The test name.
     */
    name: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
}
interface TestStderr extends TestLocationInfo {
    /**
     * The message written to `stderr`
     */
    message: string;
}
interface TestStdout extends TestLocationInfo {
    /**
     * The message written to `stdout`
     */
    message: string;
}
interface TestEnqueue extends TestLocationInfo {
    /**
     * The test name
     */
    name: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
}
interface TestDequeue extends TestLocationInfo {
    /**
     * The test name
     */
    name: string;
    /**
     * The nesting level of the test.
     */
    nesting: number;
}

/**
 * The `node:test/reporters` module exposes the builtin-reporters for `node:test`.
 * To access it:
 *
 * ```js
 * import test from 'node:test/reporters';
 * ```
 *
 * This module is only available under the `node:` scheme. The following will not
 * work:
 *
 * ```js
 * import test from 'test/reporters';
 * ```
 * @since v19.9.0
 * @see [source](https://github.com/nodejs/node/blob/v20.2.0/lib/test/reporters.js)
 */
declare module "node:test/reporters" {
    import { Transform } from "node:stream";

    type TestEvent =
        | { type: "test:diagnostic"; data: DiagnosticData }
        | { type: "test:fail"; data: TestFail }
        | { type: "test:pass"; data: TestPass }
        | { type: "test:plan"; data: TestPlan }
        | { type: "test:start"; data: TestStart }
        | { type: "test:stderr"; data: TestStderr }
        | { type: "test:stdout"; data: TestStdout }
        | { type: "test:enqueue"; data: TestEnqueue }
        | { type: "test:dequeue"; data: TestDequeue }
        | { type: "test:watch:drained" };
    type TestEventGenerator = AsyncGenerator<TestEvent, void>;

    /**
     * The `dot` reporter outputs the test results in a compact format,
     * where each passing test is represented by a `.`,
     * and each failing test is represented by a `X`.
     */
    function dot(source: TestEventGenerator): AsyncGenerator<"\n" | "." | "X", void>;
    /**
     * The `tap` reporter outputs the test results in the [TAP](https://testanything.org/) format.
     */
    function tap(source: TestEventGenerator): AsyncGenerator<string, void>;
    /**
     * The `spec` reporter outputs the test results in a human-readable format.
     */
    class Spec extends Transform {
        constructor();
    }
    /**
     * The `junit` reporter outputs test results in a jUnit XML format
     */
    function junit(source: TestEventGenerator): AsyncGenerator<string, void>;
    export { dot, junit, Spec as spec, tap, TestEvent };
}
