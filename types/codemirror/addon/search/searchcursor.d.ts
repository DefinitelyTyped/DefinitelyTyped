import '../../';

declare module '../../' {
    interface DocOrEditor {
        /**
         * This method can be used to implement search/replace functionality.
         *  `query`: This can be a regular * expression or a string (only strings will match across lines -
         *          if they contain newlines).
         *  `start`: This provides the starting position of the search. It can be a `{line, ch} object,
         *          or can be left off to default to the start of the document
         *  `caseFold`: This is only relevant when matching a string. IT will cause the search to be case-insenstive
         */
        getSearchCursor(query: string | RegExp, start?: Position, caseFold?: boolean): SearchCursor;
    }

    interface SearchCursor {
        /**
         * Searches forward or backward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        find(reverse: boolean): boolean | RegExpMatchArray;

        /**
         * Searches forward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        findNext(): boolean | RegExpMatchArray;

        /**
         * Searches backward from the current position. The return value indicates whether a match was
         * found. If matching a regular expression, the return value will be the array returned by the match method, in case
         * you want to extract matched groups
         */
        findPrevious(): boolean | RegExpMatchArray;

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

        /** Replaces the currently found match with the given text and adjusts the cursor position to reflect the deplacement. */
        replace(text: string, origin?: string): void;
    }
}
