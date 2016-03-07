declare module goog {
    function require(name: 'goog.editor.plugins.HeaderFormatter'): typeof goog.editor.plugins.HeaderFormatter;
}

declare module goog.editor.plugins {

    /**
     * Applies header styles to text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class HeaderFormatter extends goog.editor.Plugin {
        constructor();
    }
}

declare module goog.editor.plugins.HeaderFormatter {

    /**
     * Commands that can be passed as the optional argument to execCommand.
     * @enum {string}
     */
    type HEADER_COMMAND = string;
    var HEADER_COMMAND: {
        H1: HEADER_COMMAND;
        H2: HEADER_COMMAND;
        H3: HEADER_COMMAND;
        H4: HEADER_COMMAND;
    };
}
