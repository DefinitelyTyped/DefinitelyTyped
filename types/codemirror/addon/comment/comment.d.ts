// Type definitions for codemirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Nikolaj Kappler <https://github.com/nkappler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_comment

// Todo: add 'toggleComment' command, once command type definitions exist in main definitions

import * as CodeMirror from "codemirror";

declare module "codemirror" {

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
        blockCommentStart?: string;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        blockCommentEnd?: string;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        blockCommentLead?: string;
        /** Override the [comment string properties](https://codemirror.net/doc/manual.html#mode_comment) of the mode with custom comment strings. */
        lineComment?: string;
        /** A string that will be inserted after opening and leading markers, and before closing comment markers. Defaults to a single space. */
        padding?: string;
        /** Whether, when adding line comments, to also comment lines that contain only whitespace. */
        commentBlankLines?: boolean;
        /** When adding line comments and this is turned on, it will align the comment block to the current indentation of the first line of the block. */
        indent?: boolean;
        /** When block commenting, this controls whether the whole lines are indented, or only the precise range that is given. Defaults to `true`. */
        fullLines?: boolean;
    }
}
