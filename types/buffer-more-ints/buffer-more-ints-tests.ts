import * as moreInts from "buffer-more-ints";
import "buffer-more-ints/polyfill";
import { Buffer } from "buffer";

// Test isContiguousInt and assertContiguousInt
const isContiguous: boolean = moreInts.isContiguousInt(12345);
moreInts.assertContiguousInt(12345);

// Create a test buffer
const buf = Buffer.alloc(16);

// Test standalone functions - read operations
const u8: number = moreInts.readUInt8(buf, 0);
const i8: number = moreInts.readInt8(buf, 0);

const u16be: number = moreInts.readUInt16BE(buf, 0);
const u16le: number = moreInts.readUInt16LE(buf, 0);
const i16be: number = moreInts.readInt16BE(buf, 0);
const i16le: number = moreInts.readInt16LE(buf, 0);

const u24be: number = moreInts.readUInt24BE(buf, 0);
const u24le: number = moreInts.readUInt24LE(buf, 0);
const i24be: number = moreInts.readInt24BE(buf, 0);
const i24le: number = moreInts.readInt24LE(buf, 0);

const u32be: number = moreInts.readUInt32BE(buf, 0);
const u32le: number = moreInts.readUInt32LE(buf, 0);
const i32be: number = moreInts.readInt32BE(buf, 0);
const i32le: number = moreInts.readInt32LE(buf, 0);

const u40be: number = moreInts.readUInt40BE(buf, 0);
const u40le: number = moreInts.readUInt40LE(buf, 0);
const i40be: number = moreInts.readInt40BE(buf, 0);
const i40le: number = moreInts.readInt40LE(buf, 0);

const u48be: number = moreInts.readUInt48BE(buf, 0);
const u48le: number = moreInts.readUInt48LE(buf, 0);
const i48be: number = moreInts.readInt48BE(buf, 0);
const i48le: number = moreInts.readInt48LE(buf, 0);

const u56be: number = moreInts.readUInt56BE(buf, 0);
const u56le: number = moreInts.readUInt56LE(buf, 0);
const i56be: number = moreInts.readInt56BE(buf, 0);
const i56le: number = moreInts.readInt56LE(buf, 0);

const u64be: number = moreInts.readUInt64BE(buf, 0);
const u64le: number = moreInts.readUInt64LE(buf, 0);
const i64be: number = moreInts.readInt64BE(buf, 0);
const i64le: number = moreInts.readInt64LE(buf, 0);

// Test standalone functions - write operations
moreInts.writeUInt8(buf, 255, 0);
moreInts.writeInt8(buf, -128, 0);

moreInts.writeUInt16BE(buf, 0xffff, 0);
moreInts.writeUInt16LE(buf, 0xffff, 0);
moreInts.writeInt16BE(buf, -32768, 0);
moreInts.writeInt16LE(buf, -32768, 0);

moreInts.writeUInt24BE(buf, 0xffffff, 0);
moreInts.writeUInt24LE(buf, 0xffffff, 0);
moreInts.writeInt24BE(buf, -8388608, 0);
moreInts.writeInt24LE(buf, -8388608, 0);

moreInts.writeUInt32BE(buf, 0xffffffff, 0);
moreInts.writeUInt32LE(buf, 0xffffffff, 0);
moreInts.writeInt32BE(buf, -2147483648, 0);
moreInts.writeInt32LE(buf, -2147483648, 0);

moreInts.writeUInt40BE(buf, 0xffffffffff, 0);
moreInts.writeUInt40LE(buf, 0xffffffffff, 0);
moreInts.writeInt40BE(buf, -549755813888, 0);
moreInts.writeInt40LE(buf, -549755813888, 0);

moreInts.writeUInt48BE(buf, 0xffffffffffff, 0);
moreInts.writeUInt48LE(buf, 0xffffffffffff, 0);
moreInts.writeInt48BE(buf, -140737488355328, 0);
moreInts.writeInt48LE(buf, -140737488355328, 0);

moreInts.writeUInt56BE(buf, 0xffffffffffffff, 0);
moreInts.writeUInt56LE(buf, 0xffffffffffffff, 0);
moreInts.writeInt56BE(buf, 0x7fffffffffffff, 0);
moreInts.writeInt56LE(buf, 0x7fffffffffffff, 0);

moreInts.writeUInt64BE(buf, 0xffffffffffffffff, 0);
moreInts.writeUInt64LE(buf, 0xffffffffffffffff, 0);
moreInts.writeInt64BE(buf, 0x7fffffffffffffff, 0);
moreInts.writeInt64LE(buf, 0x7fffffffffffffff, 0);

// Test polyfill - static methods on Buffer
const isContiguousPolyfill: boolean = Buffer.isContiguousInt(12345);
Buffer.assertContiguousInt(12345);

// Test polyfill - Buffer.prototype methods for 24-bit
const pu24be: number = buf.readUInt24BE(0);
const pu24le: number = buf.readUInt24LE(0);
const pi24be: number = buf.readInt24BE(0);
const pi24le: number = buf.readInt24LE(0);
buf.writeUInt24BE(0xffffff, 0);
buf.writeUInt24LE(0xffffff, 0);
buf.writeInt24BE(-8388608, 0);
buf.writeInt24LE(-8388608, 0);

// Test polyfill - Buffer.prototype methods for 40-bit
const pu40be: number = buf.readUInt40BE(0);
const pu40le: number = buf.readUInt40LE(0);
const pi40be: number = buf.readInt40BE(0);
const pi40le: number = buf.readInt40LE(0);
buf.writeUInt40BE(0xffffffffff, 0);
buf.writeUInt40LE(0xffffffffff, 0);
buf.writeInt40BE(-549755813888, 0);
buf.writeInt40LE(-549755813888, 0);

// Test polyfill - Buffer.prototype methods for 48-bit
const pu48be: number = buf.readUInt48BE(0);
const pu48le: number = buf.readUInt48LE(0);
const pi48be: number = buf.readInt48BE(0);
const pi48le: number = buf.readInt48LE(0);
buf.writeUInt48BE(0xffffffffffff, 0);
buf.writeUInt48LE(0xffffffffffff, 0);
buf.writeInt48BE(-140737488355328, 0);
buf.writeInt48LE(-140737488355328, 0);

// Test polyfill - Buffer.prototype methods for 56-bit
const pu56be: number = buf.readUInt56BE(0);
const pu56le: number = buf.readUInt56LE(0);
const pi56be: number = buf.readInt56BE(0);
const pi56le: number = buf.readInt56LE(0);
buf.writeUInt56BE(0xffffffffffffff, 0);
buf.writeUInt56LE(0xffffffffffffff, 0);
buf.writeInt56BE(0x7fffffffffffff, 0);
buf.writeInt56LE(0x7fffffffffffff, 0);

// Test polyfill - Buffer.prototype methods for 64-bit
const pu64be: number = buf.readUInt64BE(0);
const pu64le: number = buf.readUInt64LE(0);
const pi64be: number = buf.readInt64BE(0);
const pi64le: number = buf.readInt64LE(0);
buf.writeUInt64BE(0xffffffffffffffff, 0);
buf.writeUInt64LE(0xffffffffffffffff, 0);
buf.writeInt64BE(0x7fffffffffffffff, 0);
buf.writeInt64LE(0x7fffffffffffffff, 0);

// Test polyfill - generic methods with length parameter
const genericUIntBE: number = buf.readUIntBE(3, 0);
const genericUIntLE: number = buf.readUIntLE(4, 0);
const genericIntBE: number = buf.readIntBE(5, 0);
const genericIntLE: number = buf.readIntLE(6, 0);
buf.writeUIntBE(3, 0xffffff, 0);
buf.writeUIntLE(4, 0xffffffff, 0);
buf.writeIntBE(5, -549755813888, 0);
buf.writeIntLE(6, -140737488355328, 0);
