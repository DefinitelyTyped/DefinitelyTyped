// Type definitions for fuzzysearch-highlight 1.0
// Project: https://github.com/uiur/fuzzysearch-highlight
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
