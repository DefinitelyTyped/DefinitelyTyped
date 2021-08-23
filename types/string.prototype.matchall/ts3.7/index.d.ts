/**
 * Matches a string with a regular expression, and returns an iterable of matches
 * containing the results of that search.
 * @param str string to match
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
declare function matchAll(str: string, regexp: string | RegExp): IterableIterator<RegExpMatchArray>;

declare namespace matchAll {
    function shim(): void;
}

declare global {
    interface String {
        /**
         * Matches a string with a regular expression, and returns an iterable of matches
         * containing the results of that search.
         * @param regexp A variable name or string literal containing the regular expression pattern and flags.
         */
        matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>;
    }
}

export = matchAll;
