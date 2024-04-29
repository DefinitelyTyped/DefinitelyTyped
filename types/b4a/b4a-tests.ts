import * as b4a from "b4a";

declare const buf: Buffer;
declare let u8a: Uint8Array;
declare const ab: ArrayBuffer;
declare const dv: DataView;
declare const sb: SharedArrayBuffer;

b4a.isBuffer(buf); // $ExpectType boolean
b4a.isBuffer(""); // $ExpectType boolean
b4a.isBuffer({}); // $ExpectType boolean

b4a.isEncoding("utf8"); // $ExpectType boolean

u8a = b4a.alloc(5);
u8a = b4a.alloc(5, "a");
u8a = b4a.alloc(5, u8a);
u8a = b4a.alloc(5, 2);
u8a = b4a.alloc(11, "aGVsbG8gd29ybGQ=", "base64");
u8a = b4a.alloc(11, "aGVsbG8gd29ybGQ", "base64url");

u8a = b4a.allocUnsafe(5);

u8a = b4a.allocUnsafeSlow(10);

b4a.byteLength("foo"); // $ExpectType number
b4a.byteLength("foo", "utf8"); // $ExpectType number
b4a.byteLength(u8a); // $ExpectType number
b4a.byteLength(u8a, "utf16le"); // $ExpectType number
b4a.byteLength(ab); // $ExpectType number
b4a.byteLength(ab, "ascii"); // $ExpectType number
b4a.byteLength(dv); // $ExpectType number
b4a.byteLength(dv, "utf16le"); // $ExpectType number

b4a.compare(buf, buf); // $ExpectType 0 | 1 | -1

u8a = b4a.concat([buf, buf] as readonly Uint8Array[]);
u8a = b4a.concat([buf, buf] as readonly Uint8Array[], 9999999);

b4a.copy(buf, buf); // $ExpectType number
b4a.copy(buf, buf, 1); // $ExpectType number
b4a.copy(buf, buf, 1, 3); // $ExpectType number
b4a.copy(buf, buf, 1, 3, 5); // $ExpectType number

b4a.equals(buf, buf); // $ExpectType boolean

u8a = b4a.fill(buf, "str");
u8a = b4a.fill(buf, u8a);
u8a = b4a.fill(buf, 1);
u8a = b4a.fill(buf, 1, 2);
u8a = b4a.fill(buf, 1, 2, 3);
u8a = b4a.fill(buf, 1, 2, 3, "utf8");

u8a = b4a.from(sb);
u8a = b4a.from(buf);
u8a = b4a.from("this is a tést");
u8a = b4a.from(buf, 1, 2);
u8a = b4a.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72] as readonly number[]);
// @ts-expect-error
b4a.from({});

b4a.includes(buf, "23"); // $ExpectType boolean
b4a.includes(buf, "23", 1); // $ExpectType boolean
b4a.includes(buf, "23", 1, "utf8"); // $ExpectType boolean
b4a.includes(buf, 23); // $ExpectType boolean
b4a.includes(buf, 23, 1); // $ExpectType boolean
b4a.includes(buf, 23, 1, "utf8"); // $ExpectType boolean
b4a.includes(buf, buf); // $ExpectType boolean
b4a.includes(buf, buf, 1); // $ExpectType boolean
b4a.includes(buf, buf, 1, "utf8"); // $ExpectType boolean

b4a.indexOf(buf, "23"); // $ExpectType number
b4a.indexOf(buf, "23", 1); // $ExpectType number
b4a.indexOf(buf, "23", 1, "utf8"); // $ExpectType number
b4a.indexOf(buf, 23); // $ExpectType number
b4a.indexOf(buf, buf); // $ExpectType number

b4a.lastIndexOf(buf, "23"); // $ExpectType number
b4a.lastIndexOf(buf, "23", 1); // $ExpectType number
b4a.lastIndexOf(buf, "23", 1, "utf8"); // $ExpectType number
b4a.lastIndexOf(buf, 23); // $ExpectType number
b4a.lastIndexOf(buf, buf); // $ExpectType number

u8a = b4a.swap16(buf);
u8a = b4a.swap32(buf);
u8a = b4a.swap64(buf);

u8a = b4a.toBuffer(buf);

b4a.toString(buf); // $ExpectType string
b4a.toString(buf, "utf8"); // $ExpectType string
b4a.toString(buf, "utf8", 1); // $ExpectType string
b4a.toString(buf, "utf8", 1, 2); // $ExpectType string

b4a.write(buf, "asd"); // $ExpectType number
b4a.write(buf, "asd", "hex"); // $ExpectType number
b4a.write(buf, "asd", 123, "hex"); // $ExpectType number
b4a.write(buf, "asd", 123, 123, "hex"); // $ExpectType number

b4a.writeUInt32LE(buf, 0xabcd); // $ExpectType number
b4a.writeUInt32LE(buf, 0xabcd, 0); // $ExpectType number
b4a.writeInt32LE(buf, 0xabcd); // $ExpectType number
b4a.writeInt32LE(buf, 0xabcd, 0); // $ExpectType number
b4a.writeFloatLE(buf, 0xabcd); // $ExpectType number
b4a.writeFloatLE(buf, 0xabcd, 0); // $ExpectType number
b4a.writeDoubleLE(buf, 123.123); // $ExpectType number
b4a.writeDoubleLE(buf, 123.123, 0); // $ExpectType number

b4a.readUInt32LE(buf); // $ExpectType number
b4a.readUInt32LE(buf, 0); // $ExpectType number
b4a.readInt32LE(buf); // $ExpectType number
b4a.readInt32LE(buf, 0); // $ExpectType number
b4a.readFloatLE(buf); // $ExpectType number
b4a.readFloatLE(buf, 0); // $ExpectType number
b4a.readDoubleLE(buf); // $ExpectType number
b4a.readDoubleLE(buf, 0); // $ExpectType number
