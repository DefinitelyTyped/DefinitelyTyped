declare module goog {
    function require(name: 'goog.editor.plugins.Blockquote'): typeof goog.editor.plugins.Blockquote;
}

declare module goog.editor.plugins {

    /**
     * Plugin to handle splitting block quotes.  This plugin does nothing on its
     * own and should be used in conjunction with EnterHandler or one of its
     * subclasses.
     * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
     *     that have the given classname.
     * @param {string=} opt_className The classname to apply to generated
     *     blockquotes.  Defaults to 'tr_bq'.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class Blockquote extends goog.editor.Plugin {
        constructor(requiresClassNameToSplit: boolean, opt_className?: string);
        
        /**
         * Command implemented by this plugin.
         * @type {string}
         */
        static SPLIT_COMMAND: string;
        
        /**
         * Class ID used to identify this plugin.
         * @type {string}
         */
        static CLASS_ID: string;
        
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
        
        /**
         * Checks if a node is a blockquote which can be split. A splittable blockquote
         * meets the following criteria:
         * <ol>
         *   <li>Node is a blockquote element</li>
         *   <li>Node has the blockquote classname if the classname is required to
         *       split</li>
         * </ol>
         *
         * @param {Node} node DOM node in question.
         * @return {boolean} Whether the node is a splittable blockquote.
         */
        isSplittableBlockquote(node: Node): boolean;
        
        /**
         * Checks if a node is a blockquote element which has been setup.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote with the required class
         *     name applied.
         */
        isSetupBlockquote(node: Node): boolean;
        
        /**
         * Checks if a node is a blockquote element which has not been setup yet.
         * @param {Node} node DOM node to check.
         * @return {boolean} Whether the node is a blockquote without the required
         *     class name applied.
         */
        isUnsetupBlockquote(node: Node): boolean;
        
        /**
         * Gets the class name required for setup blockquotes.
         * @return {string} The blockquote class name.
         */
        getBlockquoteClassName(): string;
        
        /**
         * Splits a quoted region if any.  To be called on a key press event.  When this
         * function returns true, the event that caused it to be called should be
         * canceled.
         * @param {string} command The command to execute.
         * @param {...*} var_args Single additional argument representing the current
         *     cursor position. If BrowserFeature.HAS_W3C_RANGES it is an object with a
         *     {@code node} key and an {@code offset} key. In other cases (legacy IE)
         *     it is a single node.
         * @return {boolean|undefined} Boolean true when the quoted region has been
         *     split, false or undefined otherwise.
         * @override
         */
        execCommandInternal(command: string, ...var_args: any[]): boolean|void;
    }
}
