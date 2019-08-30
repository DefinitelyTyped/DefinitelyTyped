// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_fullscreen

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface EditorConfiguration {
        /**
         * When set to true, will make the editor full-screen (as in, taking up the whole browser window).
         * Depends on fullscreen.css.
         */
        fullScreen?: boolean;
    }
}
