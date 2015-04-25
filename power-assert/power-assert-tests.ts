/// <reference path="./power-assert.d.ts" />

import assert = require("power-assert");

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({x: {y: 3}}, {x: {y: 3}}, "DEEP WENT DERP");

assert.equal(3, "3", "uses == comparator");

assert.notStrictEqual(2, "2", "uses === comparator");

assert.throws(() => {
    throw "a hammer at your face";
}, undefined, "DODGED IT");

assert.doesNotThrow(() => {
    if (false) {
        throw "a hammer at your face";
    }
}, undefined, "What the...*crunch*");


var customizedAssert1 = assert.customize({
    output: {
        maxDepth: 2
    }
});

customizedAssert1(1 + 1 - 2 === 0, "The universe isn't how it should.");

customizedAssert1.deepEqual({x: {y: 3}}, {x: {y: 3}}, "DEEP WENT DERP");

customizedAssert1.equal(3, "3", "uses == comparator");

customizedAssert1.notStrictEqual(2, "2", "uses === comparator");

customizedAssert1.throws(() => {
    throw "a hammer at your face";
}, undefined, "DODGED IT");

customizedAssert1.doesNotThrow(() => {
    if (false) {
        throw "a hammer at your face";
    }
}, undefined, "What the...*crunch*");


var customizedAssert2 = assert.customize({
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
        widthOf: () => null,
        stringify: () => null,
        diff: () => null,
        writerClass: null,
        renderers: [
            './built-in/file',
            './built-in/assertion',
            './built-in/diagram',
            './built-in/binary-expression'
        ]
    }
});
