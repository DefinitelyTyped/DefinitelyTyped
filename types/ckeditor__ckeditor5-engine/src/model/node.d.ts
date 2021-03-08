import "@ckeditor/ckeditor5-utils/src/version";
import toMap from "@ckeditor/ckeditor5-utils/src/tomap";
import DocumentFragment from "./documentfragment";

interface NodeObject {
    /**
     * Index of this node in it's parent or `null` if the node has no parent.
     *
     * Accessing this property throws an error if this node's parent element does not contain it.
     * This means that model tree got broken.
     */
    index: number | null;
    /**
     * Offset at which this node starts in it's parent. It is equal to the sum of {@link #offsetSize offsetSize}
     * of all it's previous siblings. Equals to `null` if node has no parent.
     *
     * Accessing this property throws an error if this node's parent element does not contain it.
     * This means that model tree got broken.
     */
    startOffset: number | null;
    /**
     * Offset size of this node. Represents how much "offset space" is occupied by the node in it's parent.
     * It is important for {@link module:engine/model/position~Position position}. When node has `offsetSize` greater than `1`, position
     * can be placed between that node start and end. `offsetSize` greater than `1` is for nodes that represents more
     * than one entity, i.e. {@link module:engine/model/text~Text text node}.
     */
    offsetSize: number;
    /**
     * Offset at which this node ends in it's parent. It is equal to the sum of this node's
     * {@link module:engine/model/node~Node#startOffset start offset} and {@link #offsetSize offset size}.
     * Equals to `null` if the node has no parent.
     */
    endOffset: number | null;
    /**
     * Node's next sibling or `null` if the node is a last child of it's parent or if the node has no parent.
     */
    nextSibling: Node | null;
    /**
     * Node's previous sibling or `null` if the node is a first child of it's parent or if the node has no parent.
     */
    previousSibling: Node | null;
    /**
     * The top-most ancestor of the node. If node has no parent it is the root itself. If the node is a part
     * of {@link module:engine/model/documentfragment~DocumentFragment}, it's `root` is equal to that `DocumentFragment`.
     */
    root: DocumentFragment;
}

/**
 * Model node. Most basic structure of model tree.
 *
 * This is an abstract class that is a base for other classes representing different nodes in model.
 *
 * **Note:** If a node is detached from the model tree, you can manipulate it using it's API.
 * However, it is **very important** that nodes already attached to model tree should be only changed through
 * {@link module:engine/model/writer~Writer Writer API}.
 *
 * Changes done by `Node` methods, like {@link module:engine/model/element~Element#_insertChild _insertChild} or
 * {@link module:engine/model/node~Node#_setAttribute _setAttribute}
 * do not generate {@link module:engine/model/operation/operation~Operation operations}
 * which are essential for correct editor work if you modify nodes in {@link module:engine/model/document~Document document} root.
 *
 * The flow of working on `Node` (and classes that inherits from it) is as such:
 * 1. You can create a `Node` instance, modify it using it's API.
 * 2. Add `Node` to the model using `Batch` API.
 * 3. Change `Node` that was already added to the model using `Batch` API.
 *
 * Similarly, you cannot use `Batch` API on a node that has not been added to the model tree, with the exception
 * of {@link module:engine/model/writer~Writer#insert inserting} that node to the model tree.
 *
 * Be aware that using {@link module:engine/model/writer~Writer#remove remove from Batch API} does not allow to use `Node` API because
 * the information about `Node` is still kept in model document.
 *
 * In case of {@link module:engine/model/element~Element element node}, adding and removing children also counts as changing a node and
 * follows same rules.
 */
export default class Node<T = NodeObject> {
    /**
     * Creates a model node.
     *
     * This is an abstract class, so this constructor should not be used directly.
     */
    constructor(attrs?: Record<string, unknown> | Array<[string, unknown]> | Map<string, unknown>);
    /**
     * Index of this node in it's parent or `null` if the node has no parent.
     *
     * Accessing this property throws an error if this node's parent element does not contain it.
     * This means that model tree got broken.
     */
    readonly index: number | null;
    /**
     * Offset at which this node starts in it's parent. It is equal to the sum of {@link #offsetSize offsetSize}
     * of all it's previous siblings. Equals to `null` if node has no parent.
     *
     * Accessing this property throws an error if this node's parent element does not contain it.
     * This means that model tree got broken.
     */
    readonly startOffset: number | null;
    /**
     * Offset size of this node. Represents how much "offset space" is occupied by the node in it's parent.
     * It is important for {@link module:engine/model/position~Position position}. When node has `offsetSize` greater than `1`, position
     * can be placed between that node start and end. `offsetSize` greater than `1` is for nodes that represents more
     * than one entity, i.e. {@link module:engine/model/text~Text text node}.
     */
    readonly offsetSize: number;
    /**
     * Offset at which this node ends in it's parent. It is equal to the sum of this node's
     * {@link module:engine/model/node~Node#startOffset start offset} and {@link #offsetSize offset size}.
     * Equals to `null` if the node has no parent.
     */
    readonly endOffset: number | null;
    /**
     * Node's next sibling or `null` if the node is a last child of it's parent or if the node has no parent.
     */
    readonly nextSibling: Node | null;
    /**
     * Node's previous sibling or `null` if the node is a first child of it's parent or if the node has no parent.
     */
    readonly previousSibling: Node | null;
    /**
     * The top-most ancestor of the node. If node has no parent it is the root itself. If the node is a part
     * of {@link module:engine/model/documentfragment~DocumentFragment}, it's `root` is equal to that `DocumentFragment`.
     */
    readonly root: DocumentFragment;
    /**
     * Returns true if the node is in a tree rooted in the document (is a descendant of one of its roots).
     */
    isAttached(): boolean;
    /**
     * Gets path to the node. The path is an array containing starting offsets of consecutive ancestors of this node,
     * beginning from {@link module:engine/model/node~Node#root root}, down to this node's starting offset. The path can be used to
     * create {@link module:engine/model/position~Position Position} instance.
     *
     *        const abc = new Text( 'abc' );
     *        const foo = new Text( 'foo' );
     *        const h1 = new Element( 'h1', null, new Text( 'header' ) );
     *        const p = new Element( 'p', null, [ abc, foo ] );
     *        const div = new Element( 'div', null, [ h1, p ] );
     *        foo.getPath(); // Returns [ 1, 3 ]. `foo` is in `p` which is in `div`. `p` starts at offset 1, while `foo` at 3.
     *        h1.getPath(); // Returns [ 0 ].
     *        div.getPath(); // Returns [].
     */
    getPath(): number[];
    /**
     * Returns ancestors array of this node.
     */
    getAncestors(options?: { includeSelf: boolean; parentFirst: boolean }): Node[];
    /**
     * Returns a {@link module:engine/model/element~Element} or {@link module:engine/model/documentfragment~DocumentFragment}
     * which is a common ancestor of both nodes.
     */
    getCommonAncestor(node: Node, options?: { includeSelf: boolean }): DocumentFragment | null;
    /**
     * Returns whether this node is before given node. `false` is returned if nodes are in different trees (for example,
     * in different {@link module:engine/model/documentfragment~DocumentFragment}s).
     */
    isBefore(node: Node): boolean;
    /**
     * Returns whether this node is after given node. `false` is returned if nodes are in different trees (for example,
     * in different {@link module:engine/model/documentfragment~DocumentFragment}s).
     */
    isAfter(node: Node): boolean;
    /**
     * Checks if the node has an attribute with given key.
     */
    hasAttribute(key: string): boolean;
    /**
     * Gets an attribute value for given key or `undefined` if that attribute is not set on node.
     */
    getAttribute(key: string): unknown | undefined;
    /**
     * Returns iterator that iterates over this node's attributes.
     *
     * Attributes are returned as arrays containing two items. First one is attribute key and second is attribute value.
     * This format is accepted by native `Map` object and also can be passed in `Node` constructor.
     */
    getAttributes(): Iterable<[string, string]>;
    /**
     * Returns iterator that iterates over this node's attribute keys.
     */
    getAttributeKeys(): Iterable<string>;
    /**
     * Converts `Node` to plain object and returns it.
     */
    toJSON(): T;
    /**
     * Checks whether this object is of the given type.
     *
     * This method is useful when processing model objects that are of unknown type. For example, a function
     * may return a {@link module:engine/model/documentfragment~DocumentFragment} or a {@link module:engine/model/node~Node}
     * that can be either a text node or an element. This method can be used to check what kind of object is returned.
     *
     *        someObject.is( 'element' ); // -> true if this is an element
     *        someObject.is( 'node' ); // -> true if this is a node (a text node or an element)
     *        someObject.is( 'documentFragment' ); // -> true if this is a document fragment
     *
     * Since this method is also available on a range of view objects, you can prefix the type of the object with
     * `model:` or `view:` to check, for example, if this is the model's or view's element:
     *
     *        modelElement.is( 'model:element' ); // -> true
     *        modelElement.is( 'view:element' ); // -> false
     *
     * By using this method it is also possible to check a name of an element:
     *
     *        imageElement.is( 'element', 'image' ); // -> true
     *        imageElement.is( 'element', 'image' ); // -> same as above
     *        imageElement.is( 'model:element', 'image' ); // -> same as above, but more precise
     *
     * The list of model objects which implement the `is()` method:
     *
     * * {@link module:engine/model/node~Node#is `Node#is()`}
     * * {@link module:engine/model/text~Text#is `Text#is()`}
     * * {@link module:engine/model/element~Element#is `Element#is()`}
     * * {@link module:engine/model/rootelement~RootElement#is `RootElement#is()`}
     * * {@link module:engine/model/position~Position#is `Position#is()`}
     * * {@link module:engine/model/liveposition~LivePosition#is `LivePosition#is()`}
     * * {@link module:engine/model/range~Range#is `Range#is()`}
     * * {@link module:engine/model/liverange~LiveRange#is `LiveRange#is()`}
     * * {@link module:engine/model/documentfragment~DocumentFragment#is `DocumentFragment#is()`}
     * * {@link module:engine/model/selection~Selection#is `Selection#is()`}
     * * {@link module:engine/model/documentselection~DocumentSelection#is `DocumentSelection#is()`}
     * * {@link module:engine/model/markercollection~Marker#is `Marker#is()`}
     * * {@link module:engine/model/textproxy~TextProxy#is `TextProxy#is()`}
     */
    is(type: string): boolean;
}

export {};
