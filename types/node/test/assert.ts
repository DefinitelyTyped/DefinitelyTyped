import assert = require('assert');

{
    const { stack } = new assert.AssertionError({});
}

{
    const { message } = new assert.AssertionError({
        actual: 1,
        expected: 2,
        operator: 'strictEqual',
    });

    try {
        assert.strictEqual(1, 2);
    } catch (err) {
        assert(err instanceof assert.AssertionError);
        assert.strictEqual(err.message, message);
        assert.strictEqual(err.name, 'AssertionError');
        assert.strictEqual(err.actual, 1);
        assert.strictEqual(err.expected, 2);
        assert.strictEqual(err.code, 'ERR_ASSERTION');
        assert.strictEqual(err.operator, 'strictEqual');
        assert.strictEqual(err.generatedMessage, true);
    }
}

{
    const tracker = new assert.CallTracker();
    const callsFunc = tracker.calls((a: number) => a, 2);
    const res = callsFunc(42);
    const report = tracker.report();

    try {
        tracker.verify();
    } catch (err) {
        assert(err instanceof assert.AssertionError);
    }
}

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, 'DEEP WENT DERP');

assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'uses === comparator');

assert.doesNotThrow(
    () => {
        const b = false;
        if (b) {
            throw new Error('a hammer at your face');
        }
    },
    () => 1,
    'What the...*crunch*',
);

assert.equal(3, '3', 'uses == comparator');

assert.ifError(0);

assert.notDeepStrictEqual({ x: { y: '3' } }, { x: { y: 3 } }, 'uses !== comparator');

assert.notEqual(1, 2, 'uses != comparator');

assert.notStrictEqual(2, '2', 'uses === comparator');

assert.ok(true);
assert.ok(1);

assert.strictEqual(1, 1, 'uses === comparator');

assert.throws(
    () => {
        throw new Error('a hammer at your face');
    },
    Error,
    'DODGED IT',
);
assert.throws(
    () => {
        throw new Error('a hammer at your face');
    },
    (err: Error) => true,
    'DODGED IT',
);

assert.rejects(async () => 1);
assert.rejects(Promise.resolve(1));

assert.doesNotReject(async () => 1);
assert.doesNotReject(Promise.resolve(1));

assert.strict.strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

assert.strict.strict.strict.ok(1);
assert.strict.strict.ok(1);
assert.strict.ok(1);
assert.ok(1);

assert.strict.strict.strict(1);
assert.strict.strict(1);
assert.strict(1);
assert(1);

assert.match('test', /test/, new Error('yeet'));
assert.match('test', /test/, 'yeet');

assert.fail('stuff broke');

assert.fail('actual', 'expected', 'message');

assert.fail(1, 2, undefined, '>');
