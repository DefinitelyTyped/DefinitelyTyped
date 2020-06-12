// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://github.com/codemirror/CodeMirror/blob/master/addon/scroll/scrollpastend.js

import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    interface EditorConfiguration {
        /**
         * When the end of the file is reached it allows you to keep scrolling so that your last few lines of code are not stuck at the bottom of the editor.
         */
        scrollPastEnd?: boolean;
    }
}
