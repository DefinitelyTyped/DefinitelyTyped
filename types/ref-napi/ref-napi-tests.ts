import ref = require("ref-napi");

interface Foo {
    x: number;
}

declare const typeLike: ref.NamedType | ref.Type;
declare const numberPointer: ref.Pointer<number>;
declare const numberPointerType: ref.Type<ref.Pointer<number>>;
declare const fooPointer: ref.Pointer<Foo>;
declare const buffer: Buffer;
declare const string: string;
declare const encoding: BufferEncoding;
declare const number: number;
declare const any: any;
declare const int64Like: string | number;
declare const jsObject: Object;

// $ExpectType number
ref.address(buffer);

// $ExpectType string
ref.hexAddress(buffer);

// $ExpectType Value<any>
ref.alloc(typeLike, 0);
// $ExpectType Value<number>
ref.alloc("int");
// $ExpectType Value<number>
ref.alloc("int", 4);

// $ExpectType Value<string>
ref.allocCString(string);
// $ExpectType Value<string>
ref.allocCString(string, undefined);
// $ExpectType Value<string>
ref.allocCString(string, encoding);

// $ExpectType Value<string | null>
ref.allocCString(null);
// $ExpectType Value<string | null>
ref.allocCString(null, undefined);
// $ExpectType Value<string | null>
ref.allocCString(null, encoding);

// $ExpectType Type<any>
ref.coerceType(typeLike);
// $ExpectType Type<number>
ref.coerceType(ref.types.int);
// $ExpectType Type<number>
ref.coerceType("int");

// $ExpectType any
ref.deref(buffer);
// $ExpectType number
ref.deref(numberPointer);

// $ExpectType Type<unknown>
ref.derefType(typeLike);
// $ExpectType Type<number>
ref.derefType(numberPointerType);

// $ExpectType "LE" | "BE" || "BE" | "LE"
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
// $ExpectType number
ref.get(numberPointer);
// $ExpectType number
ref.get(numberPointer, undefined);
// $ExpectType number
ref.get(numberPointer, 0);
// $ExpectType any
ref.get(numberPointer, number);
// $ExpectType number
ref.get(buffer, number, ref.types.int);

// $ExpectType Type<any>
ref.getType(buffer);
// $ExpectType Type<number>
ref.getType(numberPointer);

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
// $ExpectType Foo
ref.readObject(fooPointer);
// $ExpectType Foo
ref.readObject(fooPointer, undefined);
// $ExpectType Foo
ref.readObject(fooPointer, 0);
// $ExpectType Object
ref.readObject(fooPointer, number);

// $ExpectType Buffer
ref.ref(buffer);
// $ExpectType Pointer<Pointer<number>>
ref.ref(numberPointer);

// $ExpectType Type<Pointer<any>>
ref.refType(typeLike);
// $ExpectType Type<Pointer<number>>
ref.refType(ref.types.int);

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
ref.writeCString(buffer, number, string, encoding);

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

// $ExpectType Type<void>
ref.types.void;
// @ts-expect-error
ref.types.pointer; // `pointer` doesn't exist on `types`, though it exists on `sizeof`/`alignof`
// $ExpectType Type<string | number>
ref.types.int64;
// $ExpectType Type<number>
ref.types.ushort;
// $ExpectType Type<number>
ref.types.int;
// $ExpectType Type<string | number>
ref.types.uint64;
// $ExpectType Type<number>
ref.types.float;
// $ExpectType Type<number>
ref.types.uint;
// $ExpectType Type<string | number>
ref.types.long;
// $ExpectType Type<number>
ref.types.double;
// $ExpectType Type<number>
ref.types.int8;
// $ExpectType Type<string | number>
ref.types.ulong;
// $ExpectType Type<unknown>
ref.types.Object;
// $ExpectType Type<number>
ref.types.uint8;
// $ExpectType Type<string | number>
ref.types.longlong;
// $ExpectType Type<string | null>
ref.types.CString;
// $ExpectType Type<number>
ref.types.int16;
// $ExpectType Type<string | number>
ref.types.ulonglong;
// $ExpectType Type<boolean>
ref.types.bool;
// $ExpectType Type<number>
ref.types.uint16;
// $ExpectType Type<number>
ref.types.char;
// $ExpectType Type<number>
ref.types.byte;
// $ExpectType Type<number>
ref.types.int32;
// $ExpectType Type<number>
ref.types.uchar;
// $ExpectType Type<string | number>
ref.types.size_t;
// $ExpectType Type<number>
ref.types.uint32;
// $ExpectType Type<number>
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
buffer.writeObject(jsObject, number);

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
buffer.writePointer(buffer, number);

// $ExpectType string
buffer.readCString();
// $ExpectType string
buffer.readCString(undefined);
// $ExpectType string
buffer.readCString(number);

// $ExpectType void
buffer.writeCString(string, number);
// $ExpectType void
buffer.writeCString(string, number, undefined);
// $ExpectType void
buffer.writeCString(string, number, string);

// $ExpectType string | number
buffer.readInt64BE();
// $ExpectType string | number
buffer.readInt64BE(undefined);
// $ExpectType string | number
buffer.readInt64BE(number);

// $ExpectType void
buffer.writeInt64BE(int64Like, number);

// $ExpectType string | number
buffer.readUInt64BE();
// $ExpectType string | number
buffer.readUInt64BE(undefined);
// $ExpectType string | number
buffer.readUInt64BE(number);

// $ExpectType void
buffer.writeUInt64BE(int64Like, number);

// $ExpectType string | number
buffer.readInt64LE();
// $ExpectType string | number
buffer.readInt64LE(undefined);
// $ExpectType string | number
buffer.readInt64LE(number);

// $ExpectType void
buffer.writeInt64LE(int64Like, number);

// $ExpectType string | number
buffer.readUInt64LE();
// $ExpectType string | number
buffer.readUInt64LE(undefined);
// $ExpectType string | number
buffer.readUInt64LE(number);

// $ExpectType void
buffer.writeUInt64LE(int64Like, number);

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

// $ExpectType Type<any> | undefined
buffer.type;

// Override types test:
declare module "ref-napi" {
    interface UnderlyingTypeOverrideRegistry {
        "foo": number;
    }
}

// $ExpectType Type<number>
ref.coerceType("foo");
