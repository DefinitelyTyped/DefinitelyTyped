import assert = require("power-assert");

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({x: {y: 3}}, {x: {y: 3}}, "DEEP WENT DERP");

assert.equal(3, "3", "uses == comparator");

const maybeString: string | null = null;
assert.ok(maybeString);
// $ExpectType string
maybeString;

assert.notStrictEqual(2, "2", "uses === comparator");

assert.deepStrictEqual([{a: 1}], [{a: 1}], "uses === comparator");

assert.notDeepStrictEqual([{a: 1}], [{a: 1}], "uses === comparator");

assert.throws(() => {
    throw new Error("a hammer at your face");
}, "DODGED IT");

assert.doesNotThrow(() => {
    if (!!false) {
        throw new Error("a hammer at your face");
    }
}, "What the...*crunch*");

const customizedAssert1: typeof assert = assert.customize({
    output: {
        maxDepth: 2
    }
});

customizedAssert1(1 + 1 - 2 === 0, "The universe isn't how it should.");

customizedAssert1.deepEqual({x: {y: 3}}, {x: {y: 3}}, "DEEP WENT DERP");

customizedAssert1.equal(3, "3", "uses == comparator");

customizedAssert1.notStrictEqual(2, "2", "uses === comparator");

customizedAssert1.throws(() => {
    throw new Error("a hammer at your face");
}, "DODGED IT");

customizedAssert1.doesNotThrow(() => {
    if (!!false) {
        throw new Error("a hammer at your face");
    }
}, "What the...*crunch*");

const customizedAssert2 = assert.customize({
    assertion: {
        destructive: false,
        modifyMessageOnRethrow: true,
        saveContextOnRethrow: true,
        patterns: [
            'assert(value, [message])',
            'assert.ok(value, [message])',
            'assert.equal(actual, expected, [message])',
            'assert.notEqual(actual, expected, [message])',
            'assert.strictEqual(actual, expected, [message])',
            'assert.notStrictEqual(actual, expected, [message])',
            'assert.deepEqual(actual, expected, [message])',
            'assert.notDeepEqual(actual, expected, [message])'
        ]
    },
    output: {
        lineDiffThreshold: 5,
        maxDepth: 1,
        anonymous: 'Object',
        circular: '#@Circular#',
        lineSeparator: '\n',
        ambiguousEastAsianCharWidth: 2,
        widthOf: () => false,
        stringify: () => false,
        diff: () => false,
        writerClass: null,
        renderers: [
            './built-in/file',
            './built-in/assertion',
            './built-in/diagram',
            './built-in/binary-expression'
        ]
    }
});

(): typeof assert => assert.strict;

declare const set: Set<number>;
assert(set.size === 0);
set.add(0);
assert(set.size === 1);

declare const set2: Set<0>;
set2.add(0);
assert(set2.size === 1);
