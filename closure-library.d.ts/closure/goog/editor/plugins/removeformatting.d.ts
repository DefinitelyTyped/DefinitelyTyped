declare module goog {
    function require(name: 'goog.editor.plugins.RemoveFormatting'): typeof goog.editor.plugins.RemoveFormatting;
}

declare module goog.editor.plugins {

    /**
     * A plugin to handle removing formatting from selected text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class RemoveFormatting extends goog.editor.Plugin {
        constructor();
        
        /**
         * The editor command this plugin in handling.
         * @type {string}
         */
        static REMOVE_FORMATTING_COMMAND: string;
        
        /**
         * Handle per node special processing if neccessary. If this function returns
         * null then standard cleanup is applied. Otherwise this node and all children
         * are assumed to be cleaned.
         * NOTE(user): If an alternate RemoveFormatting processor is provided
         * (setRemoveFormattingFunc()), this will no longer work.
         * @param {Element} node The node to clean.
         * @return {?string} The HTML strig representation of the cleaned data.
         */
        getValueForNode(node: Element): string;
        
        /**
         * Sets a function to be used for remove formatting.
         * @param {function(string): string} removeFormattingFunc - A function that
         *     takes  a string of html and returns a string of html that does any other
         *     formatting changes desired.  Use this only if trogedit's behavior doesn't
         *     meet your needs.
         */
        setRemoveFormattingFunc(removeFormattingFunc: (arg0: string) => string): void;
    }
}
