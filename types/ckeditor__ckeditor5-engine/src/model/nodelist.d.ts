import Node from "./node";

/**
 * Provides an interface to operate on a list of {@link module:engine/model/node~Node nodes}. `NodeList` is used internally
 * in classes like {@link module:engine/model/element~Element Element}
 * or {@link module:engine/model/documentfragment~DocumentFragment DocumentFragment}.
 */
export default class NodeList implements Iterable<Node> {
    /**
     * Creates an empty node list.
     */
    constructor(nodes: Iterable<Node>);

    /**
     * Iterable interface.
     *
     * Iterates over all nodes contained inside this node list.
     */
    [Symbol.iterator](): Iterator<Node>;

    /**
     * Number of nodes contained inside this node list.
     */
    readonly length: number;

    /**
     * Sum of {@link module:engine/model/node~Node#offsetSize offset sizes} of all nodes contained inside this node list.
     */
    readonly maxOffset: number;

    /**
     * Gets the node at the given index. Returns `null` if incorrect index was passed.
     */
    getNode(index: number): Node | null;

    /**
     * Returns an index of the given node. Returns `null` if given node is not inside this node list.
     */
    getNodeIndex(node: Node): number | null;

    /**
     * Returns the starting offset of given node. Starting offset is equal to the sum of
     * {@link module:engine/model/node~Node#offsetSize offset sizes} of all nodes that are before this node in this node list.
     */
    getNodeStartOffset(node: Node): number | null;

    /**
     * Converts index to offset in node list.
     *
     * Returns starting offset of a node that is at given index. Throws {@link module:utils/ckeditorerror~CKEditorError CKEditorError}
     * `model-nodelist-index-out-of-bounds` if given index is less than `0` or more than {@link #length}.
     */
    indexToOffset(index: number): number;

    /**
     * Converts offset in node list to index.
     *
     * Returns index of a node that occupies given offset. Throws {@link module:utils/ckeditorerror~CKEditorError CKEditorError}
     * `model-nodelist-offset-out-of-bounds` if given offset is less than `0` or more than {@link #maxOffset}.
     */
    offsetToIndex(offset: number): number;

    /**
     * Converts `NodeList` instance to an array containing nodes that were inserted in the node list. Nodes
     * are also converted to their plain object representation.
     */
    toJSON(): Node[];
}
