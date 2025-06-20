export interface Base64Encoding {
    /**
     * Encodes a string value to its equivalent string representation that is encoded with base-64.
     * https://mokapi.io/docs/javascript-api/mokapi-encoding/base64-encode
     * @param input input - The input string to base64 encode.
     * @returns The base64 encoding of the input string.
     * @example
     * export default function() {
     *   console.log(`The base64 encoding of 'hello world' is: ${base.encode('hello world')}`)
     * }
     */
    encode(input: string | ArrayBuffer): string;

    /**
     * Decodes a string value that is encoded with base-64 to its equivalent unencoded string representation.
     * @param input input - The base64 input string to decode.
     * @returns  The base64 decoded version of the input string.
     * @example
     * export default function() {
     *   console.log(`The base64 decoded string of 'aGVsbG8gd29ybGQ=' is: ${base.decode('aGVsbG8gd29ybGQ=')}`)
     * }
     */
    decode(input: string): string;
}

export const base64: Base64Encoding;


