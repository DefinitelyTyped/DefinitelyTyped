/**
 * Parses JSON string.
 *
 * @param source The JSON string to parse.
 * @param _ Unused - reveserved for reviver of JSON.parse.
 * @param options.bigint If true, parse large integers as BigInt
 * @returns Object with properties:
 *   data: The parsed data.
 *   pointers: An object where each key is a JSON pointer (RFC 6901), each
 *     corresponding value is a Mapping object.
 */
export function parse(
    source: string,
    _?: unknown,
    options?: ParseOptions,
): {
    data: unknown;
    pointers: Pointers;
};

/**
 * Stringifies JavaScript data.
 *
 * @param data The data to convert to JSON.
 * @param _ Unused - reserved for replacer of JSON.stringify.
 * @param options If number or string, like the space parameter of
 *   JSON.stringify, but if it is a string, it may only contain characters
 *   space, tab ('\t'), caret return ('\r') and line feed ('\n') - using any
 *   other character throws an exception.
 * @param options.space: Like above.
 * @param options.es6: If true, stringify ES6 Maps, Sets and Typed arrays as
 *   JSON arrays.
 */
export function stringify(
    data: number | bigint | boolean | string | object,
    _?: unknown,
    options?: StringifyOptions | number | string,
): {
    json: string;
    pointers: Pointers;
};

export interface ParseOptions {
    /** Parse large integers as BigInt */
    bigint?: boolean;
}

export interface StringifyOptions {
    /**
     * Like the space parameter of JSON.stringify, but if it is a string, it may
     * only contain characters space, tab ('\t'), caret return ('\r') and line
     * feed ('\n') - using any other character throws an exception.
     */
    space?: number | string;

    /** Stringify ES6 Maps, Sets and Typed arrays (as JSON arrays). */
    es6?: boolean;
}

export interface Pointers {
    /**
     * Each key is a JSON pointer
     * ([RFC 6901](https://datatracker.ietf.org/doc/html/rfc6901)).
     */
    [pointer: string]: Mapping;
}

export interface Mapping {
    /**
     * Location of the beginning of the key in JSON string. This property is
     * only present if parent data is an object (rather than array).
     */
    key?: Location;

    /**
     * Location of the end of the key in JSON string. This property is only
     * present if parent data is an object.
     */
    keyEnd?: Location;

    /** Location of the beginning of the value in JSON string. */
    value: Location;

    /** Location of the end of the value in JSON string. */
    valueEnd: Location;
}

/** Location in the source string - zero-based numbers. */
export interface Location {
    /** Line number in JSON file. */
    line: number;

    /** Column number in JSON string (from the beginning of line. */
    column: number;

    /** Column number in JSON string (from the beginning of line. */
    pos: number;
}
