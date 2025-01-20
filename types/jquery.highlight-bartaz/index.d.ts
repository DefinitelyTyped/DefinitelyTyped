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
