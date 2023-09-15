// Type definitions for jQuery-truncate-html.js
// Project: https://github.com/kbwood/timeentry
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface TruncateOptions {
    length?: number | undefined;
    stripTags?: boolean | undefined;
    words?: boolean | undefined;
    noBreaks?: boolean | undefined;
    ellipsis?: string | undefined;
}

interface JQuery {
    truncate(options: TruncateOptions): JQuery;
}

interface JQueryStatic {
    truncate(html: string, options: TruncateOptions): string;
}
