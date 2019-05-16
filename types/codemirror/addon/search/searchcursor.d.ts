// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#active-line

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface SearchCursorOptions {
        caseFold?: boolean;
        multiline?: boolean;
    }

    interface SearchCursor {
        atOccurrence: boolean;
        doc: Doc;
        pos: PositionRange;

        findNext(): boolean;
        findPrevious(): boolean;
        find(reverse?: boolean): boolean;
        from(): Position;
        to(): Position;
        replace(newText: string, origin?: string): void;
    }

    interface Editor {
        getSearchCursor(
            query?: string | RegExp,
            pos?: PositionRange,
            caseFold?: boolean | SearchCursorOptions
        ): SearchCursor;
        selectMatches(
            query?: string | RegExp,
            caseFold?: boolean | SearchCursorOptions
        ): void;
    }

    interface Doc {
        getSearchCursor(
            query?: string | RegExp,
            pos?: PositionRange,
            caseFold?: boolean | SearchCursorOptions
        ): SearchCursor;
    }
}
