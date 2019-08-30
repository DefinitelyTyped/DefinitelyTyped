// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_search

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface CommandActions {
        find(cm: CodeMirror.Editor): void;
        findPersistent(cm: CodeMirror.Editor): void;
        findPersistentNext(cm: CodeMirror.Editor): void;
        findPersistentPrev(cm: CodeMirror.Editor): void;
        findNext(cm: CodeMirror.Editor, rev?: boolean, persistent?: boolean, immediate?: boolean): void;
        findPrev(cm: CodeMirror.Editor): void;
        clearSearch(cm: CodeMirror.Editor): void;
        replace(cm: CodeMirror.Editor): void;
        replaceAll(cm: CodeMirror.Editor, all?: boolean): void;
    }
}
