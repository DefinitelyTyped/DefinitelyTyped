// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_trailingspace

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface MatchTags {
        /**
         * Highlight both matching tags.
         */
        bothTags?: boolean;
    }

    interface EditorConfiguration {
        /**
         * When enabled, adds the CSS class cm-trailingspace to stretches of whitespace at the end of lines.
         */
        showTrailingSpace?: MatchTags | boolean;
    }
}
