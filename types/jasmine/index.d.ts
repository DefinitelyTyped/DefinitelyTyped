/**
 * @deprecated Use {@link jasmine.ImplementationCallback} instead.
 */
type ImplementationCallback = jasmine.ImplementationCallback;

/**
 * Create a group of specs (often called a suite).
 * @param description Textual description of the group
 * @param specDefinitions Function for Jasmine to invoke that will define inner suites a specs
 */
declare function describe(description: string, specDefinitions: () => void): void;

/**
 * A focused `describe`. If suites or specs are focused, only those that are focused will be executed.
 * @param description Textual description of the group
 * @param specDefinitions Function for Jasmine to invoke that will define inner suites a specs
 */
declare function fdescribe(description: string, specDefinitions: () => void): void;

/**
 * A temporarily disabled `describe`. Specs within an xdescribe will be marked pending and not executed.
 * @param description Textual description of the group
 * @param specDefinitions Function for Jasmine to invoke that will define inner suites a specs
 */
declare function xdescribe(description: string, specDefinitions: () => void): void;

/**
 * Define a single spec. A spec should contain one or more expectations that test the state of the code.
 * A spec whose expectations all succeed will be passing and a spec with any failures will fail.
 * @param expectation Textual description of what this spec is checking
 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
 * @param timeout Custom timeout for an async spec.
 */
declare function it(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * A focused `it`. If suites or specs are focused, only those that are focused will be executed.
 * @param expectation Textual description of what this spec is checking
 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
 * @param timeout Custom timeout for an async spec.
 */
declare function fit(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * A temporarily disabled `it`. The spec will report as pending and will not be executed.
 * @param expectation Textual description of what this spec is checking
 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
 * @param timeout Custom timeout for an async spec.
 */
declare function xit(expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * Mark a spec as pending, expectation results will be ignored.
 * If you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending.
 * @param reason Reason the spec is pending.
 */
declare function pending(reason?: string): void;

/**
 * Sets a user-defined property that will be provided to reporters as
 * part of the properties field of SpecResult.
 * @since 3.6.0
 */
declare function setSpecProperty(key: string, value: unknown): void;

/**
 * Sets a user-defined property that will be provided to reporters as
 * part of the properties field of SuiteResult.
 * @since 3.6.0
 */
declare function setSuiteProperty(key: string, value: unknown): void;

/**
 * Run some shared setup before each of the specs in the describe in which it is called.
 * @param action Function that contains the code to setup your specs.
 * @param timeout Custom timeout for an async beforeEach.
 */
declare function beforeEach(action: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * Run some shared teardown after each of the specs in the describe in which it is called.
 * @param action Function that contains the code to teardown your specs.
 * @param timeout Custom timeout for an async afterEach.
 */
declare function afterEach(action: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * Run some shared setup once before all of the specs in the describe are run.
 * Note: Be careful, sharing the setup from a beforeAll makes it easy to accidentally leak state between your specs so that they erroneously pass or fail.
 * @param action Function that contains the code to setup your specs.
 * @param timeout Custom timeout for an async beforeAll.
 */
declare function beforeAll(action: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * Run some shared teardown once after all of the specs in the describe are run.
 * Note: Be careful, sharing the teardown from a afterAll makes it easy to accidentally leak state between your specs so that they erroneously pass or fail.
 * @param action Function that contains the code to teardown your specs.
 * @param timeout Custom timeout for an async afterAll
 */
declare function afterAll(action: jasmine.ImplementationCallback, timeout?: number): void;

/**
 * Create an expectation for a spec.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param spy
 */
declare function expect<T extends jasmine.Func>(spy: T | jasmine.Spy<T>): jasmine.FunctionMatchers<T>;

/**
 * Create an expectation for a spec.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual Actual computed value to test expectations against.
 */
declare function expect(actual: string): jasmine.Matchers<string>;

/**
 * Create an expectation for a spec.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual
 */
declare function expect<T>(actual: ArrayLike<T>): jasmine.ArrayLikeMatchers<T>;

/**
 * Create an expectation for a spec.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual Actual computed value to test expectations against.
 */
declare function expect<T>(actual: T): jasmine.Matchers<T>;

/**
 * Create an expectation for a spec.
 */
declare function expect(): jasmine.NothingMatcher;

/**
 * Create an asynchronous expectation for a spec. Note that the matchers
 * that are provided by an asynchronous expectation all return promises
 * which must be either returned from the spec or waited for using `await`
 * in order for Jasmine to associate them with the correct spec.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual Actual computed value to test expectations against.
 */
declare function expectAsync<T, U>(actual: T | PromiseLike<T>): jasmine.AsyncMatchers<T, U>;

/**
 * Explicitly mark a spec as failed.
 * @param e Reason for the failure
 */
declare function fail(e?: any): void;

/**
 * Action method that should be called when the async work is complete.
 */
interface DoneFn extends Function {
    (): void;

    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

/**
 * Install a spy onto an existing object.
 * @param object The object upon which to install the `Spy`.
 * @param method The name of the method to replace with a `Spy`.
 */
declare function spyOn<T, K extends keyof T = keyof T>(
    object: T,
    method: T[K] extends Function ? K : never,
): jasmine.Spy<
    T[K] extends jasmine.Func ? T[K] : T[K] extends { new(...args: infer A): infer V } ? (...args: A) => V : never
>;

/**
 * Install a spy on a property installed with `Object.defineProperty` onto an existing object.
 * @param object The object upon which to install the `Spy`.
 * @param property The name of the property to replace with a `Spy`.
 * @param accessType The access type (get|set) of the property to `Spy` on.
 */
declare function spyOnProperty<T, K extends keyof T = keyof T>(
    object: T,
    property: K,
    accessType?: "get",
): jasmine.Spy<(this: T) => T[K]>;
declare function spyOnProperty<T, K extends keyof T = keyof T>(
    object: T,
    property: K,
    accessType: "set",
): jasmine.Spy<(this: T, value: T[K]) => void>;

interface ThrowUnlessFailure {
    /**
     * The name of the matcher that was executed for this expectation.
     */
    matcherName: string;
    /**
     * The failure message for the expectation.
     */
    message: string;
    /**
     * Whether the expectation passed or failed.
     */
    passed: boolean;
    /**
     * Deprecated. If the expectation failed, what was the expected value.
     * @deprecated The expected and actual properties are deprecated and may be removed in a future release.
     */
    expected: any;
    /**
     * Deprecated. If the expectation failed, what actual value was produced.
     * @deprecated The expected and actual properties are deprecated and may be removed in a future release.
     */
    actual: any;
}
/**
 * Create an expectation for a spec and throw an error if it fails.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param spy
 */
declare function throwUnless<T extends jasmine.Func>(spy: T | jasmine.Spy<T>): jasmine.FunctionMatchers<T>;
/**
 * Create an expectation for a spec and throw an error if it fails.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual Actual computed value to test expectations against.
 */
declare function throwUnless<T>(actual: ArrayLike<T>): jasmine.ArrayLikeMatchers<T>;
/**
 * Create an expectation for a spec and throw an error if it fails.
 * @checkReturnValue see https://tsetse.info/check-return-value
 * @param actual Actual computed value to test expectations against.
 */
declare function throwUnless<T>(actual: T): jasmine.Matchers<T>;
/**
 * Create an asynchronous expectation for a spec and throw an error if it fails.
 * @param actual Actual computed value to test expectations against.
 */
declare function throwUnlessAsync<T, U>(actual: T | PromiseLike<T>): jasmine.AsyncMatchers<T, U>;

/**
 * Installs spies on all writable and configurable properties of an object.
 * @param object The object upon which to install the `Spy`s.
 * @param includeNonEnumerable Whether or not to add spies to non-enumerable properties.
 */
declare function spyOnAllFunctions<T>(object: T, includeNonEnumerable?: boolean): jasmine.SpyObj<T>;

declare namespace jasmine {
    type Func = (...args: any[]) => any;

    // Use trick with prototype to allow abstract classes.
    // More info: https://stackoverflow.com/a/38642922/2009373
    type Constructor = Function & { prototype: any };

    type ImplementationCallback = (() => PromiseLike<any>) | (() => void) | ((done: DoneFn) => void);

    type ExpectedRecursive<T> =
        | T
        | ObjectContaining<T>
        | AsymmetricMatcher<any>
        | {
            [K in keyof T]: ExpectedRecursive<T[K]> | Any;
        };
    type Expected<T> =
        | T
        | ObjectContaining<T>
        | AsymmetricMatcher<any>
        | Any
        | Spy
        | {
            [K in keyof T]: ExpectedRecursive<T[K]>;
        };
    type SpyObjMethodNames<T = undefined> = T extends undefined ? readonly string[] | { [methodName: string]: any }
        : (
            | ReadonlyArray<keyof T>
            | {
                [P in keyof T]?:
                    // Value should be the return type (unless this is a method on Object.prototype, since all object literals contain those methods)
                    T[P] extends Func ? (ReturnType<T[P]> | (P extends keyof Object ? Object[P] : never)) : any;
            }
        );

    type SpyObjPropertyNames<T = undefined> = T extends undefined ? readonly string[] | { [propertyName: string]: any }
        : ReadonlyArray<keyof T> | { [P in keyof T]?: T[P] };

    /**
     * Configuration that can be used when configuring Jasmine via {@link jasmine.Env.configure}
     */
    interface Configuration {
        /**
         * Whether to randomize spec execution order
         * @since 3.3.0
         * @default true
         */
        random?: boolean | undefined;
        /**
         * Seed to use as the basis of randomization.
         * Null causes the seed to be determined randomly at the start of execution.
         * @since 3.3.0
         * @default null
         */
        seed?: number | string | null | undefined;
        /**
         * Whether to stop execution of the suite after the first spec failure
         * @since 3.9.0
         * @default false
         */
        stopOnSpecFailure?: boolean | undefined;
        /**
         * Whether to forbid duplicate spec or suite names. If set to true, using
         * the same name multiple times in the same immediate parent suite is an
         * error.
         * @since 5.5.0
         * @default false
         */
        forbidDuplicateNames?: boolean | undefined;
        /**
         * Whether to fail the spec if it ran no expectations. By default
         * a spec that ran no expectations is reported as passed. Setting this
         * to true will report such spec as a failure.
         * @since 3.5.0
         * @default false
         */
        failSpecWithNoExpectations?: boolean | undefined;
        /**
         * Whether to cause specs to only have one expectation failure.
         * @since 3.3.0
         * @default false
         */
        stopSpecOnExpectationFailure?: boolean | undefined;
        /**
         * Function to use to filter specs
         * @since 3.3.0
         * @default A function that always returns true.
         */
        specFilter?: SpecFilter | undefined;
        /**
         * Whether or not reporters should hide disabled specs from their output.
         * Currently only supported by Jasmine's HTMLReporter
         * @since 3.3.0
         * @default false
         */
        hideDisabled?: boolean | undefined;
        /**
         * Set to provide a custom promise library that Jasmine will use if it needs
         * to create a promise. If not set, it will default to whatever global Promise
         * library is available (if any).
         * @since 3.5.0
         * @default undefined
         */
        Promise?: typeof Promise | undefined;
        /**
         * Clean closures when a suite is done running (done by clearing the stored function reference).
         * This prevents memory leaks, but you won't be able to run jasmine multiple times.
         * @since 3.10.0
         * @default true
         */
        autoCleanClosures?: boolean | undefined;
    }

    /** @deprecated Please use `Configuration` instead of `EnvConfiguration`. */
    type EnvConfiguration = Configuration;

    function clock(): Clock;
    /**
     * @deprecated Private method that may be changed or removed in the future
     */
    function DiffBuilder(): DiffBuilder;

    /**
     * That will succeed if the actual value being compared is an instance of the specified class/constructor.
     */
    function any(aclass: Constructor | Symbol): AsymmetricMatcher<any>;

    /**
     * That will succeed if the actual value being compared is not `null` and not `undefined`.
     */
    function anything(): AsymmetricMatcher<any>;

    /**
     * That will succeed if the actual value being compared is `true` or anything truthy.
     * @since 3.1.0
     */
    function truthy(): AsymmetricMatcher<any>;

    /**
     * That will succeed if the actual value being compared is  `null`, `undefined`, `0`, `false` or anything falsey.
     * @since 3.1.0
     */
    function falsy(): AsymmetricMatcher<any>;

    /**
     * That will succeed if the actual value being compared is empty.
     * @since 3.1.0
     */
    function empty(): AsymmetricMatcher<any>;

    /**
     * That will succeed if the actual value being compared is not empty.
     * @since 3.1.0
     */
    function notEmpty(): AsymmetricMatcher<any>;

    /**
     * Get an AsymmetricMatcher, usable in any matcher
     * that passes if the actual value is the same as the sample as determined
     * by the `===` operator.
     * @param sample The value to compare the actual to.
     * @since 4.2.0
     */
    function is(sample: any): AsymmetricMatcher<any>;

    function arrayContaining<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function arrayWithExactContents<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function objectContaining<T>(sample: { [K in keyof T]?: ExpectedRecursive<T[K]> }): ObjectContaining<T>;
    function mapContaining<K, V>(sample: Map<K, V>): AsymmetricMatcher<Map<K, V>>;
    function setContaining<T>(sample: Set<T>): AsymmetricMatcher<Set<T>>;

    function setDefaultSpyStrategy<Fn extends Func = Func>(fn?: (and: SpyAnd<Fn>) => void): void;
    function spyOnGlobalErrorsAsync(fn?: (globalErrorSpy: Spy<(error: Error) => void>) => Promise<void>): Promise<void>;
    function addSpyStrategy<Fn extends Func = Func>(name: string, factory: Fn): void;
    function createSpy<Fn extends Func>(name?: string, originalFn?: Fn): Spy<Fn>;
    function createSpyObj(baseName: string, methodNames: SpyObjMethodNames, propertyNames?: SpyObjPropertyNames): any;
    function createSpyObj<T>(
        baseName: string,
        methodNames: SpyObjMethodNames<T>,
        propertyNames?: SpyObjPropertyNames<T>,
    ): SpyObj<T>;
    function createSpyObj(methodNames: SpyObjMethodNames, propertyNames?: SpyObjPropertyNames): any;
    function createSpyObj<T>(methodNames: SpyObjMethodNames<T>, propertyNames?: SpyObjPropertyNames<T>): SpyObj<T>;

    function getEnv(): Env;
    function debugLog(msg: string): void;

    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;

    /**
     * Add a custom object formatter for the current scope of specs.
     * Note: This is only callable from within a beforeEach, it, or beforeAll.
     * @since 3.6.0
     * @see https://jasmine.github.io/tutorials/custom_object_formatters
     */
    function addCustomObjectFormatter(formatter: CustomObjectFormatter): void;

    function addMatchers(matchers: CustomMatcherFactories): void;
    function addAsyncMatchers(matchers: CustomAsyncMatcherFactories): void;

    function stringMatching(str: string | RegExp): AsymmetricMatcher<string>;

    function stringContaining(str: string): AsymmetricMatcher<string>;
    /**
     * @deprecated Private method that may be changed or removed in the future
     */
    function formatErrorMsg(domain: string, usage: string): (msg: string) => string;

    interface Any extends AsymmetricMatcher<any> {
        new(expectedClass: any): any;
        jasmineToString(prettyPrint: (value: any) => string): string;
    }

    interface AsymmetricMatcher<TValue> {
        asymmetricMatch(other: TValue, matchersUtil?: MatchersUtil): boolean;
        jasmineToString?(prettyPrint: (value: any) => string): string;
    }

    // taken from TypeScript lib.core.es6.d.ts, applicable to CustomMatchers.contains()
    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }

    interface ArrayContaining<T> extends AsymmetricMatcher<any> {
        new?(sample: ArrayLike<T>): ArrayLike<T>;
        jasmineToString(prettyPrint: (value: any) => string): string;
    }

    interface ObjectContaining<T> extends AsymmetricMatcher<T> {
        new?(sample: { [K in keyof T]?: any }): { [K in keyof T]?: any };

        jasmineToString?(prettyPrint: (value: any) => string): string;
    }

    interface Clock {
        autoTick(): void;
        install(): Clock;
        uninstall(): void;
        /** Calls to any registered callback are triggered when the clock is ticked forward via the jasmine.clock().tick function, which takes a number of milliseconds. */
        tick(ms: number): void;
        mockDate(date?: Date): void;
        withMock(func: () => void): void;
    }

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type CustomEqualityTester = (first: any, second: any) => boolean | void;

    type CustomObjectFormatter = (value: unknown) => string | undefined;

    interface CustomMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
        negativeCompare?<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        negativeCompare?(actual: any, ...expected: any[]): CustomMatcherResult;
    }

    interface CustomAsyncMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): PromiseLike<CustomMatcherResult>;
        compare(actual: any, ...expected: any[]): PromiseLike<CustomMatcherResult>;
        negativeCompare?<T>(actual: T, expected: T, ...args: any[]): PromiseLike<CustomMatcherResult>;
        negativeCompare?(actual: any, ...expected: any[]): PromiseLike<CustomMatcherResult>;
    }

    type CustomMatcherFactory = (util: MatchersUtil) => CustomMatcher;

    type CustomAsyncMatcherFactory = (util: MatchersUtil) => CustomAsyncMatcher;

    interface CustomMatcherFactories {
        [name: string]: CustomMatcherFactory;
    }

    interface CustomAsyncMatcherFactories {
        [name: string]: CustomAsyncMatcherFactory;
    }

    interface CustomMatcherResult {
        pass: boolean;
        message?: string | undefined;
    }

    /**
     * @deprecated Private type that may be changed or removed in the future
     */
    interface DiffBuilder {
        setRoots(actual: any, expected: any): void;
        recordMismatch(formatter?: (actual: any, expected: any, path?: any, prettyPrinter?: any) => string): void;
        withPath(pathComponent: string, block: () => void): void;
        getMessage(): string;
    }

    interface MatchersUtil {
        equals(a: any, b: any): boolean;
        contains<T>(
            haystack: ArrayLike<T> | string,
            needle: any,
        ): boolean;
        /**
         * @deprecated Private method that may be changed or removed in the future
         */
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;

        /**
         * Formats a value for use in matcher failure messages and similar
         * contexts, taking into account the current set of custom value
         * formatters.
         * @since 3.6.0
         * @param value The value to pretty-print
         * @return The pretty-printed value
         */
        pp(value: any): string;
    }

    interface Env {
        addReporter(reporter: CustomReporter): void;
        allowRespy(allow: boolean): void;
        clearReporters(): void;
        configuration(): Configuration;
        configure(configuration: Configuration): void;
        execute(runnablesToRun?: Suite[]): Promise<JasmineDoneInfo>;
        provideFallbackReporter(reporter: CustomReporter): void;
        /**
         * Sets a user-defined property that will be provided to reporters as
         * part of the properties field of SpecResult.
         * @since 3.6.0
         */
        setSpecProperty: typeof setSpecProperty;
        /**
         * Sets a user-defined property that will be provided to reporters as
         * part of the properties field of SuiteResult.
         * @since 3.6.0
         */
        setSuiteProperty: typeof setSuiteProperty;
        topSuite(): Suite;
    }

    interface HtmlReporter {
        new(): any;
    }

    interface HtmlSpecFilter {
        new(): any;
    }

    interface Result {
        type: string;
    }

    interface ExpectationResult extends Result {
        /**
         * The name of the matcher that was executed for this expectation.
         */
        matcherName: string;
        /**
         * The failure message for the expectation.
         */
        message: string;
        /**
         * The stack trace for the failure if available.
         */
        stack: string;
        /**
         * Whether the expectation passed or failed.
         */
        passed: boolean;
        /**
         * Deprecated. If the expectation failed, what was the expected value.
         * @deprecated The expected and actual properties are deprecated and may be removed in a future release.
         */
        expected: any;
        /**
         * Deprecated. If the expectation failed, what actual value was produced.
         * @deprecated The expected and actual properties are deprecated and may be removed in a future release.
         */
        actual: any;
    }

    interface DeprecationWarning extends Result {
        message: string;
        stack: string;
    }

    interface Order {
        new(options: { random: boolean; seed: number | string }): any;
        random: boolean;
        seed: number | string;
        sort<T>(items: T[]): T[];
    }

    namespace errors {
        class ExpectationFailed extends Error {
            constructor();

            stack: any;
        }
    }

    interface Matchers<T> {
        /**
         * Expect the actual value to be `===` to the expected value.
         *
         * @param expected The expected value to compare against.
         * @example
         * expect(thing).toBe(realThing);
         */
        toBe(expected: Expected<T>): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBe(expected: Expected<T>, expectationFailOutput: any): void;

        /**
         * Expect the actual value to be equal to the expected, using deep equality comparison.
         * @param expected Expected value.
         * @example
         * expect(bigObject).toEqual({ "foo": ['bar', 'baz'] });
         */
        toEqual(expected: Expected<T>): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toEqual(expected: Expected<T>, expectationFailOutput: any): void;

        /**
         * Expect the actual value to match a regular expression.
         * @param expected Value to look for in the string.
         * @example
         * expect("my string").toMatch(/string$/);
         * expect("other string").toMatch("her");
         */
        toMatch(expected: string | RegExp): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toMatch(expected: string | RegExp, expectationFailOutput: any): void;

        toBeDefined(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeDefined(expectationFailOutput: any): void;
        toBeUndefined(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeUndefined(expectationFailOutput: any): void;
        toBeNull(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeNull(expectationFailOutput: any): void;
        toBeNaN(): void;
        toBeTruthy(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeTruthy(expectationFailOutput: any): void;
        toBeFalsy(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeFalsy(expectationFailOutput: any): void;
        toBeTrue(): void;
        toBeFalse(): void;
        toHaveBeenCalled(): void;
        toHaveBeenCalledBefore(expected: Func): void;
        toHaveBeenCalledWith(...params: any[]): void;
        toHaveBeenCalledOnceWith(...params: any[]): void;
        toHaveBeenCalledTimes(expected: number): void;
        toContain(expected: any): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toContain(expected: any, expectationFailOutput: any): void;
        toBeLessThan(expected: number): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeLessThan(expected: number, expectationFailOutput: any): void;
        toBeLessThanOrEqual(expected: number): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeLessThanOrEqual(expected: number, expectationFailOutput: any): void;
        toBeGreaterThan(expected: number): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeGreaterThan(expected: number, expectationFailOutput: any): void;
        toBeGreaterThanOrEqual(expected: number): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeGreaterThanOrEqual(expected: number, expectationFailOutput: any): void;
        toBeCloseTo(expected: number, precision?: any): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeCloseTo(expected: number, precision: any, expectationFailOutput: any): void;
        toThrow(expected?: any): void;
        toThrowError(message?: string | RegExp): void;
        toThrowError(expected?: new(...args: any[]) => Error, message?: string | RegExp): void;
        toThrowMatching(predicate: (thrown: any) => boolean): void;
        toBeNegativeInfinity(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeNegativeInfinity(expectationFailOutput: any): void;
        toBePositiveInfinity(): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBePositiveInfinity(expectationFailOutput: any): void;
        toBeInstanceOf(expected: Constructor): void;

        /**
         * Expect the actual value to be a DOM element that has the expected class.
         * @since 3.0.0
         * @param expected The class name to test for.
         * @example
         * var el = document.createElement('div');
         * el.className = 'foo bar baz';
         * expect(el).toHaveClass('bar');
         */
        toHaveClass(expected: string): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toHaveClass(expected: string, expectationFailOutput: any): void;

        /**
         * Expect the actual size to be equal to the expected, using array-like
         * length or object keys size.
         * @since 3.6.0
         * @param expected The expected size
         * @example
         * array = [1,2];
         * expect(array).toHaveSize(2);
         */
        toHaveSize(expected: number): void;

        /**
         * {@link expect} the actual (a {@link SpyObj}) spies to have been called.
         * @since 4.1.0
         * @example
         * expect(mySpyObj).toHaveSpyInteractions();
         * expect(mySpyObj).not.toHaveSpyInteractions();
         */
        toHaveSpyInteractions(): void;

        /**
         * Add some context for an expect.
         * @param message Additional context to show when the matcher fails
         * @checkReturnValue see https://tsetse.info/check-return-value
         */
        withContext(message: string): Matchers<T>;

        /**
         * Invert the matcher following this expect.
         */
        not: Matchers<T>;
    }

    interface ArrayLikeMatchers<T> extends Matchers<ArrayLike<T>> {
        /**
         * Expect the actual value to be `===` to the expected value.
         *
         * @param expected The expected value to compare against.
         * @example
         * expect(thing).toBe(realThing);
         */
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput: any): void;

        /**
         * Expect the actual value to be equal to the expected, using deep equality comparison.
         * @param expected Expected value.
         * @example
         * expect(bigObject).toEqual({ "foo": ['bar', 'baz'] });
         */
        toEqual(expected: Expected<ArrayLike<T>> | ArrayContaining<T>): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toEqual(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput: any): void;

        toContain(expected: Expected<T>): void;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toContain(expected: Expected<T>, expectationFailOutput: any): void;

        /**
         * Add some context for an expect.
         * @param message Additional context to show when the matcher fails.
         * @checkReturnValue see https://tsetse.info/check-return-value
         */
        withContext(message: string): ArrayLikeMatchers<T>;

        /**
         * Invert the matcher following this expect.
         */
        not: ArrayLikeMatchers<T>;
    }

    type MatchableArgs<Fn> = Fn extends (...args: infer P) => any ? { [K in keyof P]: Expected<P[K]> } : never;

    interface FunctionMatchers<Fn extends Func> extends Matchers<any> {
        /**
         * Expects the actual (a spy) to have been called with the particular arguments at least once
         * @param params The arguments to look for
         */
        toHaveBeenCalledWith(...params: MatchableArgs<Fn>): void;

        /**
         * Expects the actual (a spy) to have been called exactly once, and exactly with the particular arguments
         * @param params The arguments to look for
         */
        toHaveBeenCalledOnceWith(...params: MatchableArgs<Fn>): void;

        /**
         * Add some context for an expect.
         * @param message Additional context to show when the matcher fails.
         * @checkReturnValue see https://tsetse.info/check-return-value
         */
        withContext(message: string): FunctionMatchers<Fn>;

        /**
         * Invert the matcher following this expect.
         */
        not: FunctionMatchers<Fn>;
    }

    interface NothingMatcher {
        nothing(): void;
    }

    interface AsyncMatchers<T, U> {
        /**
         * Expect a promise to be pending, i.e. the promise is neither resolved nor rejected.
         */
        toBePending(): PromiseLike<void>;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBePending(expectationFailOutput: any): PromiseLike<void>;

        /**
         * Expect a promise to be resolved.
         */
        toBeResolved(): PromiseLike<void>;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeResolved(expectationFailOutput: any): PromiseLike<void>;

        /**
         * Expect a promise to be rejected.
         */
        toBeRejected(): PromiseLike<void>;
        /**
         * @deprecated expectationFailOutput is deprecated. Use withContext instead.
         */
        // tslint:disable-next-line unified-signatures
        toBeRejected(expectationFailOutput: any): PromiseLike<void>;

        /**
         * Expect a promise to be resolved to a value equal to the expected, using deep equality comparison.
         * @param expected Value that the promise is expected to resolve to.
         */
        toBeResolvedTo(expected: Expected<T>): PromiseLike<void>;

        /**
         * Expect a promise to be rejected with a value equal to the expected, using deep equality comparison.
         * @param expected Value that the promise is expected to be rejected with.
         */
        toBeRejectedWith(expected: Expected<U>): PromiseLike<void>;

        /**
         * Expect a promise to be rejected with a value matched to the expected.
         * @param expected Error constructor the object that was thrown needs to be an instance of. If not provided, Error will be used.
         * @param message The message that should be set on the thrown Error.
         */
        toBeRejectedWithError(expected?: new(...args: any[]) => Error, message?: string | RegExp): PromiseLike<void>;

        /**
         * Expect a promise to be rejected with a value matched to the expected.
         * @param message The message that should be set on the thrown Error.
         */
        toBeRejectedWithError(message?: string | RegExp): PromiseLike<void>;

        /**
         * Add some context for an expect.
         * @param message Additional context to show when the matcher fails.
         * @checkReturnValue see https://tsetse.info/check-return-value
         */
        withContext(message: string): AsyncMatchers<T, U>;

        /**
         * Fail as soon as possible if the actual is pending. Otherwise evaluate the matcher.
         */
        already: AsyncMatchers<T, U>;

        /**
         * Invert the matcher following this expect.
         */
        not: AsyncMatchers<T, U>;
    }

    interface JasmineStartedInfo {
        totalSpecsDefined: number;
        order: Order;
    }

    interface CustomReportExpectation {
        matcherName: string;
        message: string;
        passed: boolean;
        stack: string;
    }

    interface FailedExpectation extends CustomReportExpectation {
        actual: string;
        expected: string;
    }

    interface PassedExpectation extends CustomReportExpectation {}

    interface DeprecatedExpectation {
        message: string;
    }

    interface SuiteResult {
        /**
         * The unique id of this spec.
         */
        id: string;

        /**
         * The description passed to the {@link it} that created this spec.
         */
        description: string;

        /**
         * The full description including all ancestors of this spec.
         */
        fullName: string;

        /**
         * The name of the file the suite was defined in.
         */
        filename: string;

        /**
         * The list of expectations that failed during execution of this spec.
         */
        failedExpectations: FailedExpectation[];

        /**
         * The list of deprecation warnings that occurred during execution this spec.
         */
        deprecationWarnings: DeprecatedExpectation[];

        /**
         * Once the spec has completed, this string represents the pass/fail status of this spec.
         */
        status: string;

        /**
         * The time in ms used by the spec execution, including any before/afterEach.
         */
        duration: number | null;

        /**
         * User-supplied properties, if any, that were set using {@link Env.setSuiteProperty}
         */
        properties: { [key: string]: unknown } | null;
    }

    interface SpecResult extends SuiteResult {
        /**
         * The list of expectations that passed during execution of this spec.
         */
        passedExpectations: PassedExpectation[];

        /**
         * If the spec is pending, this will be the reason.
         */
        pendingReason: string;

        debugLogs: DebugLogEntry[] | null;

        /**
         * User-supplied properties, if any, that were set using {@link Env.setSpecProperty}
         */
        properties: { [key: string]: unknown } | null;
    }

    interface DebugLogEntry {
        message: String;
        timestamp: number;
    }

    interface JasmineDoneInfo {
        overallStatus: string;
        totalTime: number;
        incompleteReason: string;
        order: Order;
        failedExpectations: ExpectationResult[];
        deprecationWarnings: ExpectationResult[];
    }

    /** @deprecated use JasmineStartedInfo instead */
    type SuiteInfo = JasmineStartedInfo;

    /** @deprecated use SuiteResult or SpecResult instead */
    type CustomReporterResult = SuiteResult & SpecResult;

    /** @deprecated use JasmineDoneInfo instead */
    type RunDetails = JasmineDoneInfo;

    interface CustomReporter {
        jasmineStarted?(suiteInfo: JasmineStartedInfo, done?: () => void): void | Promise<void>;
        suiteStarted?(result: SuiteResult, done?: () => void): void | Promise<void>;
        specStarted?(result: SpecResult, done?: () => void): void | Promise<void>;
        specDone?(result: SpecResult, done?: () => void): void | Promise<void>;
        suiteDone?(result: SuiteResult, done?: () => void): void | Promise<void>;
        jasmineDone?(runDetails: JasmineDoneInfo, done?: () => void): void | Promise<void>;
    }

    interface SpecFilter {
        /**
         * A function that takes a spec and returns true if it should be executed or false if it should be skipped.
         * @param spec The spec that the filter is being applied to
         */
        (spec: Spec): boolean;
    }

    /** @deprecated Please use `SpecFilter` instead of `SpecFunction`. */
    type SpecFunction = (spec?: Spec) => void;

    interface Spec {
        new(attrs: any): any;

        readonly id: string;
        env: Env;
        readonly description: string;
        getFullName(): string;
    }

    interface Suite extends Spec {
        parentSuite: Suite;
        children: Array<Spec | Suite>;
    }

    interface Spy<Fn extends Func = Func> {
        (...params: Parameters<Fn>): ReturnType<Fn>;

        and: SpyAnd<Fn>;
        calls: Calls<Fn>;
        withArgs(...args: MatchableArgs<Fn>): Spy<Fn>;
    }

    type SpyObj<T> =
        & T
        & {
            [K in keyof T]: T[K] extends Func ? T[K] & Spy<T[K]> : T[K];
        };

    /**
     * Determines whether the provided function is a Jasmine spy.
     * @since 2.0.0
     * @param putativeSpy The function to check.
     */
    function isSpy(putativeSpy: Func): putativeSpy is Spy;

    /**
     * It's like SpyObj, but doesn't verify argument/return types for functions.
     * Useful if TS cannot correctly infer type for complex objects.
     */
    type NonTypedSpyObj<T> = SpyObj<{ [K in keyof T]: T[K] extends Func ? Func : T[K] }>;

    /**
     * Obtains the promised type that a promise-returning function resolves to.
     */
    type PromisedResolveType<T> = T extends PromiseLike<infer TResult> ? TResult : never;

    /**
     * Obtains the type that a promise-returning function can be rejected with.
     * This is so we can use .and.rejectWith() only for functions that return a promise.
     */
    type PromisedRejectType<T> = T extends PromiseLike<unknown> ? any : never;

    interface SpyAnd<Fn extends Func> {
        identity: string;

        /** By chaining the spy with and.callThrough, the spy will still track all calls to it but in addition it will delegate to the actual implementation. */
        callThrough(): Spy<Fn>;
        /** By chaining the spy with and.returnValue, all calls to the function will return a specific value. */
        returnValue(val: ReturnType<Fn>): Spy<Fn>;
        /** By chaining the spy with and.returnValues, all calls to the function will return specific values in order until it reaches the end of the return values list. */
        returnValues(...values: Array<ReturnType<Fn>>): Spy<Fn>;
        /** By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function. */
        callFake(fn: Fn): Spy<Fn>;
        /** Tell the spy to return a promise resolving to the specified value when invoked. */
        resolveTo(val?: PromisedResolveType<ReturnType<Fn>>): Spy<Fn>;
        /** Tell the spy to return a promise rejecting with the specified value when invoked. */
        rejectWith(val?: PromisedRejectType<ReturnType<Fn>>): Spy<Fn>;
        /** By chaining the spy with and.throwError, all calls to the spy will throw the specified value. */
        throwError(msg: string | Error): Spy;
        /** When a calling strategy is used for a spy, the original stubbing behavior can be returned at any time with and.stub. */
        stub(): Spy;
    }

    interface Calls<Fn extends Func> {
        /** By chaining the spy with calls.any(), will return false if the spy has not been called at all, and then true once at least one call happens. */
        any(): boolean;
        /** By chaining the spy with calls.count(), will return the number of times the spy was called */
        count(): number;
        /** By chaining the spy with calls.argsFor(), will return the arguments passed to call number index */
        argsFor(index: number): Parameters<Fn>;
        /** By chaining the spy with calls.allArgs(), will return the arguments to all calls */
        allArgs(): ReadonlyArray<Parameters<Fn>>;
        /** By chaining the spy with calls.all(), will return the context (the this) and arguments passed all calls */
        all(): ReadonlyArray<CallInfo<Fn>>;
        /** By chaining the spy with calls.mostRecent(), will return the context (the this) and arguments for the most recent call */
        mostRecent(): CallInfo<Fn>;
        /** By chaining the spy with calls.first(), will return the context (the this) and arguments for the first call */
        first(): CallInfo<Fn>;
        /** By chaining the spy with calls.reset(), will clears all tracking for a spy */
        reset(): void;
        /** Set this spy to do a shallow clone of arguments passed to each invocation. */
        saveArgumentsByValue(): void;
        /** Get the "this" object that was passed to a specific invocation of this spy. */
        thisFor(index: number): ThisType<Fn>;
    }

    interface CallInfo<Fn extends Func> {
        /** The context (the this) for the call */
        object: ThisType<Fn>;
        /** All arguments passed to the call */
        args: Parameters<Fn>;
        /** The return value of the call */
        returnValue: ReturnType<Fn>;
    }

    interface Util {
        inherit(childClass: Function, parentClass: Function): any;
        formatException(e: any): any;
        htmlEscape(str: string): string;
        argsToArray(args: any): any;
        extend(destination: any, source: any): any;
    }

    interface JsApiReporter extends CustomReporter {
        new(): any;

        started: boolean;
        finished: boolean;
        runDetails: JasmineDoneInfo;

        status(): string;
        suiteResults(index: number, length: number): SuiteResult[];
        specResults(index: number, length: number): SpecResult[];
        suites(): { [id: string]: SuiteResult };
        specs(): SpecResult[];
        executionTime(): number;
    }

    interface Jasmine {
        Spec: Spec;
        clock: Clock;
        util: Util;
    }

    var HtmlReporter: HtmlReporter;
    var HtmlSpecFilter: HtmlSpecFilter;

    /**
     * Default number of milliseconds Jasmine will wait for an asynchronous spec to complete.
     */
    var DEFAULT_TIMEOUT_INTERVAL: number;

    /**
     * Maximum number of array elements to display when pretty printing objects.
     * This will also limit the number of keys and values displayed for an object.
     * Elements past this number will be ellipised.
     */
    var MAX_PRETTY_PRINT_ARRAY_LENGTH: number;

    /**
     * Maximum number of characters to display when pretty printing objects.
     * Characters past this number will be ellipised.
     */
    var MAX_PRETTY_PRINT_CHARS: number;

    /**
     * Maximum object depth the pretty printer will print to.
     * Set this to a lower value to speed up pretty printing if you have large objects.
     */
    var MAX_PRETTY_PRINT_DEPTH: number;

    var version: string;

    interface JasmineOptions {
        /**
         * The path to the project's base directory. This can be absolute or relative
         * to the current working directory. If it isn't specified, the current working
         * directory will be used.
         */
        projectBaseDir?: string;
    }

    interface JasmineConfig {
        /**
         * Whether to fail specs that contain no expectations.
         * @default false
         */
        failSpecWithNoExpectations?: boolean;
        /**
         * An array of helper file paths or globs that match helper files. Each path or
         * glob will be evaluated relative to the spec directory. Helpers are loaded before specs.
         */
        helpers?: string[];
        /**
         * Specifies how to load files with names ending in .js. Valid values are
         * "require" and "import". "import" should be safe in all cases, and is
         * required if your project contains ES modules with filenames ending in .js.
         * @default "require"
         */
        jsLoader?: "require" | "import";
        /**
         * Whether to run specs in a random order.
         */
        random?: boolean;
        /**
         * An array of module names to load via require() at the start of execution.
         */
        requires?: string[];
        /**
         * The directory that spec files are contained in, relative to the project base directory.
         */
        spec_dir?: string;
        /**
         * An array of spec file paths or globs that match helper files. Each path
         * or glob will be evaluated relative to the spec directory.
         */
        spec_files?: string[];
        /**
         * Whether to stop suite execution on the first spec failure.
         */
        stopOnSpecFailure?: boolean;
        /**
         * Whether to stop each spec on the first expectation failure.
         */
        stopSpecOnExpectationFailure?: boolean;
    }

    interface DefaultReporterOptions {
        timer?: any;
        print?: (...args: any[]) => void;
        showColors?: boolean;
        jasmineCorePath?: string;
    }
}

declare module "jasmine" {
    class jasmine {
        jasmine: jasmine.Jasmine;
        env: jasmine.Env;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        reportersCount: number;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        reporter: jasmine.CustomReporter;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        showingColors: boolean;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        projectBaseDir: string;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        specDir: string;
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        specFiles: string[];
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        helperFiles: string[];
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        requires: string[];
        /**
         * @deprecated Private property that may be changed or removed in the future
         */
        defaultReporterConfigured: boolean;

        constructor(options?: jasmine.JasmineOptions);
        addMatchers(matchers: jasmine.CustomMatcherFactories): void;
        /**
         * Add a custom reporter to the Jasmine environment.
         */
        addReporter(reporter: jasmine.CustomReporter): void;
        /**
         * Adds a spec file to the list that will be loaded when the suite is executed.
         */
        addSpecFile(filePath: string): void;
        addMatchingSpecFiles(patterns: string[]): void;
        addHelperFile(filePath: string): void;
        addMatchingHelperFiles(patterns: string[]): void;
        /**
         * @deprecated Private method that may be changed or removed in the future
         */
        addRequires(files: string[]): void;
        /**
         * Configure the default reporter.
         */
        configureDefaultReporter(options: jasmine.DefaultReporterOptions): void;
        execute(files?: string[], filterString?: string): Promise<jasmine.JasmineDoneInfo>;
        exitOnCompletion: boolean;
        loadConfig(config: jasmine.JasmineConfig): void;
        loadConfigFile(configFilePath?: string): void;
        /**
         * @deprecated Private method that may be changed or removed in the future
         */
        loadHelpers(): Promise<void>;
        /**
         * @deprecated Private method that may be changed or removed in the future
         */
        loadSpecs(): Promise<void>;
        /**
         * @deprecated Private method that may be changed or removed in the future
         */
        loadRequires(): void;

        /**
         * Provide a fallback reporter if no other reporters have been specified.
         */
        provideFallbackReporter(reporter: jasmine.CustomReporter): void;
        /**
         * Clears all registered reporters.
         */
        clearReporters(): void;
        /**
         * Sets whether to randomize the order of specs.
         */
        randomizeTests(value: boolean): void;
        /**
         * Sets the random seed.
         */
        seed(value: number): void;
        /**
         * Sets whether to show colors in the console reporter.
         */
        showColors(value: boolean): void;
        stopSpecOnExpectationFailure(value: boolean): void;
        stopOnSpecFailure(value: boolean): void;
        static ConsoleReporter(): any;

        /**
         * The version of jasmine-core in use
         */
        coreVersion(): string;
    }
    export = jasmine;
}
