// Type definitions for QUnit v2.19.0
// Project: https://qunitjs.com/
// Definitions by: James Bracy <https://github.com/waratuman>
//                 Mike North <https://github.com/mike-north>
//                 Stefan Sechelmann <https://github.com/sechel>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Timo Tijhof <https://github.com/Krinkle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface Assert {
        /**
         * Instruct QUnit to wait for an asynchronous operation.
         *
         * `assert.async()` returns a callback function and pauses test processing until the
         * callback function is called. The callback will throw an `Error` if it is invoked more
         * often than the required call count.
         *
         * @param {number} [count=1] Number of expected calls
         */
        async(count?: number): () => void;

        /**
         * A recursive and strict comparison, considering all own and inherited properties.
         *
         * For primitive values, a strict comparison is used. For objects, the object identity is
         * disregarded and instead a recursive comparison of all own and inherited properties is
         * performed. This means arrays, plain objects, and arbitrary class instance objects can
         * all be compared in this way.
         *
         * The deep comparison includes built-in support for Date objects, regular expressions,
         * NaN, as well as ES6 features such as Symbol, Set, and Map objects.
         *
         * To assert strict equality on own properties only, refer to `assert.propEqual()`.
         *
         * @param actual Expression being tested
         * @param expected Known comparision value
         * @param {string} [message] Short description of the actual expression
         */
        deepEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * A non-strict comparison of two values.
         *
         * The `equal` assertion uses the simple comparison operator (`==`) to compare the actual
         * and expected arguments. When they are equal, the assertion passes; otherwise, it fails.
         *
         * When it fails, both actual and expected values are displayed in the test result, in
         * addition to a given message.
         *
         * To test for strict equality, use `assert.strictEqual()`.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description of the actual expression
         */
        equal(actual: any, expected: any, message?: string): void;

        /**
         * Specify how many assertions are expected in a test.
         *
         * This is most commonly used as `assert.expect(0)`, which indicates that a test may pass
         * without making any assertions. This means the test is only used to verify that the code
         * runs to completion, without any uncaught errors. This is is essentially the inverse of
         * `assert.throws()`.
         *
         * This can also be used to explicitly require a certain number of assertions to be
         * recorded in a given test. If afterwards the number of assertions does not match the
         * expected count, the test will fail.
         *
         * It is recommended to test asynchronous code with `assert.step()` or `assert.async()`
         * instead.
         *
         * @param {number} amount Number of expected assertions in this test
         */
        expect(amount: number): void;

        /**
         * A strict comparison that passes if the first argument is boolean `false`.
         *
         * If the argument evaluates to false, the assertion passes; otherwise, it fails.
         *
         * @param state Expression being tested
         * @param {string} [message] Short description
         */
        false(state: any, message?: string): void;

        /**
         * An inverted deep equal comparison.
         *
         * This assertion fails if the actual and expected values are recursively equal by strict
         * comparison, considering both own and inherited properties.
         *
         * The assertion passes if there are structural differences, type differences, or even a
         * subtle difference in a particular property value.
         *
         * This is the inverse of `assert.deepEqual()`.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description
         */
        notDeepEqual(actual: any, expected: any, message?: string): void;

        /**
         * A loose inequality comparison, checking for non-strict differences between two values.
         *
         * The `notEqual` assertion uses the simple inverted comparison operator (`!=`) to compare
         * the actual and expected values. When they aren't equal, the assertion passes;
         * otherwise, it fails. When it fails, both actual and expected values are displayed in
         * the test result, in addition to a given message.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description
         */
        notEqual(actual: any, expected: any, message?: string): void;

        /**
         * A boolean check that passes when the first argument is falsy.
         *
         * If the argument evaluates to false, the assertion passes; otherwise, it fails.
         *
         * To strictly compare against boolean false, use `assert.false()`.
         *
         * @param state Expression being tested
         * @param {string} [message] Short description
         */
        notOk(state: any, message?: string): void;

        /**
         * Check that an object does not contain certain properties.
         *
         * The `notPropContains` assertion compares the subset of properties
         * in the expected object, and tests that these keys are either absent
         * or hold a value that is different according to a strict equality comparison.
         *
         * This method is recursive and allows partial comparison of nested objects as well.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description
         */
        notPropContains(actual: any, expected: any, message?: string): void;

        /**
         * Compare an object's own properties using a strict inequality comparison.
         *
         * The `notPropEqual` assertion compares only an object's own properties,
         * using the strict inquality operator (`!==`).
         *
         * The test passes if there are properties with different values, or extra properties
         * or missing properties.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description
         */
        notPropEqual(actual: any, expected: any, message?: string): void;

        /**
         * A strict comparison, checking for inequality.
         *
         * The `notStrictEqual` assertion uses the strict inverted comparison
         * operator (`!==`) to compare the actual and expected arguments. When they
         * aren't equal, the assertion passes; otherwise, it fails. When it fails,
         * both actual and expected values are displayed in the test result, in
         * addition to a given message.
         *
         * `assert.equal()` can be used to test equality.
         *
         * `assert.strictEqual()` can be used to test strict equality.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description
         */
        notStrictEqual(actual: any, expected: any, message?: string): void;

        /**
         * A boolean check that passes when the first argument is truthy.
         *
         * If the argument evaluates to true, the assertion passes; otherwise, it fails.
         *
         * To strictly compare against boolean true, use `assert.true()`.
         *
         * @param state Expression being tested
         * @param {string} [message] Short description
         */
        ok(state: any, message?: string): void;

        /**
         * Check that an object contains certain properties.
         *
         * The `propContains` assertion compares only the subset of properties
         * in the expected object, and tests that these keys exist as own properties
         * with strictly equal values.
         *
         * This method is recursive and allows partial comparison of nested objects as well.
         *
         * Use `assert.propEqual()` to compare all properties.
         * Use `assert.notPropContains()` to test for the absence or inequality of properties.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description of the actual expression
         */
        propContains(actual: any, expected: any, message?: string): void;

        /**
         * Compare an object's own properties using a strict comparison.
         *
         * The `propEqual` assertion only compares an object's own properties. This means the
         * expected value does not need to be an instance of the same class or otherwise inherit
         * the same prototype. This is in contrast with `assert.deepEqual()`.
         *
         * This assertion fails if the values differ, or if there are extra properties, or if
         * some properties are missing.
         *
         * This method is recursive and can compare any nested or complex object via a plain object.
         *
         * Use `assert.propContains()` to only check a subset of properties.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description of the actual expression
         */
        propEqual(actual: any, expected: any, message?: string): void;

        /**
         * Report the result of a custom assertion.
         *
         * If you need to express an expectation that is not abstracted by a built-in assertion,
         * you can perform your own logic ad-hoc in an expression, and then pass two directly
         * comparable values top `assert.strictEqual()` or `assert.true()`.
         *
         * If you opt to create your own assertion method instead, use `pushResult` to
         * save the result.
         *
         * Example:
         *
         * ```
         * QUnit.assert.between = function (actual, from, to, message) {
         *   const isBetween = (actual >= from && actual <= to);
         *
         *   this.pushResult({
         *     result: isBetween,
         *     actual: actual,
         *     expected: `between ${from} and ${to} inclusive`,
         *     message: message
         *   });
         * };
         * ```
         *
         * @param assertionResult The assertion result
         */
        pushResult(assertResult: { result: boolean; actual: any; expected: any; message?: string }): void;

        /**
         * Test if the provided promise rejects, and optionally compare the rejection value.
         *
         * When testing code that is expected to return a rejected promise based on a
         * specific set of circumstances, use `assert.rejects()` for testing and comparison.
         *
         * The expectedMatcher argument can be:
         *      A function that returns true when the assertion should be considered passing.
         *      An Error object.
         *      A base constructor to use ala rejectionValue instanceof expectedMatcher.
         *      A RegExp that matches (or partially matches) rejectionValue.toString().
         *
         * Note: in order to avoid confusion between the message and the expectedMatcher,
         * the expectedMatcher can not be a string.
         *
         * @param promise Promise to test for rejection
         * @param expectedMatcher Rejection value matcher
         * @param message Short description of the assertion
         */
        rejects(promise: Promise<any>, message?: string): Promise<void>;
        rejects(promise: Promise<any>, expectedMatcher?: any, message?: string): Promise<void>;

        /**
         * Set how long to wait for async operations to finish.
         *
         * This assertion defines how long to wait (at most) in the current test. It overrides QUnit.config.testTimeout on a per-test basis.
         *
         * The timeout length only applies when a test actually involves asynchronous functions or promises. If 0 is passed, then awaiting or returning any Promise may fail the test.
         *
         * If assert.timeout() is called after a different timeout is already set, the old timeout will be cleared and the new duration will be used to start a new timer.
         *
         * @param duration The length of time to wait, in milleseconds.
         */
        timeout(duration: number): void;

        /**
         * Record a step for later verification.
         *
         * This assertion registers a passing assertion with the provided string. This and any
         * other steps should be verified later in the test via `assert.verifySteps()`.
         *
         * @param value Relevant string value, or short description, to mark this step.
         */
        step(value: string): void;

        /**
         * A strict type and value comparison.
         *
         * The `strictEqual()` assertion provides the most rigid comparison of type
         * and value with the strict equality operator (`===`).
         *
         * `assert.equal()` can be used to test non-strict equality.
         *
         * @param actual Expression being tested
         * @param expected Known comparison value
         * @param {string} [message] Short description of the assertion
         */
        strictEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Test if a callback throws an exception, and optionally compare the thrown error.
         *
         * When testing code that is expected to throw an exception based on a
         * specific set of circumstances, use `assert.throws()` to catch the error
         * object for testing and comparison.
         *
         * The expectedMatcher argument can be:
         *      An Error object.
         *      An Error constructor to use ala `errorValue instanceof expectedMatcher`.
         *      A RegExp that matches (or partially matches) the string representation.
         *      A callback Function that must return `true` to pass the assertion check.
         */
        throws(block: () => void, expected?: any, message?: any): void;
        raises(block: () => void, expected?: any, message?: any): void;

        /**
         * A strict comparison that passes if the first argument is boolean `true`.
         *
         * If the argument evaluates to true, the assertion passes; otherwise, it fails.
         *
         * @param state Expression being tested
         * @param {string} [message] Short description of the actual expression
         */
        true(state: any, message?: string): void;

        /**
         * Verify the presence and exact order of previously marked steps in a test.
         *
         * The Step API provides an easy way to verify execution logic to a high degree of
         * accuracy and precision, whether for asynchronous code, event-driven code, or
         * callback-driven code.
         *
         * For example, you can mark steps to observe and validate whether parts of your code are
         * reached correctly, or to check the frequency (how often) an asynchronous code path is
         * executed. You can also capture any unexpected steps, which are automatically detected
         * and shown as part of the test failure.
         *
         * This assertion compares a given array of string values to a list of previously recorded
         * steps, as marked via previous calls to `assert.step()`.
         *
         * @param steps List of strings
         * @param message Short description of the assertion
         */
        verifySteps(steps: string[], message?: string): void;
    }

    interface Config {
        altertitle: boolean;
        autostart: boolean;
        collapse: boolean;
        current: any;
        failOnZeroTests: boolean;
        filter: string | RegExp;
        fixture: string;
        hidepassed: boolean;
        maxDepth: number;
        module: string;
        moduleId: string[];
        noglobals: boolean;
        notrycatch: boolean;
        reorder: boolean;
        requireExpects: boolean;
        scrolltop: boolean;
        seed: string;
        testId: string[];
        testTimeout: number;
        urlConfig: {
            id?: string | undefined;
            label?: string | undefined;
            tooltip?: string | undefined;
            value?: string | string[] | { [key: string]: string } | undefined;
        }[];
    }

    interface GlobalHooks {
        /**
         * Runs after each test.
         */
         afterEach(fn: (assert: Assert) => void | Promise<void>): void;

         /**
         * Runs before each test.
         */
        beforeEach(fn: (assert: Assert) => void | Promise<void>): void;
    }

    interface Hooks {
        /**
         * Runs after the last test. If additional tests are defined after the
         * module's queue has emptied, it will not run this hook again.
         */
        after?: ((assert: Assert) => void | Promise<void>) | undefined;

        /**
         * Runs after each test.
         */
        afterEach?: ((assert: Assert) => void | Promise<void>) | undefined;

        /**
         * Runs before the first test.
         */
        before?: ((assert: Assert) => void | Promise<void>) | undefined;

        /**
         * Runs before each test.
         */
        beforeEach?: ((assert: Assert) => void | Promise<void>) | undefined;
    }

    interface NestedHooks {
        /**
         * Runs after the last test. If additional tests are defined after the
         * module's queue has emptied, it will not run this hook again.
         */
        after(fn: (assert: Assert) => void | Promise<void>): void;

        /**
         * Runs after each test.
         */
        afterEach(fn: (assert: Assert) => void | Promise<void>): void;

        /**
         * Runs before the first test.
         */
        before(fn: (assert: Assert) => void | Promise<void>): void;

        /**
         * Runs before each test.
         */
        beforeEach(fn: (assert: Assert) => void | Promise<void>): void;
    }

    type moduleFunc1 = (name: string, hooks?: Hooks, nested?: (hooks: NestedHooks) => void) => void;
    type moduleFunc2 = (name: string, nested?: (hooks: NestedHooks) => void) => void;
    type ModuleOnly = { only: moduleFunc1 & moduleFunc2 };
    type ModuleSkip = { skip: moduleFunc1 & moduleFunc2 };
    type ModuleTodo = { todo: moduleFunc1 & moduleFunc2 };

    namespace QUnit {
        interface BeginDetails {
            /** Number of registered tests */
            totalTests: number;
            /** List of registered modules, */
            modules: Array<{ name: string, moduleId: string }>
        }
        interface DoneDetails {
            failed: number;
            passed: number;
            total: number;
            runtime: number;
        }
        interface LogDetails {
            result: boolean;
            actual: any;
            expected: any;
            message: string;
            source: string;
            module: string;
            name: string;
            runtime: number;
        }
        interface ModuleDoneDetails {
            name: string;
            failed: number;
            passed: number;
            total: number;
            runtime: number;
        }
        interface ModuleStartDetails {
            name: string;
        }
        interface TestDoneDetails {
            name: string;
            module: string;
            failed: number;
            passed: number;
            total: number;
            runtime: number;
        }
        interface TestStartDetails {
            name: string;
            module: string;
        }
    }

    interface QUnit {
        /**
         * Namespace for QUnit assertions
         *
         * QUnit's built-in assertions are defined on the `QUnit.assert` object. An
         * instance of this object is passed as the only argument to the `QUnit.test`
         * function callback.
         *
         * This object has properties for each of QUnit's built-in assertion methods.
         */
        assert: Assert;

        /**
         * Register a callback to fire whenever the test suite begins.
         *
         * `QUnit.begin()` is called once before running any tests.
         *
         * @callback callback Callback to execute.
         */
        begin(callback: (details: QUnit.BeginDetails) => void | Promise<void>): void;

        /**
         * Configuration for QUnit
         *
         * QUnit has a bunch of internal configuration defaults, some of which are
         * useful to override. Check the description for each option for details.
         */
        config: Config;

        /**
         * Register a callback to fire whenever the test suite ends.
         *
         * @param callback Callback to execute
         */
        done(callback: (details: QUnit.DoneDetails) => void | Promise<void>): void;

        /**
         * Advanced and extensible data dumping for JavaScript.
         *
         * This method does string serialization by parsing data structures and
         * objects. It parses DOM elements to a string representation of their outer
         * HTML. By default, nested structures will be displayed up to five levels
         * deep. Anything beyond that is replaced by `[object Object]` and
         * `[object Array]` placeholders.
         *
         * If you need more or less output, change the value of `QUnit.dump.maxDepth`,
         * representing how deep the elements should be parsed.
         *
         * Note: This method used to be in QUnit.jsDump, which was changed to
         * QUnit.dump. The old property will be removed in QUnit 3.0.
         */
        dump: {
            maxDepth: number;
            parse(data: any): string;
        };

        /**
         * Copy the properties defined by the `mixin` object into the `target` object.
         *
         * This method will modify the `target` object to contain the "own" properties
         * defined by the `mixin`. If the `mixin` object specifies the value of any
         * attribute as undefined, this property will instead be removed from the
         * `target` object.
         *
         * @param target An object whose properties are to be modified
         * @param mixin An object describing which properties should be modified
         */
        extend(target: any, mixin: any): void;

        /**
         * Register a global callback to run before or after each test.
         *
         * This is the equivalent of applying a QUnit.module() hook to all modules
         * and all tests, including global tests that are not associated with any module.
         *
         * Similar to module hooks, global hooks support async functions or
         * returning a Promise, which will be waited for before QUnit continues executing tests.
         * Each global hook also has access to the same assert object and
         * test context as the QUnit.test that the hook is running for.
         *
         * For more details about hooks, refer to QUnit.module § Hooks.
         */
        hooks: GlobalHooks

        /**
         * Register a callback to fire whenever an assertion completes.
         *
         * This is one of several callbacks QUnit provides. Its intended for
         * integration scenarios like PhantomJS or Jenkins. The properties of the
         * details argument are listed below as options.
         *
         * @param callback Callback to execute
         */
        log(callback: (details: QUnit.LogDetails) => void): void;

        /**
         * Group related tests under a single label.
         *
         * You can use the module name to organize, select, and filter tests to run.
         *
         * All tests inside a module callback function will be grouped into that
         * module. The test names will all be preceded by the module name in the
         * test results. Other modules can be nested inside this callback function,
         * where their tests' names will be labeled by their names recursively
         * prefixed by their parent modules.
         *
         * If `QUnit.module` is defined without a `nested` callback argument, all
         * subsequently defined tests will be grouped into the module until another
         * module is defined.
         *
         * Modules with test group functions allow you to define nested modules, and
         * QUnit will run tests on the parent module before going deep on the nested
         * ones, even if they're declared first. Additionally, any hook callbacks on
         * a parent module will wrap the hooks on a nested module. In other words,
         * `before` and `beforeEach` callbacks will form a queue while the
         * `afterEach` and `after` callbacks will form a stack.
         *
         * You can specify code to run before and after tests using the hooks
         * argument, and also to create properties that will be shared on the
         * testing context. Any additional properties on the `hooks` object will be
         * added to that context. The `hooks` argument is still optional if you call
         * `QUnit.module` with a callback argument.
         *
         * The module's callback is invoked with the test environment as its `this`
         * context, with the environment's properties copied to the module's tests,
         * hooks, and nested modules. Note that changes on tests' `this` are not
         * preserved between sibling tests, where `this` will be reset to the initial
         * value for each test.
         *
         * @param {string} name Label for this group of tests
         * @param hookds Callbacks to run during test execution
         * @param nested A callback with grouped tests and nested modules to run under the current module label
         */
        module: moduleFunc1 & moduleFunc2 & ModuleOnly & ModuleSkip & ModuleTodo;

        /**
         * Register a callback to fire whenever a module ends.
         *
         * @param callback Callback to execute
         */
        moduleDone(callback: (details: QUnit.ModuleDoneDetails) => void | Promise<void>): void;

        /**
         * Register a callback to fire whenever a module begins.
         *
         * @param callback Callback to execute
         */
        moduleStart(callback: (details: QUnit.ModuleStartDetails) => void | Promise<void>): void;

        /**
         * Adds a test to exclusively run, preventing all other tests from running.
         *
         * Use this method to focus your test suite on a specific test. QUnit.only
         * will cause any other tests in your suite to be ignored.
         *
         * Note, that if more than one QUnit.only is present only the first instance
         * will run.
         *
         * This is an alternative to filtering tests to run in the HTML reporter. It
         * is especially useful when you use a console reporter or in a codebase
         * with a large set of long running tests.
         *
         * @param {string} name Title of unit being tested
         * @param callback Function to close over assertions
         */
        only(name: string, callback: (assert: Assert) => void | Promise<void>): void;

        /**
         * Handle a global error that should result in a failed test run.
         *
         * @since 2.17.0
         * @param {Error|any} error
         */
        onUncaughtException: (error: unknown) => void;

        /**
         * DEPRECATED: Report the result of a custom assertion.
         *
         * This method is deprecated and it's recommended to use pushResult on its
         * direct reference in the assertion context.
         *
         * QUnit.push reflects to the current running test, and it may leak
         * assertions in asynchronous mode. Checkout assert.pushResult() to set a
         * proper custom assertion.
         *
         * Invoking QUnit.push allows to create a readable expectation that is not
         * defined by any of QUnit's built-in assertions.
         *
         * @deprecated
         */
        push(result: boolean, actual: any, expected: any, message: string): void;

        /**
         * Adds a test like object to be skipped.
         *
         * Use this method to replace QUnit.test() instead of commenting out entire
         * tests.
         *
         * This test's prototype will be listed on the suite as a skipped test,
         * ignoring the callback argument and the respective global and module's
         * hooks.
         *
         * @param {string} Title of unit being tested
         */
        skip(name: string, callback?: (assert: Assert) => void | Promise<void>): void;

        /**
         * Returns a single line string representing the stacktrace (call stack).
         *
         * This method returns a single line string representing the stacktrace from
         * where it was called. According to its offset argument, `QUnit.stack()` will
         * return the correspondent line from the call stack.
         *
         * The default `offset` is `0` and will return the current location where it
         * was called.
         *
         * Not all browsers support retrieving stracktraces. In those, `QUnit.stack()`
         * will return undefined.
         *
         * @param {number} offset Set the stacktrace line offset.
         */
        stack(offset?: number): string;

        /**
         * `QUnit.start()` must be used to start a test run that has
         * `QUnit.config.autostart` set to `false`.
         *
         * This method was previously used to control async tests on text contexts
         * along with QUnit.stop. For asynchronous tests, use assert.async instead.
         *
         * When your async test has multiple exit points, call `QUnit.start()` for the
         * corresponding number of `QUnit.stop()` increments.
         */
        start(): void;

        /**
         * Add a test to run.
         *
         * Add a test to run using `QUnit.test()`.
         *
         * The `assert` argument to the callback contains all of QUnit's assertion
         * methods. Use this argument to call your test assertions.
         *
         * `QUnit.test()` can automatically handle the asynchronous resolution of a
         * Promise on your behalf if you return a thenable Promise as the result of
         * your callback function.
         *
         * @param {string} Title of unit being tested
         * @param callback Function to close over assertions
         */
        test(name: string, callback: (assert: Assert) => void | Promise<void>): void;

        /**
         * Register a callback to fire whenever a test ends.
         *
         * @param callback Callback to execute
         */
        testDone(
            callback: (details: {
                name: string;
                module: string;
                failed: number;
                passed: number;
                total: number;
                runtime: number;
            }) => void | Promise<void>,
        ): void;

        /**
         * Register a callback to fire whenever a test begins.
         *
         * @param callback Callback to execute
         */
        testStart(callback: (details: QUnit.TestStartDetails) => void | Promise<void>): void;

        /**
         * Adds a test which expects at least one failing assertion during its run.
         *
         * Use this method to test a unit of code which is still under development
         * (in a “todo” state). The test will pass as long as one failing assertion
         * is present.
         *
         * If all assertions pass, then the test will fail signaling that QUnit.todo
         * should be replaced by QUnit.test.
         *
         * @param {string} Title of unit being tested
         * @param callback Function to close over assertions
         */
        todo(name: string, callback?: (assert: Assert) => void | Promise<void>): void;

        /**
         * Compares two values. Returns true if they are equivalent.
         *
         * @param a The first value
         * @param b The second value
         */
        equiv<T>(a: T, b: T): boolean;

        /**
         * Are the test running from the server or not.
         */
        isLocal: boolean;

        /**
         * QUnit version
         */
        version: string;
    }

    /* QUnit */
    const QUnit: QUnit;
}

export = QUnit;
