// Type definitions for JSONStream 1.3
// Project: http://github.com/dominictarr/JSONStream
// Definitions by: Louis Wilke <https://github.com/SoulKa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as through from 'through';

export interface JSONStream extends through.ThroughStream {
    /**
     * Emitted when a value was found for the given
     * pattern
     * @param data The value that was found
     */
    on(event: 'data', listener: (data: any) => void): this;

    /**
     * Emitted _before_ the first match of the pattern
     * @param data Everything that was parsed from the incoming
     * stream that was not matched by the given pattern
     */
    on(event: 'header', listener: (data: any) => void): this;

    /**
     * Emitted _after_ the first match of the pattern
     * @param data Everything that is parsed from the incoming
     * stream that was not matched by the given pattern
     */
    on(event: 'footer', listener: (data: any) => void): this;

    // copied from class Readable to be compatible
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

// prettier-ignore
/** Options to use for a given path/operator */
export type Options = {
    /** If true, the given path is matched globally/recursively */
    recurse?: boolean;
    /** If true, the "path" property is available on the "data" event */
    emitPath?: boolean;
    /** If true, the "key" property is available on the "data" event */
    emitKey?: boolean;
} | boolean;

/**
 * Creates a read/write stream that searches the input streamed JSON string
 * for the given pattern. Whenever a match was found it is written onto the
 * output stream which can be read by stream.on("data", data => { ... }).
 * @param pattern The pattern to search the streamed JSON for. See the
 * [npm page of JSONStream](https://www.npmjs.com/package/JSONStream) for more information
 * @param map OPTIONAL: A function to use whenever an object was found with the given
 * pattern. If the function returns a non-nullish value it is emitted via the output
 * stream. Else nothing is emitted. This functionality can either be used to modify
 * the results in the JSON and/or to filter them.
 */
export function parse(
    pattern: string | ReadonlyArray<string | Options>,
    map?: (data: any, path: string[]) => any,
): JSONStream;

/**
 * Creates a writable stream that stringifies an array.
 *
 * You may pass in custom open, close, and seperator strings. But, by default,
 * JSONStream.stringify() will create an array,
 * (with default options open='[\n', sep='\n,\n', close='\n]\n')
 */
export function stringify(): JSONStream;
export function stringify(open: string, sep: string, close: string): JSONStream;

/** If you call JSONStream.stringify(false) the elements will only be seperated by a newline. */
export function stringify(useSeperator: false): JSONStream;

/**
 * Creates a writable stream that stringifies an object.
 *
 * Very much like JSONStream.stringify, but creates a writable stream for objects instead of arrays.
 * Accordingly, open='{\n', sep='\n,\n', close='\n}\n'.
 * When you .write() to the stream you must supply an array with [ key, data ] as the first argument.
 */
export function stringifyObject(): JSONStream;
export function stringifyObject(open: string, sep: string, close: string): JSONStream;

/** If you call JSONStream.stringifyObject(false) the elements will only be seperated by a newline. */
export function stringifyObject(useSeperator: false): JSONStream;
