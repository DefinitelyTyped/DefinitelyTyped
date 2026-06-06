declare namespace highlight {
    interface Options {
        tag: string;
    }
}

/**
 * Highlight fuzzy matched text with html.
 */
declare function highlight(query: string, text: string, opts?: highlight.Options): string | null;

export = highlight;
