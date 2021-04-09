import BufferList = require('bl');
import BufferListDeepExport = require('bl/BufferList');

var bl: BufferList;
var buffer: Buffer;
var offset: number;
var num: number;
var str: string;

BufferList.isBufferList({});

// has Duplex methods
bl.pause();
bl.resume();

var bufferListDeep = new BufferListDeepExport();

// is assignable
bufferListDeep = bl.duplicate();

// is not assignable as it lacks the Duplex methods
var bl2: BufferList;
bl2 = bufferListDeep; // $ExpectError

// does not have Duplex methods
bufferListDeep.pause(); // $ExpectError
bufferListDeep.resume(); // $ExpectError

bl = new BufferList();
bl = new BufferList(bl);
bl = new BufferList([bl]);
bl = new BufferList(Buffer.from('asdf'));
bl = new BufferList([Buffer.from('asdf')]);
bl = new BufferList('hi');

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
bl.indexOf(new Uint8Array([1, 3, 4])) === 2;
bl.indexOf(bufferListDeep) === 0;

num = bl.readDoubleBE(offset);
num = bl.readDoubleBE(offset);
num = bl.readDoubleLE(offset);
num = bl.readDoubleLE(offset);
num = bl.readFloatBE(offset);
num = bl.readFloatBE(offset);
num = bl.readFloatLE(offset);
num = bl.readFloatLE(offset);
num = bl.readInt32BE(offset);
num = bl.readInt32BE(offset);
num = bl.readInt32LE(offset);
num = bl.readInt32LE(offset);
num = bl.readUInt32BE(offset);
num = bl.readUInt32BE(offset);
num = bl.readUInt32LE(offset);
num = bl.readUInt32LE(offset);
num = bl.readInt16BE(offset);
num = bl.readInt16BE(offset);
num = bl.readInt16LE(offset);
num = bl.readInt16LE(offset);
num = bl.readUInt16BE(offset);
num = bl.readUInt16BE(offset);
num = bl.readUInt16LE(offset);
num = bl.readUInt16LE(offset);
num = bl.readInt8(offset);
num = bl.readInt8(offset);
num = bl.readUInt8(offset);
num = bl.readUInt8(offset);
num = bl.readIntBE(offset);
num = bl.readIntLE(offset);
num = bl.readUIntBE(offset);
num = bl.readUIntLE(offset);

BufferList.isBufferList(bl); // $ExpectTrue
BufferList.isBufferList({}); // $ExpectFalse
BufferListDeepExport.isBufferList(bufferListDeep); // $ExpectTrue
BufferListDeepExport.isBufferList({}); // $ExpectFalse
