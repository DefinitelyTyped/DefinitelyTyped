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
