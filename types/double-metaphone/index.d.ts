// Type definitions for double-metaphone 1.0
// Project: https://github.com/words/double-metaphone
// Definitions by: Benedikt Elssmann <https://github.com/BenediktElssmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Compute the double metaphone representation of a word.
 * @param value The input word.
 */
declare function doubleMetaphone(value: string): [string, string];
export = doubleMetaphone;
