// Type definitions for json-to-plain-text 1.1
// Project: https://github.com/sumithemmadi/json-to-plain-text#readme
// Definitions by: sumithemmadi <https://github.com/sumithemmadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// typings/index.d.ts

interface Options {
    color?: boolean;
    spacing?: boolean;
    squareBracketsForArray?: boolean;
    doubleQuotesForKeys?: boolean;
    doubleQuotesForValues?: boolean;
}

/**
 * Convert JSON-like data or plain JavaScript objects to formatted plain text representation.
 *
 * @function jsonToPlainText
 * @param data {unknown} - The input data to convert. Can be JSON-like data or plain JavaScript objects.
 * @param options {Options} - (Optional) Configuration options for customizing the output.
 *   - color {boolean} - Whether to apply colors to the output (default: true).
 *   - spacing {boolean} - Whether to include spacing after colons (default: true).
 *   - squareBracketsForArray {boolean} - Whether to use square brackets for arrays (default: false).
 *   - doubleQuotesForKeys {boolean} - Whether to use double quotes for object keys (default: false).
 *   - doubleQuotesForValues {boolean} - Whether to use double quotes for string values (default: false).
 * @returns {string} - The formatted plain text representation of the input data.
 * @example
 * // Basic usage:
 * const data = { name: "John", age: 30, isEmployed: true };
 * const options = {
 *    color: true,
 *    spacing: true,
 *    squareBracketsForArray: false,
 *    doubleQuotesForKeys: false,
 *    doubleQuotesForValues: false,
 * }
 * const plainText = jsonToPlainText(data);
 * console.log(plainText);
 *
 * // Output:
 * //
 * //   name : "John",
 * //   age : 30,
 * //   isEmployed : true
 */
declare function jsonToPlainText(data: unknown, options: Options): string;

export { jsonToPlainText, Options };
