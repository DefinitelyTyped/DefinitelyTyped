/// <reference types="node"/>

import replacestream = require("replacestream");

declare function replacePattern(
    object: replacePattern.SearchObject,
    replaceTo?: replacePattern.Replacement,
): NodeJS.ReadWriteStream;

declare namespace replacePattern {
    type SearchPattern = RegExp | string;
    type Replacement = string | replacestream.ReplaceFunction;

    interface SearchOptions {
        pattern?: SearchPattern;
        replacement?: Replacement;
    }

    type SearchObject =
        | SearchOptions
        | SearchPattern
        | ReadonlyArray<SearchOptions | SearchPattern | [SearchPattern, Replacement]>;
}

export = replacePattern;
