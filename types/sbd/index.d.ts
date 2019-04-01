// Type definitions for sbd 1.0
// Project: http://github.com/tessmore/sbd
// Definitions by: Brian Cort <https://github.com/thatcort>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    newline_boundaries?: boolean;
    html_boundaries?: boolean;
    sanitize?: boolean;
    allowed_tags?: false | string[];
    preserve_whitespace?: boolean;
    abbreviations?: string[];
}

export function sentences(text: string, options?: Options): string[];
