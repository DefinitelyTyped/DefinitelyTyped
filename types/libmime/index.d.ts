/// <reference types="node" />

export type MimeWordEncoding = "Q" | "B";

/**
 * Encodes a string into mime [encoded word](http://en.wikipedia.org/wiki/MIME#Encoded-Word) format.
 *
 * @param data Value to be encoded.
 * @param mimeWordEncoding Encoding for the mime word. Defaults to `'Q'`.
 * @param maxLength If set, split mime words into several chunks if needed. Defaults to `0`.
 * @returns Single or several mime words joined together.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.encodeWord('See on õhin test', 'Q');
 * // --> =?UTF-8?Q?See_on_=C3=B5hin_test?=
 */
export function encodeWord(data: string | Buffer, mimeWordEncoding?: MimeWordEncoding, maxLength?: number): string;

/**
 * Encodes non ascii sequences in a string to mime words.
 *
 * @param data Value to be encoded.
 * @param mimeWordEncoding Encoding for the mime word. Defaults to `'Q'`.
 * @param maxLength If set, split mime words into several chunks if needed.
 * @param fromCharset Source sharacter set. Defaults to `'UTF-8'`.
 * @returns String with possible mime words.
 */
export function encodeWords(
    data: string | Buffer,
    mimeWordEncoding?: MimeWordEncoding,
    maxLength?: number,
    fromCharset?: string,
): string;
export function encodeWords(data: string | Buffer, mimeWordEncoding?: MimeWordEncoding, fromCharset?: string): string;

/**
 * Decode a complete mime word encoded string.
 *
 * @param charset Character set for the string.
 * @param mimeWordEncoding Mime encoding for the string.
 * @param str Mime word encoded string.
 * @returns Decoded unicode string.
 */
export function decodeWord(charset: string, mimeWordEncoding: MimeWordEncoding, str: string): string;

/**
 * Decodes a string that might include one or several mime words. If no mime words are found from the string,
 * the original string is returned.
 *
 * @param str String to be decoded.
 * @returns Decoded unicode string.
 */
export function decodeWords(str: string): string;

/**
 * Folds a long line according to the [RFC 5322](http://tools.ietf.org/html/rfc5322#section-2.1.1).
 * Mostly needed for folding header lines.
 *
 * @param str String to be folded.
 * @param lineLength Maximum length of a line. Defaults to `76`.
 * @param afterSpace If `true`, leave a space in the end of a line.
 * @returns String with folded lines.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.foldLines('Content-Type: multipart/alternative; boundary="----zzzz----"');
 * // -->
 * // Content-Type: multipart/alternative;
 * //      boundary="----zzzz----"
 */
export function foldLines(str: string, lineLength?: number, afterSpace?: boolean): string;

/**
 * Adds soft line breaks to content marked with `format=flowed` to ensure that no line
 * in the message is longer than `lineLength`.
 *
 * @param str Plaintext string that requires wrapping.
 * @param lineLength Maximum length of a line. Defaults to `76`.
 * @returns String with forced line breaks.
 */
export function encodeFlowed(str: string, lineLength?: number): string;

/**
 * Unwraps a plaintext string in `format=flowed` soft wrapping.
 *
 * @param str Plaintext string with `format=flowed` to decode.
 * @param delSp If `true`, delete leading spaces. Defaults to `false`.
 * @returns Mime decoded string.
 */
export function decodeFlowed(str: string, delSp?: boolean): string;

/**
 * Unfolds a header line and splits it to key and value pair. The value is not mime word decoded,
 * you need to do your own decoding based on the rules for the specific header key.
 *
 * @param headerLine Single header line, might include linebreaks as well if folded.
 */
export function decodeHeader(headerLine: string): { key: string; value: string };

/**
 * Parses a block of header lines. Does not decode mime words as every header might have its own
 * rules (eg. formatted email addresses and such).
 *
 * @param headers Headers string.
 */
export function decodeHeaders(headers: string): { [key: string]: string[] };

export interface StructuredHeader {
    value: string;
    params: { [key: string]: string };
}
/**
 * Parses a header value with `key=value` arguments into a structured object. Useful when dealing
 * with `content-type` and such. Continuation encoded params are joined into mime encoded words.
 *
 * @param valueString A header value without the key.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.parseHeaderValue('content-type: text/plain; CHARSET="UTF-8"');
 * // -->
 * // {
 * //     "value": "text/plain",
 * //     "params": {
 * //         "charset": "UTF-8"
 * //     }
 * // }
 */
export function parseHeaderValue(valueString: string): StructuredHeader;

/**
 * Joins structured header value together as `'value; param1=value1; param2=value2'`.
 *
 * @param structuredHeader A header value formatted with `parseHeaderValue`.
 * `filename` argument is encoded with continuation encoding if needed.
 */
export function buildHeaderValue(structuredHeader: StructuredHeader): string;

/**
 * Encodes and splits a header param value according to [RFC2231](https://tools.ietf.org/html/rfc2231#section-3)
 * Parameter Value Continuations.
 *
 * @param key Parameter key (eg. `filename`).
 * @param data Value to encode.
 * @param maxLength Maximum length of the encoded string part (not line length). Defaults to `50`.
 * @param fromCharset Source sharacter set. Defaults to `'UTF-8'`.
 * @returns A list of encoded keys and headers.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.buildHeaderParam('filename', 'filename õäöü.txt', 20);
 * // -->
 * // [
 * //   { key: 'filename*0*', value: 'utf-8\'\'filename%20' },
 * //   { key: 'filename*1*', value: '%C3%B5%C3%A4%C3%B6' },
 * //   { key: 'filename*2*', value: '%C3%BC.txt' }
 * // ]
 */
export function buildHeaderParam(
    key: string,
    data: string | Buffer,
    maxLength?: number,
    fromCharset?: string,
): Array<{ key: string; value: string }>;

/**
 * @param mimeType Content type to be checked for.
 * @returns File extension for a content type string. If no suitable extensions are found,
 * `'bin'` is used as the default extension.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.detectExtension('image/jpeg');
 * // --> 'jpeg'
 */
export function detectExtension(mimeType: string): string;

/**
 * @param extension Extension (or filename) to be checked for.
 * @returns Content type for a file extension. If no suitable content types are found,
 * `'application/octet-stream'` is used as the default content type.
 *
 * @example
 * import * as libmime from 'libmime';
 *
 * libmime.detectMimeType('logo.jpg');
 * // --> 'image/jpeg'
 */
export function detectMimeType(extension: string): string;
