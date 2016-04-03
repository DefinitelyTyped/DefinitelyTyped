declare module goog {
    function require(name: 'goog.editor.plugins.TagOnEnterHandler'): typeof goog.editor.plugins.TagOnEnterHandler;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle enter keys. This subclass normalizes all browsers to use
     * the given block tag on enter.
     * @param {goog.dom.TagName} tag The type of tag to add on enter.
     * @constructor
     * @extends {goog.editor.plugins.EnterHandler}
     */
    class TagOnEnterHandler extends goog.editor.plugins.EnterHandler {
        constructor(tag: goog.dom.TagName);
        
        /**
         * This plugin is active on uneditable fields so it can provide a value for
         * queryCommandValue calls asking for goog.editor.Command.BLOCKQUOTE.
         * @return {boolean} True.
         * @override
         */
        activeOnUneditableFields(): boolean;
    }
}
