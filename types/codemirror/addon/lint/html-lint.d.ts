// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_lint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface LintHelper {
        html: Linter;
    }
}
