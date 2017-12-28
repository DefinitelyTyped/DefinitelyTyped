// Type definitions for node-ffi
// Project: https://github.com/rbranson/node-ffi
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />


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

