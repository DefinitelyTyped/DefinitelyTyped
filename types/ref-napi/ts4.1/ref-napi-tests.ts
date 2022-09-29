import ref = require("ref-napi");

declare const typeLike: string | ref.Type;
declare const buffer: Buffer;
declare const string: string;
declare const number: number;
declare const any: any;
declare const int64Like: string | number;
declare const jsObject: Object;

// $ExpectType number
ref.address(buffer);

// $ExpectType string
ref.hexAddress(buffer);

// $ExpectType Buffer
ref.alloc(typeLike, 0);

// $ExpectType Buffer
ref.allocCString(string);
// $ExpectType Buffer
ref.allocCString(string, undefined);
// $ExpectType Buffer
ref.allocCString(string, string);

// $ExpectType Type
ref.coerceType(typeLike);

// $ExpectType any
ref.deref(buffer);

// $ExpectType Type
ref.derefType(typeLike);

// $ExpectType "LE" | "BE"
ref.endianness;

// $ExpectType any
ref.get(buffer);
// $ExpectType any
ref.get(buffer, undefined);
// $ExpectType any
ref.get(buffer, undefined, undefined);
// $ExpectType any
ref.get(buffer, number);
// $ExpectType any
ref.get(buffer, number, undefined);
// $ExpectType any
ref.get(buffer, number, typeLike);

// $ExpectType Type
ref.getType(buffer);

// $ExpectType boolean
ref.isNull(buffer);

// $ExpectType string
ref.readCString(buffer);
// $ExpectType string
ref.readCString(buffer, undefined);
// $ExpectType string
ref.readCString(buffer, number);

// $ExpectType string | number
ref.readInt64BE(buffer);
// $ExpectType string | number
ref.readInt64BE(buffer, undefined);
// $ExpectType string | number
ref.readInt64BE(buffer, number);

// $ExpectType string | number
ref.readInt64LE(buffer);
// $ExpectType string | number
ref.readInt64LE(buffer, undefined);
// $ExpectType string | number
ref.readInt64LE(buffer, number);

// $ExpectType Object
ref.readObject(buffer);
// $ExpectType Object
ref.readObject(buffer, undefined);
// $ExpectType Object
ref.readObject(buffer, number);

// $ExpectType Buffer
ref.ref(buffer);

// $ExpectType Type
ref.refType(typeLike);

// $ExpectType Buffer
ref.reinterpret(buffer, number);
// $ExpectType Buffer
ref.reinterpret(buffer, number, undefined);
// $ExpectType Buffer
ref.reinterpret(buffer, number, number);

// $ExpectType Buffer
ref.reinterpretUntilZeros(buffer, number);
// $ExpectType Buffer
ref.reinterpretUntilZeros(buffer, number, undefined);
// $ExpectType Buffer
ref.reinterpretUntilZeros(buffer, number, number);

// $ExpectType void
ref.set(buffer, number, any);
// $ExpectType void
ref.set(buffer, number, any, undefined);
// $ExpectType void
ref.set(buffer, number, any, typeLike);

// $ExpectType void
ref.writeCString(buffer, number, string);
// $ExpectType void
ref.writeCString(buffer, number, string, undefined);
// $ExpectType void
ref.writeCString(buffer, number, string, string);

// $ExpectType void
ref.writeInt64BE(buffer, number, int64Like);

// $ExpectType void
ref.writeInt64LE(buffer, number, int64Like);

// $ExpectType void
ref.writeObject(buffer, number, jsObject);

// $ExpectType void
ref.writePointer(buffer, number, buffer);

// $ExpectType void
ref.writeUInt64BE(buffer, number, int64Like);

// $ExpectType void
ref.writeUInt64LE(buffer, number, int64Like);

// $ExpectType void
ref._attach(buffer, jsObject);

// $ExpectType Buffer
ref._reinterpret(buffer, number);
// $ExpectType Buffer
ref._reinterpret(buffer, number, undefined);
// $ExpectType Buffer
ref._reinterpret(buffer, number, number);

// $ExpectType Buffer
ref._reinterpretUntilZeros(buffer, number);
// $ExpectType Buffer
ref._reinterpretUntilZeros(buffer, number, undefined);
// $ExpectType Buffer
ref._reinterpretUntilZeros(buffer, number, number);

// $ExpectType void
ref._writePointer(buffer, number, buffer);

// $ExpectType void
ref._writeObject(buffer, number, jsObject);

// $ExpectType Type
ref.types.void;
// @ts-expect-error
ref.types.pointer; // `pointer` doesn't exist on `types`, though it exists on `sizeof`/`alignof`
// $ExpectType Type
ref.types.int64;
// $ExpectType Type
ref.types.ushort;
// $ExpectType Type
ref.types.int;
// $ExpectType Type
ref.types.uint64;
// $ExpectType Type
ref.types.float;
// $ExpectType Type
ref.types.uint;
// $ExpectType Type
ref.types.long;
// $ExpectType Type
ref.types.double;
// $ExpectType Type
ref.types.int8;
// $ExpectType Type
ref.types.ulong;
// $ExpectType Type
ref.types.Object;
// $ExpectType Type
ref.types.uint8;
// $ExpectType Type
ref.types.longlong;
// $ExpectType Type
ref.types.CString;
// $ExpectType Type
ref.types.int16;
// $ExpectType Type
ref.types.ulonglong;
// $ExpectType Type
ref.types.bool;
// $ExpectType Type
ref.types.uint16;
// $ExpectType Type
ref.types.char;
// $ExpectType Type
ref.types.byte;
// $ExpectType Type
ref.types.int32;
// $ExpectType Type
ref.types.uchar;
// $ExpectType Type
ref.types.size_t;
// $ExpectType Type
ref.types.uint32;
// $ExpectType Type
ref.types.short;

// @ts-expect-error
ref.alignof.void; // `void` doesn't have an alignment
// $ExpectType number
ref.alignof.pointer;
// $ExpectType number
ref.alignof.int64;
// $ExpectType number
ref.alignof.ushort;
// $ExpectType number
ref.alignof.int;
// $ExpectType number
ref.alignof.uint64;
// $ExpectType number
ref.alignof.float;
// $ExpectType number
ref.alignof.uint;
// $ExpectType number
ref.alignof.long;
// $ExpectType number
ref.alignof.double;
// $ExpectType number
ref.alignof.int8;
// $ExpectType number
ref.alignof.ulong;
// $ExpectType number
ref.alignof.Object;
// $ExpectType number
ref.alignof.uint8;
// $ExpectType number
ref.alignof.longlong;
// @ts-expect-error
ref.alignof.CString; // `CString` doesn't have an alignment
// $ExpectType number
ref.alignof.int16;
// $ExpectType number
ref.alignof.ulonglong;
// $ExpectType number
ref.alignof.bool;
// $ExpectType number
ref.alignof.uint16;
// $ExpectType number
ref.alignof.char;
// $ExpectType number
ref.alignof.byte;
// $ExpectType number
ref.alignof.int32;
// $ExpectType number
ref.alignof.uchar;
// $ExpectType number
ref.alignof.size_t;
// $ExpectType number
ref.alignof.uint32;
// $ExpectType number
ref.alignof.short;

// @ts-expect-error
ref.sizeof.void; // `void` doesn't have an size
// $ExpectType number
ref.sizeof.pointer;
// $ExpectType number
ref.sizeof.int64;
// $ExpectType number
ref.sizeof.ushort;
// $ExpectType number
ref.sizeof.int;
// $ExpectType number
ref.sizeof.uint64;
// $ExpectType number
ref.sizeof.float;
// $ExpectType number
ref.sizeof.uint;
// $ExpectType number
ref.sizeof.long;
// $ExpectType number
ref.sizeof.double;
// $ExpectType number
ref.sizeof.int8;
// $ExpectType number
ref.sizeof.ulong;
// $ExpectType number
ref.sizeof.Object;
// $ExpectType number
ref.sizeof.uint8;
// $ExpectType number
ref.sizeof.longlong;
// @ts-expect-error
ref.sizeof.CString; // `CString` doesn't have an size
// $ExpectType number
ref.sizeof.int16;
// $ExpectType number
ref.sizeof.ulonglong;
// $ExpectType number
ref.sizeof.bool;
// $ExpectType number
ref.sizeof.uint16;
// $ExpectType number
ref.sizeof.char;
// $ExpectType number
ref.sizeof.byte;
// $ExpectType number
ref.sizeof.int32;
// $ExpectType number
ref.sizeof.uchar;
// $ExpectType number
ref.sizeof.size_t;
// $ExpectType number
ref.sizeof.uint32;
// $ExpectType number
ref.sizeof.short;

// $ExpectType number
buffer.address();

// $ExpectType string
buffer.hexAddress();

// $ExpectType boolean
buffer.isNull();

// $ExpectType Buffer
buffer.ref();

// $ExpectType any
buffer.deref();

// $ExpectType Object
buffer.readObject();
// $ExpectType Object
buffer.readObject(undefined);
// $ExpectType Object
buffer.readObject(number);

// $ExpectType void
buffer.writeObject(number, jsObject);

// $ExpectType Buffer
buffer.readPointer();
// $ExpectType Buffer
buffer.readPointer(undefined);
// $ExpectType Buffer
buffer.readPointer(undefined, undefined);
// $ExpectType Buffer
buffer.readPointer(number);
// $ExpectType Buffer
buffer.readPointer(number, undefined);
// $ExpectType Buffer
buffer.readPointer(number, number);

// $ExpectType void
buffer.writePointer(number, buffer);

// $ExpectType string
buffer.readCString();
// $ExpectType string
buffer.readCString(undefined);
// $ExpectType string
buffer.readCString(number);

// $ExpectType void
buffer.writeCString(number, string);
// $ExpectType void
buffer.writeCString(number, string, undefined);
// $ExpectType void
buffer.writeCString(number, string, string);

// $ExpectType string | number
buffer.readInt64BE();
// $ExpectType string | number
buffer.readInt64BE(undefined);
// $ExpectType string | number
buffer.readInt64BE(number);

// $ExpectType void
buffer.writeInt64BE(number, int64Like);

// $ExpectType string | number
buffer.readUInt64BE();
// $ExpectType string | number
buffer.readUInt64BE(undefined);
// $ExpectType string | number
buffer.readUInt64BE(number);

// $ExpectType void
buffer.writeUInt64BE(number, int64Like);

// $ExpectType string | number
buffer.readInt64LE();
// $ExpectType string | number
buffer.readInt64LE(undefined);
// $ExpectType string | number
buffer.readInt64LE(number);

// $ExpectType void
buffer.writeInt64LE(number, int64Like);

// $ExpectType string | number
buffer.readUInt64LE();
// $ExpectType string | number
buffer.readUInt64LE(undefined);
// $ExpectType string | number
buffer.readUInt64LE(number);

// $ExpectType void
buffer.writeUInt64LE(number, int64Like);

// $ExpectType Buffer
buffer.reinterpret(number);
// $ExpectType Buffer
buffer.reinterpret(number, undefined);
// $ExpectType Buffer
buffer.reinterpret(number, number);

// $ExpectType Buffer
buffer.reinterpretUntilZeros(number);
// $ExpectType Buffer
buffer.reinterpretUntilZeros(number, undefined);
// $ExpectType Buffer
buffer.reinterpretUntilZeros(number, number);

// $ExpectType Type | undefined
buffer.type;
