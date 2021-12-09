import '../../';

declare module '../../' {
    interface Editor {
        /** Tries to uncomment the current selection, and if that fails, line-comments it. */
        toggleComment(options?: CommentOptions): void;
        /** Set the lines in the given range to be line comments. Will fall back to `blockComment` when no line comment style is defined for the mode. */
        lineComment(from: Position, to: Position, options?: CommentOptions): void;
        /** Wrap the code in the given range in a block comment. Will fall back to `lineComment` when no block comment style is defined for the mode. */
        blockComment(from: Position, to: Position, options?: CommentOptions): void;
        /** Try to uncomment the given range. Returns `true` if a comment range was found and removed, `false` otherwise. */
        uncomment(from: Position, to: Position, options?: CommentOptions): boolean;
    }

    interface CommentOptions {
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        blockCommentStart?: string | undefined;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        blockCommentEnd?: string | undefined;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        blockCommentLead?: string | undefined;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        lineComment?: string | undefined;
        /** A string that will be inserted after opening and leading markers, and before closing comment markers. Defaults to a single space. */
        padding?: string | null | undefined;
        /** Whether, when adding line comments, to also comment lines that contain only whitespace. */
        commentBlankLines?: boolean | undefined;
        /** When adding line comments and this is turned on, it will align the comment block to the current indentation of the first line of the block. */
        indent?: boolean | undefined;
        /** When block commenting, this controls whether the whole lines are indented, or only the precise range that is given. Defaults to `true`. */
        fullLines?: boolean | undefined;
    }

    interface CommandActions {
        toggleComment(cm: Editor): void;
    }
}
