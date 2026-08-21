import * as mdurl from "mdurl";
// import * as ucmicro from "uc.micro";

export const lib: {
    mdurl: typeof mdurl;
    ucmicro: any;
};

/**
 * Merge objects
 */
export function assign(obj: any, ...from: any[]): any;

export function isString(obj: any): obj is string;

export function has(obj: any, key: keyof any): boolean;

export function unescapeMd(str: string): string;

export function unescapeAll(str: string): string;

export function isValidEntityCode(c: number): boolean;

export function fromCodePoint(c: number): string;

export function escapeHtml(str: string): string;

/**
 * Remove element from array and put another array at those position.
 * Useful for some operations with tokens
 */
export function arrayReplaceAt<T>(src: T[], pos: number, newElements: T[]): T[];

export function isSpace(code: number): boolean;

/**
 * Zs (unicode class) || [\t\f\v\r\n]
 */
export function isWhiteSpace(code: number): boolean;

/**
 * Markdown [ASCII punctuation characters](https://spec.commonmark.org/0.31.2/#ascii-punctuation-character).
 *
 * !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, \@, [, \\, ], ^, _, `, {, |, }, or ~
 *
 * {@link isPunctChar} is missing some ASCII punctuation chars in < 14.1.0.
 * This is consistent with CommonMark 0.30 and older behavior, where the range of ASCII punctuation
 * characters was not fully contained in that of
 * [Unicode punctuation characters](https://spec.commonmark.org/0.31.2/#unicode-punctuation-character).
 *
 * In >= 14.1.0 (compliant with CommonMark 0.31.2), {@link isPunctChar} includes all ASCII punctuation characters,
 * so combining {@link isMdAsciiPunct} with {@link isPunctChar} is only for backwards compatibility or
 * to try to provide a fast path for ASCII ranges.
 *
 * @see https://spec.commonmark.org/0.31.2/changes.html#part-4
 */
export function isMdAsciiPunct(code: number): boolean;

/**
 * [Unicode punctuation characters](https://spec.commonmark.org/0.31.2/#unicode-punctuation-character).
 *
 * Astral (supplementary) characters support requires >= 14.2.0.
 */
export function isPunctChar(ch: string): boolean;

/**
 * [Unicode punctuation characters](https://spec.commonmark.org/0.31.2/#unicode-punctuation-character).
 *
 * Added in 14.2.0. Supports astral (supplementary) characters.
 */
export function isPunctCharCode(code: number): boolean;

export function escapeRE(str: string): string;

/**
 * Helper to unify [reference labels].
 */
export function normalizeReference(str: string): string;
