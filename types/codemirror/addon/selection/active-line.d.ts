// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#active-line

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface StyleActiveLine {
        /**
         * Controls whether single-line selections, or just cursor selections, are styled. Defaults to false (only cursor selections).
         */
        nonEmpty: boolean;
    }

    interface EditorConfiguration {
        /**
         * When enabled gives the wrapper of the line that contains the cursor the class CodeMirror-activeline,
         * adds a background with the class CodeMirror-activeline-background, and adds the class CodeMirror-activeline-gutter to the line's gutter space is enabled.
         */
        styleActiveLine?: StyleActiveLine | boolean;
    }
}
