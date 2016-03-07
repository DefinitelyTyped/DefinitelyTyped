declare module goog {
    function require(name: 'goog.ds.XmlDataSource'): typeof goog.ds.XmlDataSource;
    function require(name: 'goog.ds.XmlHttpDataSource'): typeof goog.ds.XmlHttpDataSource;
}

declare module goog.ds {

    /**
     * Data source whose backing is an xml node
     *
     * @param {Node} node The XML node. Can be null.
     * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
     * @param {string=} opt_name The name of this node relative to the parent node.
     *
     * @extends {goog.ds.DataNode}
     * @constructor
     */
    class XmlDataSource extends goog.ds.DataNode {
        constructor(node: Node, parent: goog.ds.XmlDataSource, opt_name?: string);
        
        /**
         * Get the value of the node
         * @return {Object} The value of the node, or null if no value.
         * @override
         */
        get(): Object;
        
        /**
         * Set the value of the node
         * @param {*} value The new value of the node.
         * @override
         */
        set(value: any): void;
        
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @return {goog.ds.DataNode} The child node, or null if
         *   no node of this name exists.
         * @override
         */
        getChildNode(name: string): goog.ds.DataNode;
        
        /**
         * Gets the value of a child node
         * @param {string} name The node name.
         * @return {*} The value of the node, or null if no value or the child node
         *    doesn't exist.
         * @override
         */
        getChildNodeValue(name: string): any;
        
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
        
        /**
         * Setthe name of the node relative to the parent node
         * @param {string} name The name of the node.
         * @override
         */
        setDataName(name: string): void;
        
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         * @override
         */
        getDataPath(): string;
        
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    }

    /**
     * Data source whose backing is an XMLHttpRequest,
     *
     * A URI of an empty string will mean that no request is made
     * and the data source will be a single, empty node.
     *
     * @param {(string|goog.Uri)} uri URL of the XMLHttpRequest.
     * @param {string} name Name of the datasource.
     *
     * implements goog.ds.XmlHttpDataSource.
     * @constructor
     * @extends {goog.ds.XmlDataSource}
     * @final
     */
    class XmlHttpDataSource extends goog.ds.XmlDataSource {
        constructor(uri: string|goog.Uri, name: string);
        
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
    }
}
