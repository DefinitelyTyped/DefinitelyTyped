// Type definitions for comment-json 1.1
// Project: https://github.com/kaelzhang/node-comment-json
// Definitions by: Jason Dent <https://github.com/Jason3S>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Reviver = (k: number | string, v: any) => any;

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param json A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * @param removes_comments If true, the comments won't be maintained, which is often used when we want to get a clean object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export function parse(json: string, reviver?: Reviver, removes_comments?: boolean): any;

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results or an array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
export function stringify(value: any, replacer?: ((key: string, value: any) => any) | Array<number | string> | null, space?: string | number): string;
