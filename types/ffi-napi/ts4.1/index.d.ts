/// <reference types="node" />

import ref = require('ref-napi');
import ref_struct = require('ref-struct-di');
import StructType = ref_struct.StructType;

/** Provides a friendly API on-top of `DynamicLibrary` and `ForeignFunction`. */
export interface Library {
    /** The extension to use on libraries. */
    EXT: string;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    new (libFile: string | null, funcs?: Record<string, [string | ref.Type, Array<string | ref.Type>, { abi?: number, async?: boolean, varargs?: boolean }?]>, lib?: object): any;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    (libFile: string | null, funcs?: Record<string, [string | ref.Type, Array<string | ref.Type>, { abi?: number, async?: boolean, varargs?: boolean }?]>, lib?: object): any;
}
export const Library: Library;

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
export const Function: {
    new (retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi?: number): Function;
    (retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi?: number): Function;
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
export const ForeignFunction: {
    new (ptr: Buffer, retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi?: number): ForeignFunction;
    (ptr: Buffer, retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi?: number): ForeignFunction;
};

export interface VariadicForeignFunction {
    /**
     * What gets returned is another function that needs to be invoked with the rest
     * of the variadic types that are being invoked from the function.
     */
    (...args: Array<string | ref.Type>): ForeignFunction;

    /**
     * Return type as a property of the function generator to
     * allow for monkey patching the return value in the very rare case where the
     * return type is variadic as well
     */
    returnType: ref.Type;
}

/**
 * For when you want to call to a C function with variable amount of arguments.
 * i.e. `printf`.
 *
 * This function takes care of caching and reusing `ForeignFunction` instances that
 * contain the same ffi_type argument signature.
 */
export const VariadicForeignFunction: {
    new (ptr: Buffer, ret: string | ref.Type, fixedArgs: Array<string | ref.Type>, abi?: number): VariadicForeignFunction;
    (ptr: Buffer, ret: string | ref.Type, fixedArgs: Array<string | ref.Type>, abi?: number): VariadicForeignFunction;
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
export const DynamicLibrary: {
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
export interface Callback {
    new (retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi: number, fn: (...args: any[]) => any): Buffer;
    new (retType: string | ref.Type, argTypes: Array<string | ref.Type>, fn: (...args: any[]) => any): Buffer;
    (retType: string | ref.Type, argTypes: Array<string | ref.Type>, abi: number, fn: (...args: any[]) => any): Buffer;
    (retType: string | ref.Type, argTypes: Array<string | ref.Type>, fn: (...args: any[]) => any): Buffer;
}
export const Callback: Callback;

export const ffiType: {
    /** Get a `ffi_type *` Buffer appropriate for the given type. */
    (type: string | ref.Type): Buffer
    FFI_TYPE: StructType;
};

export function CIF(retType: string | ref.Type, types: Array<string | ref.Type>, abi?: number): Buffer;
export function CIF_var(retType: string | ref.Type, types: Array<string | ref.Type>, numFixedArgs: number, abi?: number): Buffer;
export const HAS_OBJC: boolean;
export const FFI_TYPES: Record<string, Buffer>;
export const FFI_OK: number;
export const FFI_BAD_TYPEDEF: number;
export const FFI_BAD_ABI: number;
export const FFI_DEFAULT_ABI: number;
export const FFI_FIRST_ABI: number;
export const FFI_LAST_ABI: number;
export const FFI_SYSV: number;
export const FFI_UNIX64: number;
export const RTLD_LAZY: number;
export const RTLD_NOW: number;
export const RTLD_LOCAL: number;
export const RTLD_GLOBAL: number;
export const RTLD_NOLOAD: number;
export const RTLD_NODELETE: number;
export const RTLD_NEXT: Buffer;
export const RTLD_DEFAULT: Buffer;
export const LIB_EXT: string;
export const FFI_TYPE: StructType;

/** Default types. */
export import types = ref.types;
