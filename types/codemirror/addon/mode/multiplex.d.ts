// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_multiplex

import * as CodeMirror from "codemirror";

// TODO: Fix type of inner

declare module "codemirror" {
    interface MultiplexState {
        outer: any | boolean;
        innerActive: any;
        inner: any;
    }

    function multiplexingMode(outer: any, ...other: any[]): Mode<MultiplexState>;
}
