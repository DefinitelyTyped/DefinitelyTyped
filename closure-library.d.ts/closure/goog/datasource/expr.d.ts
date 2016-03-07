declare module goog {
    function require(name: 'goog.ds.Expr'): typeof goog.ds.Expr;
}

declare module goog.ds {

    /**
     * Create a new expression. An expression uses a string expression language, and
     * from this string and a passed in DataNode can evaluate to a value, DataNode,
     * or a DataNodeList.
     *
     * @param {string=} opt_expr The string expression.
     * @constructor
     * @final
     */
    class Expr {
        constructor(opt_expr?: string);
        
        /**
         * The current node
         */
        static CURRENT: any;
        
        /**
         * For DOM interop - all DOM child nodes (text + element).
         * Text nodes have dataName #text
         */
        static ALL_CHILD_NODES: any;
        
        /**
         * For DOM interop - all DOM element child nodes
         */
        static ALL_ELEMENTS: any;
        
        /**
         * For DOM interop - all DOM attribute nodes
         * Attribute nodes have dataName starting with "@"
         */
        static ALL_ATTRIBUTES: any;
        
        /**
         * Get the dataName of a node
         */
        static NAME: any;
        
        /**
         * Get the count of nodes matching an expression
         */
        static COUNT: any;
        
        /**
         * Get the position of the "current" node in the current node list
         * This will only apply for datasources that support the concept of a current
         * node (none exist yet). This is similar to XPath position() and concept of
         * current node
         */
        static POSITION: any;
        
        /**
         * Get the source data path for the expression
         * @return {string} The path.
         */
        getSource(): string;
        
        /**
         * Gets the last part of the expression.
         * @return {?string} Last part of the expression.
         */
        getLast(): string;
        
        /**
         * Gets the parent expression of this expression, or null if this is top level
         * @return {goog.ds.Expr} The parent.
         */
        getParent(): goog.ds.Expr;
        
        /**
         * Gets the parent expression of this expression, or null if this is top level
         * @return {goog.ds.Expr} The parent.
         */
        getNext(): goog.ds.Expr;
        
        /**
         * Evaluate an expression on a data node, and return a value
         * Recursively walks through child nodes to evaluate
         * TODO(user) Support other expression functions
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against DataManager global root.
         * @return {*} Value of the node, or null if doesn't exist.
         */
        getValue(opt_ds?: goog.ds.DataNode): any;
        
        /**
         * Evaluate an expression on a data node, and return matching nodes
         * Recursively walks through child nodes to evaluate
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against data root.
         * @param {boolean=} opt_canCreate If true, will try to create new nodes.
         * @return {goog.ds.DataNodeList} Matching nodes.
         */
        getNodes(opt_ds?: goog.ds.DataNode, opt_canCreate?: boolean): goog.ds.DataNodeList;
        
        /**
         * Evaluate an expression on a data node, and return the first matching node
         * Recursively walks through child nodes to evaluate
         *
         * @param {goog.ds.DataNode=} opt_ds Optional datasource to evaluate against.
         *     If not provided, evaluates against DataManager global root.
         * @param {boolean=} opt_canCreate If true, will try to create new nodes.
         * @return {goog.ds.DataNode} Matching nodes, or null if doesn't exist.
         */
        getNode(opt_ds?: goog.ds.DataNode, opt_canCreate?: boolean): goog.ds.DataNode;
        
        /**
         * Create an expression from a string, can use cached values
         *
         * @param {string} expr The expression string.
         * @return {goog.ds.Expr} The expression object.
         */
        static create(expr: string): goog.ds.Expr;
    }
}

declare module goog.ds.Expr {

    /**
     * Commonly used strings in expressions.
     * @enum {string}
     * @private
     */
    type String_ = string;
    var String_: {
        SEPARATOR: String_;
        CURRENT_NODE_EXPR: String_;
        EMPTY_EXPR: String_;
        ATTRIBUTE_START: String_;
        ALL_CHILD_NODES_EXPR: String_;
        ALL_ATTRIBUTES_EXPR: String_;
        ALL_ELEMENTS_EXPR: String_;
        NAME_EXPR: String_;
        COUNT_EXPR: String_;
        POSITION_EXPR: String_;
        INDEX_START: String_;
        INDEX_END: String_;
        CAN_BE_EMPTY: String_;
    };
}
