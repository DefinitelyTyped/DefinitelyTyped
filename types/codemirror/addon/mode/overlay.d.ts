// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_overlay

import * as CodeMirror from "codemirror";

// TODO: Fix type of streamSeen

declare module "codemirror" {
    interface OverlayState {
        base: any | boolean;
        overlay: any | boolean;
        basePos: number | Position;
        baseCur: string | null;
        overlayPos: number | Position;
        overlayCur: string | null;
        streamSeen: any;
    }

    function overlayMode(base: Mode<any>, overlay: Mode<any>, combine?: boolean): Mode<OverlayState>;
}
