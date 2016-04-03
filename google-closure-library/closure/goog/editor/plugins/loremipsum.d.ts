declare module goog {
    function require(name: 'goog.editor.plugins.LoremIpsum'): typeof goog.editor.plugins.LoremIpsum;
}

declare module goog.editor.plugins {

    /**
     * A plugin that manages lorem ipsum state of editable fields.
     * @param {string} message The lorem ipsum message.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class LoremIpsum extends goog.editor.Plugin {
        constructor(message: string);
        
        /**
         * Handles queryCommandValue.
         * @param {string} command The command to query.
         * @return {boolean} The result.
         * @override
         */
        queryCommandValue(command: string): boolean;
        
        /**
         * Handles execCommand.
         * @param {string} command The command to execute.
         *     Should be CLEAR_LOREM or UPDATE_LOREM.
         * @param {*=} opt_placeCursor Whether to place the cursor in the field
         *     after clearing lorem. Should be a boolean.
         * @override
         */
        execCommand(command: string, opt_placeCursor?: any): void;
    }
}
