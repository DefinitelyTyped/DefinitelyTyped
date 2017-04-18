declare module goog {
    function require(name: 'goog.ds.AbstractFastDataNode'): typeof goog.ds.AbstractFastDataNode;
    function require(name: 'goog.ds.FastDataNode'): typeof goog.ds.FastDataNode;
    function require(name: 'goog.ds.PrimitiveFastDataNode'): typeof goog.ds.PrimitiveFastDataNode;
    function require(name: 'goog.ds.FastListNode'): typeof goog.ds.FastListNode;
}

declare module goog.ds {

    /**
     * Creates a new abstract data node.
     * @param {string} dataName Name of the datanode.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @constructor
     * @extends {goog.ds.DataNodeList}
     */
    class AbstractFastDataNode extends goog.ds.DataNodeList {
        constructor(dataName: string, opt_parent?: goog.ds.DataNode);
        
        /**
         * Return the name of this data node.
         * @return {string} Name of this data noden.
         * @override
         */
        getDataName(): string;
        
        /**
         * Set the name of this data node.
         * @param {string} value Name.
         * @override
         */
        setDataName(value: string): void;
        
        /**
         * Get the path leading to this data node.
         * @return {string} Data path.
         * @override
         */
        getDataPath(): string;
    }

    /**
     * Creates a new fast data node, using the properties of root.
     * @param {Object} root JSON-like object to initialize data node from.
     * @param {string} dataName Name of this data node.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     */
    class FastDataNode extends goog.ds.AbstractFastDataNode {
        constructor(root: Object, dataName: string, opt_parent?: goog.ds.DataNode);
        
        /**
         * Add all attributes of object to this data node.
         * @param {Object} object Object to add attributes from.
         * @protected
         */
        extendWith(object: Object): void;
        
        /**
         * Creates a new FastDataNode structure initialized from object. This will
         * return an instance of the most suitable sub-class of FastDataNode.
         *
         * You should not modify object after creating a fast data node from it
         * or assume that changing object changes the data node. Doing so results
         * in undefined behaviour.
         *
         * @param {Object|number|boolean|string} object Object to initialize data
         *     node from.
         * @param {string} dataName Name of data node.
         * @param {goog.ds.DataNode=} opt_parent Parent of data node.
         * @return {!goog.ds.AbstractFastDataNode} Data node representing object.
         */
        static fromJs(object: Object|number|boolean|string, dataName: string, opt_parent?: goog.ds.DataNode): goog.ds.AbstractFastDataNode;
        
        /**
         * Not supported for normal FastDataNodes.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
        
        /**
         * Get a child node by name.
         * @param {string} name Name of child node.
         * @param {boolean=} opt_create Whether to create the child if it does not
         * exist.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(name: string, opt_create?: boolean): goog.ds.DataNode;
        
        /**
         * Returns the value of a child node. By using this method you can avoid
         * the need to create PrimitiveFastData nodes.
         * @param {string} name Name of child node.
         * @return {Object} Value of child node.
         * @override
         */
        getChildNodeValue(name: string): Object;
        
        /**
         * Returns whether this data node is a list. Always returns false for
         * instances of FastDataNode but may return true for subclasses.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
        
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {!Object} Javascript object representation of this data node.
         */
        getJsObject(): Object;
        
        /**
         * Creates a deep copy of this data node.
         * @return {goog.ds.FastDataNode} Clone of this data node.
         */
        clone(): goog.ds.FastDataNode;
        
        /**
         * Adds a child to this data node.
         * @param {goog.ds.DataNode} value Child node to add.
         * @override
         */
        add(value: goog.ds.DataNode): void;
        
        /**
         * Gets the value of this data node (if called without opt_key) or
         * gets a child node (if called with opt_key).
         * @param {string=} opt_key Name of child node.
         * @return {*} This data node or a child node.
         * @override
         */
        get(opt_key?: string): any;
        
        /**
         * Gets a child node by index. This method has a complexity of O(n) where
         * n is the number of children. If you need a faster implementation of this
         * method, you should use goog.ds.FastListNode.
         * @param {number} index Index of child node (starting from 0).
         * @return {goog.ds.DataNode} Child node at specified index.
         * @override
         */
        getByIndex(index: number): goog.ds.DataNode;
        
        /**
         * Gets the number of child nodes. This method has a complexity of O(n) where
         * n is the number of children. If you need a faster implementation of this
         * method, you should use goog.ds.FastListNode.
         * @return {number} Number of child nodes.
         * @override
         */
        getCount(): number;
        
        /**
         * Sets a child node.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @override
         */
        setNode(name: string, value: Object): void;
    }

    /**
     * Creates a new data node wrapping a primitive value.
     * @param {number|boolean|string} value Value the value to wrap.
     * @param {string} dataName name Name of this data node.
     * @param {goog.ds.DataNode=} opt_parent Parent of this data node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     * @final
     */
    class PrimitiveFastDataNode extends goog.ds.AbstractFastDataNode {
        constructor(value: number|boolean|string, dataName: string, opt_parent?: goog.ds.DataNode);
        
        /**
         * Returns the value of this data node.
         * @return {(boolean|number|string)} Value of this data node.
         * @override
         */
        get(): boolean|number|string;
        
        /**
         * Sets this data node to a new value.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
        
        /**
         * Returns child nodes of this data node. Always returns an unmodifiable,
         * empty list.
         * @return {!goog.ds.DataNodeList} (Empty) list of child nodes.
         * @override
         */
        getChildNodes(): goog.ds.DataNodeList;
        
        /**
         * Get a child node by name. Always returns null.
         * @param {string} name Name of child node.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(name: string): goog.ds.DataNode;
        
        /**
         * Returns the value of a child node. Always returns null.
         * @param {string} name Name of child node.
         * @return {Object} Value of child node.
         * @override
         */
        getChildNodeValue(name: string): Object;
        
        /**
         * Not supported by primitive data nodes.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @return {Object} The child node, if the node was set.
         * @override
         */
        setChildNode(name: string, value: Object): Object;
        
        /**
         * Returns whether this data node is a list. Always returns false for
         * instances of PrimitiveFastDataNode.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
        
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {*} Javascript object representation of this data node.
         */
        getJsObject(): any;
    }

    /**
     * Creates a new list node from an array.
     * @param {Array<?>} values values hold by this list node.
     * @param {string} dataName name of this node.
     * @param {goog.ds.DataNode=} opt_parent parent of this node.
     * @extends {goog.ds.AbstractFastDataNode}
     * @constructor
     * @final
     */
    class FastListNode extends goog.ds.AbstractFastDataNode {
        constructor(values: Array<any>, dataName: string, opt_parent?: goog.ds.DataNode);
        
        /**
         * Not supported for FastListNodes.
         * @param {*} value Value to set data node to.
         * @override
         */
        set(value: any): void;
        
        /**
         * Returns child nodes of this data node. Currently, only supports
         * returning all children.
         * @return {!goog.ds.DataNodeList} List of child nodes.
         * @override
         */
        getChildNodes(): goog.ds.DataNodeList;
        
        /**
         * Get a child node by name.
         * @param {string} key Name of child node.
         * @param {boolean=} opt_create Whether to create the child if it does not
         * exist.
         * @return {goog.ds.DataNode} Child node.
         * @override
         */
        getChildNode(key: string, opt_create?: boolean): goog.ds.DataNode;
        
        /**
         * Returns the value of a child node.
         * @param {string} key Name of child node.
         * @return {*} Value of child node.
         * @override
         */
        getChildNodeValue(key: string): any;
        
        /**
         * Returns whether this data node is a list. Always returns true.
         * @return {boolean} Whether this data node is array-like.
         * @override
         */
        isList(): boolean;
        
        /**
         * Returns a javascript object representation of this data node. You should
         * not modify the object returned by this function.
         * @return {!Object} Javascript object representation of this data node.
         */
        getJsObject(): Object;
        
        /**
         * Adds a child to this data node
         * @param {goog.ds.DataNode} value Child node to add.
         * @override
         */
        add(value: goog.ds.DataNode): void;
        
        /**
         * Gets the value of this data node (if called without opt_key) or
         * gets a child node (if called with opt_key).
         * @param {string=} opt_key Name of child node.
         * @return {Array|goog.ds.DataNode} Array of child nodes (if called without
         *     opt_key), or a named child node otherwise.
         * @override
         */
        get(opt_key?: string): Array<any>|goog.ds.DataNode;
        
        /**
         * Gets a child node by (numeric) index.
         * @param {number} index Index of child node (starting from 0).
         * @return {goog.ds.DataNode} Child node at specified index.
         * @override
         */
        getByIndex(index: number): goog.ds.DataNode;
        
        /**
         * Gets the number of child nodes.
         * @return {number} Number of child nodes.
         * @override
         */
        getCount(): number;
        
        /**
         * Sets a child node.
         * @param {string} name Name of child node.
         * @param {Object} value Value of child node.
         * @override
         */
        setNode(name: string, value: Object): void;
        
        /**
         * Returns the index of a named child nodes. This method only works if
         * this list uses mixed name/indexed lookup, i.e. if its child node have
         * an 'id' attribute.
         * @param {string} name Name of child node to determine index of.
         * @return {number} Index of child node named name.
         */
        indexOf(name: string): number;
    }
}
