import { Readable, Transform, TransformCallback, TransformOptions } from "node:stream";
import {
    after,
    afterEach,
    before,
    beforeEach,
    describe,
    it,
    Mock,
    mock,
    only,
    run,
    skip,
    snapshot,
    suite,
    type SuiteContext,
    test,
    type TestContext,
    todo,
} from "node:test";
import { dot, junit, lcov, spec, tap, TestEvent } from "node:test/reporters";

// run without options
// $ExpectType TestsStream
run();

// run with partial options and boolean concurrency
// $ExpectType TestsStream
run({
    concurrency: false,
    globPatterns: ["*.spec.js"],
});

// run with all options and number concurrency
// $ExpectType TestsStream
run({
    concurrency: 1,
    files: ["test-file-name.js"],
    signal: new AbortController().signal,
    timeout: 100,
    inspectPort: () => 8081,
    testNamePatterns: ["executed", /^core-/],
    testSkipPatterns: ["excluded", /^lib-/],
    only: true,
    setup: (reporter) => {
        // $ExpectType TestsStream
        reporter;
    },
    watch: true,
    shard: {
        index: 1,
        total: 3,
    },
});

// TestsStream should be a NodeJS.ReadableStream
run().pipe(process.stdout);

test("foo", t => {
    // $ExpectType TestContext
    t;
});

test("foo", (t) => {
    // $ExpectType Promise<void>
    t.test();
});

test("foo", async (t) => {
    // $ExpectType void
    await t.test();
});

test("blank options", {});

test("options with values", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: "reason for skip",
    timeout: Infinity,
    todo: "reason for todo",
});

test("options with booleans", {
    skip: true,
    todo: false,
});

{
    const ret = test();
    // $ExpectType Promise<void>
    ret;
}

// Test callback mode
test((t, cb) => {
    // $ExpectedType TestContext
    t;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});

// Test the context's methods/properties
test(undefined, undefined, t => {
    // $ExpectType void
    t.diagnostic("tap diagnostic");
    // $ExpectType void
    t.runOnly(true);
    // $ExpectType void
    t.skip("skip reason");
    // $ExpectType void
    t.skip();
    // $ExpectType void
    t.todo("todo reason");
    // $ExpectType void
    t.todo();
    // $ExpectType void
    t.after(t => {
        // $ExpectType TestContext
        t;
    });
    // $ExpectType void
    t.afterEach(t => {
        // $ExpectType TestContext
        t;
    });
    // $ExpectType void
    t.beforeEach(t => {
        // $ExpectType TestContext
        t;
    });
    // $ExpectType void
    t.before(t => {
        // $ExpectType TestContext
        t;
    });

    // $ExpectType string
    t.name;
    // $ExpectType string | undefined
    t.filePath;
    // $ExpectType string
    t.fullName;
    // $ExpectType AbortSignal
    t.signal;
    // $ExpectType MockTracker
    t.mock;
});

// Test the subtest approach.
test(t => {
    // $ExpectType TestContext
    t;
    const sub = t.test("sub", {}, t => {
        // $ExpectType TestContext
        t;
    });
    // $ExpectType Promise<void>
    sub;
});

// @ts-expect-error
test(1, () => {});

test.after(() => {});
test.afterEach(() => {});
test.before(() => {});
test.beforeEach(() => {});
test.describe("describe", () => {});
test.it("it", () => {});
// $ExpectType MockTracker
test.mock;
// $ExpectType typeof test
test.test;
test.test.test("chained self ref", (t) => {
    // $ExpectType typeof test
    t.test;
});
test.skip("skip", () => {});
test.suite("suite", () => {});
test.todo("todo", () => {});
test.only("only", () => {});

describe("foo", () => {
    it("it", () => {});
});

describe("foo", () => {
    const d = describe();
    // $ExpectType Promise<void>
    d;
});

describe("foo", async () => {
    const d = describe();
    // $ExpectType Promise<void>
    d;
    // $ExpectType void
    await d;
});

{
    const ret = describe();
    // $ExpectType Promise<void>
    ret;
}

describe("blank options", {});
it("blank options", {});

describe("options with values", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: "reason for skip",
    timeout: Infinity,
    todo: "reason for todo",
});

it("options with values", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: "reason for skip",
    timeout: Infinity,
    todo: "reason for todo",
});

describe("options with booleans", {
    skip: true,
    todo: false,
});
it("options with booleans", {
    skip: true,
    todo: false,
});

skip("skip shorthand", {
    concurrency: 1,
    skip: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
skip((t, cb) => {
    // $ExpectType TestContext
    t;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
test.skip("skip shorthand", {
    concurrency: 1,
    skip: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
describe.skip("skip shorthand", {
    concurrency: 1,
    skip: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
it.skip("skip shorthand", {
    concurrency: 1,
    skip: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});

todo("todo shorthand", {
    concurrency: 1,
    todo: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
todo((t, cb) => {
    // $ExpectType TestContext
    t;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
test.todo("todo shorthand", {
    concurrency: 1,
    todo: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
describe.todo("todo shorthand", {
    concurrency: 1,
    todo: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
it.todo("todo shorthand", {
    concurrency: 1,
    todo: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});

only("todo shorthand", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
only((t, cb) => {
    // $ExpectType TestContext
    t;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
test.only("only shorthand", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
describe.only("only shorthand", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
it.only("only shorthand", {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});

// Test with suite context
describe(s => {
    // $ExpectType SuiteContext
    s;
    // $ExpectType string
    s.name;
    // $ExpectType string | undefined
    s.filePath;
});

// Test callback mode
it((t, cb) => {
    // $ExpectType TestContext
    t;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});

// @ts-expect-error
describe(1, () => {});

// @ts-expect-error
it(1, () => {});

// suite() signatures
// $ExpectType Promise<void>
suite();
// $ExpectType Promise<void>
suite("foo");
// $ExpectType Promise<void>
suite("foo", () => {});
// $ExpectType Promise<void>
suite("foo", {
    concurrency: false,
    only: true,
    signal: new AbortController().signal,
    skip: false,
    timeout: 30_000,
    todo: true,
});
// $ExpectType Promise<void>
suite("foo", {
    concurrency: 5,
    todo: "foo",
}, async () => {});
// $ExpectType Promise<void>
suite(() => {});

// suite.skip() signatures
// $ExpectType Promise<void>
suite.skip();
// $ExpectType Promise<void>
suite.skip("foo");
// $ExpectType Promise<void>
suite.skip("foo", () => {});
// $ExpectType Promise<void>
suite.skip("foo", {
    concurrency: false,
    only: true,
    signal: new AbortController().signal,
    timeout: 30_000,
    todo: true,
});
// $ExpectType Promise<void>
suite.skip("foo", {
    concurrency: 5,
    todo: "foo",
}, async () => {});
// $ExpectType Promise<void>
suite.skip(() => {});

// suite.todo() signatures
// $ExpectType Promise<void>
suite.todo();
// $ExpectType Promise<void>
suite.todo("foo");
// $ExpectType Promise<void>
suite.todo("foo", () => {});
// $ExpectType Promise<void>
suite.todo("foo", {
    concurrency: false,
    only: true,
    signal: new AbortController().signal,
    skip: false,
    timeout: 30_000,
});
// $ExpectType Promise<void>
suite.todo("foo", {
    concurrency: 5,
    timeout: Infinity,
}, async () => {});
// $ExpectType Promise<void>
suite.todo(() => {});

// suite.only() signatures
// $ExpectType Promise<void>
suite.only();
// $ExpectType Promise<void>
suite.only("foo");
// $ExpectType Promise<void>
suite.only("foo", () => {});
// $ExpectType Promise<void>
suite.only("foo", {
    concurrency: false,
    signal: new AbortController().signal,
    skip: false,
    timeout: 30_000,
    todo: true,
});
// $ExpectType Promise<void>
suite.only("foo", {
    concurrency: 5,
    todo: "foo",
}, async () => {});
// $ExpectType Promise<void>
suite.only(() => {});

// SuiteContext
suite("foo", (context) => {
    // $ExpectType SuiteContext
    context;
    // $ExpectType string
    context.name;
    // $ExpectType AbortSignal
    context.signal;
});

// Hooks
// - without callback
before(() => {});
beforeEach(() => {});
after(() => {});
beforeEach(() => {});
// - with callback
before((c, cb) => {
    // $ExpectType TestContext | SuiteContext
    c;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
beforeEach((c, cb) => {
    // $ExpectType TestContext | SuiteContext
    c;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
after((c, cb) => {
    // $ExpectType TestContext | SuiteContext
    c;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
afterEach((c, cb) => {
    // $ExpectType TestContext | SuiteContext
    c;
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: "anything" });
});
// - with options
before(() => {}, { signal: new AbortController().signal, timeout: Infinity });
beforeEach(() => {}, { signal: new AbortController().signal, timeout: Infinity });
after(() => {}, { signal: new AbortController().signal, timeout: Infinity });
beforeEach(() => {}, { signal: new AbortController().signal, timeout: Infinity });

test("mocks a counting function", (t) => {
    let cnt = 0;

    function addOne() {
        cnt++;
        return cnt;
    }

    function addTwo() {
        cnt += 2;
        return cnt;
    }

    const fn = t.mock.fn(addOne, addTwo, { times: 2 });
    // $ExpectType number
    fn();
});

test("spies on an object method", (t) => {
    const number = {
        value: 5,
        subtract(a: number) {
            return this.value - a;
        },
    };

    const subtract = t.mock.method(number, "subtract");

    number.subtract(3);

    const call = subtract.mock.calls[0];
    // $ExpectType [a: number]
    call.arguments;
    // $ExpectType number | undefined
    call.result;
    // $ExpectType unknown
    call.error;
    // $ExpectType undefined
    call.target;

    // @ts-expect-error
    t.mock.method(obj, "value");
});

test("mocks an object method", (t) => {
    const obj = {
        prop: 5,
        method(a: number, b: number) {
            return a + b + this.prop;
        },
    };

    function mockMethod(this: typeof obj, a: number) {
        return a + this.prop;
    }

    const mocked = t.mock.method(obj, "method", mockMethod);
    obj.method(1, 3);
    const call = mocked.mock.calls[0];

    // $ExpectType [a: number, b: number] | [a: number]
    call.arguments;
    // $ExpectType number | undefined
    call.result;
    // $ExpectType unknown
    call.error;
    // $ExpectType undefined
    call.target;

    // @ts-expect-error
    t.mock.method(obj, "prop", mockMethod);
});

test("a no-op spy function is created by default", (t) => {
    const fn = t.mock.fn();
    fn(3, 4);

    const call = fn.mock.calls[0];
    // $ExpectType any[]
    call.arguments;
    // $ExpectType undefined
    call.result;
});

test("spies on a constructor", (t) => {
    class ParentClazz {
        constructor(public c: number) {
            this.c = c;
        }
    }

    class Clazz extends ParentClazz {
        #privateValue;

        constructor(public a: number, b: number) {
            super(a + b);
            this.a = a;
            this.#privateValue = b;
        }

        getPrivateValue() {
            return this.#privateValue;
        }
    }

    const ctor = t.mock.fn(Clazz);
    const instance = new ctor(42, 85);

    // $ExpectType number
    instance.a;
    // $ExpectType number
    instance.getPrivateValue();
    // $ExpectType number
    instance.c;

    const call = ctor.mock.calls[0];
    // $ExpectType [a: number, b: number]
    call.arguments;
    // $ExpectType Clazz | undefined
    call.result;
    // $ExpectType typeof Clazz
    call.target;
});

test("spies on a getter", (t) => {
    const obj = {
        prop: 5,
        get method() {
            return this.prop;
        },
    };

    {
        const getter = t.mock.method(obj, "method", { getter: true });
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const getter = t.mock.getter(obj, "method");
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType []
        call.arguments;
        // $ExpectType number | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test("mocks a getter", (t) => {
    const obj = {
        prop: 5,
        get method() {
            return this.prop;
        },
    };

    function mockMethod(this: typeof obj) {
        return this.prop - 1;
    }

    {
        const getter = t.mock.method(obj, "method", mockMethod, { getter: true });
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const getter = t.mock.getter(obj, "method", mockMethod);
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType []
        call.arguments;
        // $ExpectType number | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test("spies on a setter", (t) => {
    const obj = {
        prop: 100,
        set method(val: number) {
            this.prop = val;
        },
    };

    {
        const setter = t.mock.method(obj, "method", { setter: true });
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const setter = t.mock.setter(obj, "method");
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType [value: number]
        call.arguments;
        // $ExpectType void | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test("mocks a setter", (t) => {
    const obj = {
        prop: 100,
        set method(val: number) {
            this.prop = val;
        },
    };

    function mockMethod(this: typeof obj, value: number) {
        this.prop = -value;
    }

    {
        const setter = t.mock.method(obj, "method", mockMethod, { setter: true });
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const setter = t.mock.setter(obj, "method", mockMethod);
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType [value: number] | [value: number]
        call.arguments;
        // $ExpectType void | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test("mocks a module", (t) => {
    // $ExpectType MockModuleContext
    const mock = t.mock.module("node:readline", {
        namedExports: {
            fn() {
                return 42;
            },
        },
        defaultExport: {
            foo() {
                return "bar";
            },
        },
        cache: true,
    });
    // $ExpectType void
    mock.restore();
});

// @ts-expect-error
dot();
// $ExpectType AsyncGenerator<"\n" | "." | "X", void, unknown> || AsyncGenerator<"\n" | "." | "X", void, any>
dot("" as any);
// @ts-expect-error
tap();
// $ExpectType AsyncGenerator<string, void, unknown> || AsyncGenerator<string, void, any>
tap("" as any);
// $ExpectType SpecReporter
new spec();
// $ExpectType SpecReporter
spec();
// @ts-expect-error
junit();
// $ExpectType AsyncGenerator<string, void, unknown> || AsyncGenerator<string, void, any>
junit("" as any);
// @ts-expect-error (TODO: change to expect type LcovReporter once lcov is a wrapper function)
lcov();
// @ts-expect-error (TODO: change to expect type LcovReporter once lcov is a wrapper function)
new lcov();

describe("Mock Timers Test Suite", () => {
    it((t) => {
        t.mock.timers.enable({ apis: ["setTimeout"] });
        // new Date suite
        t.mock.timers.enable({ apis: ["Date"] });
        // immediates suite
        t.mock.timers.enable({ apis: ["setImmediate"] });
        t.mock.timers.enable({ apis: ["setTimeout"], now: 1000 });
        t.mock.timers.enable({ apis: ["setTimeout"], now: new Date() });
        t.mock.timers.enable();
        // @ts-expect-error
        t.mock.timers.enable(["setTimeout"]);
        // @ts-expect-error
        t.mock.timers.enable({ apis: ["NOT_THERE"] });
        t.mock.timers.enable();
        t.mock.timers.setTime(1000);
        // @ts-expect-error
        t.mock.timers.setTime("1000");
        // @ts-expect-error
        t.mock.timers.setTime(new Date());
        // @ts-expect-error
        t.mock.timers.setTime();
        t.mock.timers.reset();
        t.mock.timers.tick(1000);
    });
});

class TestReporter extends Transform {
    constructor(options: TransformOptions) {
        super(options);
    }
    _transform(event: TestEvent, _encoding: BufferEncoding, callback: TransformCallback): void {
        switch (event.type) {
            case "test:complete": {
                const { file, column, line, details, name, nesting, testNumber, skip, todo } = event.data;
                callback(
                    null,
                    `${name}/${details.duration_ms}/${details.type}/${details.error}/
                    ${nesting}/${testNumber}/${todo}/${skip}/${file}/${column}/${line}`,
                );
                break;
            }
            case "test:coverage": {
                const { summary, nesting } = event.data;
                callback(null, `${nesting}/${summary.workingDirectory}/${summary.totals.totalLineCount}`);
                break;
            }
            case "test:dequeue": {
                const { file, column, line, name, nesting } = event.data;
                callback(null, `${name}/${nesting}/${file}/${column}/${line}`);
                break;
            }
            case "test:diagnostic": {
                const { file, column, line, message, nesting } = event.data;
                callback(null, `${message}/${nesting}/${file}/${column}/${line}`);
                break;
            }
            case "test:enqueue": {
                const { file, column, line, name, nesting } = event.data;
                callback(null, `${name}/${nesting}/${file}/${column}/${line}`);
                break;
            }
            case "test:fail": {
                const { file, column, line, details, name, nesting, testNumber, skip, todo } = event.data;
                callback(
                    null,
                    `${name}/${details.duration_ms}/${details.type}/${details.error.cause}/
                    ${nesting}/${testNumber}/${todo}/${skip}/${file}/${column}/${line}`,
                );
                break;
            }
            case "test:pass": {
                const { file, column, line, details, name, nesting, testNumber, skip, todo } = event.data;
                callback(
                    null,
                    `${name}/${details.duration_ms}/${details.type}/
                    ${nesting}/${testNumber}/${todo}/${skip}/${file}/${column}/${line}`,
                );
                break;
            }
            case "test:plan": {
                const { file, column, line, count, nesting } = event.data;
                callback(null, `${count}/${nesting}/${file}/${column}/${line}`);
                break;
            }
            case "test:start": {
                const { file, column, line, name, nesting } = event.data;
                callback(null, `${name}/${nesting}/${file}/${column}/${line}`);
                break;
            }
            case "test:stderr": {
                const { file, message } = event.data;
                callback(null, `${message}/${file}`);
                break;
            }
            case "test:stdout": {
                const { file, message } = event.data;
                callback(null, `${message}/${file}`);
                break;
            }
            case "test:watch:drained":
                // event doesn't have any data
                callback(null);
                break;
            default:
                callback(null);
        }
    }
}
const createdMock: Mock<() => undefined> = mock.fn(() => undefined);
// @ts-expect-error
createdMock.mock.mockImplementation(() => null);
createdMock.mock.mockImplementation(() => undefined);
// @ts-expect-error
createdMock.mock.mockImplementationOnce(() => null);
createdMock.mock.mockImplementationOnce(() => undefined);

// Allows for typing of TestContext outside of a test
const contextTest = (t: TestContext) => {
    // $ExpectType TestContext
    t;
};

const suiteTest = (t: SuiteContext) => {
    // $ExpectType SuiteContext
    t;
};

describe("test context in describe/it", (suite) => {
    suiteTest(suite);
    it("test context exportation", (t) => {
        contextTest(t);
    });
});

test("test on the default export", (t) => {
    contextTest(t);
});

// @ts-expect-error Should not be able to instantiate a TestContext
const invalidTestContext = new TestContext();

// @ts-expect-error Should not be able to instantiate a SuiteContext
const invalidSuiteContext = new SuiteContext();

test("planning with streams", (t: TestContext, done) => {
    function* generate() {
        yield "a";
        yield "b";
        yield "c";
    }
    const expected = ["a", "b", "c"];
    t.plan(expected.length);

    const stream = Readable.from(generate());
    stream.on("data", (chunk) => {
        t.assert.strictEqual(chunk, expected.shift()!);

        // $ExpectType string
        chunk;
    });

    stream.on("end", () => {
        done();
    });
});

// Test snapshot assertion.
test(t => {
    // $ExpectType void
    t.assert.snapshot({ value1: true, value2: false });
    // $ExpectType void
    t.assert.snapshot({ value3: "foo", value4: "bar" }, { serializers: [value => JSON.stringify(value)] });
});

// Snapshot configuration
// @ts-expect-error
snapshot.setDefaultSnapshotSerializers();
// @ts-expect-error
snapshot.setDefaultSnapshotSerializers((value) => value);
// $ExpectType void
snapshot.setDefaultSnapshotSerializers([
    (value) => {
        value; // $ExpectType any
        return value;
    },
]);
// @ts-expect-error
snapshot.setResolveSnapshotPath();
// $ExpectType void
snapshot.setResolveSnapshotPath((path) => {
    path; // $ExpectType string | undefined
    return `${path ?? "repl"}.snapshot`;
});
