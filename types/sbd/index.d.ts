// Type definitions for sbd 1.0
// Project: http://github.com/tessmore/sbd
// Definitions by: Brian Cort <https://github.com/thatcort>, Caroline Artz <https://github.com/carolineartz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    newline_boundaries?: boolean;
    html_boundaries?: boolean;
    html_boundaries_tags?: string[];
    sanitize?: boolean;
    allowed_tags?: false | string[];
    preserve_whitespace?: boolean;
    abbreviations?: string[];
}

export function sentences(text: string, options?: Options): string[];
