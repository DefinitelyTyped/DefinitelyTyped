declare module goog {
    function require(name: 'goog.editor.plugins.Emoticons'): typeof goog.editor.plugins.Emoticons;
}

declare module goog.editor.plugins {

    /**
     * Plugin for generating emoticons.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class Emoticons extends goog.editor.Plugin {
        constructor();
        
        /** The emoticon command. */
        static COMMAND: any;
        
        /**
         * Inserts an emoticon into the editor at the cursor location. Places the
         * cursor to the right of the inserted emoticon.
         * @param {string} command Command to execute.
         * @param {*=} opt_arg Emoji to insert.
         * @return {!Object|undefined} The result of the command.
         * @override
         */
        execCommandInternal(command: string, opt_arg?: any): Object|void;
    }
}
