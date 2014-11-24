/// <reference path="./assert.d.ts" />

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

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
