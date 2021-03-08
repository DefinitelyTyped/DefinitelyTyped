import Node from "./node";

/**
 * Model DocumentFragment.
 * DocumentFragment represents a part of model which does not have a common root but its top-level nodes
 * can be seen as siblings. In other words, it is a detached part of model tree, without a root.
 *
 * DocumentFragment has own {@link module:engine/model/markercollection~MarkerCollection}. Markers from this collection
 * will be set to the {@link module:engine/model/model~Model#markers model markers} by a
 * {@link module:engine/model/writer~Writer#insert} function.
 */
export default class DocumentFragment implements Iterable<Node> {
    /**
     * Creates an empty `DocumentFragment`.
     *
     * **Note:** Constructor of this class shouldn't be used directly in the code.
     * Use the {@link module:engine/model/writer~Writer#createDocumentFragment} method instead.
     */
    constructor(children: Node | Iterable<Node>);
    /**
     * Returns an iterator that iterates over all nodes contained inside this document fragment.
     */
    [Symbol.iterator](): Iterator<Node>;
    /**
     * Number of this document fragment's children.
     */
    get childCount(): number;
    /**
     * Sum of {@link module:engine/model/node~Node#offsetSize offset sizes} of all of this document fragment's children.
     */
    get maxOffset(): number;
    /**
     * Is `true` if there are no nodes inside this document fragment, `false` otherwise.
     */
    get isEmpty(): boolean;
    /**
     * Artificial root of `DocumentFragment`. Returns itself. Added for compatibility reasons.
     */
    get root(): this;
    /**
     * Artificial parent of `DocumentFragment`. Returns `null`. Added for compatibility reasons.
     */
    get parent(): null;
    /**
     * Checks whether this object is of the given type.
     *
     *        docFrag.is( 'documentFragment' ); // -> true
     *        docFrag.is( 'model:documentFragment' ); // -> true
     *
     *        docFrag.is( 'view:documentFragment' ); // -> false
     *        docFrag.is( 'element' ); // -> false
     *        docFrag.is( 'node' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
    /**
     * Gets the child at the given index. Returns `null` if incorrect index was passed.
     *
     */
    getChild(index: number): Node | null;
    /**
     * Returns an iterator that iterates over all of this document fragment's children.
     *
     */
    getChildren(): Iterable<Node>;
    /**
     * Returns an index of the given child node. Returns `null` if given node is not a child of this document fragment.
     */
    getChildIndex(node: Node): number | null;
    /**
     * Returns the starting offset of given child. Starting offset is equal to the sum of
     * {@link module:engine/model/node~Node#offsetSize offset sizes} of all node's siblings that are before it. Returns `null` if
     * given node is not a child of this document fragment.
     *
     */
    getChildStartOffset(node: Node): number | null;
    /**
     * Returns path to a `DocumentFragment`, which is an empty array. Added for compatibility reasons.
     *
     */
    getPath(): never[];
    /**
     * Returns a descendant node by its path relative to this element.
     *
     *        // <this>a<b>c</b></this>
     *        this.getNodeByPath( [ 0 ] );     // -> "a"
     *        this.getNodeByPath( [ 1 ] );     // -> <b>
     *        this.getNodeByPath( [ 1, 0 ] );  // -> "c"
     *
     */
    getNodeByPath(relativePath: number[]): DocumentFragment;
    /**
     * Converts offset "position" to index "position".
     *
     * Returns index of a node that occupies given offset. If given offset is too low, returns `0`. If given offset is
     * too high, returns index after last child}.
     *
     *        const textNode = new Text( 'foo' );
     *        const pElement = new Element( 'p' );
     *        const docFrag = new DocumentFragment( [ textNode, pElement ] );
     *        docFrag.offsetToIndex( -1 ); // Returns 0, because offset is too low.
     *        docFrag.offsetToIndex( 0 ); // Returns 0, because offset 0 is taken by `textNode` which is at index 0.
     *        docFrag.offsetToIndex( 1 ); // Returns 0, because `textNode` has `offsetSize` equal to 3, so it occupies offset 1 too.
     *        docFrag.offsetToIndex( 2 ); // Returns 0.
     *        docFrag.offsetToIndex( 3 ); // Returns 1.
     *        docFrag.offsetToIndex( 4 ); // Returns 2. There are no nodes at offset 4, so last available index is returned.
     *
     */
    offsetToIndex(offset: number): number;
    /**
     * Converts `DocumentFragment` instance to plain object and returns it.
     * Takes care of converting all of this document fragment's children.
     *
     */
    toJSON(): DocumentFragment;
    /**
     * Creates a `DocumentFragment` instance from given plain object (i.e. parsed JSON string).
     * Converts `DocumentFragment` children to proper nodes.
     *
     */
    static fromJSON(json: Record<string, unknown>): DocumentFragment;
}
