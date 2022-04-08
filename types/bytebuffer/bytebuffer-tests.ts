import * as ByteBuffer from 'bytebuffer';

var bb = new ByteBuffer().writeIString('Hello world!').flip();
console.log(bb.readIString() + ' from bytebuffer.js');

// Test overloads typings
const shouldBeBuffer = bb.writeVString('test');
if (shouldBeBuffer !== bb) {
    throw new Error('writeVString without offset specified, should return itself.');
}
const shouldBeNumber = bb.writeVString('test', 4);
if (typeof shouldBeNumber !== 'number') {
    throw new Error('Invalid type returned!');
}
