// Type definitions for Jasmine 2.8
// Project: https://jasmine.github.io/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Theodore Brown <https://github.com/theodorejb>
//                 David Pärsson <https://github.com/davidparsson>
//                 Gabe Moothart <https://github.com/gmoothart>
//                 Lukas Zech <https://github.com/lukas-zech-software>
//                 Boris Breuer <https://github.com/Engineer2B>
//                 Chris Yungmann <https://github.com/cyungmann>
//                 Yaroslav Admin <https://github.com/devoto13>
//                 Domas Trijonis <https://github.com/fdim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// For ddescribe / iit use : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/karma-jasmine/karma-jasmine.d.ts

type ImplementationCallback = (() => Promise<any>) | ((done: DoneFn) => void);

/**
 * Create a group of specs (often called a suite).
 * @param description Textual description of the group
 * @param specDefinitions Function for Jasmine to invoke that will define inner suites a specs
 */
declare function describe(description: string, specDefinitions: () => void): void;
declare function fdescribe(description: string, specDefinitions: () => void): void;
declare function xdescribe(description: string, specDefinitions: () => void): void;

/**
 * Define a single spec. A spec should contain one or more expectations that test the state of the code.
 * A spec whose expectations all succeed will be passing and a spec with any failures will fail.
 * @param expectation Textual description of what this spec is checking
 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
 * @param timeout Custom timeout for an async spec.
 */
declare function it(expectation: string, assertion?: ImplementationCallback, timeout?: number): void;

/**
 * A focused it
 * If suites or specs are focused, only those that are focused will be executed.
 * @param expectation
 * @param assertion
 * @param timeout
 */
declare function fit(expectation: string, assertion?: ImplementationCallback, timeout?: number): void;
declare function xit(expectation: string, assertion?: ImplementationCallback, timeout?: number): void;

/**
 * Mark a spec as pending, expectation results will be ignored.
 * If you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending.
 * @param reason
 * @returns {}
 */
declare function pending(reason?: string): void;

/**
 * Run some shared setup before each of the specs in the describe in which it is called.
 * @param action Function that contains the code to setup your specs.
 * @param timeout Custom timeout for an async beforeEach.
 */
declare function beforeEach(action: ImplementationCallback, timeout?: number): void;

/**
 * Run some shared teardown after each of the specs in the describe in which it is called.
 * @param action Function that contains the code to teardown your specs.
 * @param timeout Custom timeout for an async afterEach.
 */
declare function afterEach(action: ImplementationCallback, timeout?: number): void;

/**
 * Run some shared setup once before all of the specs in the describe are run.
 * Note: Be careful, sharing the setup from a beforeAll makes it easy to accidentally leak state between your specs so that they erroneously pass or fail.
 * @param action Function that contains the code to setup your specs.
 * @param timeout Custom timeout for an async beforeAll.
 */
declare function beforeAll(action: ImplementationCallback, timeout?: number): void;

/**
 * Run some shared teardown once before all of the specs in the describe are run.
 * Note: Be careful, sharing the teardown from a afterAll makes it easy to accidentally leak state between your specs so that they erroneously pass or fail.
 * @param action Function that contains the code to teardown your specs.
 * @param timeout Custom timeout for an async afterAll
 */
declare function afterAll(action: ImplementationCallback, timeout?: number): void;

/**
 * Create an expectation for a spec.
 * @param spy
 */
declare function expect(spy: Function): jasmine.Matchers<any>;

/**
 * Create an expectation for a spec.
 * @param actual
 */
declare function expect<T>(actual: ArrayLike<T>): jasmine.ArrayLikeMatchers<T>;

/**
 * Create an expectation for a spec.
 * @param actual Actual computed value to test expectations against.
 */
declare function expect<T>(actual: T): jasmine.Matchers<T>;

/**
 * Create an expectation for a spec.
 */
declare function expect(): jasmine.NothingMatcher;

/**
 * Explicitly mark a spec as failed.
 * @param e
 */
declare function fail(e?: any): void;

/** Action method that should be called when the async work is complete */
interface DoneFn extends Function {
    (): void;

    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

/**
 * Install a spy onto an existing object.
 * @param object The object upon which to install the Spy
 * @param method The name of the method to replace with a Spy.
 */
declare function spyOn<T>(object: T, method: keyof T): jasmine.Spy;

/**
 * Install a spy on a property onto an existing object.
 * @param object The object upon which to install the Spy
 * @param property The name of the property to replace with a Spy
 * @param accessType The access type (get|set) of the property to Spy on.
 */
declare function spyOnProperty<T>(object: T, property: keyof T, accessType?: 'get' | 'set'): jasmine.Spy;

declare function runs(asyncMethod: Function): void;
declare function waitsFor(latchMethod: () => boolean, failureMessage?: string, timeout?: number): void;
declare function waits(timeout?: number): void;

declare namespace jasmine {
    type Expected<T> = T | ObjectContaining<T> | Any | Spy;
    type SpyObjMethodNames<T = undefined> = T extends undefined ? (ReadonlyArray<string> | {[methodName: string]: any}) : (ReadonlyArray<keyof T> | {[P in keyof T]?: ReturnType<T[P] extends (...args: any[]) => any ? T[P] : any>});

    var clock: () => Clock;

    var matchersUtil: MatchersUtil;

    function any(aclass: any): Any;

    function anything(): Any;

    function arrayContaining<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function arrayWithExactContents<T>(sample: ArrayLike<T>): ArrayContaining<T>;
    function objectContaining<T>(sample: Partial<T>): ObjectContaining<T>;
    function createSpy(name?: string, originalFn?: Function): Spy;

    function createSpyObj(baseName: string, methodNames: SpyObjMethodNames): any;
    function createSpyObj<T>(baseName: string, methodNames: SpyObjMethodNames<T>): SpyObj<T>;

    function createSpyObj(methodNames: SpyObjMethodNames): any;
    function createSpyObj<T>(methodNames: SpyObjMethodNames): SpyObj<T>;

    function pp(value: any): string;

    function getEnv(): Env;

    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;

    function addMatchers(matchers: CustomMatcherFactories): void;

    function stringMatching(str: string): Any;
    function stringMatching(str: RegExp): Any;

    function formatErrorMsg(domain: string, usage: string): (msg: string) => string;

    interface Any {
        (...params: any[]):any; // jasmine.Any can also be a function
        new (expectedClass: any): any;

        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    // taken from TypeScript lib.core.es6.d.ts, applicable to CustomMatchers.contains()
    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }

    interface ArrayContaining<T> {
        new (sample: ArrayLike<T>): ArrayLike<T>;

        asymmetricMatch(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining<T> {
        new (sample: Partial<T>): Partial<T>;

        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
        jasmineToString(): string;
    }

    interface Block {

        new (env: Env, func: SpecFunction, spec: Spec): any;

        execute(onComplete: () => void): void;
    }

    interface WaitsBlock extends Block {
        new (env: Env, timeout: number, spec: Spec): any;
    }

    interface WaitsForBlock extends Block {
        new (env: Env, timeout: number, latchFunction: SpecFunction, message: string, spec: Spec): any;
    }

    interface Clock {
        install(): void;
        uninstall(): void;
        /** Calls to any registered callback are triggered when the clock is ticked forward via the jasmine.clock().tick function, which takes a number of milliseconds. */
        tick(ms: number): void;
        mockDate(date?: Date): void;
        withMock(func: () => void): void;
    }

    type CustomEqualityTester = (first: any, second: any) => boolean | void;

    interface CustomMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
        negativeCompare?<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        negativeCompare?(actual: any, ...expected: any[]): CustomMatcherResult;
    }

    type CustomMatcherFactory = (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]) => CustomMatcher;

    interface CustomMatcherFactories {
        [index: string]: CustomMatcherFactory;
    }

    interface CustomMatcherResult {
        pass: boolean;
        message?: string | undefined;
    }

    interface MatchersUtil {
        equals(a: any, b: any, customTesters?: CustomEqualityTester[]): boolean;
        contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: CustomEqualityTester[]): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;
    }

    interface Env {
        setTimeout: any;
        clearTimeout: void;
        setInterval: any;
        clearInterval: void;
        updateInterval: number;

        currentSpec: Spec;

        matchersClass: Matchers<any>;

        version(): any;
        versionString(): string;
        nextSpecId(): number;
        addReporter(reporter: Reporter): void;
        addReporter(reporter: CustomReporter): void;
        execute(): void;
        describe(description: string, specDefinitions: () => void): Suite;
        // ddescribe(description: string, specDefinitions: () => void): Suite; Not a part of jasmine. Angular team adds these
        beforeEach(beforeEachFunction: ImplementationCallback, timeout?: number): void;
        beforeAll(beforeAllFunction: ImplementationCallback, timeout?: number): void;
        currentRunner(): Runner;
        afterEach(afterEachFunction: ImplementationCallback, timeout?: number): void;
        afterAll(afterAllFunction: ImplementationCallback, timeout?: number): void;
        xdescribe(desc: string, specDefinitions: () => void): XSuite;
        it(description: string, func: () => void): Spec;
        // iit(description: string, func: () => void): Spec; Not a part of jasmine. Angular team adds these
        xit(desc: string, func: () => void): XSpec;
        compareRegExps_(a: RegExp, b: RegExp, mismatchKeys: string[], mismatchValues: string[]): boolean;
        compareObjects_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean;
        equals_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean;
        contains_(haystack: any, needle: any): boolean;
        addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
        addMatchers(matchers: CustomMatcherFactories): void;
        specFilter(spec: Spec): boolean;
        throwOnExpectationFailure(value: boolean): void;
        seed(seed: string | number): string | number;
        provideFallbackReporter(reporter: Reporter): void;
        throwingExpectationFailures(): boolean;
        allowRespy(allow: boolean): void;
        randomTests(): boolean;
        randomizeTests(b: boolean): void;
        clearReporters(): void;
    }

    interface FakeTimer {

        new (): any;

        reset(): void;
        tick(millis: number): void;
        runFunctionsWithinRange(oldMillis: number, nowMillis: number): void;
        scheduleFunction(timeoutKey: any, funcToCall: () => void, millis: number, recurring: boolean): void;
    }

    interface HtmlReporter {
        new (): any;
    }

    interface HtmlSpecFilter {
        new (): any;
    }

    interface Result {
        type: string;
    }

    interface NestedResults extends Result {
        description: string;

        totalCount: number;
        passedCount: number;
        failedCount: number;

        skipped: boolean;

        rollupCounts(result: NestedResults): void;
        log(values: any): void;
        getItems(): Result[];
        addResult(result: Result): void;
        passed(): boolean;
    }

    interface MessageResult extends Result {
        values: any;
        trace: Trace;
    }

    interface ExpectationResult extends Result {
        matcherName: string;
        passed(): boolean;
        expected: any;
        actual: any;
        message: string;
        trace: Trace;
    }

    interface Order {
        new (options: { random: boolean, seed: string }): any;
        random: boolean;
        seed: string;
        sort<T>(items: T[]): T[];
    }

    namespace errors {
        class ExpectationFailed extends Error {
            constructor();

            stack: any;
        }
    }

    interface TreeProcessor {
        new (attrs: any): any;
        execute: (done: Function) => void;
        processTree(): any;
    }

    interface Trace {
        name: string;
        message: string;
        stack: any;
    }

    interface PrettyPrinter {

        new (): any;

        format(value: any): void;
        iterateObject(obj: any, fn: (property: string, isGetter: boolean) => void): void;
        emitScalar(value: any): void;
        emitString(value: string): void;
        emitArray(array: any[]): void;
        emitObject(obj: any): void;
        append(value: any): void;
    }

    interface StringPrettyPrinter extends PrettyPrinter {
    }

    interface Queue {

        new (env: any): any;

        env: Env;
        ensured: boolean[];
        blocks: Block[];
        running: boolean;
        index: number;
        offset: number;
        abort: boolean;

        addBefore(block: Block, ensure?: boolean): void;
        add(block: any, ensure?: boolean): void;
        insertNext(block: any, ensure?: boolean): void;
        start(onComplete?: () => void): void;
        isRunning(): boolean;
        next_(): void;
        results(): NestedResults;
    }

    interface Matchers<T> {

        new (env: Env, actual: T, spec: Env, isNot?: boolean): any;

        env: Env;
        actual: T;
        spec: Env;
        isNot?: boolean | undefined;
        message(): any;

        /**
         *
         * @param expected the actual value to be === to the expected value.
         * @param expectationFailOutput
         * @returns {}
         */
        toBe(expected: Expected<T>, expectationFailOutput?: any): boolean;

        /**
         *
         * @param expected the actual value to be equal to the expected, using deep equality comparison.
         * @param expectationFailOutput
         * @returns {}
         */
        toEqual(expected: Expected<T>, expectationFailOutput?: any): boolean;
        toMatch(expected: string | RegExp, expectationFailOutput?: any): boolean;
        toBeDefined(expectationFailOutput?: any): boolean;
        toBeUndefined(expectationFailOutput?: any): boolean;
        toBeNull(expectationFailOutput?: any): boolean;
        toBeNaN(): boolean;
        toBeTruthy(expectationFailOutput?: any): boolean;
        toBeFalsy(expectationFailOutput?: any): boolean;
        toHaveBeenCalled(): boolean;
        toHaveBeenCalledBefore(expected: Spy): boolean;
        toHaveBeenCalledWith(...params: any[]): boolean;
        toHaveBeenCalledTimes(expected: number): boolean;
        toContain(expected: any, expectationFailOutput?: any): boolean;
        toBeLessThan(expected: number, expectationFailOutput?: any): boolean;
        toBeLessThanOrEqual(expected: number, expectationFailOutput?: any): boolean;
        toBeGreaterThan(expected: number, expectationFailOutput?: any): boolean;
        toBeGreaterThanOrEqual(expected: number, expectationFailOutput?: any): boolean;
        toBeCloseTo(expected: number, precision?: any, expectationFailOutput?: any): boolean;
        toThrow(expected?: any): boolean;
        toThrowError(message?: string | RegExp): boolean;
        toThrowError(expected?: new (...args: any[]) => Error, message?: string | RegExp): boolean;

        not: Matchers<T>;

        Any: Any;
    }

    interface ArrayLikeMatchers<T> extends Matchers<ArrayLike<T>> {
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput?: any): boolean;
        toEqual(expected: Expected<ArrayLike<T>> | ArrayContaining<T>, expectationFailOutput?: any): boolean;
        toContain(expected: Expected<T>, expectationFailOutput?: any): boolean;
        not: ArrayLikeMatchers<T>;
    }

    interface NothingMatcher {
        nothing(): void;
    }

    interface Reporter {
        reportRunnerStarting(runner: Runner): void;
        reportRunnerResults(runner: Runner): void;
        reportSuiteResults(suite: Suite): void;
        reportSpecStarting(spec: Spec): void;
        reportSpecResults(spec: Spec): void;
        log(str: string): void;
    }

    interface MultiReporter extends Reporter {
        addReporter(reporter: Reporter): void;
    }

    interface SuiteInfo {
        totalSpecsDefined: number;
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

    interface PassedExpectation extends CustomReportExpectation {

    }

    interface CustomReporterResult {
        description: string;
        failedExpectations?: FailedExpectation[] | undefined;
        fullName: string;
        id: string;
        passedExpectations?: PassedExpectation[] | undefined;
        pendingReason?: string | undefined;
        status?: string | undefined;
    }

    interface RunDetails {
        failedExpectations: ExpectationResult[];
        order: jasmine.Order;
    }

    interface CustomReporter {
        jasmineStarted?(suiteInfo: SuiteInfo): void;
        suiteStarted?(result: CustomReporterResult): void;
        specStarted?(result: CustomReporterResult): void;
        specDone?(result: CustomReporterResult): void;
        suiteDone?(result: CustomReporterResult): void;
        jasmineDone?(runDetails: RunDetails): void;
    }

    interface Runner {

        new (env: Env): any;

        execute(): void;
        beforeEach(beforeEachFunction: SpecFunction): void;
        afterEach(afterEachFunction: SpecFunction): void;
        beforeAll(beforeAllFunction: SpecFunction): void;
        afterAll(afterAllFunction: SpecFunction): void;
        finishCallback(): void;
        addSuite(suite: Suite): void;
        add(block: Block): void;
        specs(): Spec[];
        suites(): Suite[];
        topLevelSuites(): Suite[];
        results(): NestedResults;
    }

    type SpecFunction = (spec?: Spec) => void;

    interface SuiteOrSpec {
        id: number;
        env: Env;
        description: string;
        queue: Queue;
    }

    interface Spec extends SuiteOrSpec {

        new (env: Env, suite: Suite, description: string): any;

        suite: Suite;

        afterCallbacks: SpecFunction[];
        spies_: Spy[];

        results_: NestedResults;
        matchersClass: Matchers<any>;

        getFullName(): string;
        results(): NestedResults;
        log(arguments: any): any;
        runs(func: SpecFunction): Spec;
        addToQueue(block: Block): void;
        addMatcherResult(result: Result): void;
        getResult(): any;
        expect(actual: any): any;
        waits(timeout: number): Spec;
        waitsFor(latchFunction: SpecFunction, timeoutMessage?: string, timeout?: number): Spec;
        fail(e?: any): void;
        getMatchersClass_(): Matchers<any>;
        addMatchers(matchersPrototype: CustomMatcherFactories): void;
        finishCallback(): void;
        finish(onComplete?: () => void): void;
        after(doAfter: SpecFunction): void;
        execute(onComplete?: () => void, enabled?: boolean): any;
        addBeforesAndAftersToQueue(): void;
        explodes(): void;
        spyOn(obj: any, methodName: string, ignoreMethodDoesntExist: boolean): Spy;
        spyOnProperty(object: any, property: string, accessType?: 'get' | 'set'): Spy;
        removeAllSpies(): void;
        throwOnExpectationFailure: boolean;
    }

    interface XSpec {
        id: number;
        runs(): void;
    }

    interface Suite extends SuiteOrSpec {

        new (env: Env, description: string, specDefinitions: () => void, parentSuite: Suite): any;

        parentSuite: Suite;

        getFullName(): string;
        finish(onComplete?: () => void): void;
        beforeEach(beforeEachFunction: SpecFunction): void;
        afterEach(afterEachFunction: SpecFunction): void;
        beforeAll(beforeAllFunction: SpecFunction): void;
        afterAll(afterAllFunction: SpecFunction): void;
        results(): NestedResults;
        add(suiteOrSpec: SuiteOrSpec): void;
        specs(): Spec[];
        suites(): Suite[];
        children(): any[];
        execute(onComplete?: () => void): void;
    }

    interface XSuite {
        execute(): void;
    }

    interface Spy {
        (...params: any[]): any;

        and: SpyAnd;
        calls: Calls;
    }

    type SpyObj<T> = T & {
        [k in keyof T]: T[k] extends Function ? T[k] & Spy : T[k];
    }

    interface SpyAnd {
        identity: string;

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
        /** By chaining the spy with calls.any(), will return false if the spy has not been called at all, and then true once at least one call happens. **/
        any(): boolean;
        /** By chaining the spy with calls.count(), will return the number of times the spy was called **/
        count(): number;
        /** By chaining the spy with calls.argsFor(), will return the arguments passed to call number index **/
        argsFor(index: number): any[];
        /** By chaining the spy with calls.allArgs(), will return the arguments to all calls **/
        allArgs(): any[];
        /** By chaining the spy with calls.all(), will return the context (the this) and arguments passed all calls **/
        all(): CallInfo[];
        /** By chaining the spy with calls.mostRecent(), will return the context (the this) and arguments for the most recent call **/
        mostRecent(): CallInfo;
        /** By chaining the spy with calls.first(), will return the context (the this) and arguments for the first call **/
        first(): CallInfo;
        /** By chaining the spy with calls.reset(), will clears all tracking for a spy **/
        reset(): void;
        /** Set this spy to do a shallow clone of arguments passed to each invocation. */
        saveArgumentsByValue(): void;
    }

    interface CallInfo {
        /** The context (the this) for the call */
        object: any;
        /** All arguments passed to the call */
        args: any[];
        /** The return value of the call */
        returnValue: any;
    }

    interface Util {
        inherit(childClass: Function, parentClass: Function): any;
        formatException(e: any): any;
        htmlEscape(str: string): string;
        argsToArray(args: any): any;
        extend(destination: any, source: any): any;
    }

    interface JsApiReporter extends Reporter {

        started: boolean;
        finished: boolean;
        result: any;
        messages: any;
        runDetails: RunDetails;

        new (): any;

        suites(): Suite[];
        summarize_(suiteOrSpec: SuiteOrSpec): any;
        results(): any;
        resultsForSpec(specId: any): any;
        log(str: any): any;
        resultsForSpecs(specIds: any): any;
        summarizeResult_(result: any): any;
    }

    interface Jasmine {
        Spec: Spec;
        clock: Clock;
        util: Util;
    }

    export var HtmlReporter: HtmlReporter;
    export var HtmlSpecFilter: HtmlSpecFilter;
    export var DEFAULT_TIMEOUT_INTERVAL: number;
    export var MAX_PRETTY_PRINT_DEPTH: number;
}

declare module "jasmine" {
    class jasmine {
        constructor(options: any);
        jasmine: jasmine.Jasmine;
        addMatchers(matchers: jasmine.CustomMatcherFactories): void;
        addReporter(reporter: jasmine.Reporter): void;
        addSpecFile(filePath: string): void;
        addSpecFiles(files: string[]): void;
        configureDefaultReporter(options: any, ...args: any[]): void;
        execute(files?: string[], filterString?: string): any;
        exitCodeCompletion(passed: any): void;
        loadConfig(config: any): void;
        loadConfigFile(configFilePath: any): void;
        loadHelpers(): void;
        loadSpecs(): void;
        onComplete(onCompleteCallback: (passed: boolean) => void): void;
        provideFallbackReporter(reporter: jasmine.Reporter): void;
        randomizeTests(value?: any): boolean;
        seed(value: any): void;
        showColors(value: any): void;
        stopSpecOnExpectationFailure(value: any): void;
        static ConsoleReporter(): any;
        env: jasmine.Env;
        reportersCount: number;
        completionReporter: jasmine.CustomReporter;
        reporter: jasmine.CustomReporter;
        coreVersion(): string;
        showingColors: boolean;
        projectBaseDir: string;
        printDeprecation(): void;
        specFiles: string[];
        helperFiles: string[];
    }
    export = jasmine;
}
