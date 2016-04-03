declare module goog {
    function require(name: 'goog.editor.plugins.AbstractTabHandler'): typeof goog.editor.plugins.AbstractTabHandler;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class AbstractTabHandler extends goog.editor.Plugin {
        constructor();
        
        /**
         * Handle a tab key press.
         * @param {goog.events.Event} e The key event.
         * @return {boolean} Whether this event was handled by this plugin.
         * @protected
         */
        handleTabKey(e: goog.events.Event): boolean;
    }
}
