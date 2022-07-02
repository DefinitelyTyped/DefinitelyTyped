import '../../';

declare module '../../' {
    interface CommandActions {
        closeTag(cm: Editor): void;
    }

    interface AutoCloseTags {
        /**
         * Whether to autoclose when the '/' of a closing tag is typed. (default true)
         */
        whenClosing?: boolean | undefined;

        /**
         * Whether to autoclose the tag when the final '>' of an opening tag is typed. (default true)
         */
        whenOpening?: boolean | undefined;

        /**
         * An array of tag names that should not be autoclosed. (default is empty tags for HTML, none for XML)
         */
        dontCloseTags?: ReadonlyArray<string> | undefined;

        /**
         * An array of tag names that should, when opened, cause a
         * blank line to be added inside the tag, and the blank line and
         * closing line to be indented. (default is block tags for HTML, none for XML)
         */
        indentTags?: ReadonlyArray<string> | undefined;

        /**
         * An array of XML tag names that should be autoclosed with '/>'. (default is none)
         */
        emptyTags: ReadonlyArray<string>;
    }

    interface EditorConfiguration {
        /**
         * Will auto-close XML tags when '>' or '/' is typed.
         * Depends on the fold/xml-fold.js addon.
         */
        autoCloseTags?: AutoCloseTags | boolean | undefined;
    }
}
