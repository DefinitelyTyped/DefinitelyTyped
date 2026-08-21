/**
 * Encodes string to UTF-7, see RFC 2152
 * @param str String to encode
 * @param mask (optional) Characters to encode, defaults to RFC 2152 Set D
 */
export function encode(str: string, mask?: string): string;

/**
 * Encodes string to UTF-7 with all optionals, see RFC 2152
 * @param str String to encode
 */
export function encodeAll(str: string): string;

/**
 * Decodes UTF-7 string, see RFC 2152
 * @param str String to decode
 */
export function decode(str: string): string;

/**
 * Encodes string to UTF-7 with all optionals, see RFC 3501
 *
 * All printable ASCII chars except for & must be represented by themselves.
 * We replace subsequent non-representable chars with their escape sequence.
 *
 * @param str String to encode
 */
export function imapEncode(str: string): string;

/**
 * Decodes UTF-7 string, see RFC 3501
 * @param str String to decode
 */
export function imapDecode(str: string): string;
