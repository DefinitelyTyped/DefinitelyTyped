/* Lifecycle events */

beforeAll(() => {});
beforeAll((done: jest.DoneCallback) => {});
beforeAll((done: jest.DoneCallback) => done.fail(), 9001);

beforeEach(() => {});
beforeEach((done: jest.DoneCallback) => {});
beforeEach((done: jest.DoneCallback) => done.fail(), 9001);

afterAll(() => {});
afterAll((done: jest.DoneCallback) => {});
afterAll((done: jest.DoneCallback) => done.fail(), 9001);

afterEach(() => {});
afterEach((done: jest.DoneCallback) => {});
afterEach((done: jest.DoneCallback) => done.fail(), 9001);

/* describe */

describe(0, () => {});
describe("name", () => {});
describe(() => {}, () => {});
describe({ name: "name" }, () => {});

describe.only(0, () => {});
describe.only("name", () => {});
describe.only(() => {}, () => {});
describe.only({ name: "name" }, () => {});

describe.skip(0, () => {});
describe.skip("name", () => {});
describe.skip(() => {}, () => {});
describe.skip({ name: "name" }, () => {});

fdescribe(0, () => {});
fdescribe("name", () => {});
fdescribe(() => {}, () => {});
fdescribe({ name: "name" }, () => {});

fdescribe.only(0, () => {});
fdescribe.only("name", () => {});
fdescribe.only(() => {}, () => {});
fdescribe.only({ name: "name" }, () => {});

fdescribe.skip(0, () => {});
fdescribe.skip("name", () => {});
fdescribe.skip(() => {}, () => {});
fdescribe.skip({ name: "name" }, () => {});

xdescribe(0, () => {});
xdescribe("name", () => {});
xdescribe(() => {}, () => {});
xdescribe({ name: "name" }, () => {});

xdescribe.only(0, () => {});
xdescribe.only("name", () => {});
xdescribe.only(() => {}, () => {});
xdescribe.only({ name: "name" }, () => {});

xdescribe.skip(0, () => {});
xdescribe.skip("name", () => {});
xdescribe.skip(() => {}, () => {});
xdescribe.skip({ name: "name" }, () => {});

/* it */

it("name", () => {});
it("name", async () => {});
it("name", () => {}, 9001);
it("name", async () => {}, 9001);
it("name", (callback: jest.DoneCallback) => {}, 9001);

it.only("name", () => {});
it.only("name", async () => {});
it.only("name", () => {}, 9001);
it.only("name", async () => {}, 9001);
it.only("name", (callback: jest.DoneCallback) => {}, 9001);

it.skip("name", () => {});
it.skip("name", async () => {});
it.skip("name", () => {}, 9001);
it.skip("name", async () => {}, 9001);
it.skip("name", (callback: jest.DoneCallback) => {}, 9001);

it.concurrent("name", () => {});
it.concurrent("name", async () => {});
it.concurrent("name", () => {}, 9001);
it.concurrent("name", async () => {}, 9001);
it.concurrent("name", (callback: jest.DoneCallback) => {}, 9001);

fit("name", () => {});
fit("name", async () => {});
fit("name", () => {}, 9001);
fit("name", async () => {}, 9001);
fit("name", (callback: jest.DoneCallback) => {}, 9001);

fit.only("name", () => {});
fit.only("name", async () => {});
fit.only("name", () => {}, 9001);
fit.only("name", async () => {}, 9001);
fit.only("name", (callback: jest.DoneCallback) => {}, 9001);

fit.skip("name", () => {});
fit.skip("name", async () => {});
fit.skip("name", () => {}, 9001);
fit.skip("name", async () => {}, 9001);
fit.skip("name", (callback: jest.DoneCallback) => {}, 9001);

fit.concurrent("name", () => {});
fit.concurrent("name", async () => {});
fit.concurrent("name", () => {}, 9001);
fit.concurrent("name", async () => {}, 9001);
fit.concurrent("name", (callback: jest.DoneCallback) => {}, 9001);

xit("name", () => {});
xit("name", async () => {});
xit("name", () => {}, 9001);
xit("name", async () => {}, 9001);
xit("name", (callback: jest.DoneCallback) => {}, 9001);

xit.only("name", () => {});
xit.only("name", async () => {});
xit.only("name", () => {}, 9001);
xit.only("name", async () => {}, 9001);
xit.only("name", (callback: jest.DoneCallback) => {}, 9001);

xit.skip("name", () => {});
xit.skip("name", async () => {});
xit.skip("name", () => {}, 9001);
xit.skip("name", async () => {}, 9001);
xit.skip("name", (callback: jest.DoneCallback) => {}, 9001);

xit.concurrent("name", () => {});
xit.concurrent("name", async () => {});
xit.concurrent("name", () => {}, 9001);
xit.concurrent("name", async () => {}, 9001);
xit.concurrent("name", (callback: jest.DoneCallback) => {}, 9001);

test("name", () => {});
test("name", async () => {});
test("name", () => {}, 9001);
test("name", async () => {}, 9001);
test("name", (callback: jest.DoneCallback) => {}, 9001);

test.only("name", () => {});
test.only("name", async () => {});
test.only("name", () => {}, 9001);
test.only("name", async () => {}, 9001);
test.only("name", (callback: jest.DoneCallback) => {}, 9001);

test.skip("name", () => {});
test.skip("name", async () => {});
test.skip("name", () => {}, 9001);
test.skip("name", async () => {}, 9001);
test.skip("name", (callback: jest.DoneCallback) => {}, 9001);

test.concurrent("name", () => {});
test.concurrent("name", async () => {});
test.concurrent("name", () => {}, 9001);
test.concurrent("name", async () => {}, 9001);
test.concurrent("name", (callback: jest.DoneCallback) => {}, 9001);

xtest("name", () => {});
xtest("name", async () => {});
xtest("name", () => {}, 9001);
xtest("name", async () => {}, 9001);
xtest("name", (callback: jest.DoneCallback) => {}, 9001);

xtest.only("name", () => {});
xtest.only("name", async () => {});
xtest.only("name", () => {}, 9001);
xtest.only("name", async () => {}, 9001);
xtest.only("name", (callback: jest.DoneCallback) => {}, 9001);

xtest.skip("name", () => {});
xtest.skip("name", async () => {});
xtest.skip("name", () => {}, 9001);
xtest.skip("name", async () => {}, 9001);
xtest.skip("name", (callback: jest.DoneCallback) => {}, 9001);

xtest.concurrent("name", () => {});
xtest.concurrent("name", async () => {});
xtest.concurrent("name", () => {}, 9001);
xtest.concurrent("name", async () => {}, 9001);
xtest.concurrent("name", (callback: jest.DoneCallback) => {}, 9001);

/* Done callbacks */

describe("", () => {
    it("", (callback: jest.DoneCallback): void => {
        callback();
        callback("");
        callback("", 3);
        callback.fail();
        callback.fail("error");
        callback.fail({ message: "message" });
    });
});

/* NodeRequire interface (require extensions) */

declare const nodeRequire: NodeRequire;

// $ExpectType any
nodeRequire.requireActual("moduleName");

// $ExpectType any
nodeRequire.requireMock("moduleName");

/* Top-level jest namespace functions */

const customMatcherFactories: jasmine.CustomMatcherFactories = {};

jest
    .addMatchers(customMatcherFactories)
    .addMatchers({})
    .addMatchers(customMatcherFactories)
    .autoMockOff()
    .autoMockOn()
    .clearAllMocks()
    .clearAllTimers()
    .resetAllMocks()
    .restoreAllMocks()
    .clearAllTimers()
    .deepUnmock("moduleName")
    .disableAutomock()
    .doMock("moduleName")
    .doMock("moduleName", jest.fn())
    .doMock("moduleName", jest.fn(), {})
    .doMock("moduleName", jest.fn(), { virtual: true })
    .dontMock("moduleName")
    .enableAutomock()
    .mock("moduleName")
    .mock("moduleName", jest.fn())
    .mock("moduleName", jest.fn(), {})
    .mock("moduleName", jest.fn(), { virtual: true })
    .resetModuleRegistry()
    .resetModules()
    .runAllImmediates()
    .runAllTicks()
    .runAllTimers()
    .runOnlyPendingTimers()
    .runTimersToTime(9001)
    .advanceTimersByTime(9001)
    .setMock("moduleName", {})
    .setMock<{}>("moduleName", {})
    .setMock<{ a: "b" }>("moduleName", { a: "b" })
    .setTimeout(9001)
    .unmock("moduleName")
    .useFakeTimers()
    .useRealTimers();

/* Mocks and spies */

const mock1: jest.Mock = jest.fn();
const mock2: jest.Mock<undefined> = jest.fn<undefined>(() => undefined);
const mock3: jest.Mock<string> = jest.fn(() => "abc");
const mock4: jest.Mock<"abc"> = jest.fn((): "abc" => "abc");
const mock5: jest.Mock<string> = jest.fn((...args: string[]) => args.join(""));
const mock6: jest.Mock = jest.fn((arg: {}) => arg);

const genMockModule1: {} = jest.genMockFromModule("moduleName");
const genMockModule2: { a: "b" } = jest.genMockFromModule<{ a: "b" }>("moduleName");

const isStringMock: boolean = jest.isMockFunction("foo");
const isMockMock: boolean = jest.isMockFunction(mock1);

const maybeMock = () => {};
if (jest.isMockFunction(maybeMock)) {
    maybeMock.getMockName();
}

const mockName: string = jest.fn().getMockName();
const mockContextVoid: jest.MockContext<void> = jest.fn<void>().mock;
const mockContextString: jest.MockContext<string> = jest.fn(() => "").mock;

jest.fn().mockClear();

jest.fn().mockReset();

jest.fn().mockRestore();

const spiedTarget = {
    returnsVoid(): void { },
    returnsString(): string {
        return "";
    }
};

const spy1 = jest.spyOn(spiedTarget, "returnsVoid");
const spy2 = jest.spyOn(spiedTarget, "returnsVoid", "get");
const spy3 = jest.spyOn(spiedTarget, "returnsString", "set");
const spy1Name: string = spy1.getMockName();

const spy2Calls: any[][] = spy2.mock.calls;

spy2.mockClear();
spy2.mockReset();

const spy3Mock: jest.Mock<() => string> = spy3
    .mockImplementation(() => "")
    .mockImplementation()
    .mockImplementation((arg: {}) => arg)
    .mockImplementation((...args: string[]) => args.join(""))
    .mockImplementationOnce(() => "")
    .mockName("name")
    .mockReturnThis()
    .mockReturnValue("value")
    .mockReturnValueOnce("value")
    .mockResolvedValue("value")
    .mockResolvedValueOnce("value")
    .mockRejectedValue("value")
    .mockRejectedValueOnce("value");

let spy4: jest.SpyInstance;

spy4 = jest.spyOn(spiedTarget, "returnsString");
spy4.mockRestore();

/* Snapshot serialization */

const snapshotSerializerPlugin: jest.SnapshotSerializerPlugin = {
    print: () => "",
    test: () => true,
};

expect.addSnapshotSerializer(snapshotSerializerPlugin);

expect.addSnapshotSerializer({
    print: (value: {}) => "",
    test: (value: {}) => value === value,
});

expect.addSnapshotSerializer({
    print: (
        value: {},
        serialize: ((val: {}) => string),
        indent: ((str: string) => string),
        opts: {},
    ) => "",
    test: (value: {}) => value === value,
});

expect.addSnapshotSerializer({
    print(value, serialize, indent, opts, colors) {
        let result = "";

        if (opts.callToJSON !== undefined && opts.callToJSON) {
            result += " ";
        }

        result += opts.edgeSpacing;
        result += opts.spacing;

        if (opts.escapeRegex !== undefined && opts.escapeRegex) {
            result += " ";
        }

        if (opts.indent !== undefined) {
            for (let i = 0; i < opts.indent; i += 1) {
                result += "\t";
            }
        }

        if (opts.maxDepth !== undefined) {
            result = result.substring(0, opts.maxDepth);
        }

        if (opts.min !== undefined && opts.min) {
            result += " ";
        }

        if (opts.plugins !== undefined) {
            for (const plugin of opts.plugins) {
                expect.addSnapshotSerializer(plugin);
            }
        }

        if (opts.printFunctionName !== undefined && opts.printFunctionName) {
            result += " ";
        }

        if (opts.theme) {
            if (opts.theme.comment !== undefined) {
                result += opts.theme.comment;
            }

            if (opts.theme.content !== undefined) {
                result += opts.theme.content;
            }

            if (opts.theme.prop !== undefined) {
                result += opts.theme.prop;
            }

            if (opts.theme.tag !== undefined) {
                result += opts.theme.tag;
            }

            if (opts.theme.value !== undefined) {
                result += opts.theme.value;
            }
        }

        for (const color of [
            colors.comment,
            colors.content,
            colors.prop,
            colors.tag,
            colors.value,
        ]) {
            result += color.open;
            result += color.close;
        }

        return result;
    },
    test: (value: {}) => value === value,
});

/* expect extensions */

const expectExtendMap: jest.ExpectExtendMap = {};

expect.extend(expectExtendMap);
expect.extend({});
expect.extend({
    foo(this: jest.MatcherUtils, received: {}, ...actual: Array<{}>) {
        return {
            message: () => JSON.stringify(received),
            pass: false,
        };
    }
});
expect.extend({
    async foo(this: jest.MatcherUtils, received: {}, ...actual: Array<{}>) {
        return {
            message: () => JSON.stringify(received),
            pass: false,
        };
    }
});
expect.extend({
    foo(this: jest.MatcherUtils) {
        const isNot: boolean = this.isNot;
        const expand: boolean = this.expand;

        const expectedColor = this.utils.EXPECTED_COLOR("blue");
        const receivedColor = this.utils.EXPECTED_COLOR("red");

        this.utils.ensureActualIsNumber({});
        this.utils.ensureActualIsNumber({}, "matcher");

        this.utils.ensureExpectedIsNumber({});
        this.utils.ensureExpectedIsNumber({}, "matcher");

        this.utils.ensureNoExpected({});
        this.utils.ensureNoExpected({}, "matcher");

        this.utils.ensureNumbers({}, {});
        this.utils.ensureNumbers({}, {}, "matcher");

        const valueType: string = this.utils.getType({});

        this.utils.matcherHint("matcher");
        this.utils.matcherHint("matcher", "received");
        this.utils.matcherHint("matcher", "received", "expected");
        this.utils.matcherHint("matcher", "received", "expected", {});
        this.utils.matcherHint("matcher", "received", "expected", {
            isDirectExpectCall: true,
        });
        this.utils.matcherHint("matcher", "received", "expected", {
            secondArgument: "",
        });
        this.utils.matcherHint("matcher", "received", "expected", {
            isDirectExpectCall: true,
            secondArgument: "",
        });

        const plural: string = this.utils.pluralize("word", 3);

        const expectedPrinted: string = this.utils.printExpected({});

        const receivedPrinted: string = this.utils.printReceived({});

        const printedWithType: string = this.utils.printWithType(
            "name",
            {},
            (value: {}) => "");

        const stringified: string = this.utils.stringify({});
        const stringifiedWithMaxDepth: string = this.utils.stringify({}, 3);

        const equals: boolean = this.equals({}, {});

        return {
            message: () => "",
            pass: false,
        };
    }
});

/* Basic matchers */

describe("", () => {
    it("", () => {
        expect(jest.fn()).lastCalledWith();
        expect(jest.fn()).lastCalledWith("jest");
        expect(jest.fn()).lastCalledWith({}, {});

        expect(jest.fn()).lastReturnedWith("jest");
        expect(jest.fn()).lastReturnedWith({});

        expect(jest.fn()).nthCalledWith(0, "jest");
        expect(jest.fn()).nthCalledWith(1, {});

        expect(jest.fn()).nthReturnedWith(0, "jest");
        expect(jest.fn()).nthReturnedWith(1, {});

        expect({}).toBe({});
        expect([]).toBe([]);
        expect(10).toBe(10);

        expect(jest.fn()).toBeCalled();

        expect(jest.fn()).toBeCalledTimes(1);

        expect(jest.fn()).toBeCalledWith();
        expect(jest.fn()).toBeCalledWith("jest");
        expect(jest.fn()).toBeCalledWith({}, {});

        expect(0).toBeCloseTo(1);
        expect(0).toBeCloseTo(1, 2);

        expect(undefined).toBeDefined();
        expect({}).toBeDefined();

        expect(true).toBeFalsy();
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();

        expect(0).toBeGreaterThan(1);

        expect(0).toBeGreaterThanOrEqual(1);

        expect(3).toBeInstanceOf(Number);

        expect(0).toBeLessThan(1);

        expect(0).toBeLessThanOrEqual(1);

        expect(null).toBeNull();
        expect(undefined).toBeNull();

        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(1).toBeTruthy();

        expect(undefined).toBeUndefined();
        expect({}).toBeUndefined();

        expect(NaN).toBeNaN();
        expect(Infinity).toBeNaN();

        expect([]).toContain({});
        expect(["abc"]).toContain("abc");
        expect(["abc"]).toContain("def");

        expect([]).toContainEqual({});
        expect(["abc"]).toContainEqual("def");

        expect([]).toEqual([]);
        expect({}).toEqual({});

        expect(jest.fn()).toHaveBeenCalled();

        expect(jest.fn()).toHaveBeenCalledTimes(0);
        expect(jest.fn()).toHaveBeenCalledTimes(1);

        expect(jest.fn()).toHaveBeenCalledWith();
        expect(jest.fn()).toHaveBeenCalledWith("jest");
        expect(jest.fn()).toHaveBeenCalledWith({}, {});

        expect(jest.fn()).toHaveBeenCalledWith(0);
        expect(jest.fn()).toHaveBeenCalledWith(1, "jest");
        expect(jest.fn()).toHaveBeenCalledWith(2, {}, {});

        expect(jest.fn()).toHaveBeenLastCalledWith();
        expect(jest.fn()).toHaveBeenLastCalledWith("jest");
        expect(jest.fn()).toHaveBeenLastCalledWith({}, {});

        expect(jest.fn()).toHaveLastReturnedWith("jest");
        expect(jest.fn()).toHaveLastReturnedWith({});

        expect([]).toHaveLength(0);
        expect("").toHaveLength(1);

        expect(jest.fn()).toHaveNthReturnedWith(0, "jest");
        expect(jest.fn()).toHaveNthReturnedWith(1, {});

        expect({}).toHaveProperty("property");
        expect({}).toHaveProperty("property", {});
        expect({}).toHaveProperty(["property"]);
        expect({}).toHaveProperty(["property"], {});
        expect({}).toHaveProperty(["property", "deep"]);
        expect({}).toHaveProperty(["property", "deep"], {});

        expect(jest.fn()).toHaveReturned();

        expect(jest.fn()).toHaveReturnedTimes(0);
        expect(jest.fn()).toHaveReturnedTimes(1);

        expect(jest.fn()).toHaveReturnedWith("jest");
        expect(jest.fn()).toHaveReturnedWith({});

        expect("").toMatch("");
        expect("").toMatch(/foo/);

        expect({}).toMatchObject({});
        expect({ abc: "def" }).toMatchObject({ abc: "def" });
        expect({}).toMatchObject([{}, {}]);
        expect({ abc: "def" }).toMatchObject([{ abc: "def" }, { invalid: "property" }]);

        expect({}).toMatchSnapshot();
        expect({}).toMatchSnapshot("snapshotName");
        expect({ abc: "def" }).toMatchSnapshot({ abc: expect.any(String) }, "snapshotName");
        expect({
            one: 1,
            two: "2",
            three: 3,
            four: { four: 3 },
            date: new Date(),
        }).toMatchSnapshot({
            one: expect.any(Number),
            // Leave 'two' to the auto-generated snapshot
            three: 3,
            four: { four: expect.any(Number) },
            date: expect.any(Date),
        });

        expect({}).toMatchInlineSnapshot();
        expect({}).toMatchInlineSnapshot("snapshot");
        expect({ abc: "def" }).toMatchInlineSnapshot({ abc: expect.any(String) }, "snapshot");
        expect({
            one: 1,
            two: "2",
            three: 3,
            four: { four: 3 },
            date: new Date(),
        }).toMatchInlineSnapshot({
            one: expect.any(Number),
            // leave out two
            three: 3,
            four: { four: expect.any(Number) },
            date: expect.any(Date),
        });

        expect(jest.fn()).toReturn();

        expect(jest.fn()).toReturnTimes(0);
        expect(jest.fn()).toReturnTimes(1);

        expect(jest.fn()).toReturnWith("jest");
        expect(jest.fn()).toReturnWith({});

        expect(true).toStrictEqual(false);
        expect({}).toStrictEqual({});

        const errInstance = new Error();
        const willThrow = () => { throw new Error(); };
        expect(() => {}).toThrow();
        expect(willThrow).toThrow("");
        expect(willThrow).toThrow(errInstance);
        expect(jest.fn()).toThrow(Error);
        expect(jest.fn(willThrow)).toThrow(/foo/);

        expect(() => {}).toThrowErrorMatchingSnapshot();
        expect(willThrow).toThrowErrorMatchingSnapshot();
        expect(jest.fn()).toThrowErrorMatchingSnapshot();
        expect(jest.fn(willThrow)).toThrowErrorMatchingSnapshot();

        expect(() => {}).toThrowErrorMatchingInlineSnapshot();
        expect(() => {}).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(willThrow).toThrowErrorMatchingInlineSnapshot();
        expect(willThrow).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(jest.fn()).toThrowErrorMatchingInlineSnapshot();
        expect(jest.fn()).toThrowErrorMatchingInlineSnapshot('Error Message');
        expect(jest.fn(willThrow)).toThrowErrorMatchingInlineSnapshot();
        expect(jest.fn(willThrow)).toThrowErrorMatchingInlineSnapshot('Error Message');

        /* not */

        expect({}).not.toEqual({});
        expect([]).not.toStrictEqual([]);

        /* Promise matchers */

        expect(Promise.reject("jest")).rejects.toEqual("jest");
        expect(Promise.reject({})).rejects.toEqual({});
        expect(Promise.resolve("jest")).rejects.toEqual("jest");
        expect(Promise.resolve({})).rejects.toEqual({});

        expect(Promise.reject("jest")).resolves.toEqual("jest");
        expect(Promise.reject({})).resolves.toEqual({});
        expect(Promise.resolve("jest")).resolves.toEqual("jest");
        expect(Promise.resolve({})).resolves.toEqual({});

        /* type matchers */

        expect({}).toBe(expect.anything());

        expect({}).toBe(expect.any(class Foo { }));
        expect(new Error()).toBe(expect.any(Error));
        expect(7).toBe(expect.any(Number));

        expect({}).toBe(expect.arrayContaining(["a", "b"]));
        expect(["abc"]).toBe(expect.arrayContaining(["a", "b"]));

        expect.objectContaining({});
        expect.stringMatching("foo");
        expect.stringMatching(/foo/);
        expect.stringContaining("foo");

        expect({ abc: "def" }).toBe(expect.objectContaining({
            abc: expect.arrayContaining([expect.any(Date), {}]),
            def: expect.objectContaining({
                foo: "bar",
            }),
            ghi: expect.stringMatching("foo"),
        }));

        /* Miscellaneous */

        expect.hasAssertions();
        expect.assertions(0);
        expect.assertions(9001);
    });
});

/* Test framework and config */

const globalConfig: jest.GlobalConfig = {
    bail: true,
    collectCoverage: false,
    collectCoverageFrom: ["glob"],
    collectCoverageOnlyFrom: {
        abc: true,
        def: false,
    },
    coverageDirectory: "",
    coverageReporters: [""],
    coverageThreshold: {
        global: {
            abc: 90,
            def: 100,
        },
    },
    expand: true,
    forceExit: false,
    logHeapUsage: true,
    mapCoverage: false,
    noStackTrace: true,
    notify: false,
    projects: ["projects"],
    replname: "",
    reporters: [
        ["abc", {}],
        ["def", {}],
    ],
    rootDir: "path",
    silent: true,
    testNamePattern: "",
    testPathPattern: "",
    testResultsProcessor: "",
    updateSnapshot: "all" as "all" | "new" | "none",
    useStderr: true,
    verbose: false,
    watch: true,
    watchman: false,
};

const projectConfig: jest.ProjectConfig = {
    automock: true,
    browser: false,
    cache: true,
    cacheDirectory: "",
    clearMocks: true,
    coveragePathIgnorePatterns: [""],
    cwd: "",
    detectLeaks: true,
    displayName: "",
    forceCoverageMatch: ["abc", "def"],
    globals: {
        "ts-jest": {},
    },
    haste: {
        defaultPlatform: "",
        hasteImplModulePath: "",
        platforms: ["win95", "win2000", "clippy"],
        providesModuleNodeModules: ["abc", "def"],
    },
    moduleDirectories: ["", ""],
    moduleFileExtensions: [".ts", ".json"],
    moduleLoader: "laoder",
    moduleNameMapper: [
        ["abc", "def"],
        ["ghi", "jkl"],
    ],
    modulePathIgnorePatterns: ["abc", "def"],
    modulePaths: ["abc", "def"],
    name: "",
    resetMocks: true,
    resetModules: false,
    resolver: "",
    rootDir: "",
    roots: ["", ""],
    runner: "",
    setupFiles: ["abc", "def"],
    setupTestFrameworkScriptFile: "",
    skipNodeResolution: true,
    snapshotSerializers: ["abc", "def"],
    testEnvironment: "",
    testEnvironmentOptions: {},
    testLocationInResults: true,
    testMatch: [".test.ts"],
    testPathIgnorePatterns: ["*.spec.*"],
    testRegex: "abc",
    testRunner: "m",
    testURL: "localhost:3000",
    timers: "real",
    transform: [
        ["abc", "def"],
    ],
    transformIgnorePatterns: ["", ""],
    unmockedModulePathPatterns: ["abc"],
    watchPathIgnorePatterns: ["def"],
};

const environment = {
    global: {},
    fakeTimers: {
        clearAllTimers() { },
        runAllImmediates() { },
        runAllTicks() { },
        runAllTimers() { },
        runTimersToTime(time: number) { },
        advanceTimersByTime(time: number) { },
        runOnlyPendingTimers() { },
        runWithRealTimers(callback: () => void) {
            callback();
        },
        useFakeTimers() { },
        useRealTimers() { },
    },
    testFilePath: "",
    moduleMocker: {},
    dispose() {},
    runScript(script: "") {
        return {};
    },
};

const workTestFramework = async (testFramework: jest.TestFramework): Promise<jest.TestResult> => {
    return testFramework(
        globalConfig,
        projectConfig,
        environment,
        {},
        "testPath"
    );
};

/* Jasmine status changers */

describe("", () => {
    it("", () => {
        pending();
        pending("reason");

        fail();
        fail("error");
        fail(new Error("reason"));
        fail({});
    });
});

/* Jasmine clocks and timing */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9001;

const clock = jasmine.clock();

clock.install();

clock.mockDate();
clock.mockDate(undefined);
clock.mockDate(new Date());

clock.tick(0);
clock.tick(9001);

/* Jasmine matchers */

expect({}).toBe(jasmine.anything());

expect({}).toBe(jasmine.any(class Foo { }));
expect(new Error()).toBe(jasmine.any(Error));
expect(7).toBe(jasmine.any(Number));

expect({}).toBe(jasmine.arrayContaining(["a", "b"]));
expect(["abc"]).toBe(jasmine.arrayContaining(["a", "b"]));

jasmine.arrayContaining([]);
new (jasmine.arrayContaining([]))([]);
const arrayContained: boolean = jasmine
    .arrayContaining([])
    .asymmetricMatch([]);
const arrayContainedName: string = jasmine
    .arrayContaining([])
    .jasmineToString();

jasmine.objectContaining({});
new (jasmine.objectContaining({}))({});
const objectContained: boolean = jasmine
    .objectContaining({})
    .jasmineMatches({}, ["abc"], ["def"]);
const objectContainedName: string = jasmine
    .objectContaining({})
    .jasmineToString();

jasmine.stringMatching("foo");
jasmine.stringMatching(/foo/);
new (jasmine.stringMatching("foo"))({});
const stringContained: boolean = jasmine
    .stringMatching(/foo/)
    .jasmineMatches({});
const stringContainedName: string = jasmine
    .stringMatching("foo")
    .jasmineToString();

expect({ abc: "def" }).toBe(jasmine.objectContaining({
    abc: jasmine.arrayContaining([jasmine.any(Date), {}]),
    def: jasmine.objectContaining({
        foo: "bar",
    }),
    ghi: jasmine.stringMatching("foo"),
}));

/* Jasmine spies */

describe("", () => {
    it("", () => {
        let spy = jasmine.createSpy();
        jasmine.createSpy("name");
        jasmine.createSpy("name", () => {});
        jasmine.createSpy("name", (arg: {}) => arg);
        jasmine.createSpy("name", (...args: string[]) => args.join(""));

        spy = jasmine.createSpy()
            .and.callFake(() => {})
            .and.callFake((arg: {}) => arg)
            .and.callFake((...args: string[]) => args.join(""))
            .and.callThrough()
            .and.returnValue("jasmine")
            .and.returnValue({})
            .and.returnValues()
            .and.returnValues("jasmine")
            .and.returnValues({}, {})
            .and.stub()
            .and.throwError("message");

        const identity: string = spy.identity;

        let args: any[];
        args = spy.mostRecentCall.args;
        args = spy.argsForCall[0];
        args = spy.calls.allArgs();
        args = spy.calls.argsFor(0);

        const spyCalled: boolean = spy.calls.any();

        const wasCalled: boolean = spy.wasCalled;

        for (const call of [
            ...spy.calls.all(),
            spy.calls.first(),
            spy.calls.mostRecent(),
        ]) {
            const callType: jasmine.CallInfo = call;
            const callArgs: any[] = call.args;
            const { object, returnValue } = call;
        }

        spy.calls.reset();

        const spyReturn = spy();

        /* Jasmine spy objects */

        let spyObject = {
            abc() {
                return "";
            },
            def: 7,
        };

        spyObject = jasmine.createSpyObj("baseName", ["abc"]);
        spyObject = jasmine.createSpyObj<typeof spyObject>("baseName", ["abc"]);

        const newSpyObject: typeof spyObject = jasmine.createSpyObj<typeof spyObject>("baseName", ["abc"]);
    });
});

/* Jasmine pp */

const pp: string = jasmine.pp({});

/* Jasmine equality testers */

const equalityTesterObject = (first: {}, second: {}) => false;
const equalityTesterString: jasmine.CustomEqualityTester = (first: string, second: string) => first === second;

jasmine.addCustomEqualityTester(equalityTesterObject);
jasmine.addCustomEqualityTester(equalityTesterObject);

/* Jasmine matchers */

const customMatcherFactoriesNone = {};
const customMatcherFactoriesIndex: { [i: string]: jasmine.CustomMatcherFactory } = {};
const customMatcherFactoriesManual = {
    abc: () => ({
        compare: (actual: "", expected: "", ...args: Array<{}>) => ({
            pass: true,
            message: "",
        }),
    }),
    def: (util: jasmine.MatchersUtil, customEqualityTestesr: jasmine.CustomEqualityTester): jasmine.CustomMatcher => ({
        compare<T extends string>(actual: T, expected: T): jasmine.CustomMatcherResult {
            return {
                pass: actual === expected,
                message: () => "foo",
            };
        },
    }),
};

const matchersUtil1 = {
    buildFailureMessage: () => "",
    contains: (haystack: string, needle: string) => haystack.indexOf(needle) !== -1,
    equals: (a: {}, b: {}) => false,
};

let matchersUtil2: jasmine.MatchersUtil = {
    buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string {
        return `${matcherName}${isNot ? "1" : "0"}${actual}${expected.join("")}`;
    },
    contains<T>(haystack: T[], needle: T, customTesters?: jasmine.CustomEqualityTester[]) {
        return true;
    },
    equals: (a: {}, b: {}, customTesters?: jasmine.CustomEqualityTester[]) => false,
};

// Jest config

const testJestConfig = (defaults: jest.DefaultOptions) => {
    const config: jest.InitialOptions = {
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
      },
      testMatch: [
        ...defaults.testMatch,
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)'
      ],
      moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
      globals: {
        'ts-jest': {}
      }
    };
};

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26368

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    ".add(%i, %i)",
    (a: number, b: number, expected: number) => {
        test(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });
    }
);

interface Case {
    a: number;
    b: number;
    expected: number;
}

describe.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`("$a + $b", ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.only.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    ".add(%i, %i)",
    (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });
    }
);

describe.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`("$a + $b", ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

describe.skip.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    ".add(%i, %i)",
    (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });
    }
);

describe.skip.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`("$a + $b", ({ a, b, expected }: Case) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});

test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    ".add(%i, %i)",
    (a, b, expected) => {
        expect(a + b).toBe(expected);
    }
);

test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`("returns $expected when $a is added $b", ({ a, b, expected }: Case) => {
    expect(a + b).toBe(expected);
});

test.only.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    ".add(%i, %i)",
    (a, b, expected) => {
        expect(a + b).toBe(expected);
    }
);

test.only.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
`("returns $expected when $a is added $b", ({ a, b, expected }: Case) => {
    expect(a + b).toBe(expected);
});

expect("").toHaveProperty("path.to.thing");
