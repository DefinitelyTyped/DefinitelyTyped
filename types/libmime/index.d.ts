// Type definitions for libmime 5.0
// Project: https://github.com/nodemailer/libmime
// Definitions by: Jorge Santana <https://github.com/LORDBABUINO>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Compute the absolute path of an input.
 * @param str String or Buffer to be encoded.
 * @param mimeWordEncoding Encoding for the mime word, either ! or B (default is 'Q').
 * @param maxLength If set, split mime words into several chunks if needed
 */
export function encodeWord(str: string | Buffer, mimeWordEncoding?: 'Q' | 'B', maxLength?: number): string;
