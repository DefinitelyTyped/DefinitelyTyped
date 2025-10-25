import assert = require("node:assert");
import strict = require("node:assert/strict");

{
    // Assert that all assert exports are present in assert/strict
    const keys: keyof typeof strict = {} as keyof typeof assert;
}

{
    const assertionError = new assert.AssertionError({
        actual: 1,
        expected: 2,
        operator: "strictEqual",
        diff: "full",
    });

    // Assertion errors are native errors
    const nativeError: Error = assertionError;

    assertionError.message; // $ExpectType string
    assertionError.code; // $ExpectType "ERR_ASSERTION"
    assertionError.operator; // $ExpectType string
    assertionError.generatedMessage; // $ExpectType boolean
}

{
    const tracker = new assert.CallTracker();
    const callsFunc = tracker.calls((a: number) => a, 2);
    const res = callsFunc(42);
    const report = tracker.report();

    const calls = tracker.getCalls(callsFunc);
    calls[0].thisArg;
    calls[0].arguments;

    tracker.reset();
    tracker.reset(callsFunc);

    try {
        tracker.verify();
    } catch (err) {
        assert(err instanceof assert.AssertionError);
    }
}

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

assert.deepStrictEqual({ a: 1 }, { a: 1 }, "uses === comparator");

assert.doesNotThrow(
    () => {
        const b = false;
        if (b) {
            throw new Error("a hammer at your face");
        }
    },
    () => 1,
    "What the...*crunch*",
);

assert.equal(3, "3", "uses == comparator");

assert.ifError(0);

assert.notDeepStrictEqual({ x: { y: "3" } }, { x: { y: 3 } }, "uses !== comparator");

assert.notEqual(1, 2, "uses != comparator");

assert.notStrictEqual(2, "2", "uses === comparator");

assert.ok(true);
assert.ok(1);

assert.strictEqual(1, 1, "uses === comparator");

assert.throws(
    () => {
        throw new Error("a hammer at your face");
    },
    Error,
    "DODGED IT",
);
assert.throws(
    () => {
        throw new Error("a hammer at your face");
    },
    (err: Error) => true,
    "DODGED IT",
);

assert.rejects(async () => 1);
assert.rejects(Promise.resolve(1));

assert.doesNotReject(async () => 1);
assert.doesNotReject(Promise.resolve(1));

assert.strict.strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);

assert.strict.strict.strict.ok(1);
assert.strict.strict.ok(1);
assert.strict.ok(1);
assert.ok(1);

assert.strict.strict.strict(1);
assert.strict.strict(1);
assert.strict(1);

assert.match("test", /test/, new Error("yeet"));
assert.match("test", /test/, "yeet");

(() => {
    assert.fail("stuff broke"); // $ExpectType never
});

(() => {
    assert.fail("actual", "expected", "message"); // $ExpectType never
});

(() => {
    assert.fail(1, 2, undefined, ">"); // $ExpectType never
});

assert(true, "it's working");

assert.ok(true, "inner functions work as well");

assert.throws(() => {});
assert.throws(() => {}, /Regex test/);
assert.throws(
    () => {},
    () => {},
    "works wonderfully",
);

assert["fail"](true, true, "works like a charm");

assert.partialDeepStrictEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 });

// Test assert predicates
{
    let a!: Error | null;
    assert.ifError(a);
    a; // $ExpectType null

    let b!: boolean;
    assert(b);
    b; // $ExpectType true

    let c!: boolean;
    assert.ok(c);
    c; // $ExpectType true

    let d!: unknown;
    assert.strictEqual(d, "test");
    d; // $ExpectType "test"

    let e!: unknown;
    strict.equal(e, "test");
    e; // $ExpectType "test"

    let f!: unknown;
    assert.deepStrictEqual(f, { n: 2 as const });
    f; // $ExpectType { n: 2; }

    let g!: unknown;
    strict.deepEqual(g, { n: 2 as const });
    g; // $ExpectType { n: 2; }
}

{
    let n!: number;
    let _1: 1;

    const legacyCustomAssert: assert.Assert = new assert.Assert({
        strict: false,
    });
    legacyCustomAssert.equal(n, 1);
    // @ts-expect-error non-strict assert.equal is not an assert predicate
    _1 = n;

    // The type annotation is mandatory here to avoid TS2775
    const strictCustomAssert: assert.AssertStrict = new assert.Assert({
        diff: "full",
    });
    strictCustomAssert.equal(n, 1);
    _1 = n;

    // @ts-expect-error legacy Assert instances should not be assignable to AssertStrict
    const invalidAssignment: assert.AssertStrict = new assert.Assert({
        strict: false,
    });

    // Verify that all assertion methods are present on the Assert interfaces
    const legacyKeys: keyof assert.Assert = {} as Exclude<
        keyof typeof assert,
        "Assert" | "AssertionError" | "CallTracker" | "strict"
    >;
    const strictKeys: keyof assert.AssertStrict = {} as Exclude<
        keyof typeof strict,
        "Assert" | "AssertionError" | "CallTracker" | "strict"
    >;
}
