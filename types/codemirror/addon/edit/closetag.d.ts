// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_closetag

import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    interface CommandActions {
        closeTag(cm: CodeMirror.Editor): void;
    }

    interface AutoCloseTags {
        /**
         * Whether to autoclose when the '/' of a closing tag is typed. (default true)
         */
        whenClosing?: boolean;

        /**
         * Whether to autoclose the tag when the final '>' of an opening tag is typed. (default true)
         */
        whenOpening?: boolean;

        /**
         * An array of tag names that should not be autoclosed. (default is empty tags for HTML, none for XML)
         */
        dontCloseTags?: Array<string>;

        /**
         * An array of tag names that should, when opened, cause a
         * blank line to be added inside the tag, and the blank line and
         * closing line to be indented. (default is block tags for HTML, none for XML)
         */
        indentTags?: Array<string>;

        /**
         * An array of XML tag names that should be autoclosed with '/>'. (default is none)
         */
        emptyTags: Array<string>;
    }

    interface EditorConfiguration {
        /**
         * Will auto-close XML tags when '>' or '/' is typed.
         * Depends on the fold/xml-fold.js addon.
         */
        autoCloseTags?: AutoCloseTags | boolean;
    }
}
