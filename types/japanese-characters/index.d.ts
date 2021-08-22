// Type definitions for japanese-characters 1.1
// Project: https://github.com/words/japanese-characters#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * a function that returns a `Boolean` indicating whether the given `inputString` contains Japanese characters
 */
export function presentIn<T>(input: T): T extends string ? boolean : false;

/**
 * an array of all the Hiragana characters
 */
export const hiragana: string[];

/**
 * an array of all the Katakana characters
 */
export const katakana: string[];
