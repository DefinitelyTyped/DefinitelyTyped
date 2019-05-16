// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_foldcode

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface FoldFunction {
        (cm: Editor, start: Position): PositionRange;
    }
    interface FoldHelper {
        combine(): (cm: Editor, start: Position) => Position;
        auto: FoldFunction;
    }

    var fold: FoldHelper;

    interface FoldOptions {
        rangeFinder?: FoldFunction;
        widget?: string;
        minFoldSize?: number;
        scanUp?: boolean;
        clearOnEnter?: boolean;
    }

    interface FoldCodeOptions extends FoldOptions {
        call?: FoldFunction;
    }

    function newFoldFunction(rangeFinder: FoldFunction, widget: string): (cm: Editor, pos: Position) => void

    interface EditorConfiguration {
        /**
         * When set to true, will make the editor full-screen (as in, taking up the whole browser window).
         * Depends on fullscreen.css.
         */
        foldOptions?: FoldOptions;
    }

    interface Editor {
        foldCode(pos: number | Position, options: FoldCodeOptions): void;
        isFolded(pos: Position): boolean;
        foldOption(options: FoldOptions, name: string): any;
    }

    interface CommandActions {
      /** Flip the fold tag */
      toggleFold(cm: Editor): void;
      fold(cm: Editor): void;
      unfold(cm: Editor): void;
      foldAll(cm: Editor): void;
      unfoldAll(cm: Editor): void;
    }
}
