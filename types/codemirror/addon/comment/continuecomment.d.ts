// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_continuecomment

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface ContinueCommentsOptions {
        key?: string;
        continueLineComment?: boolean;
    }

    interface EditorConfiguration {
        /**
         * Which sets whether the editor will make the next line continue a comment when you press Enter inside a comment block.
         * Can be set to a boolean to enable/disable this functionality. Set to a string, it will continue comments using a custom
         * shortcut. Set to an object, it will use the key property for a custom shortcut and the boolean continueLineComment property
         * to determine whether single-line comments should be continued (defaulting to true).
         */
        continueComments?: boolean | string | ContinueCommentsOptions;
    }
}
