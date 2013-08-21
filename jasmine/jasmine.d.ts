// Type definitions for Jasmine 1.2
// Project: http://pivotal.github.com/jasmine/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


declare function describe(description: string, specDefinitions: Function): void;
declare function xdescribe(description: string, specDefinitions: Function): void;

declare function it(expectation: string, assertion: () => void ): void;
declare function it(expectation: string, assertion: (done: (err?:any) => void) => void ): void;
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

    function any(aclass: any):any;
    function objectContaining(sample: any): ObjectContaining;
    function createSpy(name: string, originalFn?: Function): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    function pp(value: any): string;
    function getEnv(): Env;

    interface Any {

        new (expectedClass:any):any;

        jasmineMatches(other:any):any;
        jasmineToString():any;
    }

    interface ObjectContaining {
        new (sample: any): any;

        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): any;
        jasmineToString(): any;
    }

    interface Block {

        new (env: Env, func: Function, spec: Spec):any;

        execute(onComplete:any):any;
    }

    interface Clock {
        reset(): void;
        tick(millis:any): void;
        runFunctionsWithinRange(oldMillis:any, nowMillis:any): void;
        scheduleFunction(timeoutKey:any, funcToCall:any, millis:any, recurring:any): void;
        useMock(): void;
        installMock(): void;
        uninstallMock(): void;
        real:any;
        assertInstalled(): void;
        isInstalled(): boolean;
        installed: any;
    }

    interface Env {
        setTimeout:any;
        clearTimeout:any;
        setInterval:any;
        clearInterval:any;
        updateInterval:any;

        currentSpec: Spec;

        version():any;
        versionString(): string;
        nextSpecId(): number;
        addReporter(reporter:any):any;
        execute():any;
        describe(description:any, specDefinitions:any):any;
        beforeEach(beforeEachFunction:any):any;
        currentRunner():any;
        afterEach(afterEachFunction:any):any;
        xdescribe(desc:any, specDefinitions:any):any;
        it(description:any, func:any):any;
        xit(desc:any, func:any):any;
        compareObjects_(a:any, b:any, mismatchKeys:any, mismatchValues:any):any;
        equals_(a:any, b:any, mismatchKeys:any, mismatchValues:any):any;
        contains_(haystack:any, needle:any):any;
        addEqualityTester(equalityTester:any):any;
        specFilter(spec:any): boolean;
    }

    interface FakeTimer {

        new ():any;

        reset(): void;
        tick(millis:any): void;
        runFunctionsWithinRange(oldMillis:any, nowMillis:any): void;
        scheduleFunction(timeoutKey:any, funcToCall:any, millis:any, recurring:any): void;
    }

    interface HtmlReporter {
        new ():any;
    }

    interface NestedResults {

        new ():any;

        rollupCounts(result:any):any;
        log(values:any):any;
        getItems():any;
        addResult(result:any):any;
        passed():any;
    }


    interface PrettyPrinter {

        new ():any;

        format(value:any):any;
        iterateObject(obj:any, fn:any):any;
        emitScalar(value:any):any;
        emitString(value:any):any;
        emitArray(array:any):any;
        emitObject(obj:any):any;
        append(value:any):any;
    }

    interface Queue {

        new (env:any):any;

        addBefore(block:any, ensure:any):any;
        add(block:any, ensure:any):any;
        insertNext(block:any, ensure:any):any;
        start(onComplete:any):any;
        isRunning():any;
        next_():any;
        results():any;
    }

    interface Matchers {

        new (env: Env, actual:any, spec: Env, isNot?: boolean):any;

        env: Env;
        actual: any;
        spec: Env;
        isNot?: boolean;
        message(): any;

        toBe(expected:any): boolean;
        toNotBe(expected:any): boolean;
        toEqual(expected:any): boolean;
        toNotEqual(expected:any): boolean;
        toMatch(expected:any): boolean;
        toNotMatch(expected:any): boolean;
        toBeDefined(): boolean;
        toBeUndefined(): boolean;
        toBeNull(): boolean;
        toBeNaN(): boolean;
        toBeTruthy(): boolean;
        toBeFalsy(): boolean;
        toHaveBeenCalled(): boolean;
        wasNotCalled(): boolean;
        toHaveBeenCalledWith(...params: any[]): boolean;
        toContain(expected:any): boolean;
        toNotContain(expected:any): boolean;
        toBeLessThan(expected:any): boolean;
        toBeGreaterThan(expected:any): boolean;
        toBeCloseTo(expected:any, precision:any): boolean;
        toContainHtml(expected: string): boolean;
        toContainText(expected: string): boolean;
        toThrow(expected?:any ): boolean;
        not: Matchers;

        Any: Any;
    }

    interface MultiReporter {

        new ():any;

        addReporter(reporter: Reporter):any;
    }

    interface Reporter {
        reportRunnerStarting(runner:any):any;
        reportRunnerResults(runner:any):any;
        reportSuiteResults(suite:any):any;
        reportSpecStarting(spec:any):any;
        reportSpecResults(spec:any):any;
        log(str:any):any;
    }

    interface Runner {

        new (env: Env):any;

        execute():any;
        beforeEach(beforeEachFunction:any):any;
        afterEach(afterEachFunction:any):any;
        finishCallback():any;
        addSuite(suite:any):any;
        add(block:any):any;
        specs():any;
        suites():any;
        topLevelSuites():any;
        results():any;
    }

    interface Spec {

        new (env: Env, suite: Suite, description: string):any;

        id: number;
        env: Env;
        suite: Suite;
        description: string;
        queue: Queue;

        afterCallbacks: any;
        spies_: any;

        results_: NestedResults;
        matchersClass: any;

        getFullName(): string;
        results():any;
        log():any;
        runs(func: Function):any;
        addToQueue(block:any):any;
        addMatcherResult(result:any):any;
        expect(actual:any):any;
        waitsFor(latchFunction: Function, timeoutMessage?: string, timeout?: number):any;
        fail(e:any):any;
        getMatchersClass_():any;
        addMatchers(matchersPrototype:any):any;
        finishCallback():any;
        finish(onComplete:any):any;
        after(doAfter:any):any;
        execute(onComplete:any):any;
        addBeforesAndAftersToQueue():any;
        explodes():any;
        spyOn(obj:any, methodName:any, ignoreMethodDoesntExist:any):any;
        removeAllSpies():any;
    }

    interface Spy {
        (...params: any[]): any;

        identity: string;
        calls: any[];
        mostRecentCall: { args: any[]; };
        argsForCall: any[];
        wasCalled: boolean;
        callCount: number;

        andReturn(value:any): Spy;
        andCallThrough(): Spy;
        andCallFake(fakeFunc: Function): Spy;
    }

    interface Suite {

        new (env: Env, description: string, specDefinitions: Function, parentSuite: Suite):any;

        getFullName():any;
        finish(onComplete:any):any;
        beforeEach(beforeEachFunction:any):any;
        afterEach(afterEachFunction:any):any;
        results():any;
        add(suiteOrSpec:any):any;
        specs():any;
        suites():any;
        children():any;
        execute(onComplete:any):any;
    }

    interface Util {
        inherit(childClass: Function, parentClass: Function):any;
        formatException(e:any):any;
        htmlEscape(str: string): string;
        argsToArray(args:any):any;
        extend(destination:any, source:any):any;
    }

    interface JsApiReporter {

        result:any;
        messages:any;

        new ():any;

        reportRunnerStarting(runner:any):any;
        suites():any;
        summarize_(suiteOrSpec:any):any;
        results():any;
        resultsForSpec(specId:any):any;
        reportRunnerResults(runner:any):any;
        reportSuiteResults(suite:any):any;
        reportSpecResults(spec:any):any;
        log(str:any):any;
        resultsForSpecs(specIds:any):any;
        summarizeResult_(result:any):any;
    }

    interface Jasmine {
        Spec: Spec;
        Clock: Clock;
        util: Util;
    }

    export var HtmlReporter: any;
}