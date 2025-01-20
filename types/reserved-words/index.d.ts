export type Dialect =
    | "es3"
    | 3
    | "es5"
    | 5
    | "es2015"
    | 6
    | "es7"
    | 7
    | "es6"
    | "default"
    | "next";

export interface Keywords {
    [index: string]: {
        [index: string]: true;
    };
}

export const KEYWORDS: Keywords;

/**
 * Checks a word for being a reserved word and returns true if the provided
 * identifier string is a reserved word in some ECMAScript dialect.
 *
 * @param word word to check
 * @param dialect dialect or version
 * @param strict strict mode additionally checks whether word is a keyword or
 * future reserved word under strict mode.
 */
export function check(
    word: string,
    dialect?: Dialect,
    strict?: boolean,
): boolean;
