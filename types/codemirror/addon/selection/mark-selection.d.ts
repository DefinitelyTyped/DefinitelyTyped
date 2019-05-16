// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_mark-selection

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface EditorConfiguration {
        /**
         * Causes the selected text to be marked with the CSS class CodeMirror-selectedtext when the styleSelectedText option is enabled.
         * Useful to change the colour of the selection (in addition to the background)
         */
        styleSelectedText?: string | boolean;
    }
}
