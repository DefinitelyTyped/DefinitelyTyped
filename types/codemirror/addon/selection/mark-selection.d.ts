import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * Causes the selected text to be marked with the CSS class CodeMirror-selectedtext or a custom class when the styleSelectedText option is enabled.
         * Useful to change the colour of the selection (in addition to the background).
         */
         styleSelectedText?: boolean | string | undefined;
    }
}
