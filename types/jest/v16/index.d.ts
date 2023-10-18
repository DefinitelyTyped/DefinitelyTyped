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

declare function expect(actual: any): jest.Matchers;

interface NodeRequire {
    /** Returns the actual module instead of a mock, bypassing all checks on whether the module should receive a mock implementation or not. */
    requireActual(moduleName: string): any;
    /** Returns a mock module instead of the actual module, bypassing all checks on whether the module should be required normally or not. */
    requireMock(moduleName: string): any;
}

declare namespace jest {
    function addMatchers(matchers: jasmine.CustomMatcherFactories): typeof jest;
    /** Disables automatic mocking in the module loader. */
    function autoMockOff(): typeof jest;
    /** Enables automatic mocking in the module loader. */
    function autoMockOn(): typeof jest;
    /** Clears the mock.calls and mock.instances properties of all mocks. Equivalent to calling .mockClear() on every mocked function. */
    function clearAllMocks(): typeof jest;
    /** Removes any pending timers from the timer system. If any timers have been scheduled, they will be cleared and will never have the opportunity to execute in the future. */
    function clearAllTimers(): typeof jest;
    /** Indicates that the module system should never return a mocked version of the specified module, including all of the specificied module's dependencies. */
    function deepUnmock(moduleName: string): typeof jest;
    /** Disables automatic mocking in the module loader. */
    function disableAutomock(): typeof jest;
    /** Mocks a module with an auto-mocked version when it is being required. */
    function doMock(moduleName: string, factory?: () => any, options?: MockOptions): typeof jest;
    /** Indicates that the module system should never return a mocked version of the specified module from require() (e.g. that it should always return the real module). */
    function dontMock(moduleName: string): typeof jest;
    /** Enables automatic mocking in the module loader. */
    function enableAutomock(): typeof jest;
    /** Creates a mock function. Optionally takes a mock implementation. */
    function fn<T>(implementation?: Function): Mock<T>;
    /** Use the automatic mocking system to generate a mocked version of the given module. */
    function genMockFromModule<T>(moduleName: string): T;
    /** Returns whether the given function is a mock function. */
    function isMockFunction(fn: any): fn is Mock<any>;
    /** Mocks a module with an auto-mocked version when it is being required. */
    function mock(moduleName: string, factory?: () => any, options?: MockOptions): typeof jest;
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
    /** Indicates that the module system should never return a mocked version of the specified module from require() (e.g. that it should always return the real module). */
    function unmock(moduleName: string): typeof jest;
    /** Instructs Jest to use fake versions of the standard timer functions. */
    function useFakeTimers(): typeof jest;
    /** Instructs Jest to use the real versions of the standard timer functions. */
    function useRealTimers(): typeof jest;

    interface MockOptions {
        virtual?: boolean | undefined;
    }

    interface EmptyFunction {
        (): void;
    }

    interface DoneCallback {
        (...args: any[]): any;
        fail(error?: string | { message: string }): any;
    }

    interface ProvidesCallback {
        (cb: DoneCallback): any;
    }

    interface Lifecycle {
        (fn: ProvidesCallback): any;
    }

    interface It {
        (name: string, fn?: ProvidesCallback): void;
        only: It;
        skip: It;
        concurrent: It;
    }

    interface Describe {
        (name: string, fn: EmptyFunction): void;
        only: Describe;
        skip: Describe;
    }

    interface Matchers {
        not: Matchers;
        lastCalledWith(...args: any[]): void;
        toBe(expected: any): void;
        toBeCalled(): void;
        toBeCalledWith(...args: any[]): void;
        toBeCloseTo(expected: number, delta: number): void;
        toBeDefined(): void;
        toBeFalsy(): void;
        toBeGreaterThan(expected: number): void;
        toBeGreaterThanOrEqual(expected: number): void;
        toBeInstanceOf(expected: any): void;
        toBeLessThan(expected: number): void;
        toBeLessThanOrEqual(expected: number): void;
        toBeNull(): void;
        toBeTruthy(): void;
        toBeUndefined(): void;
        toContain(expected: any): void;
        toContainEqual(expected: any): void;
        toEqual(expected: any): void;
        toHaveBeenCalled(): boolean;
        toHaveBeenCalledTimes(expected: number): boolean;
        toHaveBeenCalledWith(...params: any[]): boolean;
        toHaveBeenLastCalledWith(...params: any[]): boolean;
        toMatch(expected: string | RegExp): void;
        toMatchObject(expected: {}): void;
        toMatchSnapshot(): void;
        toThrow(): void;
        toThrowError(error?: string | Constructable | RegExp): void;
        toThrowErrorMatchingSnapshot(): void;
    }

    interface Constructable {
        new(...args: any[]): any;
    }

    interface Mock<T> extends Function {
        new(): T;
        (...args: any[]): any;
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

// Jest ships with a copy of Jasmine. They monkey-patch its APIs and divergence/deprecation are expected.
// Relevant parts of Jasmine's API are below so they can be changed and removed over time.
// This file can't reference jasmine.d.ts since the globals aren't compatible.

declare function spyOn(object: any, method: string): jasmine.Spy;
/** If you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending. */
declare function pending(reason?: string): void;
/** Fails a test when called within one. */
declare function fail(error?: any): void;
declare namespace jasmine {
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
        new(expectedClass: any): any;
        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    interface ArrayContaining {
        new(sample: any[]): any;
        asymmetricMatch(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining {
        new(sample: any): any;
        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
        jasmineToString(): string;
    }

    interface Spy {
        (...params: any[]): any;
        identity: string;
        and: SpyAnd;
        calls: Calls;
        mostRecentCall: { args: any[] };
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
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
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
