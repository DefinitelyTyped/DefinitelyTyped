import cbor = require('cbor');
import assert = require('assert');
import fs = require('fs');

let encoded = cbor.encode(true); // returns <Buffer f5>
cbor.decodeFirst(encoded, (error, obj) => {
    // error != null if there was an error
    // obj is the unpacked object
    assert.ok(obj === true);
});

// Use integers as keys?
const m = new Map();
m.set(1, 2);
encoded = cbor.encode(m); // <Buffer a1 01 02>

const d = new cbor.Decoder();
d.on('data', (obj: any) => {
    console.log(obj);
});

const s = fs.createReadStream('foo');
s.pipe(d);

const d2 = new cbor.Decoder({ encoding: 'hex' });
d2.on('data', (obj: any) => {
    console.log(obj);
});

try {
    console.log(cbor.decodeFirstSync('02')); // 2
    console.log(cbor.decodeAllSync('0202')); // [2, 2]
} catch (e) {
    // throws on invalid input
}

class Bar {
    three: number;
    constructor() {
        this.three = 3;
    }
}

const enc = new cbor.Encoder();
enc.addSemanticType(Bar, (encoder, b) => {
    return encoder.pushAny(b.three);
});

class Foo {
    one: number;
    two: string;
}

const d3 = new cbor.Decoder({
    tags: {
        64000: (val) => {
            // check val to make sure it's an Array as expected, etc.
            const foo = new Foo();
            foo.one = val[0];
            foo.two = val[1];
            return foo;
        }
    }
});
