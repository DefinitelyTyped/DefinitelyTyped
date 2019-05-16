// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_selection-pointer

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface EditorConfiguration {
        /**
         * Which you can use to control the mouse cursor appearance when hovering over the selection. It can be set to a string,
         * like "pointer", or to true, in which case the "default" (arrow) cursor will be used.
         */
        selectionPointer?: string | boolean;
    }
}
