declare module goog {
    function require(name: 'goog.editor.plugins.SpacesTabHandler'): typeof goog.editor.plugins.SpacesTabHandler;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys when not in lists to add 4 spaces.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    class SpacesTabHandler extends goog.editor.plugins.AbstractTabHandler {
        constructor();
    }
}
