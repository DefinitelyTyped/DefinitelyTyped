// Type definitions for jQuery-truncate-html.js
// Project: https://github.com/kbwood/timeentry
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface TruncateOptions{
    length?: number;
    stripTags?: boolean;
    words?: boolean;
    noBreaks?: boolean;
    ellipsis?: string;
}

interface JQuery{
    truncate(options: TruncateOptions) : JQuery;
}

interface JQueryStatic {
    truncate(html: string, options: TruncateOptions) : string;
}
