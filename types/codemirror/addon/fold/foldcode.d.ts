// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#active-line

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface FoldHelper {
        (cm: Editor, start: Position): { from: Position; to: Position };
    }
    interface Fold {
        combine(): (cm: Editor, start: Position) => Position;
        auto: FoldHelper;
    }

    var fold: Fold;

    interface FoldOptions {
        rangeFinder?: FoldHelper;
        widget?: string;
        minFoldSize?: number;
        scanUp?: boolean;
        clearOnEnter?: boolean;
    }

    interface FoldCodeOptions extends FoldOptions {
        call?: FoldHelper;
    }

    function newFoldFunction(rangeFinder: FoldHelper, widget: string): (cm: Editor, pos: Position) => void

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
