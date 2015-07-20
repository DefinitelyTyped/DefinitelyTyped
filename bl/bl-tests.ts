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
