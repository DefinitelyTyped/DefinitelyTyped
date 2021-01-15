// Type definitions for PapaParse 5.2
// Project: https://github.com/mholt/PapaParse
// Definitions by: Pedro Flemming <https://github.com/torpedro>
//                 Rain Shen <https://github.com/rainshen49>
//                 João Loff <https://github.com/jfloff>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Alberto Restifo <https://github.com/albertorestifo>
//                 Behind The Math <https://github.com/BehindTheMath>
//                 Janne Liuhtonen <https://github.com/jliuhtonen>
//                 Raphaël Barbazza <https://github.com/rbarbazz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Emmanuel Gautier <https://github.com/emmanuelgautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace Papa;

/**
 * Parse a csv string, a csv file or a readable stream
 */
export const parse: {
    <T>(input: string | File | NodeJS.ReadableStream, config?: ParseConfig<T>): ParseResult<T>;
    (stream: NODE_STREAM_INPUT_TYPE, config?: ParseConfig): NodeJS.ReadWriteStream;
};

/**
 * Unparses javascript data objects and returns a csv string
 */
export function unparse(data: object[] | any[][] | UnparseObject, config?: UnparseConfig): string;

/**
 * Read-Only Properties
 */
// An array of characters that are not allowed as delimiters.
export const BAD_DELIMITERS: string[];

// The true delimiter. Invisible. ASCII code 30. Should be doing the job we strangely rely upon commas and tabs for.
export type RECORD_SEP_TYPE = '';
export const RECORD_SEP = '';

// Also sometimes used as a delimiting character. ASCII code 31.
export type UNIT_SEP_TYPE = '';
export const UNIT_SEP = '';

// Whether or not the browser supports HTML5 Web Workers. If false, worker: true will have no effect.
export const WORKERS_SUPPORTED: boolean;

// The relative path to Papa Parse. This is automatically detected when Papa Parse is loaded synchronously.
// Assign it a value to override auto-detected path.
export let SCRIPT_PATH: string;

// When passed to Papa Parse a Readable stream is returned.
export type NODE_STREAM_INPUT_TYPE = 1;
export const NODE_STREAM_INPUT = 1;

// The possible values for the ParseConfig property delimitersToGuess
export type GuessableDelimiters = ',' | '\t' | '|' | ';' | RECORD_SEP_TYPE | UNIT_SEP_TYPE;

/**
 * Configurable Properties
 */
// The size in bytes of each file chunk. Used when streaming files obtained from the DOM that exist on the local computer. Default 10 MB.
export let LocalChunkSize: string;

// Same as LocalChunkSize, but for downloading files from remote locations. Default 5 MB.
export let RemoteChunkSize: string;

// The delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
export let DefaultDelimiter: string;

/**
 * On Papa there are actually more classes exposed
 * but none of them are officially documented
 * Since we can interact with the Parser from one of the callbacks
 * I have included the API for this class.
 */
export class Parser {
    constructor(config: ParseConfig);

    parse(input: string, baseIndex: number, ignoreLastRow: boolean): any;

    // Sets the abort flag
    abort(): void;

    // Gets the cursor position
    getCharIndex(): number;

    pause(): void;
    resume(): void;
}

export interface ParseConfig<T = any> {
    delimiter?: string; // default: ","
    newline?: string; // default: "\r\n"
    quoteChar?: string; // default: '"'
    escapeChar?: string; // default: '"'
    header?: boolean; // default: false
    trimHeaders?: boolean; // default: false
    dynamicTyping?:
        | boolean
        | { [headerName: string]: boolean; [columnNumber: number]: boolean }
        | ((field: string | number) => boolean); // default: false
    preview?: number; // default: 0
    encoding?: string; // default: ""
    worker?: boolean; // default: false
    comments?: boolean | string; // default: false
    download?: boolean; // default: false
    downloadRequestHeaders?: { [headerName: string]: string }; // default: undefined
    skipEmptyLines?: boolean | 'greedy'; // default: false
    fastMode?: boolean; // default: undefined
    withCredentials?: boolean; // default: undefined
    delimitersToGuess?: GuessableDelimiters[]; // default: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
    chunkSize?: number; // default: undefined

    // Callbacks
    step?(results: ParseResult<T>, parser: Parser): void; // default: undefined
    complete?(results: ParseResult<T>, file?: File): void; // default: undefined
    error?(error: ParseError, file?: File): void; // default: undefined
    chunk?(results: ParseResult<T>, parser: Parser): void; // default: undefined
    beforeFirstChunk?(chunk: string): string | void; // default: undefined
    transform?(value: string, field: string | number): any; // default: undefined
    transformHeader?(header: string, index?: number): string; // default: undefined
}

export interface UnparseConfig {
    quotes?: boolean | boolean[] | ((value: any) => boolean); // default: false
    quoteChar?: string; // default: '"'
    escapeChar?: string; // default: '"'
    escapeFormulae?: boolean; // default: false
    delimiter?: string; // default: ","
    /**
     * If defined and the download property is true,
     * a POST request will be made instead of a GET request and the passed argument will be set as the body of the request.
     * @default undefined
     */
    downloadRequestBody?: boolean;
    header?: boolean; // default: true
    newline?: string; // default: "\r\n"
    skipEmptyLines?: boolean | 'greedy'; // default: false
    columns?: string[]; // default: null
}

export interface UnparseObject {
    fields: any[];
    data: string | any[];
}

export interface ParseError {
    type: string; // A generalization of the error
    code: string; // Standardized error code
    message: string; // Human-readable details
    row: number; // Row index of parsed data where error is
}

export interface ParseMeta {
    delimiter: string; // Delimiter used
    linebreak: string; // Line break sequence used
    aborted: boolean; // Whether process was aborted
    fields?: string[]; // Array of field names
    truncated: boolean; // Whether preview consumed all input
    cursor: number;
}

/**
 * data: is an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name.
 * errors: is an array of errors
 * meta: contains extra information about the parse, such as delimiter used, the newline sequence, whether the process was aborted, etc.
 * Properties in this object are not guaranteed to exist in all situations
 */
export interface ParseResult<T> {
    data: T[];
    errors: ParseError[];
    meta: ParseMeta;
}
