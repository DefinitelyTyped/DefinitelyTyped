// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_matchtags

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface CommandActions {
        /**
         * You can bind a key to in order to jump to the tag matching the one under the cursor.
         */
        toMatchingTag(cm: CodeMirror.Editor): void;
    }

    interface MatchTags {
        /**
         * Highlight both matching tags.
         */
        bothTags?: boolean;
    }

    interface EditorConfiguration {
        /**
         * When enabled will cause the tags around the cursor to be highlighted (using the CodeMirror-matchingtag class).
         * Depends on the addon/fold/xml-fold.js addon.
         */
        matchTags?: MatchTags | boolean;
    }
}
