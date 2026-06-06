import * as int53 from "int53";

const buf = Buffer.alloc(9);

int53.readInt64BE(Buffer.from("0000FFFFFFFFFFFF", "hex")); // $ExpectType number
int53.readInt64BE(Buffer.from("0000FFFFFFFFFFFF", "hex"), 1); // $ExpectType number
int53.readInt64LE(Buffer.from("ffffffffffff0000", "hex")); // $ExpectType number
int53.readInt64LE(Buffer.from("ffffffffffff0000", "hex"), 1); // $ExpectType number
int53.readUInt64BE(Buffer.from("0000FFFFFFFFFFFF", "hex")); // $ExpectType number
int53.readUInt64BE(Buffer.from("0000FFFFFFFFFFFF", "hex"), 1); // $ExpectType number
int53.readUInt64LE(Buffer.from("ffffffffffff0000", "hex")); // $ExpectType number
int53.readUInt64LE(Buffer.from("ffffffffffff0000", "hex"), 1); // $ExpectType number
int53.writeInt64BE(0xfffffffffff, buf); // $ExpectType void
int53.writeInt64BE(0xfffffffffff, buf, 1); // $ExpectType void
int53.writeInt64LE(0xfffffffffff, buf); // $ExpectType void
int53.writeInt64LE(0xfffffffffff, buf, 1); // $ExpectType void
int53.writeUInt64BE(0xfffffffffff, buf); // $ExpectType void
int53.writeUInt64BE(0xfffffffffff, buf, 1); // $ExpectType void
int53.writeUInt64LE(0xfffffffffff, buf); // $ExpectType void
int53.writeUInt64LE(0xfffffffffff, buf, 1); // $ExpectType void
