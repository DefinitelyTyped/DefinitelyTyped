declare module goog {
    function require(name: 'goog.editor.plugins.LinkShortcutPlugin'): typeof goog.editor.plugins.LinkShortcutPlugin;
}

declare module goog.editor.plugins {

    /**
     * Plugin to add a keyboard shortcut for the link command
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class LinkShortcutPlugin extends goog.editor.Plugin {
        constructor();
    }
}
