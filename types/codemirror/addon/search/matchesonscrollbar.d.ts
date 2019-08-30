// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_matchesonscrollbar

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface SearchAnnotationOptions extends AnnotateScrollbarOptions {
        multiline?: boolean;
        maxMatches?: number;
    }

    interface SearchAnnotation {
        options: SearchAnnotationOptions;
        annotation: AnnotationScrollbar;
        query?: string | RegExp;
        caseFold?: boolean | SearchCursorOptions;
        gap: { from: number; to: number };
        matches: Annotation[];
        update: number;

        findMatches(): void;
        onChange(change: EditorChange): void;
        updateAfterChange(): void;
        clear(): void;
    }

    interface Editor {
        /**
         * Which should be given a query (string or regular expression), optionally a case-fold flag (only applicable for strings),
         * and optionally a class name (defaults to CodeMirror-search-match) as arguments. When called, matches of the given query
         * will be displayed on the editor's vertical scrollbar. The method returns an object with a clear method that can be called
         * to remove the matches.
         */
        showMatchesOnScrollbar(
            query: string | RegExp,
            caseFold: boolean | SearchCursorOptions,
            options: string | SearchAnnotationOptions
        ): SearchAnnotation;
    }
}
