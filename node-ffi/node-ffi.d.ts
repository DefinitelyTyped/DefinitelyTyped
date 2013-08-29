// Type definitions for node-ffi, ref, ref-array, ref-struct and ref-union
// Project: https://github.com/rbranson/node-ffi
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "ffi" {}

declare module "ref" {
    export interface Type {
        /** The size in bytes required to hold this datatype. */
        size: number;
        /** The current level of indirection of the buffer. */
        indirection: number;
        /** To invoke when ref.get() is invoked on a buffer of this type. */
        get(buffer: NodeBuffer, offset: number): any;
        /** To invoke when ref.set() is invoked on a buffer of this type. */
        set(buffer: NodeBuffer, offset: number, value): void;
        /** The name to use during debugging for this datatype. */
        name?: string;
        /** The alignment of this datatype when placed inside a struct. */
        alignment?: number;
    }

    /** A Buffer that references the C NULL pointer. */
    export var NULL: NodeBuffer;
    /** A pointer-sized Buffer instance pointing to NULL. */
    export var NULL_POINTER: NodeBuffer;
    /** Get the memory address of buffer. */
    export function address(buffer: NodeBuffer): number;
    /** Allocate the memory with the given value written to it. */
    export function alloc(type: Type, value?): NodeBuffer;
    /** Allocate the memory with the given value written to it. */
    export function alloc(type: string, value?): NodeBuffer;

    /**
     * Allocate the memory with the given string written to it with the given
     * encoding (defaults to utf8). The buffer is 1 byte longer than the
     * string itself, and is NULL terminated.
     */
    export function allocCString(string: string, encoding?: string): NodeBuffer;

    /** Coerce a type.*/
    export function coerceType(type: Type): Type;
    /** Coerce a type. String are looked up from the ref.types object. */
    export function coerceType(type: string): Type;
    
    /**
     * Get value after dereferencing buffer.
     * That is, first it checks the indirection count of buffer's type, and
     * if it's greater than 1 then it merely returns another Buffer, but with
     * one level less indirection.
     */
    export function deref(buffer: NodeBuffer): any;

    /** Create clone of the type, with decremented indirection level by 1. */
    export function derefType(type: Type): Type;
    /** Create clone of the type, with decremented indirection level by 1. */
    export function derefType(type: string): Type;
    /** Represents the native endianness of the processor ("LE" or "BE"). */
    export var endianness: string;
    /** Check the indirection level and return a dereferenced when necessary. */
    export function get(buffer: NodeBuffer, offset?: number, type?: Type): any;
    /** Check the indirection level and return a dereferenced when necessary. */
    export function get(buffer: NodeBuffer, offset?: number, type?: string): any;
    /** Get type of the buffer. Create a default type when none exists. */
    export function getType(buffer: NodeBuffer): Type;
    /** Check the NULL. */
    export function isNull(buffer: NodeBuffer): boolean;
    /** Read C string until the first NULL. */
    export function readCString(buffer: NodeBuffer, offset?: number): string;

    /**
     * Read a big-endian signed 64-bit int
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readInt64BE(buffer: NodeBuffer, offset?: number): any;

    /**
     * Read a little-endian signed 64-bit int
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readInt64LE(buffer: NodeBuffer, offset?: number): any;

    /** Read a JS Object that has previously been written. */
    export function readObject(buffer: NodeBuffer, offset?: number): Object;
    /** Read data from the pointer. */
    export function readPointer(buffer: NodeBuffer, offset?: number,
                                                   length?: number): NodeBuffer;
    /**
     * Read a big-endian unsigned 64-bit int
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readUInt64BE(buffer: NodeBuffer, offset?: number): any;

    /**
     * Read a little-endian unsigned 64-bit int
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readUInt64LE(buffer: NodeBuffer, offset?: number): any;

    /** Create pointer to buffer. */
    export function ref(buffer: NodeBuffer): NodeBuffer;
    /** Create clone of the type, with incremented indirection level by 1. */
    export function refType(type: Type): Type;
    /** Create clone of the type, with incremented indirection level by 1. */
    export function refType(type: string): Type;

    /**
     * Create buffer with the specified size, with the same address as source.
     * This function "attaches" source to the returned buffer to prevent it from
     * being garbage collected.
     */
    export function reinterpret(buffer: NodeBuffer, size: number,
                                                  offset?: number): NodeBuffer;
    /**
     * Scan past the boundary of the Buffer's length until it finds size number
     * of aligned NULL bytes.
     */
    export function reinterpretUntilZeros(buffer: NodeBuffer, size: number,
                                          offset?: number): NodeBuffer;
    
    /** Write pointer if the indirection is 1, otherwise write value. */
    export function set(buffer: NodeBuffer, offset: number, value, type?: Type): void;
    /** Write pointer if the indirection is 1, otherwise write value. */
    export function set(buffer: NodeBuffer, offset: number, value, type?: string): void;
    /** Write the string as a NULL terminated. Default encoding is utf8. */
    export function writeCString(buffer: NodeBuffer, offset: number,
                                 string: string, encoding?: string): void;
    /** Write a big-endian signed 64-bit int. */
    export function writeInt64BE(buffer: NodeBuffer, offset: number, input: number): void;
    /** Write a big-endian signed 64-bit int. */
    export function writeInt64BE(buffer: NodeBuffer, offset: number, input: string): void;
    /** Write a little-endian signed 64-bit int. */
    export function writeInt64LE(buffer: NodeBuffer, offset: number, input: number): void;
    /** Write a little-endian signed 64-bit int. */
    export function writeInt64LE(buffer: NodeBuffer, offset: number, input: string): void;
    
    /**
     * Write the JS Object. This function "attaches" object to buffer to prevent
     * it from being garbage collected.
     */
    export function writeObject(buffer: NodeBuffer, offset: number, object: Object): void;
    
    /**
     * Write the memory address of pointer to buffer at the specified offset. This
     * function "attaches" object to buffer to prevent it from being garbage collected.
     */
    export function writePointer(buffer: NodeBuffer, offset: number,
                                                    pointer: NodeBuffer): void;
    
    /** Write a little-endian unsigned 64-bit int. */
    export function writeUInt64BE(buffer: NodeBuffer, offset: number, input: number): void;
    /** Write a little-endian unsigned 64-bit int. */
    export function writeUInt64BE(buffer: NodeBuffer, offset: number, input: string): void;
    
    /**
     * Attach object to buffer such.
     * It prevents object from being garbage collected until buffer does.
     */
    export function _attach(buffer: NodeBuffer, object: Object);

    /** Same as ref.reinterpret, except that this version does not attach buffer. */
    export function _reinterpret(buffer: NodeBuffer, size: number,
                                                  offset?: number): NodeBuffer;
    /** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
    export function _reinterpretUntilZeros(buffer: NodeBuffer, size: number,
                                          offset?: number): NodeBuffer;
    /** Same as ref.writePointer, except that this version does not attach pointer. */
    export function _writePointer(buffer: NodeBuffer, offset: number,
                                                    pointer: NodeBuffer): void;
    /** Same as ref.writeObject, except that this version does not attach object. */
    export function _writeObject(buffer: NodeBuffer, offset: number, object: Object): void;

    export var types: {
        void: Type;                int64: Type;              ushort: Type;
        int: Type;                 uint64: Type;             float: Type;
        uint: Type;                long: Type;               double: Type;
        int8: Type;                ulong: Type;              Object: Type;
        uint8: Type;               longlong: Type;           CString: Type;
        int16: Type;               ulonglong: Type;          bool: Type;
        uint16: Type;              char: Type;               byte: Type;
        int32: Type;               uchar: Type;              size_t: Type;
        uint32: Type;              short: Type;
    };
}

interface NodeBuffer {
    /** Shorthand for ref.address. */
    address(): number;
    /** Shorthand for ref.deref. */
    deref(): any;
    /** Shorthand for ref.isNull. */
    isNull(): boolean;
    /** Shorthand for ref.readCString. */
    readCString(offset?: number): string;
    /** Shorthand for ref.readInt64BE. */
    readInt64BE(offset?: number): string;
    /** Shorthand for ref.readInt64LE. */
    readInt64LE(offset?: number): string;
    /** Shorthand for ref.readObject. */
    readObject(offset?: number): string;
    /** Shorthand for ref.readPointer. */
    readPointer(offset?: number): string;
    /** Shorthand for ref.readUInt64BE. */
    readUInt64BE(offset?: number): string;
    /** Shorthand for ref.readUInt64LE. */
    readUInt64LE(offset?: number): string;
    /** Shorthand for ref.ref. */
    ref(): NodeBuffer;
    /** Shorthand for ref.reinterpret. */
    reinterpret(size: number, offset?: number): NodeBuffer;
    /** Shorthand for ref.reinterpretUntilZeros. */
    reinterpretUntilZeros(size: number, offset?: number): NodeBuffer;
    /** Shorthand for ref.writeCString. */
    writeCString(offset: number, string: string, encoding?: string): void;
    /** Shorthand for ref.writeInt64BE. */
    writeInt64BE(offset: number, input: number): any;
    /** Shorthand for ref.writeInt64BE. */
    writeInt64BE(offset: number, input: string): any;
    /** Shorthand for ref.writeInt64LE. */
    writeInt64LE(offset: number, input: number): any;
    /** Shorthand for ref.writeInt64LE. */
    writeInt64LE(offset: number, input: string): any;
    /** Shorthand for ref.writeObject. */
    writeObject(offset: number, object: Object): void;
    /** Shorthand for ref.writePointer. */
    writePointer(offset: number, pointer: NodeBuffer): void;
    /** Shorthand for ref.writeUInt64BE. */
    writeUInt64BE(offset: number, input: number): any;
    /** Shorthand for ref.writeUInt64BE. */
    writeUInt64BE(offset: number, input: string): any;
    /** Shorthand for ref.writeUInt64LE. */
    writeUInt64LE(offset: number, input: number): any;
    /** Shorthand for ref.writeUInt64LE. */
    writeUInt64LE(offset: number, input: string): any;

    /**
     * Generate string for inspecting.
     * String includes the hex-encoded memory address of the Buffer instance.
     * @override
     */
    inspect(): string;
}
