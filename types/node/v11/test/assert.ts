import * as assert from 'assert';

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

assert.deepStrictEqual({ a: 1 }, { a: 1 }, "uses === comparator");

assert.doesNotThrow(() => {
    const b = false;
    if (b) { throw new Error("a hammer at your face"); }
}, () => 1, "What the...*crunch*");

assert.equal(3, "3", "uses == comparator");

assert.fail('stuff broke');

assert.fail('actual', 'expected', 'message');

assert.fail(1, 2, undefined, '>');

assert.ifError(0);

assert.notDeepStrictEqual({ x: { y: "3" } }, { x: { y: 3 } }, "uses !== comparator");

assert.notEqual(1, 2, "uses != comparator");

assert.notStrictEqual(2, "2", "uses === comparator");

assert.ok(true);
assert.ok(1);

assert.strictEqual(1, 1, "uses === comparator");

assert.throws(() => { throw new Error("a hammer at your face"); }, Error, "DODGED IT");

assert.rejects(async () => 1);
assert.rejects(Promise.resolve(1));

assert.doesNotReject(async () => 1);
assert.doesNotReject(Promise.resolve(1));

assert.strict.strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
