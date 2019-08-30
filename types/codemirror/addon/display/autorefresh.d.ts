// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_autorefresh

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface EditorConfiguration {
        /**
         * This addon can be useful when initializing an editor in a hidden DOM node, in cases where it is difficult
         * to call refresh when the editor becomes visible. It defines an option autoRefresh which you can set to true
         * to ensure that, if the editor wasn't visible on initialization, it will be refreshed the first time it becomes
         * visible. This is done by polling every 250 milliseconds (you can pass a value like {delay: 500} as the option
         * value to configure this). Note that this addon will only refresh the editor once when it first becomes visible,
         * and won't take care of further restyling and resizing.
         */
        autoRefresh?: boolean;
    }
}
