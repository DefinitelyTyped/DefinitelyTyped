// Type definitions for ffi-napi 4.0
// Project: http://github.com/node-ffi-napi/node-ffi-napi
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
    abi?: number;
    async?: boolean;
    varargs?: boolean;
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
 * Converts a {@link LibraryObjectDefinitionBase} into a consistent subtype of {@link LibraryDefinitionBase}. If `"any"` is used, it is passed along
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
> extends ref.Type<ForeignFunction<ref.UnderlyingType<TReturnType>, ref.UnderlyingTypes<TArgTypes>>> {
    /** The type of return value. */
    retType: TReturnType;
    /** The type of arguments. */
    argTypes: TArgTypes;
    /** Is set for node-ffi functions. */
    ffi_type: Buffer;
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

export const ffiType: {
    /** Get a `ffi_type *` Buffer appropriate for the given type. */
    (type: ref.TypeLike): Buffer
    FFI_TYPE: StructType;
};

export function CIF(retType: ref.TypeLike, types: ref.TypeLike[], abi?: number): Buffer;
export function CIF_var(retType: ref.TypeLike, types: ref.TypeLike[], numFixedArgs: number, abi?: number): Buffer;
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
