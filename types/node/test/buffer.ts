// Specifically test buffer module regression.
import {
    Buffer as ImportedBuffer,
    SlowBuffer as ImportedSlowBuffer,
    transcode,
    TranscodeEncoding,
    constants,
    kMaxLength,
    kStringMaxLength,
    Blob,
} from 'buffer';

const utf8Buffer = new Buffer('test');
const base64Buffer = new Buffer('', 'base64');
const octets: Uint8Array = new Uint8Array(123);
const octetBuffer = new Buffer(octets);
const sharedBuffer = new Buffer(octets.buffer);
const copiedBuffer = new Buffer(utf8Buffer);
console.log(Buffer.isBuffer(octetBuffer));
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.byteLength('xyz123'));
console.log(Buffer.byteLength('xyz123', 'ascii'));
const result1 = Buffer.concat([utf8Buffer, base64Buffer] as ReadonlyArray<Uint8Array>);
const result2 = Buffer.concat([utf8Buffer, base64Buffer] as ReadonlyArray<Uint8Array>, 9999999);

// Module constants
{
    const value1: number = constants.MAX_LENGTH;
    const value2: number = constants.MAX_STRING_LENGTH;
    const value3: number = kMaxLength;
    const value4: number = kStringMaxLength;
}

// Class Methods: Buffer.swap16(), Buffer.swa32(), Buffer.swap64()
{
    const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
    buf.swap16();
    buf.swap32();
    buf.swap64();
}

// Class Method: Buffer.from(data)
{
    // Array
    const buf1: Buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72] as ReadonlyArray<number>);
    // Buffer
    const buf2: Buffer = Buffer.from(buf1, 1, 2);
    // String
    const buf3: Buffer = Buffer.from('this is a tést');
    // ArrayBuffer
    const arrUint16: Uint16Array = new Uint16Array(2);
    arrUint16[0] = 5000;
    arrUint16[1] = 4000;
    const buf4: Buffer = Buffer.from(arrUint16.buffer);
    const arrUint8: Uint8Array = new Uint8Array(2);
    const buf5: Buffer = Buffer.from(arrUint8);
    const buf6: Buffer = Buffer.from(buf1);
    const sb: SharedArrayBuffer = {} as any;
    const buf7: Buffer = Buffer.from(sb);
    // $ExpectError
    Buffer.from({});
}

// Class Method: Buffer.from(arrayBuffer[, byteOffset[, length]])
{
    const arr: Uint16Array = new Uint16Array(2);
    arr[0] = 5000;
    arr[1] = 4000;

    let buf: Buffer;
    buf = Buffer.from(arr.buffer, 1);
    buf = Buffer.from(arr.buffer, 0, 1);

    // $ExpectError
    Buffer.from("this is a test", 1, 1);
    // Ideally passing a normal Buffer would be a type error too, but it's not
    //  since Buffer is assignable to ArrayBuffer currently
}

// Class Method: Buffer.from(str[, encoding])
{
    const buf2: Buffer = Buffer.from('7468697320697320612074c3a97374', 'hex');
    /* tslint:disable-next-line no-construct */
    Buffer.from(new String("DEADBEEF"), "hex");
    // $ExpectError
    Buffer.from(buf2, 'hex');
}

// Class Method: Buffer.from(object, [, byteOffset[, length]])  (Implicit coercion)
{
    const pseudoBuf = { valueOf() { return Buffer.from([1, 2, 3]); } };
    let buf: Buffer = Buffer.from(pseudoBuf);
    const pseudoString = { valueOf() { return "Hello"; }};
    buf = Buffer.from(pseudoString);
    buf = Buffer.from(pseudoString, "utf-8");
    // $ExpectError
    Buffer.from(pseudoString, 1, 2);
    const pseudoArrayBuf = { valueOf() { return new Uint16Array(2); } };
    buf = Buffer.from(pseudoArrayBuf, 1, 1);
}

// Class Method: Buffer.alloc(size[, fill[, encoding]])
{
    const buf1: Buffer = Buffer.alloc(5);
    const buf2: Buffer = Buffer.alloc(5, 'a');
    const buf3: Buffer = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
}
// Class Method: Buffer.allocUnsafe(size)
{
    const buf: Buffer = Buffer.allocUnsafe(5);
}
// Class Method: Buffer.allocUnsafeSlow(size)
{
    const buf: Buffer = Buffer.allocUnsafeSlow(10);
}

// Class Method byteLenght
{
    let len: number;
    len = Buffer.byteLength("foo");
    len = Buffer.byteLength("foo", "utf8");

    const b = Buffer.from("bar");
    len = Buffer.byteLength(b);
    len = Buffer.byteLength(b, "utf16le");

    const ab = new ArrayBuffer(15);
    len = Buffer.byteLength(ab);
    len = Buffer.byteLength(ab, "ascii");

    const dv = new DataView(ab);
    len = Buffer.byteLength(dv);
    len = Buffer.byteLength(dv, "utf16le");
}

// Class Method poolSize
{
    let s: number;
    s = Buffer.poolSize;
    Buffer.poolSize = 4096;
}

// Test that TS 1.6 works with the 'as Buffer' annotation
// on isBuffer.
let a: Buffer | number;
a = new Buffer(10);
if (Buffer.isBuffer(a)) {
    a.writeUInt8(3, 4);
}

// write* methods return offsets.
const b = new Buffer(16);
let result: number = b.writeUInt32LE(0, 0);
result = b.writeUInt16LE(0, 4);
result = b.writeUInt8(0, 6);
result = b.writeInt8(0, 7);
result = b.writeDoubleLE(0, 8);
result = b.write('asd');
result = b.write('asd', 'hex');
result = b.write('asd', 123, 'hex');
result = b.write('asd', 123, 123, 'hex');

// fill returns the input buffer.
b.fill('a').fill('b');

{
    const buffer = new Buffer('123');
    let index: number;
    index = buffer.indexOf("23");
    index = buffer.indexOf("23", 1);
    index = buffer.indexOf("23", 1, "utf8");
    index = buffer.indexOf(23);
    index = buffer.indexOf(buffer);
}

{
    const buffer = new Buffer('123');
    let index: number;
    index = buffer.lastIndexOf("23");
    index = buffer.lastIndexOf("23", 1);
    index = buffer.lastIndexOf("23", 1, "utf8");
    index = buffer.lastIndexOf(23);
    index = buffer.lastIndexOf(buffer);
}

{
    const buffer = new Buffer('123');
    const val: [number, number] = [1, 1];

    /* comment out for --target es5
    for (let entry of buffer.entries()) {
        val = entry;
    }
        */
}

{
    const buffer = new Buffer('123');
    let includes: boolean;
    includes = buffer.includes("23");
    includes = buffer.includes("23", 1);
    includes = buffer.includes("23", 1, "utf8");
    includes = buffer.includes(23);
    includes = buffer.includes(23, 1);
    includes = buffer.includes(23, 1, "utf8");
    includes = buffer.includes(buffer);
    includes = buffer.includes(buffer, 1);
    includes = buffer.includes(buffer, 1, "utf8");
}

{
    const buffer = new Buffer('123');
    const val = 1;

    /* comment out for --target es5
    for (let key of buffer.keys()) {
        val = key;
    }
        */
}

{
    const buffer = new Buffer('123');
    const val = 1;

    /* comment out for --target es5
    for (let value of buffer.values()) {
        val = value;
    }
        */
}

// Imported Buffer from buffer module works properly
{
    const b = new ImportedBuffer('123');
    b.writeUInt8(0, 6);
    const sb = new ImportedSlowBuffer(43);
    b.writeUInt8(0, 6);
}

// Buffer has Uint8Array's buffer field (an ArrayBuffer).
{
    const buffer = new Buffer('123');
    const octets = new Uint8Array(buffer.buffer);
}

// Inherited from Uint8Array but return buffer
{
    const b = Buffer.from('asd');
    let res: Buffer = b.reverse();
    res = b.subarray();
    res = b.subarray(1);
    res = b.subarray(1, 2);
}

// Buffer module, transcode function
{
    transcode(Buffer.from('€'), 'utf8', 'ascii'); // $ExpectType Buffer

    const source: TranscodeEncoding = 'utf8';
    const target: TranscodeEncoding = 'ascii';
    transcode(Buffer.from('€'), source, target); // $ExpectType Buffer
}

{
    const a = Buffer.alloc(1000);
    a.writeBigInt64BE(123n);
    a.writeBigInt64LE(123n);
    a.writeBigUInt64BE(123n);
    a.writeBigUInt64LE(123n);
    let b: bigint = a.readBigInt64BE(123);
    b = a.readBigInt64LE(123);
    b = a.readBigUInt64LE(123);
    b = a.readBigUInt64BE(123);
}

async () => {
    const blob = new Blob(['asd', Buffer.from('test'), new Blob(['dummy'])], {
        type: 'application/javascript',
        encoding: 'base64',
    });

    blob.size; // $ExpectType number
    blob.type; // $ExpectType string

    blob.arrayBuffer(); // $ExpectType Promise<ArrayBuffer>
    blob.text(); // $ExpectType Promise<string>
    blob.slice(); // $ExpectType Blob
    blob.slice(1); // $ExpectType Blob
    blob.slice(1, 2); // $ExpectType Blob
    blob.slice(1, 2, 'other'); // $ExpectType Blob
};
