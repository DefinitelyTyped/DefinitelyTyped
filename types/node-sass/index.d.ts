/// <reference types="node" />

export type ImporterReturnType =
    | { file: string }
    | { file?: string | undefined; contents: string }
    | Error
    | null
    | types.Null
    | types.Error;

/**
 * The context value is a value that is shared for the duration of a single render.
 * The context object is the implicit `this` for importers and sass functions
 * that are implemented in javascript.
 *
 * A render can be detected as asynchronous if the `callback` property is set on the context object.
 */
export interface Context {
    options: Options;
    callback: SassRenderCallback | undefined;
    [data: string]: any;
}

export interface AsyncContext extends Context {
    callback: SassRenderCallback;
}

export interface SyncContext extends Context {
    callback: undefined;
}

export type AsyncImporter = (
    this: AsyncContext,
    url: string,
    prev: string,
    done: (data: ImporterReturnType) => void,
) => void;
export type SyncImporter = (this: SyncContext, url: string, prev: string) => ImporterReturnType;
export type Importer = AsyncImporter | SyncImporter;

// These function types enumerate up to 6 js arguments. More than that will be incorrectly marked by the compiler as an error.

// ** Sync Sass functions receiving fixed # of arguments ***
export type SyncSassFn = (this: SyncContext, ...$args: types.Value[]) => types.ReturnValue;

// ** Sync Sass functions receiving variable # of arguments ***
export type SyncSassVarArgFn1 = (this: SyncContext, $arg1: types.Value[]) => types.ReturnValue;
export type SyncSassVarArgFn2 = (this: SyncContext, $arg1: types.Value, $arg2: types.Value[]) => types.ReturnValue;
export type SyncSassVarArgFn3 = (
    this: SyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value[],
) => types.ReturnValue;
export type SyncSassVarArgFn4 = (
    this: SyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value[],
) => types.ReturnValue;
export type SyncSassVarArgFn5 = (
    this: SyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value[],
) => types.ReturnValue;
export type SyncSassVarArgFn6 = (
    this: SyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value,
    $arg6: types.Value[],
) => types.ReturnValue;

export type SassFunctionCallback = ($result: types.ReturnValue) => void;

// ** Async Sass functions receiving fixed # of arguments ***
export type AsyncSassFn0 = (this: AsyncContext, cb: SassFunctionCallback) => void;
export type AsyncSassFn1 = (this: AsyncContext, $arg1: types.Value, cb: SassFunctionCallback) => void;
export type AsyncSassFn2 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    cb: SassFunctionCallback,
) => void;
export type AsyncSassFn3 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    cb: SassFunctionCallback,
) => void;
export type AsyncSassFn4 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    cb: SassFunctionCallback,
) => void;
export type AsyncSassFn5 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value,
    cb: SassFunctionCallback,
) => void;
export type AsyncSassFn6 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value,
    $arg6: types.Value,
    cb: SassFunctionCallback,
) => void;

// *** Async Sass Functions receiving variable # of arguments ***
export type AsyncSassVarArgFn1 = (this: AsyncContext, $arg1: types.Value[], cb: SassFunctionCallback) => void;
export type AsyncSassVarArgFn2 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value[],
    cb: SassFunctionCallback,
) => void;
export type AsyncSassVarArgFn3 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value[],
    cb: SassFunctionCallback,
) => void;
export type AsyncSassVarArgFn4 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value[],
    cb: SassFunctionCallback,
) => void;
export type AsyncSassVarArgFn5 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value[],
    cb: SassFunctionCallback,
) => void;
export type AsyncSassVarArgFn6 = (
    this: AsyncContext,
    $arg1: types.Value,
    $arg2: types.Value,
    $arg3: types.Value,
    $arg4: types.Value,
    $arg5: types.Value,
    $arg6: types.Value[],
    cb: SassFunctionCallback,
) => void;

export type SyncSassFunction =
    | SyncSassFn
    | SyncSassVarArgFn1
    | SyncSassVarArgFn2
    | SyncSassVarArgFn3
    | SyncSassVarArgFn4
    | SyncSassVarArgFn5
    | SyncSassVarArgFn6;

export type AsyncSassFunction =
    | AsyncSassFn0
    | AsyncSassFn1
    | AsyncSassFn2
    | AsyncSassFn3
    | AsyncSassFn4
    | AsyncSassFn5
    | AsyncSassFn6
    | AsyncSassVarArgFn1
    | AsyncSassVarArgFn2
    | AsyncSassVarArgFn3
    | AsyncSassVarArgFn4
    | AsyncSassVarArgFn5
    | AsyncSassVarArgFn6;

export type SassFunction = SyncSassFunction | AsyncSassFunction;

export type FunctionDeclarations<FunctionType extends SassFunction = SassFunction> = Record<string, FunctionType>;

export interface Options {
    file?: string | undefined;
    data?: string | undefined;
    importer?: Importer | Importer[] | undefined;
    functions?: FunctionDeclarations | undefined;
    includePaths?: string[] | undefined;
    indentedSyntax?: boolean | undefined;
    indentType?: string | undefined;
    indentWidth?: number | undefined;
    linefeed?: string | undefined;
    omitSourceMapUrl?: boolean | undefined;
    outFile?: string | undefined;
    outputStyle?: "compact" | "compressed" | "expanded" | "nested" | undefined;
    precision?: number | undefined;
    sourceComments?: boolean | undefined;
    sourceMap?: boolean | string | undefined;
    sourceMapContents?: boolean | undefined;
    sourceMapEmbed?: boolean | undefined;
    sourceMapRoot?: string | undefined;
    [key: string]: any;
}

export interface SyncOptions extends Options {
    functions?: FunctionDeclarations<SyncSassFunction> | undefined;
    importer?: SyncImporter | SyncImporter[] | undefined;
}

/**
 * The error object returned to javascript by sass's render methods.
 *
 * This is not the same thing as types.Error.
 */
export interface SassError extends Error {
    message: string;
    line: number;
    column: number;
    status: number;
    file: string;
}

/**
 * The result of successfully compiling a Sass file.
 */
export interface Result {
    css: Buffer;
    map: Buffer;
    stats: {
        entry: string;
        start: number;
        end: number;
        duration: number;
        includedFiles: string[];
    };
}
export type SassRenderCallback = (err: SassError, result: Result) => any;

// Note, most node-sass constructors can be invoked as a function or with a new
// operator. The exception: the types Null and Boolean for which new is
// forbidden.
//
// Because of this, the new-able object notation is used here, a class does not
// work for these types.
export namespace types {
    /* tslint:disable:ban-types */
    /**
     * Values that are received from Sass as an argument to a javascript function.
     */
    export type Value = Null | Number | String | Color | Boolean | List | Map;

    /**
     * Values that are legal to return to Sass from a javascript function.
     */
    export type ReturnValue = Value | Error;

    // *** Sass Null ***

    export interface Null {
        /**
         * This property doesn't exist, but its presence forces the typescript
         * compiler to properly type check this type. Without it, it seems to
         * allow things that aren't types.Null to match it in case statements and
         * assignments.
         */
        readonly ___NULL___: unique symbol;
    }

    interface NullConstructor {
        (): Null;
        NULL: Null;
    }
    export const Null: NullConstructor;

    // *** Sass Number ***

    export interface Number {
        getValue(): number;
        setValue(n: number): void;
        getUnit(): string;
        setUnit(u: string): void;
    }
    interface NumberConstructor {
        /**
         * Constructs a new Sass number. Does not require use of the `new` keyword.
         */
        new(value: number, unit?: string): Number;
        /**
         * Constructs a new Sass number. Can also be used with the `new` keyword.
         */
        (value: number, unit?: string): Number;
    }

    export const Number: NumberConstructor;

    // *** Sass String ***

    export interface String {
        getValue(): string;
        setValue(s: string): void;
    }

    interface StringConstructor {
        /**
         * Constructs a new Sass string. Does not require use of the `new` keyword.
         */
        new(value: string): String;
        /**
         * Constructs a new Sass string. Can also be used with the `new` keyword.
         */
        (value: string): String;
    }

    export const String: StringConstructor;

    // *** Sass Color ***

    export interface Color {
        /**
         * Get the red component of the color.
         * @returns integer between 0 and 255 inclusive;
         */
        getR(): number;
        /**
         * Set the red component of the color.
         * @returns integer between 0 and 255 inclusive;
         */
        setR(r: number): void;
        /**
         * Get the green component of the color.
         * @returns integer between 0 and 255 inclusive;
         */
        getG(): number;
        /**
         * Set the green component of the color.
         * @param g integer between 0 and 255 inclusive;
         */
        setG(g: number): void;
        /**
         * Get the blue component of the color.
         * @returns integer between 0 and 255 inclusive;
         */
        getB(): number;
        /**
         * Set the blue component of the color.
         * @param b integer between 0 and 255 inclusive;
         */
        setB(b: number): void;
        /**
         * Get the alpha transparency component of the color.
         * @returns number between 0 and 1 inclusive;
         */
        getA(): number;
        /**
         * Set the alpha component of the color.
         * @param a number between 0 and 1 inclusive;
         */
        setA(a: number): void;
    }

    interface ColorConstructor {
        /**
         * Constructs a new Sass color given the RGBA component values. Do not invoke with the `new` keyword.
         *
         * @param r integer 0-255 inclusive
         * @param g integer 0-255 inclusive
         * @param b integer 0-255 inclusive
         * @param [a] float 0 - 1 inclusive
         * @returns a SassColor instance.
         */
        new(r: number, g: number, b: number, a?: number): Color;

        /**
         * Constructs a new Sass color given a 4 byte number. Do not invoke with the `new` keyword.
         *
         * If a single number is passed it is assumed to be a number that contains
         * all the components which are extracted using bitmasks and bitshifting.
         *
         * @param hexN A number that is usually written in hexadecimal form. E.g. 0xff0088cc.
         * @returns a Sass Color instance.
         * @example
         *   // Comparison with byte array manipulation
         *   let a = new ArrayBuffer(4);
         *   let hexN = 0xCCFF0088; // 0xAARRGGBB
         *   let a32 = new Uint32Array(a); // Uint32Array [ 0 ]
         *   a32[0] = hexN;
         *   let a8 = new Uint8Array(a); // Uint8Array [ 136, 0, 255, 204 ]
         *   let componentBytes = [a8[2], a8[1], a8[0], a8[3] / 255] // [ 136, 0, 255, 0.8 ]
         *   let c = sass.types.Color(hexN);
         *   let components = [c.getR(), c.getG(), c.getR(), c.getA()] // [ 136, 0, 255, 0.8 ]
         *   assert.deepEqual(componentBytes, components); // does not raise.
         */
        new(hexN: number): Color;

        /**
         * Constructs a new Sass color given the RGBA component values. Do not invoke with the `new` keyword.
         *
         * @param r integer 0-255 inclusive
         * @param g integer 0-255 inclusive
         * @param b integer 0-255 inclusive
         * @param [a] float 0 - 1 inclusive
         * @returns a SassColor instance.
         */
        (r: number, g: number, b: number, a?: number): Color;

        /**
         * Constructs a new Sass color given a 4 byte number. Do not invoke with the `new` keyword.
         *
         * If a single number is passed it is assumed to be a number that contains
         * all the components which are extracted using bitmasks and bitshifting.
         *
         * @param hexN A number that is usually written in hexadecimal form. E.g. 0xff0088cc.
         * @returns a Sass Color instance.
         * @example
         *   // Comparison with byte array manipulation
         *   let a = new ArrayBuffer(4);
         *   let hexN = 0xCCFF0088; // 0xAARRGGBB
         *   let a32 = new Uint32Array(a); // Uint32Array [ 0 ]
         *   a32[0] = hexN;
         *   let a8 = new Uint8Array(a); // Uint8Array [ 136, 0, 255, 204 ]
         *   let componentBytes = [a8[2], a8[1], a8[0], a8[3] / 255] // [ 136, 0, 255, 0.8 ]
         *   let c = sass.types.Color(hexN);
         *   let components = [c.getR(), c.getG(), c.getR(), c.getA()] // [ 136, 0, 255, 0.8 ]
         *   assert.deepEqual(componentBytes, components); // does not raise.
         */
        (hexN: number): Color;
    }

    export const Color: ColorConstructor;

    // *** Sass Boolean ***

    export interface Boolean {
        getValue(): boolean;
    }

    interface BooleanConstructor {
        (bool: boolean): Boolean;
        TRUE: Boolean;
        FALSE: Boolean;
    }

    export const Boolean: BooleanConstructor;

    // *** Sass List ***

    export interface Enumerable {
        getValue(index: number): Value;
        setValue(index: number, value: Value): void;
        getLength(): number;
    }

    export interface List extends Enumerable {
        getSeparator(): boolean;
        setSeparator(isComma: boolean): void;
    }
    interface ListConstructor {
        new(length: number, commaSeparator?: boolean): List;
        (length: number, commaSeparator?: boolean): List;
    }
    export const List: ListConstructor;

    // *** Sass Map ***

    export interface Map extends Enumerable {
        getKey(index: number): Value;
        setKey(index: number, key: Value): void;
    }
    interface MapConstructor {
        new(length: number): Map;
        (length: number): Map;
    }
    export const Map: MapConstructor;

    // *** Sass Error ***

    export interface Error {
        /**
         * This property doesn't exist, but its presence forces the typescript
         * compiler to properly type check this type. Without it, it seems to
         * allow things that aren't types.Error to match it in case statements and
         * assignments.
         */
        readonly ___SASS_ERROR___: unique symbol;
        // why isn't there a getMessage() method?
    }

    interface ErrorConstructor {
        /**
         * An error return value for async functions.
         * For synchronous functions, this can be returned or a standard error object can be thrown.
         */
        new(message: string): Error;
        /**
         * An error return value for async functions.
         * For synchronous functions, this can be returned or a standard error object can be thrown.
         */
        (message: string): Error;
    }
    export const Error: ErrorConstructor;

    /* eslint-enable @typescript-eslint/ban-types */
    /* tslint:enable:ban-types */
}

// *** Top level Constants ***

export const NULL: types.Null;
export const TRUE: types.Boolean;
export const FALSE: types.Boolean;
export const info: string;
export function render(options: Options, callback: SassRenderCallback): void;
export function renderSync(options: SyncOptions): Result;
