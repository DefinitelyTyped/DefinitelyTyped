// Type definitions for balanced-match 1.0
// Project: https://github.com/juliangruber/balanced-match
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Output {
    /**
     * The index of the first match of a
     */
    start: number;
    /**
     * The index of the matching b
     */
    end: number;
    /**
     * The preamble, a and b not included
     */
    pre: string;
    /**
     * The match, a and b not included
     */
    body: string;
    /**
     * The postscript, a and b not included
     */
    post: string;
}

/**
 *
 * For the first non-nested matching pair of a and b in str, return an object with those keys:
 * start the index of the first match of
 * `end` the index of the matching b
 * `pre` the preamble, a and b not included
 * `body` the match, a and b not included
 * `post` the postscript, a and b not included
 * If there's no match, `undefined` will be returned.
 * If the `str` contains more a than b / there are unmatched pairs,
 * the first match that was closed will be used.
 * For example, `{{a}` will match `['{', 'a', '']` and `{a}}` will match `['', 'a', '}']`
 */
declare function balanced(a: string | RegExp, b: string | RegExp, str: string): Output | void;

declare namespace balanced {
    /**
     * For the first non-nested matching pair of `a` and `b` in `str`,
     * return an array with indexes: `[ <a index>, <b index> ]`.
     */
    function range(a: string | RegExp, b: string | RegExp, str: string): Output | void;
}

export = balanced;
