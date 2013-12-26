﻿// Type definitions for Jasmine 2.0
// Project: http://pivotal.github.com/jasmine/
// Definitions by: Boris Yankov <https://github.com/borisyankov/> and Theodore Brown <https://github.com/theodorejb>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


declare function describe(description: string, specDefinitions: () => void): void;
declare function xdescribe(description: string, specDefinitions: () => void): void;

declare function it(expectation: string, assertion?: () => void): void;
declare function it(expectation: string, assertion?: (done: () => void) => void): void;
declare function xit(expectation: string, assertion?: () => void): void;
declare function xit(expectation: string, assertion?: (done: () => void) => void): void;

/** If you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending. */
declare function pending(): void;

declare function beforeEach(action: () => void): void;
declare function beforeEach(action: (done: () => void) => void): void;
declare function afterEach(action: () => void): void;
declare function afterEach(action: (done: () => void) => void): void;

declare function expect(spy: Function): jasmine.Matchers;
declare function expect(actual: any): jasmine.Matchers;

declare function spyOn(object: any, method: string): jasmine.Spy;

declare function runs(asyncMethod: Function): void;
declare function waitsFor(latchMethod: () => boolean, failureMessage?: string, timeout?: number): void;
declare function waits(timeout?: number): void;

declare module jasmine {

    var clock: () => Clock;

    function any(aclass: any): Any;
    function objectContaining(sample: any): ObjectContaining;
    function createSpy(name: string, originalFn?: Function): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    function createSpyObj<T>(baseName: string, methodNames: any[]): T;
    function pp(value: any): string;
    function getEnv(): Env;

    interface Any {

        new (expectedClass: any): any;

        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining {
        new (sample: any): any;

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
    }

    interface Env {
        setTimeout: any;
        clearTimeout: void;
        setInterval: any;
        clearInterval: void;
        updateInterval: number;

        currentSpec: Spec;

        matchersClass: Matchers;

        version(): any;
        versionString(): string;
        nextSpecId(): number;
        addReporter(reporter: Reporter): void;
        execute(): void;
        describe(description: string, specDefinitions: () => void): Suite;
        beforeEach(beforeEachFunction: () => void): void;
        currentRunner(): Runner;
        afterEach(afterEachFunction: () => void): void;
        xdescribe(desc: string, specDefinitions: () => void): XSuite;
        it(description: string, func: () => void): Spec;
        xit(desc: string, func: () => void): XSpec;
        compareRegExps_(a: RegExp, b: RegExp, mismatchKeys: string[], mismatchValues: string[]): boolean;
        compareObjects_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean;
        equals_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean;
        contains_(haystack: any, needle: any): boolean;
        addEqualityTester(equalityTester: (a: any, b: any, env: Env, mismatchKeys: string[], mismatchValues: string[]) => boolean): void;
        specFilter(spec: Spec): boolean;
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

    interface MessageResult extends Result  {
        values: any;
        trace: Trace;
    }

    interface ExpectationResult extends Result  {
        matcherName: string;
        passed(): boolean;
        expected: any;
        actual: any;
        message: string;
        trace: Trace;
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

    interface Matchers {

        new (env: Env, actual: any, spec: Env, isNot?: boolean): any;

        env: Env;
        actual: any;
        spec: Env;
        isNot?: boolean;
        message(): any;

        toBe(expected: any): boolean;
        toNotBe(expected: any): boolean;
        toEqual(expected: any): boolean;
        toNotEqual(expected: any): boolean;
        toMatch(expected: any): boolean;
        toNotMatch(expected: any): boolean;
        toBeDefined(): boolean;
        toBeUndefined(): boolean;
        toBeNull(): boolean;
        toBeNaN(): boolean;
        toBeTruthy(): boolean;
        toBeFalsy(): boolean;
        toHaveBeenCalled(): boolean;
        wasNotCalled(): boolean;
        toHaveBeenCalledWith(...params: any[]): boolean;
        toContain(expected: any): boolean;
        toNotContain(expected: any): boolean;
        toBeLessThan(expected: any): boolean;
        toBeGreaterThan(expected: any): boolean;
        toBeCloseTo(expected: any, precision: any): boolean;
        toContainHtml(expected: string): boolean;
        toContainText(expected: string): boolean;
        toThrow(expected?: any): boolean;
        toThrowError(expected?: any): boolean;
        not: Matchers;

        Any: Any;
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

    interface Runner {

        new (env: Env): any;

        execute(): void;
        beforeEach(beforeEachFunction: SpecFunction): void;
        afterEach(afterEachFunction: SpecFunction): void;
        finishCallback(): void;
        addSuite(suite: Suite): void;
        add(block: Block): void;
        specs(): Spec[];
        suites(): Suite[];
        topLevelSuites(): Suite[];
        results(): NestedResults;
    }

    interface SpecFunction {
        (spec?: Spec): void;
    }

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
        matchersClass: Matchers;

        getFullName(): string;
        results(): NestedResults;
        log(arguments: any): any;
        runs(func: SpecFunction): Spec;
        addToQueue(block: Block): void;
        addMatcherResult(result: Result): void;
        expect(actual: any): any;
        waits(timeout: number): Spec;
        waitsFor(latchFunction: SpecFunction, timeoutMessage?: string, timeout?: number): Spec;
        fail(e?: any): void;
        getMatchersClass_(): Matchers;
        addMatchers(matchersPrototype: any): void;
        finishCallback(): void;
        finish(onComplete?: () => void): void;
        after(doAfter: SpecFunction): void;
        execute(onComplete?: () => void): any;
        addBeforesAndAftersToQueue(): void;
        explodes(): void;
        spyOn(obj: any, methodName: string, ignoreMethodDoesntExist: boolean): Spy;
        removeAllSpies(): void;
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

        identity: string;
        and: SpyAnd;
        calls: any[];
        mostRecentCall: { args: any[]; };
        argsForCall: any[];
        wasCalled: boolean;
        callCount: number;
    }

    interface SpyAnd {
        /** By chaining the spy with and.callThrough, the spy will still track all calls to it but in addition it will delegate to the actual implementation. */
        callThrough(): void;
        /** By chaining the spy with and.returnValue, all calls to the function will return a specific value. */
        returnValue(val: any): void;
        /** By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function. */
        callFake(fn: () => any): void;
        /** By chaining the spy with and.throwError, all calls to the spy will throw the specified value. */
        throwError(msg: string): void;
        /** When a calling strategy is used for a spy, the original stubbing behavior can be returned at any time with and.stub. */
        stub(): void;
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
}
