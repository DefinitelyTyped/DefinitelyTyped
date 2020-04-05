// Type definitions for buffer-json 2.0
// Project: https://github.com/jprichardson/buffer-json
// Definitions by: chroventer <https://github.com/chroventer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
 * @param value The value to convert to a JSON string.
 * @param space A String or Number object that's used to insert white space into the output JSON string for readability purposes.
 * If this is a Number, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used.
 * If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used.
 * @return A JSON string representing the given value.
 */
export function stringify(value: any, space?: string | number): string;

/**
 * Parses a JSON string, constructing the JavaScript value or object described by the string.
 * An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
 * @param text The string to parse as JSON.
 * @return The `Object` corresponding to the given JSON text.
 */
export function parse(text: string): any;

/**
 * A function that transform the value computed by parsing before being returned.
 * @param key
 * @param value
 */
export function replacer(key: string, value: string): any;

/**
 * A function that alters the behavior of the stringification process.
 * @param key
 * @param value
 */
export function reviver(key: string, value: any): any;
