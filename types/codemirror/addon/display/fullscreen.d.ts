// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    interface EditorConfiguration {
        /**
         * When set to true, will make the editor full-screen (as in, taking up the whole browser window).
         * Depends on fullscreen.css
         * @see {@link https://codemirror.net/doc/manual.html#addon_fullscreen}
         * @default false
         */
        fullScreen?: boolean;
    }
}
