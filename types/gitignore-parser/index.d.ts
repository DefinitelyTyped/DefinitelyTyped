/**
 * Compile the given `.gitignore` content (not filename!)
 * and return an object with `accepts`, `denies` and `maybe` methods.
 * These methods each accepts a single filename and determines whether
 * they are acceptable or unacceptable according to the `.gitignore` definition.
 */
export function compile(
    content: string,
): {
    accepts(input: string): boolean;
    denies(input: string): boolean;
    maybe(input: string): boolean;
};

/**
 * Parse the given `.gitignore` content and return an array
 * containing two further arrays - positives and negatives.
 * Each of these two arrays in turn contains two regexps, one
 * strict and one for 'maybe'.
 */
export function parse(content: string): [GitignoreParseResultSet, GitignoreParseResultSet];

export type GitignoreParseResultSet = [RegExp, RegExp]; // [strict, maybe]
