// Type definitions for base-64 0.1
// Project: https://github.com/mathiasbynens/base64
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const version: string;

/**
 * This function takes a byte string (the input parameter) and encodes it according to base64.
 * The input data must be in the form of a string containing only characters
 * in the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
 * The base64.encode() function is designed to be fully compatible
 * with btoa() as described in the HTML Standard.
 * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-btoa
 */
export function encode(input: string): string;
/**
 * This function takes a base64-encoded string (the input parameter) and decodes it.
 * The return value is in the form of a string containing only characters in
 * the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
 * The base64.decode() function is designed to be fully compatible
 * with atob() as described in the HTML Standard.
 * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-atob
 */
export function decode(input: string): string;
