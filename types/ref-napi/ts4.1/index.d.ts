/// <reference types="node" />

export interface Type {
    /** The size in bytes required to hold this datatype. */
    size: number;
    /** The current level of indirection of the buffer. */
    indirection: number;
    /** To invoke when `ref.get` is invoked on a buffer of this type. */
    get(buffer: Buffer, offset: number): any;
    /** To invoke when `ref.set` is invoked on a buffer of this type. */
    set(buffer: Buffer, offset: number, value: any): void;
    /** The name to use during debugging for this datatype. */
    name?: string;
    /** The alignment of this datatype when placed inside a struct. */
    alignment?: number;
}

/** A Buffer that references the C NULL pointer. */
export declare var NULL: Buffer;
/** A pointer-sized buffer pointing to NULL. */
export declare var NULL_POINTER: Buffer;
/** Get the memory address of buffer. */
export declare function address(buffer: Buffer): number;
/** Get the memory address of buffer. */
export declare function hexAddress(buffer: Buffer): string;
/** Allocate the memory with the given value written to it. */
export declare function alloc(type: string | Type, value?: any): Buffer;

/**
 * Allocate the memory with the given string written to it with the given
 * encoding (defaults to utf8). The buffer is 1 byte longer than the
 * string itself, and is NULL terminated.
 */
export declare function allocCString(string: string, encoding?: string): Buffer;

/** Coerce a type. String are looked up from the ref.types object. */
export declare function coerceType(type: string | Type): Type;

/**
 * Get value after dereferencing buffer.
 * That is, first it checks the indirection count of buffer's type, and
 * if it's greater than 1 then it merely returns another Buffer, but with
 * one level less indirection.
 */
export declare function deref(buffer: Buffer): any;

/** Create clone of the type, with decremented indirection level by 1. */
export declare function derefType(type: string | Type): Type;
/** Represents the native endianness of the processor ("LE" or "BE"). */
export declare var endianness: "LE" | "BE";
/** Check the indirection level and return a dereferenced when necessary. */
export declare function get(buffer: Buffer, offset?: number, type?: string | Type): any;
/** Get type of the buffer. Create a default type when none exists. */
export declare function getType(buffer: Buffer): Type;
/** Check the NULL. */
export declare function isNull(buffer: Buffer): boolean;
/** Read C string until the first NULL. */
export declare function readCString(buffer: Buffer, offset?: number): string;

/**
 * Read a big-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64BE(buffer: Buffer, offset?: number): number | string;

/**
 * Read a little-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64LE(buffer: Buffer, offset?: number): number | string;

/** Read a JS Object that has previously been written. */
export declare function readObject(buffer: Buffer, offset?: number): Object;
/** Read data from the pointer. */
export declare function readPointer(buffer: Buffer, offset?: number,
    length?: number): Buffer;
/**
 * Read a big-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64BE(buffer: Buffer, offset?: number): string | number;

/**
 * Read a little-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64LE(buffer: Buffer, offset?: number): string | number;

/** Create pointer to buffer. */
export declare function ref(buffer: Buffer): Buffer;
/** Create clone of the type, with incremented indirection level by 1. */
export declare function refType(type: string | Type): Type;

/**
 * Create buffer with the specified size, with the same address as source.
 * This function "attaches" source to the returned buffer to prevent it from
 * being garbage collected.
 */
export declare function reinterpret(buffer: Buffer, size: number,
    offset?: number): Buffer;
/**
 * Scan past the boundary of the buffer's length until it finds size number
 * of aligned NULL bytes.
 */
export declare function reinterpretUntilZeros(buffer: Buffer, size: number,
    offset?: number): Buffer;

/** Write pointer if the indirection is 1, otherwise write value. */
export declare function set(buffer: Buffer, offset: number, value: any, type?: string | Type): void;
/** Write the string as a NULL terminated. Default encoding is utf8. */
export declare function writeCString(buffer: Buffer, offset: number,
    string: string, encoding?: string): void;
/** Write a big-endian signed 64-bit int. */
export declare function writeInt64BE(buffer: Buffer, offset: number, input: string | number): void;
/** Write a little-endian signed 64-bit int. */
export declare function writeInt64LE(buffer: Buffer, offset: number, input: string | number): void;

/**
 * Write the JS Object. This function "attaches" object to buffer to prevent
 * it from being garbage collected.
 */
export declare function writeObject(buffer: Buffer, offset: number, object: Object): void;

/**
 * Write the memory address of pointer to buffer at the specified offset. This
 * function "attaches" object to buffer to prevent it from being garbage collected.
 */
export declare function writePointer(buffer: Buffer, offset: number,
    pointer: Buffer): void;

/** Write a big-endian unsigned 64-bit int. */
export declare function writeUInt64BE(buffer: Buffer, offset: number, input: string | number): void;
/** Write a little-endian unsigned 64-bit int. */
export declare function writeUInt64LE(buffer: Buffer, offset: number, input: string | number): void;

/**
 * Attach object to buffer such.
 * It prevents object from being garbage collected until buffer does.
 */
export declare function _attach(buffer: Buffer, object: Object): void;

/** Same as ref.reinterpret, except that this version does not attach buffer. */
export declare function _reinterpret(buffer: Buffer, size: number,
    offset?: number): Buffer;
/** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
export declare function _reinterpretUntilZeros(buffer: Buffer, size: number,
    offset?: number): Buffer;
/** Same as ref.writePointer, except that this version does not attach pointer. */
export declare function _writePointer(buffer: Buffer, offset: number,
    pointer: Buffer): void;
/** Same as ref.writeObject, except that this version does not attach object. */
export declare function _writeObject(buffer: Buffer, offset: number, object: Object): void;

/** Default types. */
export declare var types: {
    void: Type; int64: Type; ushort: Type;
    int: Type; uint64: Type; float: Type;
    uint: Type; long: Type; double: Type;
    int8: Type; ulong: Type; Object: Type;
    uint8: Type; longlong: Type; CString: Type;
    int16: Type; ulonglong: Type; bool: Type;
    uint16: Type; char: Type; byte: Type;
    int32: Type; uchar: Type; size_t: Type;
    uint32: Type; short: Type;
};

export declare var alignof: {
    pointer: number; int64: number; ushort: number;
    int: number; uint64: number; float: number;
    uint: number; long: number; double: number;
    int8: number; ulong: number; Object: number;
    uint8: number; longlong: number;
    int16: number; ulonglong: number; bool: number;
    uint16: number; char: number; byte: number;
    int32: number; uchar: number; size_t: number;
    uint32: number; short: number;
};
export declare var sizeof: {
    pointer: number; int64: number; ushort: number;
    int: number; uint64: number; float: number;
    uint: number; long: number; double: number;
    int8: number; ulong: number; Object: number;
    uint8: number; longlong: number;
    int16: number; ulonglong: number; bool: number;
    uint16: number; char: number; byte: number;
    int32: number; uchar: number; size_t: number;
    uint32: number; short: number;
};

declare global {
  interface Buffer {
    address(): number;
    hexAddress(): string;
    isNull(): boolean;
    ref(): Buffer;
    deref(): any;
    readObject(offset?: number): Object;
    writeObject(offset: number, object: Object): void;
    readPointer(offset?: number, length?: number): Buffer;
    writePointer(offset: number, pointer: Buffer): void;
    readCString(offset?: number): string;
    writeCString(offset: number, string: string, encoding?: string): void;
    readInt64BE(offset?: number): string | number;
    writeInt64BE(offset: number, input: string | number): void;
    readUInt64BE(offset?: number): string | number;
    writeUInt64BE(offset: number, input: string | number): void;
    readInt64LE(offset?: number): string | number;
    writeInt64LE(offset: number, input: string | number): void;
    readUInt64LE(offset?: number): string | number;
    writeUInt64LE(offset: number, input: string | number): void;
    reinterpret(size: number, offset?: number): Buffer;
    reinterpretUntilZeros(size: number, offset?: number): Buffer;
    type?: Type;
  }
}
