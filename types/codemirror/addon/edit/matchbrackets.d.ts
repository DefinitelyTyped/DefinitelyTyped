import "../../";

declare module "../../" {
    interface MatchBrackets {
        /**
         * Only use the character after the start position, never the one before it.
         */
        afterCursor?: boolean | undefined;

        /**
         * Causes only matches where both brackets are at the same side of the start position to be considered.
         */
        strict?: boolean | undefined;

        /**
         * Stop after scanning this amount of lines without a successful match. Defaults to 1000.
         */
        maxScanLines?: number | undefined;

        /**
         * Ignore lines longer than this. Defaults to 10000.
         */
        maxScanLineLength?: number | undefined;

        /**
         * Don't highlight a bracket in a line longer than this. Defaults to 1000.
         */
        maxHighlightLineLength?: number | undefined;
    }

    interface EditorConfiguration {
        //  When set to true or an options object, causes matching brackets to be highlighted whenever the cursor is next to them.
        matchBrackets?: MatchBrackets | boolean | undefined;
    }
}
