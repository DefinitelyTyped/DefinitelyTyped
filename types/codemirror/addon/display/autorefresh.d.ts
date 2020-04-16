// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: mtgto <https://github.com/mtgto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_autorefresh

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface EditorConfiguration {
        // if true, it will be refreshed the first time the editor becomes visible.
        // you can pass delay (msec) time as polling duration
        autoRefresh?: boolean | { delay: number };
    }
}
