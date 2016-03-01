// Type definitions for jQuery-truncate-html.js 
// Project: https://github.com/kbwood/timeentry
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface ITruncateOptions{
    length?: number;
    stripTags?: boolean;
    words?: boolean;
    noBreaks?: boolean;
    ellipsis?: string;
}

interface jQuery{
    truncate(options: ITruncateOptions) : jQuery;
}

interface JQueryStatic {
    truncate(html: string, options: ITruncateOptions) : string;
}
