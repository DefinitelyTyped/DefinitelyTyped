// Type definitions for codemirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: Andrew Ritchie <https://github.com/ritchiea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://github.com/codemirror/CodeMirror/blob/master/addon/merge/merge.js

import * as CodeMirror from 'codemirror';

declare module 'codemirror' {
    interface CommandActions {
        /** Move cursor to the next diff */
        goNextDiff(cm: CodeMirror.Editor): void;

        /** Move cursor to the previous diff */
        goPrevDiff(cm: CodeMirror.Editor): void;
    }
}
