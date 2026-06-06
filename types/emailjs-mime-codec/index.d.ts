//// From "./charset.d.ts"
/**
 * Encodes an unicode string into an Uint8Array object as UTF-8
 *
 * @param str String to be encoded
 * @return UTF-8 encoded typed array
 */
export function encode(str: string): Uint8Array;

/**
 * Decodes a string from Uint8Array to an unicode string using specified encoding
 *
 * @param buf Binary data to be decoded
 * @param fromCharset data is decoded into string using this charset
 * @return Decoded string
 */
export function decode(buf: Uint8Array, fromCharset?: string): string;

/**
 * Convert a string from specific encoding to UTF-8 Uint8Array
 *
 * @param data Data to be encoded
 * @param fromCharset encoding for the string (optional for data of type String)
 * @return UTF-8 encoded typed array
 */
export function convert(data: string | Uint8Array, fromCharset: string): Uint8Array;

//// From "./mimecodec.d.ts"

/**
 * Encodes all non printable and non ascii bytes to =XX form, where XX is the
 * byte value in hex. This function does not convert linebreaks etc. it
 * only escapes character sequences
 *
 * @param data Either a string or an Uint8Array
 * @param [fromCharset='UTF-8'] Source encoding
 * @return Mime encoded string
 */
export function mimeEncode(data?: string | Uint8Array, fromCharset?: string): string;

/**
 * Decodes mime encoded string to an unicode string
 *
 * @param str Mime encoded string
 * @param [fromCharset='UTF-8'] Source encoding
 * @return Decoded unicode string
 */
export function mimeDecode(str?: string, fromCharset?: string): string;

/**
 * Encodes a string or an typed array of given charset into unicode
 * base64 string. Also adds line breaks
 *
 * @param data String or typed array to be base64 encoded
 * @param Initial charset, e.g. 'binary'. Defaults to 'UTF-8'
 * @return Base64 encoded string
 */
export function base64Encode(data: string | Uint8Array, fromCharset?: string): string;

/**
 * Decodes a base64 string of any charset into an unicode string
 *
 * @param str Base64 encoded string
 * @param [fromCharset='UTF-8'] Original charset of the base64 encoded string
 * @return Decoded unicode string
 */
export function base64Decode(str: string, fromCharset?: string): string;

/**
 * Encodes a string or an Uint8Array into a quoted printable encoding
 * This is almost the same as mimeEncode, except line breaks will be changed
 * as well to ensure that the lines are never longer than allowed length
 *
 * @param data String or an Uint8Array to mime encode
 * @param [fromCharset='UTF-8'] Original charset of the string
 * @return Mime encoded string
 */
export function quotedPrintableEncode(data?: string | Uint8Array, fromCharset?: string): string;

/**
 * Decodes a string from a quoted printable encoding. This is almost the
 * same as mimeDecode, except line breaks will be changed as well
 *
 * @param str Mime encoded string to decode
 * @param [fromCharset='UTF-8'] Original charset of the string
 * @return Mime decoded string
 */
export function quotedPrintableDecode(str?: string, fromCharset?: string): string;

/**
 * Encodes a string or an Uint8Array to an UTF-8 MIME Word
 *   https://tools.ietf.org/html/rfc2047
 *
 * @param data String to be encoded
 * @param mimeWordEncoding='Q' Encoding for the mime word, either Q or B
 * @param [fromCharset='UTF-8'] Source sharacter set
 * @return Single or several mime words joined together
 */
export function mimeWordEncode(data: string | Uint8Array, mimeWordEncoding?: string, fromCharset?: string): string;

/**
 * Finds word sequences with non ascii text and converts these to mime words
 *
 * @param data String to be encoded
 * @param mimeWordEncoding='Q' Encoding for the mime word, either Q or B
 * @param [fromCharset='UTF-8'] Source sharacter set
 * @return String with possible mime words
 */
export function mimeWordsEncode(data?: string | Uint8Array, mimeWordEncoding?: string, fromCharset?: string): string;

/**
 * Decode a complete mime word encoded string
 *
 * @param str Mime word encoded string
 * @return Decoded unicode string
 */
export function mimeWordDecode(str?: string): string;

/**
 * Decode a string that might include one or several mime words
 *
 * @param str String including some mime words that will be encoded
 * @return Decoded unicode string
 */
export function mimeWordsDecode(str?: string): string;

/**
 * Folds long lines, useful for folding header lines (afterSpace=false) and
 * flowed text (afterSpace=true)
 *
 * @param str String to be folded
 * @param afterSpace If true, leave a space in the end of a line
 * @return String with folded lines
 */
export function foldLines(str?: string, afterSpace?: boolean): string;

/**
 * Encodes and folds a header line for a MIME message header.
 * Shorthand for mimeWordsEncode + foldLines
 *
 * @param key Key name, will not be encoded
 * @param value Value to be encoded
 * @param [fromCharset='UTF-8'] Character set of the value
 * @return encoded and folded header line
 */
export function headerLineEncode(key: string, value: string | Uint8Array, fromCharset?: string): string;

/**
 * The result is not mime word decoded, you need to do your own decoding based
 * on the rules for the specific header key
 *
 * @param headerLine Single header line, might include linebreaks as well if folded
 * @return And object of {key, value}
 */
export function headerLineDecode(headerLine?: string): {
    key: string;
    value: string;
};

/**
 * Parses a block of header lines. Does not decode mime words as every
 * header might have its own rules (eg. formatted email addresses and such)
 *
 * @param headers Headers string
 * @return An object of headers, where header keys are object keys. NB! Several values with the same key make up an Array
 */
export function headerLinesDecode(headers: string): Record<string, string | string[]>;

/**
 * Parses a header value with key=value arguments into a structured
 * object.
 *
 *   parseHeaderValue('content-type: text/plain; CHARSET='UTF-8'') ->
 *   {
 *     'value': 'text/plain',
 *     'params': {
 *       'charset': 'UTF-8'
 *     }
 *   }
 *
 * @param str Header value
 * @return Header value as a parsed structure
 */
export function parseHeaderValue(str: string): {
    value: string | false;
    params: Record<string, string>;
};

/**
 * Encodes a string or an Uint8Array to an UTF-8 Parameter Value Continuation encoding (rfc2231)
 * Useful for splitting long parameter values.
 *
 * For example
 *      title="unicode string"
 * becomes
 *     title*0*="utf-8''unicode"
 *     title*1*="%20string"
 *
 * @param data String to be encoded
 * @param [maxLength=50] Max length for generated chunks
 * @param [fromCharset='UTF-8'] Source sharacter set
 * @return A list of encoded keys and headers
 */
export function continuationEncode(
    key: string | Uint8Array,
    data: string,
    maxLength: number,
    fromCharset?: string,
): Array<Record<string, unknown>>;
