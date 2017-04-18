declare module goog {
    function require(name: 'goog.editor.plugins.ListTabHandler'): typeof goog.editor.plugins.ListTabHandler;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys in lists to indent and outdent.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    class ListTabHandler extends goog.editor.plugins.AbstractTabHandler {
        constructor();
    }
}
