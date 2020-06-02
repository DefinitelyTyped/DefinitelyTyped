// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_placeholder

import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    interface EditorConfiguration {
        /**
         * Adds a placeholder option that can be used to make content appear in the editor when it is empty and not focused.
         * It can hold either a string or a DOM node. Also gives the editor a CodeMirror-empty CSS class whenever it doesn't contain any text.
         */
        placeholder?: string;
    }
}
