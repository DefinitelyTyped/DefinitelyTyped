import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * if true, the editor will make the next line continue a comment when
         * pressing the Enter key. If set to a string, it will continue comments
         * using a custom shortcut.
         */
        continueComments?: boolean | string | { key: string, continueLineComment?: boolean | undefined } | undefined;
    }
}
