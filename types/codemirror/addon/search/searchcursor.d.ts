// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: jacqt <https://github.com/jacqt>
//                 orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_searchcursor

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface SearchCursorOptions {
        caseFold?: boolean;
        multiline?: boolean;
    }

    interface SearchPosition extends PositionRange {
        match?: RegExpExecArray;
    }

    interface SearchCursor {
        readonly atOccurrence: boolean;
        readonly doc: Doc;
        readonly pos: SearchPosition;

        /**
         * Searches forward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        findNext(): boolean | RegExpExecArray;
        /**
         * Searches backward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        findPrevious(): boolean | RegExpExecArray;
        /**
         * Searches forward or backward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        find(reverse?: boolean): boolean | RegExpExecArray;
        /**
         * Only valid when the last call to find, findNext, or findPrevious did not return false. Returns {line, ch}
         * objects pointing the start of the match.
         */
        from(): Position;
        /**
         * Only valid when the last call to find, findNext, or findPrevious did not return false. Returns {line, ch}
         * objects pointing the end of the match.
         */
        to(): Position;
        /**
         * Replaces the currently found match with the given text and adjusts the cursor position to reflect the deplacement.
         */
        replace(newText: string, origin?: string): void;
    }

    interface Editor {
        /**
         * This method can be used to implement search/replace functionality.
         *  `query`: This can be a regular * expression or a string (only strings will match across lines -
         *          if they contain newlines).
         *  `start`: This provides the starting position of the search. It can be a `{line, ch} object,
         *          or can be left off to default to the start of the document
         *  `caseFold`: This is only relevant when matching a string. IT will cause the search to be case-insenstive
         */
        getSearchCursor(
            query?: string | RegExp,
            pos?: PositionRange,
            caseFold?: boolean | SearchCursorOptions,
        ): SearchCursor;
        selectMatches(query?: string | RegExp, caseFold?: boolean | SearchCursorOptions): void;
    }

    interface Doc {
        /**
         * This method can be used to implement search/replace functionality.
         *  `query`: This can be a regular * expression or a string (only strings will match across lines -
         *          if they contain newlines).
         *  `start`: This provides the starting position of the search. It can be a `{line, ch} object,
         *          or can be left off to default to the start of the document
         *  `caseFold`: This is only relevant when matching a string. IT will cause the search to be case-insenstive
         */
        getSearchCursor(
            query?: string | RegExp,
            pos?: PositionRange,
            caseFold?: boolean | SearchCursorOptions,
        ): SearchCursor;
    }
}
