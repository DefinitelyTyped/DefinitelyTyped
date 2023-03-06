// Type definitions for html-entities-decoder 1.0
// Project: https://github.com/xinglie/html-entities-decoder
// Definitions by: Changhyun Baek <https://github.com/paikwiki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Decode HTML entity string.
 *
 * @param str The string should be included encoded HTML entities
 * @return The string decoded HTML entities
 * @example
 * import decode from 'html-entities-decoder'
 * const input = '1 &copy; 2 &#34;'
 * const output = decode(input) // 1 © 2 "
 */
 declare function htmlEntitiesDecoder(str: string): string;

 export = htmlEntitiesDecoder;
