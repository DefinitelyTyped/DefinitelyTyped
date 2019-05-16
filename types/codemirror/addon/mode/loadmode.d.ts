// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_loadmode

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    function requireMode<T>(mode: string | Mode<T>, cont: () => void): void
    function autoLoadMode<T>(instance: Editor, mode: string | Mode<T>): void
}
