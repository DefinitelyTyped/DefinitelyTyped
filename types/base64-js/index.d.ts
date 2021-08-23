// Type definitions for base64-js 1.3
// Project: https://github.com/beatgammit/base64-js
// Definitions by: Peter Safranek <https://github.com/pe8ter>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes a base64 string and returns length of byte array
 */
export function byteLength(encoded: string): number;
/**
 * Takes a base64 string and returns a byte array
 */
export function toByteArray(encoded: string): Uint8Array;
/**
 * Takes a byte array and returns a base64 string
 */
export function fromByteArray(bytes: Uint8Array): string;

/**
 * base64-js does basic base64 encoding/decoding in pure JS.
 */
export as namespace base64js;
