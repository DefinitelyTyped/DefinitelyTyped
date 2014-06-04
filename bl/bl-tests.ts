/// <reference path="./bl.d.ts" />

import BufferList = require('bl');

var bl: BufferList;
var buffer: Buffer;
var offset: number;
var num: number;
var str: string;
var noAssert: boolean;

bl = new BufferList();
bl = new BufferList((err:Error, buffer:Buffer) => {

});

bl.append(buffer);
num = bl.get(num);

buffer = bl.slice(num, num);
buffer = bl.slice(num);
buffer = bl.slice();

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

num = bl.length;

buffer = bl.readDoubleBE(offset, noAssert);
buffer = bl.readDoubleBE(offset);
buffer = bl.readDoubleLE(offset, noAssert);
buffer = bl.readDoubleLE(offset);
buffer = bl.readFloatBE(offset, noAssert);
buffer = bl.readFloatBE(offset);
buffer = bl.readFloatLE(offset, noAssert);
buffer = bl.readFloatLE(offset);
buffer = bl.readInt32BE(offset, noAssert);
buffer = bl.readInt32BE(offset);
buffer = bl.readInt32LE(offset, noAssert);
buffer = bl.readInt32LE(offset);
buffer = bl.readUInt32BE(offset, noAssert);
buffer = bl.readUInt32BE(offset);
buffer = bl.readUInt32LE(offset, noAssert);
buffer = bl.readUInt32LE(offset);
buffer = bl.readInt16BE(offset, noAssert);
buffer = bl.readInt16BE(offset);
buffer = bl.readInt16LE(offset, noAssert);
buffer = bl.readInt16LE(offset);
buffer = bl.readUInt16BE(offset, noAssert);
buffer = bl.readUInt16BE(offset);
buffer = bl.readUInt16LE(offset, noAssert);
buffer = bl.readUInt16LE(offset);
buffer = bl.readInt8(offset, noAssert);
buffer = bl.readInt8(offset);
buffer = bl.readUInt8(offset, noAssert);
buffer = bl.readUInt8(offset);
