// Type definitions for jquery.highlight.js
// Project: https://github.com/bartaz/sandbox.js/blob/master/jquery.highlight.js
// Definitions by: Stefan Profanter <https://github.com/Pro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    unhighlight(options?: {
        element?: string | undefined;
        className?: string | undefined;
    }): JQuery;
    highlight(words: string | string[], options?: {
        element?: string | undefined;
        className?: string | undefined;
        caseSensitive?: boolean | undefined;
        wordsOnly?: boolean | undefined;
    }): JQuery;
}
