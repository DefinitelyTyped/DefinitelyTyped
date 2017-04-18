declare module goog {
    function require(name: 'goog.editor.plugins.FirstStrong'): typeof goog.editor.plugins.FirstStrong;
}

declare module goog.editor.plugins {

    /**
     * First Strong plugin.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class FirstStrong extends goog.editor.Plugin {
        constructor();
        
        /**
         * The name of the attribute which records the input text.
         *
         * @type {string}
         * @const
         */
        static INPUT_ATTRIBUTE: string;
    }
}
