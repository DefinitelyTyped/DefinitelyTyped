// Type definitions for Jasmine 1.2
// Project: http://pivotal.github.com/jasmine/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


declare function describe(description: string, specDefinitions: Function): void;
declare function xdescribe(description: string, specDefinitions: Function): void;

declare function it(expectation: string, assertion: () => void ): void;
declare function it(expectation: string, assertion: (done: (err?) => void) => void ): void;
declare function xit(expectation: string, assertion: Function): void;

declare function beforeEach(action: Function): void;
declare function afterEach(action: Function): void;

declare function expect(spy: Function): jasmine.Matchers;
//declare function expect(spy: jasmine.Spy): jasmine.Matchers;
declare function expect(actual: any): jasmine.Matchers;

declare function spyOn(object: any, method: string): jasmine.Spy;

declare function runs(asyncMethod: Function): void;
declare function waitsFor(latchMethod: () => boolean, failureMessage: string, timeout?: number): void;
declare function waits(timeout?: number): void;

declare module jasmine {

    var Clock: Clock;

    function any(aclass: any);
    function createSpy(name: string, originalFn: Function): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    function pp(value: any): string;
    function getEnv(): Env;

    interface Any {

        new (expectedClass);

        jasmineMatches(other);
        jasmineToString();
    }

    interface Block {

        new (env: Env, func: Function, spec: Spec);

        execute(onComplete);
    }

    interface Clock {
        reset(): void;
        tick(millis): void;
        runFunctionsWithinRange(oldMillis, nowMillis): void;
        scheduleFunction(timeoutKey, funcToCall, millis, recurring): void;
        useMock(): void;
        installMock(): void;
        uninstallMock(): void;
        real;
        assertInstalled(): void;
        isInstalled(): boolean;
        installed: any;
    }

    interface Env {
        setTimeout;
        clearTimeout;
        setInterval;
        clearInterval;
        updateInterval;

        version();
        versionString(): string;
        nextSpecId(): number;
        addReporter(reporter);
        execute();
        describe(description, specDefinitions);
        beforeEach(beforeEachFunction);
        currentRunner();
        afterEach(afterEachFunction);
        xdescribe(desc, specDefinitions);
        it(description, func);
        xit(desc, func);
        compareObjects_(a, b, mismatchKeys, mismatchValues);
        equals_(a, b, mismatchKeys, mismatchValues);
        contains_(haystack, needle);
        addEqualityTester(equalityTester);
        specFilter(spec): boolean;
    }

    interface FakeTimer {

        new ();

        reset(): void;
        tick(millis): void;
        runFunctionsWithinRange(oldMillis, nowMillis): void;
        scheduleFunction(timeoutKey, funcToCall, millis, recurring): void;
    }

    interface HtmlReporter {
        new ();
    }

    interface NestedResults {

        new ();

        rollupCounts(result);
        log(values);
        getItems();
        addResult(result);
        passed();
    }


    interface PrettyPrinter {

        new ();

        format(value);
        iterateObject(obj, fn);
        emitScalar(value);
        emitString(value);
        emitArray(array);
        emitObject(obj);
        append(value);
    }

    interface Queue {

        new (env);

        addBefore(block, ensure);
        add(block, ensure);
        insertNext(block, ensure);
        start(onComplete);
        isRunning();
        next_();
        results();
    }

    interface Matchers {

        new (env: Env, actual, spec: Env, isNot?: boolean);

        env: Env;
        actual: any;
        spec: Env;
        isNot?: boolean;
        message(): any;

        toBe(expected): boolean;
        toNotBe(expected): boolean;
        toEqual(expected): boolean;
        toNotEqual(expected): boolean;
        toMatch(expected): boolean;
        toNotMatch(expected): boolean;
        toBeDefined(): boolean;
        toBeUndefined(): boolean;
        toBeNull(): boolean;
        toBeNaN(): boolean;
        toBeTruthy(): boolean;
        toBeFalsy(): boolean;
        toHaveBeenCalled(): boolean;
        wasNotCalled(): boolean;
        toHaveBeenCalledWith(...params: any[]): boolean;
        toContain(expected): boolean;
        toNotContain(expected): boolean;
        toBeLessThan(expected): boolean;
        toBeGreaterThan(expected): boolean;
        toBeCloseTo(expected, precision): boolean;
        toContainHtml(expected: string): boolean;
        toContainText(expected: string): boolean;
        toThrow(expected? ): boolean;
        not: Matchers;

        Any: Any;
    }

    interface MultiReporter {

        new ();

        addReporter(reporter: Reporter);
    }

    interface Reporter {
        new ();
        reportRunnerStarting(runner);
        reportRunnerResults(runner);
        reportSuiteResults(suite);
        reportSpecStarting(spec);
        reportSpecResults(spec);
        log(str);
    }

    interface Runner {

        new (env: Env);

        execute();
        beforeEach(beforeEachFunction);
        afterEach(afterEachFunction);
        finishCallback();
        addSuite(suite);
        add(block);
        specs();
        suites();
        topLevelSuites();
        results();
    }

    interface Spec {

        new (env: Env, suite: Suite, description: string);

        getFullName(): string;
        results();
        log();
        runs(func: Function);
        addToQueue(block);
        addMatcherResult(result);
        expect(actual);
        waitsFor(latchFunction: Function, timeoutMessage?: string, timeout?: number);
        fail(e);
        getMatchersClass_();
        addMatchers(matchersPrototype);
        finishCallback();
        finish(onComplete);
        after(doAfter);
        execute(onComplete);
        addBeforesAndAftersToQueue();
        explodes();
        spyOn(obj, methodName, ignoreMethodDoesntExist);
        removeAllSpies();
    }

    interface Spy {
        (...params: any[]): any;

        identity: string;
        calls: any[];
        mostRecentCall: { args: any[]; };
        argsForCall: any[];
        wasCalled: boolean;
        callCount: number;

        andReturn(value): Spy;
        andCallThrough(): Spy;
        andCallFake(fakeFunc: Function): Spy;
    }

    interface Suite {

        new (env: Env, description: string, specDefinitions: Function, parentSuite: Suite);

        getFullName();
        finish(onComplete);
        beforeEach(beforeEachFunction);
        afterEach(afterEachFunction);
        results();
        add(suiteOrSpec);
        specs();
        suites();
        children();
        execute(onComplete);
    }

    interface Util {
        inherit(childClass: Function, parentClass: Function);
        formatException(e);
        htmlEscape(str: string): string;
        argsToArray(args);
        extend(destination, source);
    }

    interface JsApiReporter {

        result;
        messages;

        new ();

        reportRunnerStarting(runner);
        suites();
        summarize_(suiteOrSpec);
        results();
        resultsForSpec(specId);
        reportRunnerResults(runner);
        reportSuiteResults(suite);
        reportSpecResults(spec);
        log(str);
        resultsForSpecs(specIds);
        summarizeResult_(result);
    }

    interface Jasmine {
        Spec: Spec;
        Clock: Clock;
        util: Util;
    }

    export var HtmlReporter: any;
}
