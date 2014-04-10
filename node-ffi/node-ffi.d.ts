// Type definitions for node-ffi, ref, ref-array, ref-struct and ref-union
// Project: https://github.com/rbranson/node-ffi
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "ffi" {
    import ref = require('ref');
    import StructType = require('ref-struct');

    /** Provides a friendly API on-top of `DynamicLibrary` and `ForeignFunction`. */
    export var Library: {
        /** The extension to use on libraries. */
        EXT: string;

        /**
         * @param libFile name of library
         * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
         * @param lib hash that will be extended
         */
        new (libFile: string, funcs?: {[key: string]: any[]}, lib?: Object): any;

        /**
         * @param libFile name of library
         * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
         * @param lib hash that will be extended
         */
        (libFile: string, funcs?: {[key: string]: any[]}, lib?: Object): any;
    };

    /** Get value of errno. */
    export function errno(): number;

    export interface Function extends ref.Type {
        /** The type of return value. */
        retType: ref.Type;
        /** The type of arguments. */
        argTypes: ref.Type[];
        /** Is set for node-ffi functions. */
        ffi_type: Buffer;
        abi: number;

        /** Get a `Callback` pointer of this function type. */
        toPointer(fn: (...args: any[]) => any): Buffer;
        /** Get a `ForeignFunction` of this function type. */
        toFunction(buf: Buffer): ForeignFunction;
    }

    /** Creates and returns a type for a C function pointer. */
    export var Function: {
        new (retType: ref.Type, argTypes: any[], abi?: number): Function;
        new (retType: string, argTypes: any[], abi?: number): Function;
        (retType: ref.Type, argTypes: any[], abi?: number): Function;
        (retType: string, argTypes: any[], abi?: number): Function;
    };

    export interface ForeignFunction {
        (...args: any[]): any;
        async(...args: any[]): void;
    }

    /**
     * Represents a foreign function in another library. Manages all of the aspects
     * of function execution, including marshalling the data parameters for the
     * function into native types and also unmarshalling the return from function
     * execution.
     */
    export var ForeignFunction: {
        new (ptr: Buffer, retType: ref.Type, argTypes: any[], abi?: number): ForeignFunction;
        new (ptr: Buffer, retType: string, argTypes: any[], abi?: number): ForeignFunction;
        (ptr: Buffer, retType: ref.Type, argTypes: any[], abi?: number): ForeignFunction;
        (ptr: Buffer, retType: string, argTypes: any[], abi?: number): ForeignFunction;
    }

    export interface VariadicForeignFunction {
        /**
         * What gets returned is another function that needs to be invoked with the rest
         * of the variadic types that are being invoked from the function.
         */
        (...args: any[]): ForeignFunction;

        /**
         * Return type as a property of the function generator to
         * allow for monkey patching the return value in the very rare case where the
         * return type is variadic as well
         */
        returnType: any;
    }

    /**
     * For when you want to call to a C function with variable amount of arguments.
     * i.e. `printf`.
     *
     * This function takes care of caching and reusing `ForeignFunction` instances that
     * contain the same ffi_type argument signature.
     */
    export var VariadicForeignFunction: {
        new (ptr: Buffer, ret: ref.Type, fixedArgs: any[], abi?: number): VariadicForeignFunction;
        new (ptr: Buffer, ret: string, fixedArgs: any[], abi?: number): VariadicForeignFunction;
        (ptr: Buffer, ret: ref.Type, fixedArgs: any[], abi?: number): VariadicForeignFunction;
        (ptr: Buffer, ret: string, fixedArgs: any[], abi?: number): VariadicForeignFunction;
    };

    export interface DynamicLibrary {
        /** Close library, returns the result of the `dlclose` system function. */
        close(): number;
        /** Get a symbol from this library. */
        get(symbol: string): Buffer;
        /** Get the result of the `dlerror` system function. */
        error(): string;
    }

    /**
     * This class loads and fetches function pointers for dynamic libraries
     * (.so, .dylib, etc). After the libray's function pointer is acquired, then you
     * call `get(symbol)` to retreive a pointer to an exported symbol. You need to
     * call `get___` on the pointer to dereference it into its actual value, or
     * turn the pointer into a callable function with `ForeignFunction`.
     */
    export var DynamicLibrary: {
        FLAGS: {
            RTLD_LAZY: number;
            RTLD_NOW: number;
            RTLD_LOCAL: number;
            RTLD_GLOBAL: number;
            RTLD_NOLOAD: number;
            RTLD_NODELETE: number;
            RTLD_NEXT: Buffer;
            RTLD_DEFAUL: Buffer;
        }

        new (path?: string, mode?: number): DynamicLibrary;
        (path?: string, mode?: number): DynamicLibrary;
    };

    /**
     * Turns a JavaScript function into a C function pointer.
     * The function pointer may be used in other C functions that
     * accept C callback functions.
     */
    export var Callback: {
        new (retType: any, argTypes: any[], abi: number, fn: any): Buffer;
        new (retType: any, argTypes: any[], fn: any): Buffer;
        (retType: any, argTypes: any[], abi: number, fn: any): Buffer;
        (retType: any, argTypes: any[], fn: any): Buffer;
    }

    export var ffiType: {
        /** Get a `ffi_type *` Buffer appropriate for the given type. */
        (type: ref.Type): Buffer
        /** Get a `ffi_type *` Buffer appropriate for the given type. */
        (type: string): Buffer
        FFI_TYPE: StructType;
    }

    export var CIF: (retType: any, types: any[], abi?: any) => Buffer
    export var CIF_var: (retType: any, types: any[], numFixedArgs: number, abi?: any) => Buffer;
    export var HAS_OBJC: boolean;
    export var FFI_TYPES: {[key: string]: Buffer};
    export var FFI_OK: number;
    export var FFI_BAD_TYPEDEF: number;
    export var FFI_BAD_ABI: number;
    export var FFI_DEFAULT_ABI: number;
    export var FFI_FIRST_ABI: number;
    export var FFI_LAST_ABI: number;
    export var FFI_SYSV: number;
    export var FFI_UNIX64: number;
    export var RTLD_LAZY: number;
    export var RTLD_NOW: number;
    export var RTLD_LOCAL: number;
    export var RTLD_GLOBAL: number;
    export var RTLD_NOLOAD: number;
    export var RTLD_NODELETE: number;
    export var RTLD_NEXT: Buffer;
    export var RTLD_DEFAULT: Buffer;
    export var LIB_EXT: string;
    export var FFI_TYPE: StructType;

    /** Default types. */
    export var types: {
        void: ref.Type;                 int64: ref.Type;                 ushort: ref.Type;
        int: ref.Type;                  uint64: ref.Type;                float: ref.Type;
        uint: ref.Type;                 long: ref.Type;                  double: ref.Type;
        int8: ref.Type;                 ulong: ref.Type;                 Object: ref.Type;
        uint8: ref.Type;                longlong: ref.Type;              CString: ref.Type;
        int16: ref.Type;                ulonglong: ref.Type;             bool: ref.Type;
        uint16: ref.Type;               char: ref.Type;                  byte: ref.Type;
        int32: ref.Type;                uchar: ref.Type;                 size_t: ref.Type;
        uint32: ref.Type;               short: ref.Type;
    };
}

declare module "ref" {
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
    export var NULL: Buffer;
    /** A pointer-sized buffer pointing to NULL. */
    export var NULL_POINTER: Buffer;
    /** Get the memory address of buffer. */
    export function address(buffer: Buffer): number;
    /** Allocate the memory with the given value written to it. */
    export function alloc(type: Type, value?: any): Buffer;
    /** Allocate the memory with the given value written to it. */
    export function alloc(type: string, value?: any): Buffer;

    /**
     * Allocate the memory with the given string written to it with the given
     * encoding (defaults to utf8). The buffer is 1 byte longer than the
     * string itself, and is NULL terminated.
     */
    export function allocCString(string: string, encoding?: string): Buffer;

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
    export function deref(buffer: Buffer): any;

    /** Create clone of the type, with decremented indirection level by 1. */
    export function derefType(type: Type): Type;
    /** Create clone of the type, with decremented indirection level by 1. */
    export function derefType(type: string): Type;
    /** Represents the native endianness of the processor ("LE" or "BE"). */
    export var endianness: string;
    /** Check the indirection level and return a dereferenced when necessary. */
    export function get(buffer: Buffer, offset?: number, type?: Type): any;
    /** Check the indirection level and return a dereferenced when necessary. */
    export function get(buffer: Buffer, offset?: number, type?: string): any;
    /** Get type of the buffer. Create a default type when none exists. */
    export function getType(buffer: Buffer): Type;
    /** Check the NULL. */
    export function isNull(buffer: Buffer): boolean;
    /** Read C string until the first NULL. */
    export function readCString(buffer: Buffer, offset?: number): string;

    /**
     * Read a big-endian signed 64-bit int.
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readInt64BE(buffer: Buffer, offset?: number): any;

    /**
     * Read a little-endian signed 64-bit int.
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readInt64LE(buffer: Buffer, offset?: number): any;

    /** Read a JS Object that has previously been written. */
    export function readObject(buffer: Buffer, offset?: number): Object;
    /** Read data from the pointer. */
    export function readPointer(buffer: Buffer, offset?: number,
                                                   length?: number): Buffer;
    /**
     * Read a big-endian unsigned 64-bit int.
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readUInt64BE(buffer: Buffer, offset?: number): any;

    /**
     * Read a little-endian unsigned 64-bit int.
     * If there is losing precision, then return a string, otherwise a number.
     * @return {number|string}
     */
    export function readUInt64LE(buffer: Buffer, offset?: number): any;

    /** Create pointer to buffer. */
    export function ref(buffer: Buffer): Buffer;
    /** Create clone of the type, with incremented indirection level by 1. */
    export function refType(type: Type): Type;
    /** Create clone of the type, with incremented indirection level by 1. */
    export function refType(type: string): Type;

    /**
     * Create buffer with the specified size, with the same address as source.
     * This function "attaches" source to the returned buffer to prevent it from
     * being garbage collected.
     */
    export function reinterpret(buffer: Buffer, size: number,
                                                  offset?: number): Buffer;
    /**
     * Scan past the boundary of the buffer's length until it finds size number
     * of aligned NULL bytes.
     */
    export function reinterpretUntilZeros(buffer: Buffer, size: number,
                                          offset?: number): Buffer;
    
    /** Write pointer if the indirection is 1, otherwise write value. */
    export function set(buffer: Buffer, offset: number, value: any, type?: Type): void;
    /** Write pointer if the indirection is 1, otherwise write value. */
    export function set(buffer: Buffer, offset: number, value: any, type?: string): void;
    /** Write the string as a NULL terminated. Default encoding is utf8. */
    export function writeCString(buffer: Buffer, offset: number,
                                 string: string, encoding?: string): void;
    /** Write a big-endian signed 64-bit int. */
    export function writeInt64BE(buffer: Buffer, offset: number, input: number): void;
    /** Write a big-endian signed 64-bit int. */
    export function writeInt64BE(buffer: Buffer, offset: number, input: string): void;
    /** Write a little-endian signed 64-bit int. */
    export function writeInt64LE(buffer: Buffer, offset: number, input: number): void;
    /** Write a little-endian signed 64-bit int. */
    export function writeInt64LE(buffer: Buffer, offset: number, input: string): void;
    
    /**
     * Write the JS Object. This function "attaches" object to buffer to prevent
     * it from being garbage collected.
     */
    export function writeObject(buffer: Buffer, offset: number, object: Object): void;
    
    /**
     * Write the memory address of pointer to buffer at the specified offset. This
     * function "attaches" object to buffer to prevent it from being garbage collected.
     */
    export function writePointer(buffer: Buffer, offset: number,
                                                    pointer: Buffer): void;
    
    /** Write a little-endian unsigned 64-bit int. */
    export function writeUInt64BE(buffer: Buffer, offset: number, input: number): void;
    /** Write a little-endian unsigned 64-bit int. */
    export function writeUInt64BE(buffer: Buffer, offset: number, input: string): void;
    
    /**
     * Attach object to buffer such.
     * It prevents object from being garbage collected until buffer does.
     */
    export function _attach(buffer: Buffer, object: Object): void;

    /** Same as ref.reinterpret, except that this version does not attach buffer. */
    export function _reinterpret(buffer: Buffer, size: number,
                                                  offset?: number): Buffer;
    /** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
    export function _reinterpretUntilZeros(buffer: Buffer, size: number,
                                          offset?: number): Buffer;
    /** Same as ref.writePointer, except that this version does not attach pointer. */
    export function _writePointer(buffer: Buffer, offset: number,
                                                    pointer: Buffer): void;
    /** Same as ref.writeObject, except that this version does not attach object. */
    export function _writeObject(buffer: Buffer, offset: number, object: Object): void;

    /** Default types. */
    export var types: {
        void: Type;            int64: Type;            ushort: Type;
        int: Type;             uint64: Type;           float: Type;
        uint: Type;            long: Type;             double: Type;
        int8: Type;            ulong: Type;            Object: Type;
        uint8: Type;           longlong: Type;         CString: Type;
        int16: Type;           ulonglong: Type;        bool: Type;
        uint16: Type;          char: Type;             byte: Type;
        int32: Type;           uchar: Type;            size_t: Type;
        uint32: Type;          short: Type;
    };
}

interface Buffer {
    /** Shorthand for `ref.address`. */
    address(): number;
    /** Shorthand for `ref.deref`. */
    deref(): any;
    /** Shorthand for `ref.isNull`. */
    isNull(): boolean;
    /** Shorthand for `ref.readCString`. */
    readCString(offset?: number): string;
    /** Shorthand for `ref.readInt64BE`. */
    readInt64BE(offset?: number): string;
    /** Shorthand for `ref.readInt64LE`. */
    readInt64LE(offset?: number): string;
    /** Shorthand for `ref.readObject`. */
    readObject(offset?: number): string;
    /** Shorthand for `ref.readPointer`. */
    readPointer(offset?: number): string;
    /** Shorthand for `ref.readUInt64BE`. */
    readUInt64BE(offset?: number): string;
    /** Shorthand for `ref.readUInt64LE`. */
    readUInt64LE(offset?: number): string;
    /** Shorthand for `ref.ref`. */
    ref(): Buffer;
    /** Shorthand for `ref.reinterpret`. */
    reinterpret(size: number, offset?: number): Buffer;
    /** Shorthand for `ref.reinterpretUntilZeros`. */
    reinterpretUntilZeros(size: number, offset?: number): Buffer;
    /** Shorthand for `ref.writeCString`. */
    writeCString(offset: number, string: string, encoding?: string): void;
    /** Shorthand for `ref.writeInt64BE`. */
    writeInt64BE(offset: number, input: number): any;
    /** Shorthand for `ref.writeInt64BE`. */
    writeInt64BE(offset: number, input: string): any;
    /** Shorthand for `ref.writeInt64LE`. */
    writeInt64LE(offset: number, input: number): any;
    /** Shorthand for `ref.writeInt64LE`. */
    writeInt64LE(offset: number, input: string): any;
    /** Shorthand for `ref.writeObject`. */
    writeObject(offset: number, object: Object): void;
    /** Shorthand for `ref.writePointer`. */
    writePointer(offset: number, pointer: Buffer): void;
    /** Shorthand for `ref.writeUInt64BE`. */
    writeUInt64BE(offset: number, input: number): any;
    /** Shorthand for `ref.writeUInt64BE`. */
    writeUInt64BE(offset: number, input: string): any;
    /** Shorthand for `ref.writeUInt64LE`. */
    writeUInt64LE(offset: number, input: number): any;
    /** Shorthand for `ref.writeUInt64LE`. */
    writeUInt64LE(offset: number, input: string): any;

    /**
     * Generate string for inspecting.
     * String includes the hex-encoded memory address of the Buffer instance.
     * @override
     */
    inspect(): string;
}

declare module "ref-array" {
    import ref = require('ref');

    interface ArrayType<T> extends ref.Type {
        BYTES_PER_ELEMENT: number;
        fixedLength: number;
        /** The reference to the base type. */
        type: ref.Type;

        /**
         * Accepts a Buffer instance that should be an already-populated with data
         * for the ArrayType. The "length" of the Array is determined by searching
         * through the buffer's contents until an aligned NULL pointer is encountered.
         */
        untilZeros(buffer: Buffer): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };

        new (length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
        new (data: number[], length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
        new (data: Buffer, length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
        (length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
        (data: number[], length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
        (data: Buffer, length?: number): { [i: number]: T; length: number; toArray(): T[];
            toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
    }

    /**
     * The array type meta-constructor.
     * The returned constructor's API is highly influenced by the WebGL
     * TypedArray API.
     */
    var ArrayType: {
        new <T>(type: ref.Type, length?: number): ArrayType<T>;
        new <T>(type: string, length?: number): ArrayType<T>;
        <T>(type: ref.Type, length?: number): ArrayType<T>;
        <T>(type: string, length?: number): ArrayType<T>;
    };

    export = ArrayType;
}

declare module "ref-struct" {
    import ref = require('ref');

    /**
     * This is the `constructor` of the Struct type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the struct.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the struct fields to auto-populate the
     * struct with the data.
     *
     * @constructor
     */
    interface StructType extends ref.Type {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new (arg: Buffer, data?: {}): any;
        new (data?: {}): any;
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (arg: Buffer, data?: {}): any;
        (data?: {}): any;

        fields: {[key: string]: {type: ref.Type}};

        /**
         * Adds a new field to the struct instance with the given name and type.
         * Note that this function will throw an Error if any instances of the struct
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: ref.Type): void;
        
        /**
         * Adds a new field to the struct instance with the given name and type.
         * Note that this function will throw an Error if any instances of the struct
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: string): void;

        /**
         * Custom for struct type instances.
         * @override
         */
        toString(): string;
    }

    /** The struct type meta-constructor. */
    var StructType: {
        new (fields?: {}): StructType;
        new (fields?: any[]): StructType;
        (fields?: {}): StructType;
        (fields?: any[]): StructType;
    }

    export = StructType;
}

declare module "ref-union" {
    import ref = require('ref');

    /**
     * This is the `constructor` of the Struct type that gets returned.
     *
     * Invoke it with `new` to create a new Buffer instance backing the union.
     * Pass it an existing Buffer instance to use that as the backing buffer.
     * Pass in an Object containing the union fields to auto-populate the
     * union with the data.
     *
     * @constructor
     */
    interface UnionType extends ref.Type {
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        new (arg: Buffer, data?: {}): any;
        new (data?: {}): any;
        /** Pass it an existing Buffer instance to use that as the backing buffer. */
        (arg: Buffer, data?: {}): any;
        (data?: {}): any;

        fields: {[key: string]: {type: ref.Type}};

        /**
         * Adds a new field to the union instance with the given name and type.
         * Note that this function will throw an Error if any instances of the union
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: ref.Type): void;
        
        /**
         * Adds a new field to the union instance with the given name and type.
         * Note that this function will throw an Error if any instances of the union
         * type have already been created, therefore this function must be called at the
         * beginning, before any instances are created.
         */
        defineProperty(name: string, type: string): void;

        /**
         * Custom for union type instances.
         * @override
         */
        toString(): string;
    }

    /** The union type meta-constructor. */
    var UnionType: {
        new (fields?: {}): UnionType;
        new (fields?: any[]): UnionType;
        (fields?: {}): UnionType;
        (fields?: any[]): UnionType;
    }

    export = UnionType;
}
