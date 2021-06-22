import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * When the end of the file is reached it allows you to keep scrolling so that your last few lines of code are not stuck at the bottom of the editor.
         */
        scrollPastEnd?: boolean;
    }
}
