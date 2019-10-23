
import BufferList = require('bl');

var bl: BufferList;
var buffer: Buffer;
var offset: number;
var num: number;
var str: string;
var noAssert: boolean;

bl = new BufferList();
bl = new BufferList(bl);
bl = new BufferList([bl]);
bl = new BufferList(Buffer.from('asdf'));
bl = new BufferList([Buffer.from('asdf')]);
bl = new BufferList('hi');
bl = new BufferList((err:Error, buffer:Buffer) => {
    if (err) {
        throw err;
    }
    console.log(buffer.toString());
});

bl.append(buffer);
num = bl.length;

num = bl.get(num);

buffer = bl.slice(num, num);
buffer = bl.slice(num);
buffer = bl.slice();
bl.shallowSlice(0, 1).shallowSlice();

bl.copy(buffer, num, num, num);
bl.copy(buffer, num, num);
bl.copy(buffer, num);
bl.copy(buffer);

bl = bl.duplicate();

bl.consume();
bl.consume(num);

str = bl.toString(str, num, num);
str = bl.toString(str, num);
str = bl.toString(str);
str = bl.toString();
bl.indexOf('foo', 0, 'hex') === 1;
bl.indexOf(Buffer.from('foo')) === 1;
bl.indexOf(4) === 1;
bl.indexOf(bl) === 1;
bl.indexOf(new Uint8Array([1,3,4])) === 2;

num = bl.readDoubleBE(offset, noAssert);
num = bl.readDoubleBE(offset);
num = bl.readDoubleLE(offset, noAssert);
num = bl.readDoubleLE(offset);
num = bl.readFloatBE(offset, noAssert);
num = bl.readFloatBE(offset);
num = bl.readFloatLE(offset, noAssert);
num = bl.readFloatLE(offset);
num = bl.readInt32BE(offset, noAssert);
num = bl.readInt32BE(offset);
num = bl.readInt32LE(offset, noAssert);
num = bl.readInt32LE(offset);
num = bl.readUInt32BE(offset, noAssert);
num = bl.readUInt32BE(offset);
num = bl.readUInt32LE(offset, noAssert);
num = bl.readUInt32LE(offset);
num = bl.readInt16BE(offset, noAssert);
num = bl.readInt16BE(offset);
num = bl.readInt16LE(offset, noAssert);
num = bl.readInt16LE(offset);
num = bl.readUInt16BE(offset, noAssert);
num = bl.readUInt16BE(offset);
num = bl.readUInt16LE(offset, noAssert);
num = bl.readUInt16LE(offset);
num = bl.readInt8(offset, noAssert);
num = bl.readInt8(offset);
num = bl.readUInt8(offset, noAssert);
num = bl.readUInt8(offset);
