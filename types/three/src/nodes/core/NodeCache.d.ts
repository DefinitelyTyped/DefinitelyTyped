import Node from "./Node.js";

/**
 * This utility class is used in {@link NodeBuilder} as an internal
 * cache data structure for node data.
 */
declare class NodeCache {
    /**
     * Constructs a new node cache.
     *
     * @param {?NodeCache} parent - A reference to a parent cache.
     */
    constructor(parent?: NodeCache | null);
    /**
     * The id of the cache.
     *
     * @type {number}
     * @readonly
     */
    readonly id: number;
    /**
     * A weak map for managing node data.
     *
     * @type {WeakMap<Node, Object>}
     */
    nodesData: WeakMap<Node, unknown>;
    /**
     * Reference to a parent node cache.
     *
     * @type {?NodeCache}
     * @default null
     */
    parent: NodeCache | null;
    /**
     * Returns the data for the given node.
     *
     * @param {Node} node - The node.
     * @return {?Object} The data for the node.
     */
    getData(node: Node): unknown;
    /**
     * Sets the data for a given node.
     *
     * @param {Node} node - The node.
     * @param {Object} data - The data that should be cached.
     */
    setData(node: Node, data: unknown): void;
}

export default NodeCache;
