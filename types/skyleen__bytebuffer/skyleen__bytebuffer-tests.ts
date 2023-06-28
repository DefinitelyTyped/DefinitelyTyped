import * as ByteBuffer from '@skyleen/bytebuffer';

var bb = new ByteBuffer().writeIString('Hello world!').flip();
console.log(bb.readIString() + ' from @skyleen/bytebuffer');

// Test overloads typings
const shouldBeBuffer = bb.writeVString('test');
if (shouldBeBuffer !== bb) {
    throw new Error('writeVString without offset specified, should return itself.');
}
const shouldBeNumber = bb.writeVString('test', 4);
if (typeof shouldBeNumber !== 'number') {
    throw new Error('Invalid type returned!');
}