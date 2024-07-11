// See docs https://codemirror.net/doc/manual.html#addon_foldcode

import * as CodeMirror from "../../";

export type FoldRangeFinder = (cm: CodeMirror.Editor, pos: CodeMirror.Position) => CodeMirror.FoldRange | undefined;

export interface FoldHelpers {
    combine: (...finders: FoldRangeFinder[]) => FoldRangeFinder;
    auto: FoldRangeFinder;
}

declare module "../../" {
    interface Editor {
        /**
         * Helps with code folding. Adds a foldCode method to editor instances, which will try to do a code fold starting at the given line,
         * or unfold the fold that is already present.
         * The method takes as first argument the position that should be folded (may be a line number or a Pos), and as second optional argument either a
         * range-finder function, or an options object.
         */
        foldCode: (
            lineOrPos: number | Position,
            rangeFindeOrFoldOptions?: FoldRangeFinder | FoldOptions,
            force?: "fold" | "unfold",
        ) => void;
        isFolded(pos: Position): boolean | undefined;
        foldOption<K extends keyof FoldOptions>(option: K): FoldOptions[K];
    }

    interface EditorConfiguration {
        foldOptions?: FoldOptions | undefined;
    }

    interface FoldOptions {
        /**
         * The function that is used to find foldable ranges. If this is not directly passed, it will default to CodeMirror.fold.auto,
         * which uses getHelpers with a "fold" type to find folding functions appropriate for the local mode.
         * There are files in the addon/fold/ directory providing CodeMirror.fold.brace, which finds blocks in brace languages (JavaScript, C, Java, etc),
         * CodeMirror.fold.indent, for languages where indentation determines block structure (Python, Haskell), and CodeMirror.fold.xml, for XML-style languages,
         * and CodeMirror.fold.comment, for folding comment blocks.
         */
        rangeFinder?: FoldRangeFinder | undefined;

        /**
         * The widget to show for folded ranges. Can be either a string, in which case it'll become a span with class CodeMirror-foldmarker, or a DOM node.
         * To dynamically generate the widget, this can be a function that returns a string or DOM node, which will then render as described.
         * The function will be invoked with parameters identifying the range to be folded.
         */
        widget?: string | Element | ((from: Position, to: Position) => string | Element) | undefined;

        /**
         * When true (default is false), the addon will try to find foldable ranges on the lines above the current one if there isn't an eligible one on the given line.
         */
        scanUp?: boolean | undefined;

        /**
         * The minimum amount of lines that a fold should span to be accepted. Defaults to 0, which also allows single-line folds.
         */
        minFoldSize?: number | undefined;

        clearOnEnter?: boolean | undefined;
    }

    interface FoldRange {
        from: Position;
        to: Position;
    }

    interface CommandActions {
        toggleFold(cm: Editor): void;
        fold(cm: Editor): void;
        unfold(cm: Editor): void;
        foldAll(cm: Editor): void;
        unfoldAll(cm: Editor): void;
    }

    const fold: FoldHelpers;
}
