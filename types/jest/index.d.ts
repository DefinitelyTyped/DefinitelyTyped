// Type definitions for Jest 19.2.0
// Project: http://facebook.github.io/jest/
// Definitions by: Asana <https://asana.com>, Ivo Stratev <https://github.com/NoHomey>, jwbay <https://github.com/jwbay>, Alexey Svetliakov <https://github.com/asvetliakov>, Alex Jover Morales <https://github.com/alexjoverm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare var beforeAll: jest.Lifecycle;
declare var beforeEach: jest.Lifecycle;
declare var afterAll: jest.Lifecycle;
declare var afterEach: jest.Lifecycle;
declare var describe: jest.Describe;
declare var fdescribe: jest.Describe;
declare var xdescribe: jest.Describe;
declare var it: jest.It;
declare var fit: jest.It;
declare var xit: jest.It;
declare var test: jest.It;
declare var xtest: jest.It;

declare const expect: jest.Expect;

interface NodeRequire {
    /** Returns the actual module instead of a mock, bypassing all checks on whether the module should receive a mock implementation or not. */
    requireActual(moduleName: string): any;
    /** Returns a mock module instead of the actual module, bypassing all checks on whether the module should be required normally or not. */
    requireMock(moduleName: string): any;
}

declare namespace jest {
    /** Provides a way to add Jasmine-compatible matchers into your Jest context. */
    function addMatchers(matchers: jasmine.CustomMatcherFactories): typeof jest;
    /** Disables automatic mocking in the module loader. */
    function autoMockOff(): typeof jest;
    /** Enables automatic mocking in the module loader. */
    function autoMockOn(): typeof jest;
    /**
     * @deprecated use resetAllMocks instead
     */
    function clearAllMocks(): typeof jest;
    /** Clears the mock.calls and mock.instances properties of all mocks. Equivalent to calling .mockClear() on every mocked function. */
    function resetAllMocks(): typeof jest;
    /** Removes any pending timers from the timer system. If any timers have been scheduled, they will be cleared and will never have the opportunity to execute in the future. */
    function clearAllTimers(): typeof jest;
    /** Indicates that the module system should never return a mocked version of the specified module, including all of the specificied module's dependencies. */
    function deepUnmock(moduleName: string): typeof jest;
    /** Disables automatic mocking in the module loader. */
    function disableAutomock(): typeof jest;
    /** Mocks a module with an auto-mocked version when it is being required. */
    function doMock(moduleName: string): typeof jest;
    /** Indicates that the module system should never return a mocked version of the specified module from require() (e.g. that it should always return the real module). */
    function dontMock(moduleName: string): typeof jest;
    /** Enables automatic mocking in the module loader. */
    function enableAutomock(): typeof jest;
    /** Creates a mock function. Optionally takes a mock implementation. */
    function fn<T extends {}>(implementation: (...args: any[]) => T): Mock<T>;
    function fn<T>(implementation?: Function): Mock<T>;
    /** Use the automatic mocking system to generate a mocked version of the given module. */
    function genMockFromModule<T>(moduleName: string): T;
    /** Returns whether the given function is a mock function. */
    function isMockFunction(fn: any): fn is Mock<any>;
    /** Mocks a module with an auto-mocked version when it is being required. */
    function mock(moduleName: string, factory?: any, options?: MockOptions): typeof jest;
    /** Resets the module registry - the cache of all required modules. This is useful to isolate modules where local state might conflict between tests. */
    function resetModuleRegistry(): typeof jest;
    /** Resets the module registry - the cache of all required modules. This is useful to isolate modules where local state might conflict between tests. */
    function resetModules(): typeof jest;
    /** Exhausts tasks queued by setImmediate(). */
    function runAllImmediates(): typeof jest;
    /** Exhausts the micro-task queue (usually interfaced in node via process.nextTick). */
    function runAllTicks(): typeof jest;
    /** Exhausts the macro-task queue (i.e., all tasks queued by setTimeout() and setInterval()). */
    function runAllTimers(): typeof jest;
    /** Executes only the macro-tasks that are currently pending (i.e., only the tasks that have been queued by setTimeout() or setInterval() up to this point).
     * If any of the currently pending macro-tasks schedule new macro-tasks, those new tasks will not be executed by this call. */
    function runOnlyPendingTimers(): typeof jest;
    /** Executes only the macro task queue (i.e. all tasks queued by setTimeout() or setInterval() and setImmediate()). */
    function runTimersToTime(msToRun: number): typeof jest;
    /** Explicitly supplies the mock object that the module system should return for the specified module. */
    function setMock<T>(moduleName: string, moduleExports: T): typeof jest;
    /** Creates a mock function similar to jest.fn but also tracks calls to object[methodName] */
    function spyOn<T extends {}, M extends keyof T>(object: T, method: M): SpyInstance<T[M]>;
    /** Indicates that the module system should never return a mocked version of the specified module from require() (e.g. that it should always return the real module). */
    function unmock(moduleName: string): typeof jest;
    /** Instructs Jest to use fake versions of the standard timer functions. */
    function useFakeTimers(): typeof jest;
    /** Instructs Jest to use the real versions of the standard timer functions. */
    function useRealTimers(): typeof jest;

    interface MockOptions {
        virtual?: boolean;
    }

    interface EmptyFunction {
        (): void;
    }

    interface DoneCallback {
        (...args: any[]): any
        fail(error?: string | { message: string }): any;
    }

    interface ProvidesCallback {
        (cb: DoneCallback): any;
    }

    interface Lifecycle {
        (fn: ProvidesCallback): any;
    }

    /** Creates a test closure */
    interface It {
        /**
         * Creates a test closure.
         *
         * @param {string} name The name of your test
         * @param {fn?} ProvidesCallback The function for your test
         */
        (name: string, fn?: ProvidesCallback): void;
        /** Only runs this test in the current file. */
        only: It;
        skip: It;
        concurrent: It;
    }

    interface Describe {
        (name: string, fn: EmptyFunction): void
        only: Describe;
        skip: Describe;
    }

    interface MatcherUtils {
        readonly isNot: boolean;
        utils: {
            readonly EXPECTED_COLOR: string;
            readonly RECEIVED_COLOR: string;
            ensureActualIsNumber(actual: any, matcherName?: string): void;
            ensureExpectedIsNumber(actual: any, matcherName?: string): void;
            ensureNoExpected(actual: any, matcherName?: string): void;
            ensureNumbers(actual: any, expected: any, matcherName?: string): void;
            /** get the type of a value with handling of edge cases like `typeof []` and `typeof null` */
            getType(value: any): string;
            matcherHint(matcherName: string, received?: string, expected?: string, options?: { secondArgument?: string, isDirectExpectCall?: boolean }): string;
            pluralize(word: string, count: number): string;
            printExpected(value: any): string;
            printReceived(value: any): string;
            printWithType(name: string, received: any, print: (value: any) => string): string;
            stringify(object: {}, maxDepth?: number): string;
        }
    }

    interface ExpectExtendMap {
        [key: string]: (this: MatcherUtils, received: any, actual: any) => { message: () => string, pass: boolean };
    }

    /** The `expect` function is used every time you want to test a value. You will rarely call `expect` by itself. */
    interface Expect {
        /**
         * The `expect` function is used every time you want to test a value. You will rarely call `expect` by itself.
         *
         * @param {any} actual The value to apply matchers against.
        */
        (actual: any): Matchers;
        anything(): any;
        /** Matches anything that was created with the given constructor. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value. */
        any(classType: any): any;
        /** Matches any array made up entirely of elements in the provided array. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value.  */
        arrayContaining(arr: any[]): any;
        /** Verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called. */
        assertions(num: number): void;
        /** You can use `expect.extend` to add your own matchers to Jest. */
        extend(obj: ExpectExtendMap): void;
        /** Matches any object that recursively matches the provided keys. This is often handy in conjunction with other asymmetric matchers. */
        objectContaining(obj: {}): any;
        /** Matches any string that contains the exact provided string */
        stringMatching(str: string | RegExp): any;
    }

    interface Matchers {
        /** If you know how to test something, `.not` lets you test its opposite. */
        not: Matchers;
        lastCalledWith(...args: any[]): void;
        /** Checks that a value is what you expect. It uses `===` to check strict equality. Don't use `toBe` with floating-point numbers. */
        toBe(expected: any): void;
        /** Ensures that a mock function is called. */
        toBeCalled(): void;
        /** Ensure that a mock function is called with specific arguments. */
        toBeCalledWith(...args: any[]): void;
        /** Using exact equality with floating point numbers is a bad idea. Rounding means that intuitive things fail. */
        toBeCloseTo(expected: number, delta?: number): void;
        /** Ensure that a variable is not undefined. */
        toBeDefined(): void;
        /** When you don't care what a value is, you just want to ensure a value is false in a boolean context. */
        toBeFalsy(): void;
        /** For comparing floating point numbers. */
        toBeGreaterThan(expected: number): void;
        /** For comparing floating point numbers. */
        toBeGreaterThanOrEqual(expected: number): void;
        /** Ensure that an object is an instance of a class. This matcher uses `instanceof` underneath. */
        toBeInstanceOf(expected: any): void
        /** For comparing floating point numbers. */
        toBeLessThan(expected: number): void;
        /** For comparing floating point numbers. */
        toBeLessThanOrEqual(expected: number): void;
        /** This is the same as `.toBe(null)` but the error messages are a bit nicer. So use `.toBeNull()` when you want to check that something is null. */
        toBeNull(): void;
        /** Use when you don't care what a value is, you just want to ensure a value is true in a boolean context. In JavaScript, there are six falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy. */
        toBeTruthy(): void;
        /** Used to check that a variable is undefined. */
        toBeUndefined(): void;
        /** Used when you want to check that an item is in a list. For testing the items in the list, this uses `===`, a strict equality check. */
        toContain(expected: any): void;
        /** Used when you want to check that an item is in a list. For testing the items in the list, this  matcher recursively checks the equality of all fields, rather than checking for object identity. */
        toContainEqual(expected: any): void;
        /** Used when you want to check that two objects have the same value. This matcher recursively checks the equality of all fields, rather than checking for object identity. */
        toEqual(expected: any): void;
        /** Ensures that a mock function is called. */
        toHaveBeenCalled(): boolean;
        /** Ensures that a mock function is called an exact number of times. */
        toHaveBeenCalledTimes(expected: number): boolean;
        /** Ensure that a mock function is called with specific arguments. */
        toHaveBeenCalledWith(...params: any[]): boolean;
        /** If you have a mock function, you can use `.toHaveBeenLastCalledWith` to test what arguments it was last called with. */
        toHaveBeenLastCalledWith(...params: any[]): boolean;
        /** Used to check that an object has a `.length` property and it is set to a certain numeric value. */
        toHaveLength(expected: number): void;
        toHaveProperty(propertyPath: string, value?: any): void;
        /** Check that a string matches a regular expression. */
        toMatch(expected: string | RegExp): void;
        /** Used to check that a JavaScript object matches a subset of the properties of an objec */
        toMatchObject(expected: {}): void;
        /** This ensures that a value matches the most recent snapshot. Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information. */
        toMatchSnapshot(snapshotName?: string): void;
        /** Used to test that a function throws when it is called. */
        toThrow(error?: string | Constructable | RegExp): void;
        /** If you want to test that a specific error is thrown inside a function. */
        toThrowError(error?: string | Constructable | RegExp): void;
        /** Used to test that a function throws a error matching the most recent snapshot when it is called. */
        toThrowErrorMatchingSnapshot(): void;
    }

    interface Constructable {
        new (...args: any[]): any
    }

    interface Mock<T> extends Function, MockInstance<T> {
        new (): T;
        (...args: any[]): any;
    }

    interface SpyInstance<T> extends MockInstance<T> {
        mockRestore(): void;
    }

    /**
     * Wrap module with mock definitions
     * @example
     *  jest.mock("../api");
     *  import { Api } from "../api";
     *
     *  const myApi: jest.Mocked<Api> = new Api() as any;
     *  myApi.myApiMethod.mockImplementation(() => "test");
     */
    type Mocked<T> = {
        [P in keyof T]: T[P] & MockInstance<T[P]>;
    } & T;

    interface MockInstance<T> {
        mock: MockContext<T>;
        mockClear(): void;
        mockReset(): void;
        mockImplementation(fn: Function): Mock<T>;
        mockImplementationOnce(fn: Function): Mock<T>;
        mockReturnThis(): Mock<T>;
        mockReturnValue(value: any): Mock<T>;
        mockReturnValueOnce(value: any): Mock<T>;
    }

    interface MockContext<T> {
        calls: any[][];
        instances: T[];
    }
}

//Jest ships with a copy of Jasmine. They monkey-patch its APIs and divergence/deprecation are expected.
//Relevant parts of Jasmine's API are below so they can be changed and removed over time.
//This file can't reference jasmine.d.ts since the globals aren't compatible.

declare function spyOn(object: any, method: string): jasmine.Spy;
/** If you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending. */
declare function pending(reason?: string): void;
/** Fails a test when called within one. */
declare function fail(error?: any): void;
declare namespace jasmine {
    var DEFAULT_TIMEOUT_INTERVAL: number;
    var clock: () => Clock;
    function any(aclass: any): Any;
    function anything(): Any;
    function arrayContaining(sample: any[]): ArrayContaining;
    function objectContaining(sample: any): ObjectContaining;
    function createSpy(name: string, originalFn?: Function): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    function createSpyObj<T>(baseName: string, methodNames: any[]): T;
    function pp(value: any): string;
    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
    function addMatchers(matchers: CustomMatcherFactories): void;
    function stringMatching(value: string | RegExp): Any;

    interface Clock {
        install(): void;
        uninstall(): void;
        /** Calls to any registered callback are triggered when the clock is ticked forward via the jasmine.clock().tick function, which takes a number of milliseconds. */
        tick(ms: number): void;
        mockDate(date?: Date): void;
    }

    interface Any {
        new (expectedClass: any): any;
        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    interface ArrayContaining {
        new (sample: any[]): any;
        asymmetricMatch(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining {
        new (sample: any): any;
        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
        jasmineToString(): string;
    }

    interface Spy {
        (...params: any[]): any;
        identity: string;
        and: SpyAnd;
        calls: Calls;
        mostRecentCall: { args: any[]; };
        argsForCall: any[];
        wasCalled: boolean;
    }

    interface SpyAnd {
        /** By chaining the spy with and.callThrough, the spy will still track all calls to it but in addition it will delegate to the actual implementation. */
        callThrough(): Spy;
        /** By chaining the spy with and.returnValue, all calls to the function will return a specific value. */
        returnValue(val: any): Spy;
        /** By chaining the spy with and.returnValues, all calls to the function will return specific values in order until it reaches the end of the return values list. */
        returnValues(...values: any[]): Spy;
        /** By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function. */
        callFake(fn: Function): Spy;
        /** By chaining the spy with and.throwError, all calls to the spy will throw the specified value. */
        throwError(msg: string): Spy;
        /** When a calling strategy is used for a spy, the original stubbing behavior can be returned at any time with and.stub. */
        stub(): Spy;
    }

    interface Calls {
        /** By chaining the spy with calls.any(), will return false if the spy has not been called at all, and then true once at least one call happens. */
        any(): boolean;
        /** By chaining the spy with calls.count(), will return the number of times the spy was called */
        count(): number;
        /** By chaining the spy with calls.argsFor(), will return the arguments passed to call number index */
        argsFor(index: number): any[];
        /** By chaining the spy with calls.allArgs(), will return the arguments to all calls */
        allArgs(): any[];
        /** By chaining the spy with calls.all(), will return the context (the this) and arguments passed all calls */
        all(): CallInfo[];
        /** By chaining the spy with calls.mostRecent(), will return the context (the this) and arguments for the most recent call */
        mostRecent(): CallInfo;
        /** By chaining the spy with calls.first(), will return the context (the this) and arguments for the first call */
        first(): CallInfo;
        /** By chaining the spy with calls.reset(), will clears all tracking for a spy */
        reset(): void;
    }

    interface CallInfo {
        /** The context (the this) for the call */
        object: any;
        /** All arguments passed to the call */
        args: any[];
        /** The return value of the call */
        returnValue: any;
    }

    interface CustomMatcherFactories {
        [index: string]: CustomMatcherFactory;
    }

    interface CustomMatcherFactory {
        (util: MatchersUtil, customEqualityTesters: Array<CustomEqualityTester>): CustomMatcher;
    }

    interface MatchersUtil {
        equals(a: any, b: any, customTesters?: Array<CustomEqualityTester>): boolean;
        contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: Array<CustomEqualityTester>): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: Array<any>): string;
    }

    interface CustomEqualityTester {
        (first: any, second: any): boolean;
    }

    interface CustomMatcher {
        compare<T>(actual: T, expected: T): CustomMatcherResult;
        compare(actual: any, expected: any): CustomMatcherResult;
    }

    interface CustomMatcherResult {
        pass: boolean;
        message: string | (() => string);
    }

    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
}
