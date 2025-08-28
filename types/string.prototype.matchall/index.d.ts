/**
 * Matches a string with a regular expression, and returns an iterable of matches
 * containing the results of that search.
 * @param str string to match
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
declare function matchAll(str: string, regexp: string | RegExp): IterableIterator<RegExpExecArray>;

declare namespace matchAll {
    function shim(): void;
}

export = matchAll;
