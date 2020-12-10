export class ExtendedWindow extends Window {
    DSinJS: {
        BTreeNode: typeof BTreeNode;
    };
    BTreeNode: typeof BTreeNode;
}
export class BTreeNodeStruct<T> {
    value?: T | null;
    lNode?: BTreeNodeStruct<T> | null;
    rNode?: BTreeNodeStruct<T> | null;
}
/**
 * Binary Tree node class, contains 2 child nodes and single value.
 * @class BTreeNode
 * @public
 * @example
 * var node = new BTreeNode({ value: 15 });
 * var node3 = new BTreeNode({ value: 30 });
 * var node2 = new BTreeNode({ value: 20, rNode: node, lNode: node3 });
 * console.log(node2.lNode.value); // 30
 */
export class BTreeNode<T = any> {
    /**
     * @property value
     * Contains actual value
     * @type {T}
     * @public
     */
    value: T | null;
    /**
     * @property lNode
     * Contains left child node
     * @type {BTreeNode}
     * @public
     */
    lNode: BTreeNode<T> | null;
    /**
     * @property rNode
     * Contains right child node
     * @type {BTreeNode}
     * @public
     */
    rNode: BTreeNode<T> | null;
    /**
     *
     * @param {BTreeNodeStruct} attr attributes to initialize the node.
     */
    constructor(attr: BTreeNodeStruct<T>);
    /**
     * Validates a BTree node, it must have a valid value (no undefined nor null).
     * @public
     * @returns {boolean}
     * @example
     * new BTreeNode(); // throws error saying `A BTree node must have a valid value, cannot be null or undefined`
     * var node = new BTreeNode({ value: 10 });
     * console.log(node.validate()); // true
     */
    validate(): boolean;
    /**
     * Converts current node and all children nodes in json format.
     * @public
     * @returns {BTreeNodeStruct}
     * @example
     * var node = new BTreeNode({ value: 10 });
     * var lNode = new BTreeNode({ value: 15, lNode: lNode });
     * console.log(node.toJSON()); // {value:15,lNode: {value: 10,lNode:null,rNode:null},rNode:null}
     */
    toJSON(): BTreeNodeStruct<T>;
    /**
     * Converts current node and all children nodes in json format and append them together.
     * Goes in direction of U -> L -> R
     * @public
     * @returns {string}
     * @example
     * var node = new BTreeNode({ value: 10 });
     * var lNode = new BTreeNode({ value: 15, lNode: node });
     * console.log(node.toString()); // "1015"
     */
    toString(): string;
    /**
     * Returns depth of its children.
     * Goes in direction of L -> R
     * @public
     * @returns {number}
     * @example
     * var node = new BTreeNode({ value: 10 });
     * var lNode = new BTreeNode({ value: 15, lNode: node });
     * var l2Node = new BTreeNode({ value: 15, lNode: lNode });
     * console.log(l2Node.getDepth()); // 3
     */
    getDepth(): number;
}
