/// <reference path="node.d.ts" />

import assert = module("assert");
import fs = module("fs");
import events = module("events");

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

assert.equal(3, "3", "uses == comparator");

assert.notStrictEqual(2, "2", "uses === comparator");

assert.throws(() => { throw "a hammer at your face"; }, undefined, "DODGED IT");

assert.doesNotThrow(() => {
    if (false) { throw "a hammer at your face"; }
}, undefined, "What the...*crunch*");


fs.writeFile("thebible.txt",
    "Do unto others as you would have them do unto you.",
    assert.ifError);

fs.writeFile("Harry Potter",
            "\"You be wizzing, Harry,\" jived Dumbledore.",
            {
                encoding: "ascii"
            },
            assert.ifError);

class Networker extends events.EventEmitter {
    constructor() {
        super();

        this.emit("mingling");
    }
}