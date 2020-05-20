/*
 * Encoding utilities.
 * https://docs.k6.io/docs/k6encoding
 */

/**
 * Base64 encode a string.
 * https://docs.k6.io/docs/b64encode-input-encoding
 * @param input - String to encode.
 * @param encoding - Base64 variant.
 * @returns Base64 encoded string.
 * @public
 */
export function b64decode(input: string, encoding?: Base64Variant): string;

/**
 * Base64 decode a string.
 * https://docs.k6.io/docs/b64decode-input-encoding
 * @param input - Base64 encoded string.
 * @param encoding - Base64 variant.
 * @returns Decoded string.
 * @public
 */
export function b64encode(input: string, encoding?: Base64Variant): string;

/**
 * Base64 variant.
 * @public
 */
export type Base64Variant = 'std' | 'rawstd' | 'url' | 'rawurl';
