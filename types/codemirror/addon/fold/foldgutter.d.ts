// See docs https://codemirror.net/doc/manual.html#addon_foldgutter

import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * Provides an option foldGutter, which can be used to create a gutter with markers indicating the blocks that can be folded.
         */
        foldGutter?: boolean | FoldGutterOptions;
    }

    interface FoldGutterOptions {
        /**
         * The CSS class of the gutter. Defaults to "CodeMirror-foldgutter". You will have to style this yourself to give it a width (and possibly a background).
         */
        gutter?: string;

        /**
         * A CSS class or DOM element to be used as the marker for open, foldable blocks. Defaults to "CodeMirror-foldgutter-open".
         */
        indicatorOpen?: string | Element;

        /**
         * A CSS class or DOM element to be used as the marker for folded blocks. Defaults to "CodeMirror-foldgutter-folded".
         */
        indicatorFolded?: string | Element;
    }
}
