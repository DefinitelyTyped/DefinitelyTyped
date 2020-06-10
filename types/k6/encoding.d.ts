/**
 * Base64 decode a string.
 * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding
 * @param input - Base64 encoded string.
 * @param encoding - Base64 variant.
 * @returns Decoded string.
 */
export function b64decode(input: string, encoding?: Base64Variant): string;

/**
 * Base64 encode a string.
 * https://k6.io/docs/javascript-api/k6-encoding/b64encode-input-encoding
 * @param input - String to encode.
 * @param encoding - Base64 variant.
 * @returns Base64 encoded string.
 */
export function b64encode(input: string, encoding?: Base64Variant): string;

/**
 * Base64 variant.
 */
export type Base64Variant = 'std' | 'rawstd' | 'url' | 'rawurl';

/**
 * The encoding module provides base64 encoding/decoding.
 * https://k6.io/docs/javascript-api/k6-encoding
 */
declare namespace encoding {
    /**
     * Base64 decode a string.
     * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding
     * @param input - Base64 encoded string.
     * @param encoding - Base64 variant.
     * @returns Decoded string.
     */
    function b64decode(input: string, encoding?: Base64Variant): string;
    /**
     * Base64 decode a string.
     * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding
     * @param input - Base64 encoded string.
     * @param encoding - Base64 variant.
     * @returns Decoded string.
     */
    function b64encode(input: string, encoding?: Base64Variant): string;
}

export default encoding;
