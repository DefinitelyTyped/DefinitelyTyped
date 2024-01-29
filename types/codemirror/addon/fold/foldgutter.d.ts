// See docs https://codemirror.net/doc/manual.html#addon_foldgutter

import "../../";

declare module "../../" {
    interface EditorConfiguration {
        /**
         * Provides an option foldGutter, which can be used to create a gutter with markers indicating the blocks that can be folded.
         */
        foldGutter?: boolean | FoldGutterOptions | undefined;
    }

    interface FoldRange {
        from: Position;
        to: Position;
    }

    interface FoldGutterOptions {
        /**
         * The CSS class of the gutter. Defaults to "CodeMirror-foldgutter". You will have to style this yourself to give it a width (and possibly a background).
         */
        gutter?: string | undefined;

        /**
         * A CSS class or DOM element to be used as the marker for open, foldable blocks. Defaults to "CodeMirror-foldgutter-open".
         */
        indicatorOpen?: string | Element | undefined;

        /**
         * A CSS class or DOM element to be used as the marker for folded blocks. Defaults to "CodeMirror-foldgutter-folded".
         */
        indicatorFolded?: string | Element | undefined;

        /*
         * The range-finder function to use when determining whether something can be folded.
         * When not given, CodeMirror.fold.auto will be used as default.
         */
        rangeFinder?: (cm: Editor, pos: Position) => FoldRange | undefined;
    }
}
