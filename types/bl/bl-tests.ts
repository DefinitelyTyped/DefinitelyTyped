import BufferListStream = require("bl");
import BufferList = require("bl/BufferList");

var bls: BufferListStream;
var buffer: Buffer;
var offset: number;
var num: number;
var str: string;

BufferListStream.isBufferList({});

// has Duplex methods
bls.pause();
bls.resume();

var bl = new BufferList();

// is assignable
bl = bls.duplicate();

// is not assignable as it lacks the Duplex methods
var bls2: BufferListStream;
// @ts-expect-error
bls2 = bl;

// does not have Duplex methods
// @ts-expect-error
bl.pause();
// @ts-expect-error
bl.resume();

bl.append(buffer);
bl.append(bl);
bl.append(bls);

bls = new BufferListStream();
bls = new BufferListStream((err, data) => {});
bls = new BufferListStream(bls);
bls = new BufferListStream([bls]);
bls = new BufferListStream(Buffer.from("asdf"));
bls = new BufferListStream([Buffer.from("asdf")]);
bls = new BufferListStream("hi");

bls.append(buffer);
bls.append(bl);
bls.append(bls);
num = bls.length;

num = bls.get(num);

buffer = bls.slice(num, num);
buffer = bls.slice(num);
buffer = bls.slice();
bls.shallowSlice(0, 1).shallowSlice();

bls.copy(buffer, num, num, num);
bls.copy(buffer, num, num);
bls.copy(buffer, num);
bls.copy(buffer);

bls = bls.duplicate();

bls.consume();
bls.consume(num);

str = bls.toString(str, num, num);
str = bls.toString(str, num);
str = bls.toString(str);
str = bls.toString();
bls.indexOf("foo", 0, "hex") === 1;
bls.indexOf(Buffer.from("foo")) === 1;
bls.indexOf(4) === 1;
bls.indexOf(bls) === 1;
bls.indexOf(new Uint8Array([1, 3, 4])) === 2;
bls.indexOf(bl) === 0;
bl.indexOf(bls) === 0;

num = bls.readDoubleBE(offset);
num = bls.readDoubleBE(offset);
num = bls.readDoubleLE(offset);
num = bls.readDoubleLE(offset);
num = bls.readFloatBE(offset);
num = bls.readFloatBE(offset);
num = bls.readFloatLE(offset);
num = bls.readFloatLE(offset);
num = bls.readInt32BE(offset);
num = bls.readInt32BE(offset);
num = bls.readInt32LE(offset);
num = bls.readInt32LE(offset);
num = bls.readUInt32BE(offset);
num = bls.readUInt32BE(offset);
num = bls.readUInt32LE(offset);
num = bls.readUInt32LE(offset);
num = bls.readInt16BE(offset);
num = bls.readInt16BE(offset);
num = bls.readInt16LE(offset);
num = bls.readInt16LE(offset);
num = bls.readUInt16BE(offset);
num = bls.readUInt16BE(offset);
num = bls.readUInt16LE(offset);
num = bls.readUInt16LE(offset);
num = bls.readInt8(offset);
num = bls.readInt8(offset);
num = bls.readUInt8(offset);
num = bls.readUInt8(offset);
num = bls.readIntBE(offset);
num = bls.readIntLE(offset);
num = bls.readUIntBE(offset);
num = bls.readUIntLE(offset);

BufferListStream.isBufferList(bls); // $ExpectTrue
BufferListStream.isBufferList({}); // $ExpectFalse
BufferList.isBufferList(bl); // $ExpectTrue
BufferList.isBufferList({}); // $ExpectFalse
