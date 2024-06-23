/**
 * Converts a JavaScript object or value to a JSON string.
 * @param value The value to convert to a JSON string.
 * @param space A String or Number object that's used to insert white space into the output JSON string for readability purposes.
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
