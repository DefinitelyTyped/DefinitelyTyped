declare module goog {
    function require(name: 'goog.editor.plugins.BasicTextFormatter'): typeof goog.editor.plugins.BasicTextFormatter;
    function require(name: 'goog.editor.plugins.BasicTextFormatter.COMMAND'): typeof goog.editor.plugins.BasicTextFormatter.COMMAND;
}

declare module goog.editor.plugins {

    /**
     * Functions to style text (e.g. underline, make bold, etc.)
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class BasicTextFormatter extends goog.editor.Plugin {
        constructor();
        
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Execute a user-initiated command.
         * @param {string} command Command to execute.
         * @param {...*} var_args For color commands, this
         *     should be the hex color (with the #). For FORMAT_BLOCK, this should be
         *     the goog.editor.plugins.BasicTextFormatter.BLOCK_COMMAND.
         *     It will be unused for other commands.
         * @return {Object|undefined} The result of the command.
         * @override
         */
        execCommandInternal(command: string, ...var_args: any[]): Object|void;
        
        /**
         * Gets the command value.
         * @param {string} command The command value to get.
         * @return {string|boolean|null} The current value of the command in the given
         *     selection.  NOTE: This return type list is not documented in MSDN or MDC
         *     and has been constructed from experience.  Please update it
         *     if necessary.
         * @override
         */
        queryCommandValue(command: string): string|boolean|void;
    }
}

declare module goog.editor.plugins.BasicTextFormatter {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    type COMMAND = string;
    var COMMAND: {
        LINK: COMMAND;
        FORMAT_BLOCK: COMMAND;
        INDENT: COMMAND;
        OUTDENT: COMMAND;
        STRIKE_THROUGH: COMMAND;
        HORIZONTAL_RULE: COMMAND;
        SUBSCRIPT: COMMAND;
        SUPERSCRIPT: COMMAND;
        UNDERLINE: COMMAND;
        BOLD: COMMAND;
        ITALIC: COMMAND;
        FONT_SIZE: COMMAND;
        FONT_FACE: COMMAND;
        FONT_COLOR: COMMAND;
        BACKGROUND_COLOR: COMMAND;
        ORDERED_LIST: COMMAND;
        UNORDERED_LIST: COMMAND;
        JUSTIFY_CENTER: COMMAND;
        JUSTIFY_FULL: COMMAND;
        JUSTIFY_RIGHT: COMMAND;
        JUSTIFY_LEFT: COMMAND;
    };
}
