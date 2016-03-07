declare module goog {
    function require(name: 'goog.ui.tree.TreeNode'): typeof goog.ui.tree.TreeNode;
}

declare module goog.ui.tree {

    /**
     * A single node in the tree.
     * @param {string|!goog.html.SafeHtml} html The html content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
     *    will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.tree.BaseNode}
     */
    class TreeNode extends goog.ui.tree.BaseNode {
        constructor(html: string|goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns the tree.
         * @return {?goog.ui.tree.TreeControl} The tree.
         * @override
         */
        getTree(): goog.ui.tree.TreeControl;
        
        /**
         * Returns the source for the icon.
         * @return {string} Src for the icon.
         * @override
         */
        getCalculatedIconClass(): string;
    }
}
