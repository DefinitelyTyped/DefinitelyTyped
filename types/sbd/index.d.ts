export interface Options {
    newline_boundaries?: boolean | undefined;
    html_boundaries?: boolean | undefined;
    html_boundaries_tags?: string[] | undefined;
    sanitize?: boolean | undefined;
    allowed_tags?: false | string[] | undefined;
    preserve_whitespace?: boolean | undefined;
    abbreviations?: string[] | undefined;
}

export function sentences(text: string, options?: Options): string[];
