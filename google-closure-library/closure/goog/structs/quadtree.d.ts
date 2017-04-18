declare module goog {
    function require(name: 'goog.structs.QuadTree'): typeof goog.structs.QuadTree;
    function require(name: 'goog.structs.QuadTree.Node'): typeof goog.structs.QuadTree.Node;
    function require(name: 'goog.structs.QuadTree.Point'): typeof goog.structs.QuadTree.Point;
}

declare module goog.structs {

    /**
     * Constructs a new quad tree.
     * @param {number} minX Minimum x-value that can be held in tree.
     * @param {number} minY Minimum y-value that can be held in tree.
     * @param {number} maxX Maximum x-value that can be held in tree.
     * @param {number} maxY Maximum y-value that can be held in tree.
     * @constructor
     * @final
     */
    class QuadTree {
        constructor(minX: number, minY: number, maxX: number, maxY: number);
        
        /**
         * Returns a reference to the tree's root node.  Callers shouldn't modify nodes,
         * directly.  This is a convenience for visualization and debugging purposes.
         * @return {goog.structs.QuadTree.Node} The root node.
         */
        getRootNode(): goog.structs.QuadTree.Node;
        
        /**
         * Sets the value of an (x, y) point within the quad-tree.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @param {*} value The value associated with the point.
         */
        set(x: number, y: number, value: any): void;
        
        /**
         * Gets the value of the point at (x, y) or null if the point is empty.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @param {*=} opt_default The default value to return if the node doesn't
         *     exist.
         * @return {*} The value of the node, the default value if the node
         *     doesn't exist, or undefined if the node doesn't exist and no default
         *     has been provided.
         */
        get(x: number, y: number, opt_default?: any): any;
        
        /**
         * Removes a point from (x, y) if it exists.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @return {*} The value of the node that was removed, or null if the
         *     node doesn't exist.
         */
        remove(x: number, y: number): any;
        
        /**
         * Returns true if the point at (x, y) exists in the tree.
         * @param {number} x The x-coordinate.
         * @param {number} y The y-coordinate.
         * @return {boolean} Whether the tree contains a point at (x, y).
         */
        contains(x: number, y: number): boolean;
        
        /**
         * @return {boolean} Whether the tree is empty.
         */
        isEmpty(): boolean;
        
        /**
         * @return {number} The number of items in the tree.
         */
        getCount(): number;
        
        /**
         * Removes all items from the tree.
         */
        clear(): void;
        
        /**
         * Returns an array containing the coordinates of each point stored in the tree.
         * @return {!Array<goog.math.Coordinate?>} Array of coordinates.
         */
        getKeys(): Array<goog.math.Coordinate>;
        
        /**
         * Returns an array containing all values stored within the tree.
         * @return {!Array<Object>} The values stored within the tree.
         */
        getValues(): Array<Object>;
        
        /**
         * Clones the quad-tree and returns the new instance.
         * @return {!goog.structs.QuadTree} A clone of the tree.
         */
        clone(): goog.structs.QuadTree;
        
        /**
         * Traverses the tree and calls a function on each node.
         * @param {function(?, goog.math.Coordinate, goog.structs.QuadTree)} fn
         *     The function to call for every value. This function takes 3 arguments
         *     (the value, the coordinate, and the tree itself) and the return value is
         *     irrelevant.
         * @param {Object=} opt_obj The object to be used as the value of 'this'
         *     within {@ code fn}.
         */
        forEach(fn: (arg0: any, arg1: goog.math.Coordinate, arg2: goog.structs.QuadTree) => any, opt_obj?: Object): void;
    }
}

declare module goog.structs.QuadTree {

    /**
     * Enumeration of node types.
     * @enum {number}
     */
    type NodeType = number;
    var NodeType: {
        EMPTY: NodeType;
        LEAF: NodeType;
        POINTER: NodeType;
    };

    /**
     * Constructs a new quad tree node.
     * @param {number} x X-coordiate of node.
     * @param {number} y Y-coordinate of node.
     * @param {number} w Width of node.
     * @param {number} h Height of node.
     * @param {goog.structs.QuadTree.Node=} opt_parent Optional parent node.
     * @constructor
     * @final
     */
    class Node {
        constructor(x: number, y: number, w: number, h: number, opt_parent?: goog.structs.QuadTree.Node);
        
        /**
         * The node's type.
         * @type {goog.structs.QuadTree.NodeType}
         */
        nodeType: goog.structs.QuadTree.NodeType;
        
        /**
         * The child node in the North-West quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        nw: goog.structs.QuadTree.Node;
        
        /**
         * The child node in the North-East quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        ne: goog.structs.QuadTree.Node;
        
        /**
         * The child node in the South-West quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        sw: goog.structs.QuadTree.Node;
        
        /**
         * The child node in the South-East quadrant.
         * @type {goog.structs.QuadTree.Node?}
         */
        se: goog.structs.QuadTree.Node;
        
        /**
         * The point for the node, if it is a leaf node.
         * @type {goog.structs.QuadTree.Point?}
         */
        point: goog.structs.QuadTree.Point;
    }

    /**
     * Creates a new point object.
     * @param {number} x The x-coordinate of the point.
     * @param {number} y The y-coordinate of the point.
     * @param {*=} opt_value Optional value associated with the point.
     * @constructor
     * @final
     */
    class Point {
        constructor(x: number, y: number, opt_value?: any);
    }
}
