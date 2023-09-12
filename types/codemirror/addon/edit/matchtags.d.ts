import "../../";

declare module "../../" {
    interface CommandActions {
        /**
         * You can bind a key to in order to jump to the tag matching the one under the cursor.
         */
        toMatchingTag(cm: Editor): void;
    }

    interface MatchTags {
        /**
         * Highlight both matching tags.
         */
        bothTags?: boolean | undefined;
    }

    interface EditorConfiguration {
        /**
         * When enabled will cause the tags around the cursor to be highlighted (using the CodeMirror-matchingtag class).
         * Depends on the addon/fold/xml-fold.js addon.
         */
        matchTags?: MatchTags | boolean | undefined;
    }
}
