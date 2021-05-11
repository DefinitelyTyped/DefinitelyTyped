/**
 * Base64 decode a string.
 * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding
 * @param input - Base64 encoded string or ArrayBuffer object.
 * @param encoding - Base64 variant.
 * @returns Decoded string.
 * @example
 * encoding.b64decode(str)
 * encoding.b64decode(str, 'rawstd')
 */
export function b64decode(input: string | ArrayBuffer, encoding?: Base64Variant): string;

/**
 * Base64 encode a string.
 * https://k6.io/docs/javascript-api/k6-encoding/b64encode-input-encoding/
 * @param input - String to encode or ArrayBuffer object.
 * @param encoding - Base64 variant.
 * @returns Base64 encoded string.
 * @example
 * encoding.b64encode(str)
 * encoding.b64encode(str, 'rawstd')
 */
export function b64encode(input: string | ArrayBuffer, encoding?: Base64Variant): string;

/**
 * Base64 variant.
 */
export type Base64Variant = 'std' | 'rawstd' | 'url' | 'rawurl';

/**
 * The encoding module provides base64 encoding/decoding.
 * https://k6.io/docs/javascript-api/k6-encoding/
 */
declare namespace encoding {
    /**
     * Base64 decode a string.
     * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding/
     * @param input - Base64 encoded string or ArrayBuffer object.
     * @param encoding - Base64 variant.
     * @returns Decoded string.
     * @example
     * encoding.b64decode(str)
     * encoding.b64decode(str, 'rawstd')
     */
    function b64decode(input: string | ArrayBuffer, encoding?: Base64Variant): string;
    /**
     * Base64 decode a string.
     * https://k6.io/docs/javascript-api/k6-encoding/b64decode-input-encoding/
     * @param input - Base64 encoded string or ArrayBuffer object.
     * @param encoding - Base64 variant.
     * @returns Decoded string.
     * @example
     * encoding.b64encode(str)
     * encoding.b64encode(str, 'rawstd')
     */
    function b64encode(input: string | ArrayBuffer, encoding?: Base64Variant): string;
}

export default encoding;
