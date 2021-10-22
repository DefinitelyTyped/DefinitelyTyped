// Type definitions for sass 1.16
// Project: https://github.com/sass/dart-sass
// Definitions by: Silas Rech <https://github.com/lenovouser>
//                 Justin Leider <https://github.com/jleider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

export type ImporterReturnType = { file: string } | { contents: string } | Error | null;

export type Importer = (url: string, prev: string, done: (data: ImporterReturnType) => void) => ImporterReturnType | void;

export interface Options {
    /**
     * Path to a file to compile.
     *
     * @default null
     */
    file?: string | undefined;

    /**
     * A string to pass to compile.
     *
     * It is recommended that you use `includePaths` in conjunction with this so that sass can find files when using the @import directive.
     *
     * @default null
     */
    data?: string | undefined;

    /**
     * Handles when the @import directive is encountered.
     *
     * A custom importer allows extension of the sass engine in both a synchronous and asynchronous manner.
     *
     * @default undefined
     */
    importer?: Importer | Importer[] | undefined;

    /**
     * Holds a collection of custom functions that may be invoked by the sass files being compiled.
     *
     * @default undefined
     */
    functions?: { [key: string]: (...args: types.SassType[]) => types.SassType | void } | undefined;

    /**
     * An array of paths that should be looked in to attempt to resolve your @import declarations.
     * When using `data`, it is recommended that you use this.
     *
     * @default []
     */
    includePaths?: string[] | undefined;

    /**
     * Enable Sass Indented Syntax for parsing the data string or file.
     *
     * @default false
     */
    indentedSyntax?: boolean | undefined;

    /**
     * Used to determine whether to use space or tab character for indentation.
     *
     * @default 'space'
     */
    indentType?: 'space' | 'tab' | undefined;

    /**
     * Used to determine the number of spaces or tabs to be used for indentation.
     *
     * @default 2
     */
    indentWidth?: number | undefined;

    /**
     * Used to determine which sequence to use for line breaks.
     *
     * @default 'lf'
     */
    linefeed?: 'cr' | 'crlf' | 'lf' | 'lfcr' | undefined;

    /**
     * Disable the inclusion of source map information in the output file.
     *
     * @default false
     */
    omitSourceMapUrl?: boolean | undefined;

    /**
     * Specify the intended location of the output file.
     * Strongly recommended when outputting source maps so that they can properly refer back to their intended files.
     *
     * @default null
     */
    outFile?: string | undefined;

    /**
     * Determines the output format of the final CSS style.
     *
     * @default 'expanded'
     */
    outputStyle?: 'compressed' | 'expanded' | undefined;

    /**
     * Enables the outputting of a source map.
     *
     * @default undefined
     */
    sourceMap?: boolean | string | undefined;

    /**
     * Includes the contents in the source map information.
     *
     * @default false
     */
    sourceMapContents?: boolean | undefined;

    /**
     * Embeds the source map as a data URI.
     *
     * @default false
     */
    sourceMapEmbed?: boolean | undefined;

    /**
     * The value will be emitted as `sourceRoot` in the source map information.
     *
     * @default undefined
     */
    sourceMapRoot?: string | undefined;
}

export interface SassException extends Error {
    /**
     * The error message.
     */
    message: string;

    /**
     * The formatted error.
     */
    formatted: string;

    /**
     * The line number of error.
     */
    line: number;

    /**
     * The column number of error.
     */
    column: number;

    /**
     * The status code.
     */
    status: number;

    /**
     * The filename of error.
     *
     * In case file option was not set (in favour of `data`), this will reflect the value `stdin`.
     */
    file: string;
}

export interface Result {
    /**
     * The compiled CSS.
     *
     * Write this to a file, or serve it out as needed.
     */
    css: Buffer;

    /**
     * The source map.
     */
    map?: Buffer | undefined;
    stats: {
        /**
         * The path to the scss file, or `data` if the source was not a file.
         */
        entry: string;

        /**
         * `Date.now()` before the compilation.
         */
        start: number;

        /**
         * `Date.now()` after the compilation.
         */
        end: number;

        /**
         * `end - start`
         */
        duration: number;

        /**
         * Absolute paths to all related files in no particular order.
         */
        includedFiles: string[];
    };
}

export function render(options: Options, callback: (exception: SassException, result: Result) => void): void;
export function renderSync(options: Options): Result;

export namespace types {
    abstract class SassType {}

    interface Null extends SassType {
        NULL: Null;
    }

    const Null: Null;

    class Number implements SassType {
        constructor(value: number, unit?: string);
        getValue(): number;
        setValue(value: number): void;
        getUnit(): string;
        setUnit(unit: string): void;
    }

    class String implements SassType {
        constructor(value: string);
        getValue(): string;
        setValue(value: string): void;
    }

    class Boolean<T extends boolean = boolean> implements SassType {
        constructor(value: T);
        getValue(): T;
        static readonly TRUE: Boolean<true>;
        static readonly FALSE: Boolean<false>;
    }

    class Color implements SassType {
        constructor(r: number, g: number, b: number, a?: number);
        getR(): number;
        setR(value: number): void;
        getG(): number;
        setG(value: number): void;
        getB(): number;
        setB(value: number): void;
        getA(): number;
        setA(value: number): void;
    }

    class List<T extends SassType = SassType> implements SassType {
        constructor(length: number, commaSeparator?: boolean);
        getValue(index: number): T | undefined;
        setValue(index: number, value: T): void;
        getSeparator(): boolean;
        setSeparator(isComma: boolean): void;
        getLength(): number;
    }

    class Map<K extends SassType = SassType, V extends SassType = SassType> implements SassType {
        constructor(length: number);
        getValue(index: number): V;
        setValue(index: number, value: V): void;
        getKey(index: number): K;
        setKey(index: number, key: K): void;
        getLength(): number;
    }
}
