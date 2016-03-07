declare module goog {
    function require(name: 'goog.ds.JsDataSource'): typeof goog.ds.JsDataSource;
    function require(name: 'goog.ds.JsPropertyDataSource'): typeof goog.ds.JsPropertyDataSource;
}

declare module goog.ds {

    /**
     * Data source whose backing is JavaScript data
     *
     * Names that are reserved for system use and shouldn't be used for data node
     * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
     * undefined if these names are used.
     *
     * @param {Object} root The root JS node.
     * @param {string} dataName The name of this node relative to the parent node.
     * @param {Object=} opt_parent Optional parent of this JsDataSource.
     *
     * implements goog.ds.DataNode.
     * @constructor
     * @extends {goog.ds.DataNode}
     */
    class JsDataSource extends goog.ds.DataNode {
        constructor(root: Object, dataName: string, opt_parent?: Object);
        
        /**
         * The root JS object. Can be null.
         * @type {*}
         * @protected
         * @suppress {underscore|visibility}
         */
        root_: any;
        
        /**
         * Sets the root JS object
         * @param {Object} root The root JS object. Can be null.
         *
         * @protected
         */
        setRoot(root: Object): void;
        
        /**
         * Set the value of the node
         * @param {*} value The new value of the node.
         * @override
         */
        set(value: any): void;
        
        /**
         * Gets a named child node of the current node
         * @param {string} name The node name.
         * @param {boolean=} opt_canCreate If true, can create child node.
         * @return {goog.ds.DataNode} The child node, or null if no node of
         *     this name exists.
         * @override
         */
        getChildNode(name: string, opt_canCreate?: boolean): goog.ds.DataNode;
        
        /**
         * Gets the value of a child node
         * @param {string} name The node name.
         * @return {Object} The value of the node, or null if no value or the child
         *    node doesn't exist.
         * @override
         */
        getChildNodeValue(name: string): Object;
        
        /**
         * Sets a named child node of the current node.
         * If value is null, removes the child node.
         * @param {string} name The node name.
         * @param {Object} value The value to set, can be DataNode, object,
         *     property, or null.
         * @return {Object} The child node, if set.
         * @override
         */
        setChildNode(name: string, value: Object): Object;
        
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
        
        /**
         * Setthe name of the node relative to the parent node
         * @param {string} dataName The name of the node.
         * @override
         */
        setDataName(dataName: string): void;
        
        /**
         * Gets the a qualified data path to this node
         * @return {string} The data path.
         * @override
         */
        getDataPath(): string;
        
        /**
         * Gets the state of the backing data for this node
         * TODO(user) Discuss null value handling
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
        
        /**
         * Whether the value of this node is a homogeneous list of data
         * @return {boolean} True if a list.
         * @override
         */
        isList(): boolean;
    }

    /**
     * Data source for JavaScript properties that arent objects. Contains reference
     * to parent object so that you can set the vaule
     *
     * @param {goog.ds.DataNode} parent Parent object.
     * @param {string} dataName Name of this property.
     * @param {goog.ds.DataNode=} opt_parentDataNode The parent data node. If
     *     omitted, assumes that the parent object is the parent data node.
     *
     * @constructor
     * @extends {goog.ds.BaseDataNode}
     * @final
     */
    class JsPropertyDataSource extends goog.ds.BaseDataNode {
        constructor(parent: goog.ds.DataNode, dataName: string, opt_parentDataNode?: goog.ds.DataNode);
        
        /**
         * Get the value of the node
         * @return {Object} The value of the node, or null if no value.
         */
        get(): Object;
        
        /**
         * Set the value of the node
         * @param {Object} value The new value of the node.
         * @override
         */
        set(value: Object): void;
        
        /**
         * Get the name of the node relative to the parent node
         * @return {string} The name of the node.
         * @override
         */
        getDataName(): string;
    }
}
