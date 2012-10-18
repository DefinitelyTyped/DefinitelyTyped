// Type definitions for Jasmine 1.2
// Project: http://pivotal.github.com/jasmine/
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare function describe(description: string, specDefinitions: Function): JasmineEnv;
declare function xdescribe(description: string, specDefinitions: Function): JasmineEnv;

declare function it(expectation: string, assertion: Function);
declare function xit(expectation: string, assertion: Function);

declare function beforeEach(action: Function);
declare function afterEach(action: Function);

declare function expect(spy: Function): JasmineSpyMatchers;
declare function expect(spy: JasmineSpy): JasmineSpyMatchers;
declare function expect(actual: any): JasmineMatchers;

declare function spyOn(object: any, method: string): JasmineSpyOn;

declare function runs(asyncMethod: Function);
declare function waitsFor(latchMethod: () => bool, failureMessage: string, timeout: number);

interface JasmineAny {
    constructor (expectedClass);
    jasmineMatches(other);
    jasmineToString();
}

interface JasmineBlock {
    constructor (env: JasmineEnv, func: Function, spec: JasmineSpec);
    execute(onComplete);
}

interface JasmineClock {
    reset(): void;
    tick(millis): void;
    runFunctionsWithinRange(oldMillis, nowMillis): void;
    scheduleFunction(timeoutKey, funcToCall, millis, recurring): void;
    useMock(): void;
    installMock(): void;
    uninstallMock(): void;
    real;
    assertInstalled(): void;
    isInstalled(): bool;
    installed: any;
};

interface JasmineEnv {
    setTimeout;
    clearTimeout;
    setInterval;
    clearInterval;

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
}

interface JasmineFakeTimer {
    constructor ();
    reset(): void;
    tick(millis): void;
    runFunctionsWithinRange(oldMillis, nowMillis): void;
    scheduleFunction(timeoutKey, funcToCall, millis, recurring): void;
}

interface JasmineHtmlReporter {
    constructor ();
}

interface JasmineNestedResults {
    constructor ();
    rollupCounts(result);
    log(values);
    getItems();
    addResult(result);
    passed();
}


interface JasminePrettyPrinter {
    constructor ();
    format(value);
    iterateObject(obj, fn);
    emitScalar(value);
    emitString(value);
    emitArray(array);
    emitObject(obj);
    append(value);
}

interface JasmineQueue {
    constructor (env);
    addBefore(block, ensure);
    add(block, ensure);
    insertNext(block, ensure);
    start(onComplete);
    isRunning();
    next_();
    results();
}

interface JasmineMatchers {
    constructor (env: JasmineEnv, actual, spec: JasmineEnv, isNot?: bool);
    wrapInto_(prototype, matchersClass);
    matcherFn_(matcherName, matcherFunction);
    toBe(expected);
    toNotBe(expected);
    toEqual(expected);
    toNotEqual(expected);
    toMatch(expected);
    toNotMatch(expected);
    toBeDefined();
    toBeUndefined();
    toBeNull();
    toBeNaN();
    toBeTruthy();
    toBeFalsy();
    toHaveBeenCalled();
    wasNotCalled();
    toHaveBeenCalledWith();
    toContain(expected);
    toNotContain(expected);
    toBeLessThan(expected);
    toBeGreaterThan(expected);
    toBeCloseTo(expected, precision);
    toThrow(expected);

    Any: JasmineAny;
}

interface JasmineMultiReporter {
    constructor ();
    addReporter(reporter: JasmineReporter);
}

interface JasmineReporter {
    constructor ();
    reportRunnerStarting(runner);
    reportRunnerResults(runner);
    reportSuiteResults(suite);
    reportSpecStarting(spec);
    reportSpecResults(spec);
    log(str);
}

interface JasmineRunner {
    constructor (env: JasmineEnv);
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

interface JasmineSpec {
    constructor (env: JasmineEnv, suite: JasmineSuite, description: string);
    getFullName(): string;
    results();
    log();
    runs(func: Function);
    addToQueue(block);
    addMatcherResult(result);
    expect(actual);
    // waits(timeout: number); // deprecated
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


interface JasmineSuite {
    constructor (env: JasmineEnv, description: string, specDefinitions: Function, parentSuite: JasmineSuite);

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

interface JasmineUtil {
    inherit(childClass: Function, parentClass: Function);
    formatException(e);
    htmlEscape(str: string): string;
    argsToArray(args);
    extend(destination, source);
}

interface JsApiReporter {
    result;
    messages;

    constructor ();
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
    Spec: JasmineSpec;
    Clock: JasmineClock;
    HtmlReporter: JasmineHtmlReporter;
    util: JasmineUtil;
}

declare var jasmine: Jasmine;