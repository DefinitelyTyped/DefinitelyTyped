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
