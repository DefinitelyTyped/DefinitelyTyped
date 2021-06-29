import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * Adds a placeholder option that can be used to make content appear in the editor when it is empty and not focused.
         * It can hold either a string or a DOM node. Also gives the editor a CodeMirror-empty CSS class whenever it doesn't contain any text.
         */
        placeholder?: string | Node;
    }
}
