// Type definitions for ffi-napi 4.0
// Project: https://github.com/node-ffi-napi/node-ffi-napi
// Definitions by: Keerthi Niranjan <https://github.com/keerthi16>, Kiran Niranjan <https://github.com/KiranNiranjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import ref = require('ref-napi');
import ref_struct = require('ref-struct-di');
import StructType = ref_struct.StructType;

/**
 * This is a marker type that causes TypeScript to use string literal inference when inferring a generic from an array of {@link ref.TypeLike}.
 */
export type ArgTypesInferenceMarker = ["void"];

export interface LibraryFunctionOptions {
    abi?: number | undefined;
    async?: boolean | undefined;
    varargs?: boolean | undefined;
}

/**
 * Base constraint for an object-based library type definition.
 */
export type LibraryObjectDefinitionBase = Record<string, [retType: ref.TypeLike, argTypes: ref.TypeLike[], opts?: LibraryFunctionOptions]>;

/**
 * This is a marker type that causes TypeScript to use string literal inference when inferring a generic from {@link LibraryObjectDefinitionBase}.
 * If it is not used, `new Library(..., { x: ["int", ["int"]] })` will be inferred as `new Library<{ x: [string, string[]] }>(...)` instead of `new UnionType<{ x: ["int", ["int"]] }>(...)`.
 */
export type LibraryObjectDefinitionInferenceMarker = Record<string, [retType: "void", argTypes: ArgTypesInferenceMarker]>;

/**
 * Converts a {@link LibraryObjectDefinitionBase} into a consistent subtype of {@link LibraryDefinitionBase}. If `any` is used, it is passed along
 * to be interpreted to use a fallback definition for a union.
 */
export type LibraryObjectDefinitionToLibraryDefinition<T extends LibraryObjectDefinitionBase> =
    [T] extends [never] | [0] ? any : // catches T extends never/any (since `0` doesn't overlap with our constraint)
    { [P in keyof T]: [retType: ref.CoerceType<T[P][0]>, argTypes: ref.CoerceTypes<T[P][1]>, opts: T[P][2]] };

/**
 * Base constraint for a consistent library type definition.
 */
export type LibraryDefinitionBase = Record<string, [retType: ref.Type, argTypes: ref.Type[], opts: LibraryFunctionOptions | undefined]>;

/**
 * Represents a {@link Library} instance created from a {@link LibraryDefinitionBase}.
 */
export type LibraryObject<T extends LibraryDefinitionBase> =
    [T] extends [never] | [0] ? any : // catches T extends never/any (since `0` doesn't overlap with our constraint)
    {
        [P in keyof T]:
            T[P][2] extends undefined ? ForeignFunction<ref.UnderlyingType<T[P][0]>, ref.UnderlyingTypes<T[P][1]>> :
            T[P][2] extends { varargs: true } ? VariadicForeignFunction<T[P][0], T[P][1]> :
            T[P][2] extends { async: true } ? ForeignFunction<ref.UnderlyingType<T[P][0]>, ref.UnderlyingTypes<T[P][1]>>["async"] :
            ForeignFunction<ref.UnderlyingType<T[P][0]>, ref.UnderlyingTypes<T[P][1]>>;
    };

/** Provides a friendly API on-top of `DynamicLibrary` and `ForeignFunction`. */
export interface Library {
    /** The extension to use on libraries. */
    EXT: string;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    new <TDefinition extends LibraryObjectDefinitionBase | LibraryObjectDefinitionInferenceMarker, T>(
        libFile: string | null,
        funcs: TDefinition,
        lib: T
    ): T & LibraryObject<LibraryObjectDefinitionToLibraryDefinition<TDefinition>>;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    new <TDefinition extends LibraryObjectDefinitionBase | LibraryObjectDefinitionInferenceMarker>(
        libFile: string | null,
        funcs: TDefinition,
        lib?: object
    ): LibraryObject<LibraryObjectDefinitionToLibraryDefinition<TDefinition>>;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    new (libFile: string | null, funcs?: Record<string, [retType: ref.TypeLike, argTypes: ref.TypeLike[], opts?: LibraryFunctionOptions]>, lib?: object): any;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    <TDefinition extends LibraryObjectDefinitionBase | LibraryObjectDefinitionInferenceMarker, T>(
        libFile: string | null,
        funcs: TDefinition,
        lib: T
    ): T & LibraryObject<LibraryObjectDefinitionToLibraryDefinition<TDefinition>>;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
    <TDefinition extends LibraryObjectDefinitionBase | LibraryObjectDefinitionInferenceMarker>(
        libFile: string | null,
        funcs: TDefinition,
        lib?: object
    ): LibraryObject<LibraryObjectDefinitionToLibraryDefinition<TDefinition>>;

    /**
     * @param libFile name of library
     * @param funcs hash of [retType, [...argType], opts?: {abi?, async?, varargs?}]
     * @param lib hash that will be extended
     */
     (libFile: string | null, funcs?: Record<string, [retType: ref.TypeLike, argTypes: ref.TypeLike[], opts?: LibraryFunctionOptions]>, lib?: object): any;
}
export const Library: Library;

/** Get value of errno. */
export function errno(): number;

export interface Function<
    TReturnType extends ref.Type = ref.Type,
    TArgTypes extends ref.Type[] = ref.Type[]
> extends ref.Type<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>> {
    /** The type of return value. */
    retType: TReturnType;
    /** The type of arguments. */
    argTypes: TArgTypes;
    /** Is set for node-ffi functions. */
    ffi_type: PFFI_TYPE;
    abi: number;

    /** Get a `Callback` pointer of this function type. */
    toPointer(fn: (...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;
    /** Get a `ForeignFunction` of this function type. */
    toFunction(buf: Buffer): ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>;
}

/** Creates and returns a type for a C function pointer. */
export const Function: {
    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    new <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[] | ArgTypesInferenceMarker>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
        ): Function<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;
    new <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): Function<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;

    new (retType: ref.TypeLike, argTypes: ref.TypeLike[], abi?: number): Function;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[] | ArgTypesInferenceMarker>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): Function<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;
    <TReturnType extends ref.TypeLike, TArgTypes extends ref.Type[] | ArgTypesInferenceMarker>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): Function<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;

    (retType: ref.TypeLike, argTypes: ref.TypeLike[], abi?: number): Function;
};

export interface ForeignFunction<TReturn = any, TArgs extends any[] = any[]> {
    (...args: TArgs): TReturn;
    async(...args: [...TArgs, (err: any, value: TReturn) => void]): void;
}

/**
 * Represents a foreign function in another library. Manages all of the aspects
 * of function execution, including marshalling the data parameters for the
 * function into native types and also unmarshalling the return from function
 * execution.
 */
export const ForeignFunction: {
    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    new <TReturnType extends ref.NamedType, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>;
    new <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>;

    new (ptr: Buffer, retType: ref.TypeLike, argTypes: ref.TypeLike[], abi?: number): ForeignFunction;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <TReturnType extends ref.NamedType, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>;
    <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        retType: TReturnType,
        argTypes: TArgTypes,
        abi?: number
    ): ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>;

    (ptr: Buffer, retType: ref.TypeLike, argTypes: ref.TypeLike[], abi?: number): ForeignFunction;
};

export interface VariadicForeignFunction<TReturnType extends ref.Type = ref.Type, TArgTypes extends ref.Type[] = ref.Type[]> {
    /**
     * What gets returned is another function that needs to be invoked with the rest
     * of the variadic types that are being invoked from the function.
     */
    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <A extends ref.NamedTypeLike[]>(...args: A): ForeignFunction<ref.UnderlyingType<TReturnType>, [...ref.UnderlyingTypes<TArgTypes>, ...ref.UnderlyingTypes<A>]>;
    /**
     * What gets returned is another function that needs to be invoked with the rest
     * of the variadic types that are being invoked from the function.
     */
    <A extends ref.TypeLike[]>(...args: A): ForeignFunction<ref.UnderlyingType<TReturnType>, [...ref.UnderlyingTypes<TArgTypes>, ...ref.UnderlyingTypes<A>]>;

    /**
     * Return type as a property of the function generator to
     * allow for monkey patching the return value in the very rare case where the
     * return type is variadic as well
     */
    returnType: TReturnType;
}

/**
 * For when you want to call to a C function with variable amount of arguments.
 * i.e. `printf`.
 *
 * This function takes care of caching and reusing `ForeignFunction` instances that
 * contain the same ffi_type argument signature.
 */
export const VariadicForeignFunction: {
    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    new <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        ret: TReturnType,
        fixedArgs: TArgTypes,
        abi?: number
    ): VariadicForeignFunction<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;
    new <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        ret: TReturnType,
        fixedArgs: TArgTypes,
        abi?: number
    ): VariadicForeignFunction<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;

    new (ptr: Buffer, ret: ref.TypeLike, fixedArgs: ref.TypeLike[], abi?: number): VariadicForeignFunction;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        ret: TReturnType,
        fixedArgs: TArgTypes,
        abi?: number
    ): VariadicForeignFunction<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;
    <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[] | ArgTypesInferenceMarker>(
        ptr: Buffer,
        ret: TReturnType,
        fixedArgs: TArgTypes,
        abi?: number
    ): VariadicForeignFunction<ref.CoerceType<TReturnType>, ref.CoerceTypes<TArgTypes>>;

    (ptr: Buffer, ret: ref.TypeLike, fixedArgs: ref.TypeLike[], abi?: number): VariadicForeignFunction;
};

/**
 * This class loads and fetches function pointers for dynamic libraries
 * (`.so`, `.dylib`, `etc`). After the libray's function pointer is acquired, then you
 * call {@link DynamicLibrary.get} to retreive a pointer to an exported symbol. You need to
 * call `get___` on the pointer to dereference it into its actual value, or
 * turn the pointer into a callable function with {@link ForeignFunction}.
 */
export class DynamicLibrary {
    /**
     * @param mode One of the numeric {@link DynamicLibrary.FLAGS} values.
     */
    constructor(path?: string, mode?: number);

    /**
     * Close library, returns the result of the `dlclose` system function.
     */
    close(): number;

    /**
     * Get a symbol from this library.
     */
    get(symbol: string): Buffer;

    /**
     * Get the result of the `dlerror` system function.
     */
    error(): string;

    /**
     * Returns the path originally passed to the constructor.
     */
    path(): string;
}

/**
 * This class loads and fetches function pointers for dynamic libraries
 * (`.so`, `.dylib`, etc). After the libray's function pointer is acquired, then you
 * call {@link DynamicLibrary.get} to retreive a pointer to an exported symbol. You need to
 * call `get___` on the pointer to dereference it into its actual value, or
 * turn the pointer into a callable function with {@link ForeignFunction}.
 *
 * @param mode One of the numeric {@link DynamicLibrary.FLAGS} values.
 */
export function DynamicLibrary(path?: string, mode?: number): DynamicLibrary;
export namespace DynamicLibrary {
    /**
     * Exported flags from "dlfcn.h"
     */
    namespace FLAGS {
        // flags for dlopen()
        const RTLD_LAZY: number;
        const RTLD_NOW: number;
        const RTLD_LOCAL: number;
        const RTLD_GLOBAL: number;
        const RTLD_NOLOAD: number | undefined; // not defined on Windows
        const RTLD_NODELETE: number | undefined; // not defined on Windows
        const RTLD_FIRST: number | undefined; // not defined on Windows

        // flags for dlsym()
        const RTLD_NEXT: ref.Pointer<unknown>;
        const RTLD_DEFAULT: ref.Pointer<unknown>;
        const RTLD_SELF: ref.Pointer<unknown> | undefined; // not defined on Windows
        const RTLD_MAIN_ONLY: ref.Pointer<unknown> | undefined; // not defined on Windows
    }
}

/**
 * Turns a JavaScript function into a C function pointer.
 * The function pointer may be used in other C functions that
 * accept C callback functions.
 */
export interface Callback {
    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    new <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi: number,
        fn: (...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;
    new <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi: number,
        fn: (...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    new <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        fn: (...ags: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;
    new <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        fn: (...ags: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;

    new (retType: ref.TypeLike, argTypes: ref.TypeLike[], abi: number, fn: (...args: any[]) => any): Buffer;
    new (retType: ref.TypeLike, argTypes: ref.TypeLike[], fn: (...args: any[]) => any): Buffer;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi: number,
        fn: (...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;
    <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        abi: number,
        fn: (...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;

    // NOTE: This overload is a subtype of the next overload, but provides better completions.
    <TReturnType extends ref.NamedTypeLike, TArgTypes extends ref.NamedTypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        fn: (...ags: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;
    <TReturnType extends ref.TypeLike, TArgTypes extends ref.TypeLike[]>(
        retType: TReturnType,
        argTypes: TArgTypes,
        fn: (...ags: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>
    ): ref.Pointer<(...args: ref.UnderlyingTypes<TArgTypes>) => ref.UnderlyingType<TReturnType>>;

    (retType: ref.TypeLike, argTypes: ref.TypeLike[], abi: number, fn: (...args: any[]) => any): Buffer;
    (retType: ref.TypeLike, argTypes: ref.TypeLike[], fn: (...args: any[]) => any): Buffer;
}
export const Callback: Callback;

/** Get a `ffi_type *` Buffer appropriate for the given type. */
export function ffiType(type: ref.TypeLike): ref.Pointer<FFI_TYPE>;
export namespace ffiType {
    /**
     * Define the `ffi_type` struct (see deps/libffi/include/ffi.h) for use in JS.
     * This struct type is used internally to define custom struct ret/arg types.
     */
    const FFI_TYPE: StructType<{
        size: typeof ref.types.size_t,
        alignment: typeof ref.types.ushort,
        type: typeof ref.types.ushort,
        elements: ref.Type<ref.Pointer<PFFI_TYPE>>,
    }>;

    type FFI_TYPE = ReturnType<typeof FFI_TYPE>;
}

export function CIF(retType: ref.TypeLike, types: ref.TypeLike[], abi?: number): Buffer;
export function CIF_var(retType: ref.TypeLike, types: ref.TypeLike[], numFixedArgs: number, abi?: number): Buffer;

export const HAS_OBJC: boolean;

/**
 * Represents an opaque pointer to an {@link FFI_TYPE} struct used for marshalling types to native code.
 */
export type PFFI_TYPE = ref.Pointer<FFI_TYPE>;

declare module "ref-napi" {
    interface Type {
        /**
         * Determines the FFI_TYPE set for a type.
         */
        ffi_type?: PFFI_TYPE | undefined;
    }
}

export interface FfiTypesRegistry {
    void: PFFI_TYPE;
    uint8: PFFI_TYPE;
    int8: PFFI_TYPE;
    uint16: PFFI_TYPE;
    int16: PFFI_TYPE;
    uint32: PFFI_TYPE;
    int32: PFFI_TYPE;
    uint64: PFFI_TYPE;
    int64: PFFI_TYPE;
    uchar: PFFI_TYPE;
    char: PFFI_TYPE;
    ushort: PFFI_TYPE;
    short: PFFI_TYPE;
    uint: PFFI_TYPE;
    int: PFFI_TYPE;
    float: PFFI_TYPE;
    double: PFFI_TYPE;
    pointer: PFFI_TYPE;
    ulonglong: PFFI_TYPE;
    longlong: PFFI_TYPE;
    ulong: PFFI_TYPE;
    long: PFFI_TYPE;
}

export const FFI_TYPES: FfiTypesRegistry;
export const FFI_OK: number;
export const FFI_BAD_TYPEDEF: number;
export const FFI_BAD_ABI: number;
export const FFI_DEFAULT_ABI: number;
export const FFI_FIRST_ABI: number;
export const FFI_LAST_ABI: number;

// NOTE: These are defined depending on the platform ffi-napi was compiled on:
export const FFI_SYSV: number | undefined; // __arm__, Intel x86 Win32, __aarch64__, Intel x86 and AMD x86/x64
export const FFI_VFP: number | undefined; // __arm__
export const FFI_UNIX64: number | undefined; // All unix variants
export const FFI_STDCALL: number | undefined; // Intel x86 Win32
export const FFI_THISCALL: number | undefined; // Intel x86 Win32
export const FFI_FASTCALL: number | undefined; // Intel x86 Win32
export const FFI_MS_CDECL: number | undefined; // Intel x86 Win32
export const FFI_WIN64: number | undefined; // Intel x86 Win64

export import RTLD_LAZY = DynamicLibrary.FLAGS.RTLD_LAZY;
export import RTLD_NOW = DynamicLibrary.FLAGS.RTLD_NOW;
export import RTLD_LOCAL = DynamicLibrary.FLAGS.RTLD_LOCAL;
export import RTLD_GLOBAL = DynamicLibrary.FLAGS.RTLD_GLOBAL;
export import RTLD_NOLOAD = DynamicLibrary.FLAGS.RTLD_NOLOAD;
export import RTLD_NODELETE = DynamicLibrary.FLAGS.RTLD_NODELETE;
export import RTLD_FIRST = DynamicLibrary.FLAGS.RTLD_FIRST;
export import RTLD_NEXT = DynamicLibrary.FLAGS.RTLD_NEXT;
export import RTLD_DEFAULT = DynamicLibrary.FLAGS.RTLD_DEFAULT;
export import RTLD_SELF = DynamicLibrary.FLAGS.RTLD_SELF;
export import RTLD_MAIN_ONLY = DynamicLibrary.FLAGS.RTLD_MAIN_ONLY;

export const FFI_ARG_SIZE: number;
export const FFI_SARG_SIZE: number;
export const FFI_TYPE_SIZE: number;
export const FFI_CIF_SIZE: number;

export const LIB_EXT: string;

export import FFI_TYPE = ffiType.FFI_TYPE;

/** Default types. */
export import types = ref.types;
