// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_rulers

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface Ruler {
        className?: string;
        color?: string;
        lineStyle?: string;
        width?: string | number;
    }

    interface EditorConfiguration {
        /**
         * Which can be used to show one or more vertical rulers in the editor. The option, if defined, should be given an array
         * of {column [, className, color, lineStyle, width]} objects or numbers (which indicate a column). The ruler will be
         * displayed at the column indicated by the number or the column property. The className property can be used to assign a
         * custom style to a ruler.
         */
        rulers?: false | (number | Ruler)[];
    }
}
