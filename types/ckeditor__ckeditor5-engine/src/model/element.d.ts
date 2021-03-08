import Node from "./node";

interface ElementObject {
    /**
     * Number of this element's children.
     */
    childCount: number;
    /**
     * Sum of {@link module:engine/model/node~Node#offsetSize offset sizes} of all of this element's children.
     */
    maxOffset: number;
    /**
     * Is `true` if there are no nodes inside this element, `false` otherwise.
     */
    isEmpty: boolean;
}
/**
 * Model element. Type of {@link module:engine/model/node~Node node} that has a {@link module:engine/model/element~Element#name name} and
 * {@link module:engine/model/element~Element#getChildren child nodes}.
 *
 * **Important**: see {@link module:engine/model/node~Node} to read about restrictions using `Element` and `Node` API.
 */
export default abstract class Element<T = ElementObject> extends Node<T> {
    /**
     * Number of this element's children.
     */
    readonly childCount: number;
    /**
     * Sum of {@link module:engine/model/node~Node#offsetSize offset sizes} of all of this element's children.
     */
    readonly maxOffset: number;
    /**
     * Is `true` if there are no nodes inside this element, `false` otherwise.
     */
    readonly isEmpty: boolean;
    /**
     * Checks whether this object is of the given.
     *
     *        element.is( 'element' ); // -> true
     *        element.is( 'node' ); // -> true
     *        element.is( 'model:element' ); // -> true
     *        element.is( 'model:node' ); // -> true
     *
     *        element.is( 'view:element' ); // -> false
     *        element.is( 'documentSelection' ); // -> false
     *
     * Assuming that the object being checked is an element, you can also check its
     * {@link module:engine/model/element~Element#name name}:
     *
     *        element.is( 'element', 'image' ); // -> true if this is an <image> element
     *        element.is( 'element', 'image' ); // -> same as above
     *        text.is( 'element', 'image' ); -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string, name?: string): boolean;
    /**
     * Gets the child at the given index.
     */
    getChild(index: number): Node;
    /**
     * Returns an iterator that iterates over all of this element's children.
     */
    getChildren(): Iterable<Node>;
    /**
     * Returns an index of the given child node. Returns `null` if given node is not a child of this element.
     */
    getChildIndex(node: Node): number;
    /**
     * Returns the starting offset of given child. Starting offset is equal to the sum of
     * {@link module:engine/model/node~Node#offsetSize offset sizes} of all node's siblings that are before it. Returns `null` if
     * given node is not a child of this element.
     */
    getChildStartOffset(node: Node): number;
    /**
     * Returns index of a node that occupies given offset. If given offset is too low, returns `0`. If given offset is
     * too high, returns {@link module:engine/model/element~Element#getChildIndex index after last child}.
     *
     *        const textNode = new Text( 'foo' );
     *        const pElement = new Element( 'p' );
     *        const divElement = new Element( [ textNode, pElement ] );
     *        divElement.offsetToIndex( -1 ); // Returns 0, because offset is too low.
     *        divElement.offsetToIndex( 0 ); // Returns 0, because offset 0 is taken by `textNode` which is at index 0.
     *        divElement.offsetToIndex( 1 ); // Returns 0, because `textNode` has `offsetSize` equal to 3, so it occupies offset 1 too.
     *        divElement.offsetToIndex( 2 ); // Returns 0.
     *        divElement.offsetToIndex( 3 ); // Returns 1.
     *        divElement.offsetToIndex( 4 ); // Returns 2. There are no nodes at offset 4, so last available index is returned.
     */
    offsetToIndex(offset: number): number;
    /**
     * Returns a descendant node by its path relative to this element.
     *
     *        // <this>a<b>c</b></this>
     *        this.getNodeByPath( [ 0 ] );     // -> "a"
     *        this.getNodeByPath( [ 1 ] );     // -> <b>
     *        this.getNodeByPath( [ 1, 0 ] );  // -> "c"
     */
    getNodeByPath(relativePath: number[]): Node;
    /**
     * Returns the parent element of the given name. Returns null if the element is not inside the desired parent.
     */
    findAncestor(
        parentName: string,
        options?: {
            includeSelf?: boolean;
        },
    ): Element | null;
    /**
     * Converts `Element` instance to plain object and returns it. Takes care of converting all of this element's children.
     */
    static fromJSON(json: ElementObject): Element;
}

export {};
