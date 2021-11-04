// Type definitions for json-parse-helpfulerror 1.0
// Project: https://github.com/smikes/json-parse-helpfulerror
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export function parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
