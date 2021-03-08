import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Document from "./document";
import DocumentFragment from "./documentfragment";
import Element from "./element";

/**
 * Abstract view node class.
 *
 * This is an abstract class. Its constructor should not be used directly.
 * Use the {@link module:engine/view/downcastwriter~DowncastWriter} or {@link module:engine/view/upcastwriter~UpcastWriter}
 * to create new instances of view nodes.
 */
export default abstract class Node extends EmitterMixin {
    /**
     * Creates a tree view node.
     */
    constructor(document: Document);

    readonly document: Document;

    readonly parent: DocumentFragment | null;

    /**
     * Index of the node in the parent element or null if the node has no parent.
     *
     * Accessing this property throws an error if this node's parent element does not contain it.
     * This means that view tree got broken.
     */
    readonly index: number | null;

    /**
     * Node's next sibling, or `null` if it is the last child.
     */
    readonly nextSibling: Node | null;

    /**
     * Node's previous sibling, or `null` if it is the first child.
     */
    readonly previousSibling: Node | null;

    /**
     * Top-most ancestor of the node. If the node has no parent it is the root itself.
     */
    readonly root: DocumentFragment | Node;

    /**
     * Returns true if the node is in a tree rooted in the document (is a descendant of one of its roots).
     */
    isAttached(): boolean;

    /**
     * Gets a path to the node. The path is an array containing indices of consecutive ancestors of this node,
     * beginning from {@link module:engine/view/node~Node#root root}, down to this node's index.
     *
     *        const abc = downcastWriter.createText( 'abc' );
     *        const foo = downcastWriter.createText( 'foo' );
     *        const h1 = downcastWriter.createElement( 'h1', null, downcastWriter.createText( 'header' ) );
     *        const p = downcastWriter.createElement( 'p', null, [ abc, foo ] );
     *        const div = downcastWriter.createElement( 'div', null, [ h1, p ] );
     *        foo.getPath(); // Returns [ 1, 3 ]. `foo` is in `p` which is in `div`. `p` starts at offset 1, while `foo` at 3.
     *        h1.getPath(); // Returns [ 0 ].
     *        div.getPath(); // Returns [].
     */
    getPath(): number[];

    /**
     * Returns ancestors array of this node.
     */
    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): DocumentFragment[];

    /**
     * Returns a {@link module:engine/view/element~Element} or {@link module:engine/view/documentfragment~DocumentFragment}
     * which is a common ancestor of both nodes.
     */
    getCommonAncestor(node: Node, options?: { includeSelf?: boolean }): Element | DocumentFragment | null;

    /**
     * Returns whether this node is before given node. `false` is returned if nodes are in different trees (for example,
     * in different {@link module:engine/view/documentfragment~DocumentFragment}s).
     */
    isBefore(node: Node): boolean;

    /**
     * Returns whether this node is after given node. `false` is returned if nodes are in different trees (for example,
     * in different {@link module:engine/view/documentfragment~DocumentFragment}s).
     */
    isAfter(node: Node): boolean;

    /**
     * Custom toJSON method to solve child-parent circular dependencies.
     */
    toJSON(): Omit<this, "parent">;

    /**
     * Checks whether this object is of the given type.
     *
     * This method is useful when processing view objects that are of unknown type. For example, a function
     * may return a {@link module:engine/view/documentfragment~DocumentFragment} or a {@link module:engine/view/node~Node}
     * that can be either a text node or an element. This method can be used to check what kind of object is returned.
     *
     *        someObject.is( 'element' ); // -> true if this is an element
     *        someObject.is( 'node' ); // -> true if this is a node (a text node or an element)
     *        someObject.is( 'documentFragment' ); // -> true if this is a document fragment
     *
     * Since this method is also available on a range of model objects, you can prefix the type of the object with
     * `model:` or `view:` to check, for example, if this is the model's or view's element:
     *
     *        viewElement.is( 'view:element' ); // -> true
     *        viewElement.is( 'model:element' ); // -> false
     *
     * By using this method it is also possible to check a name of an element:
     *
     *        imgElement.is( 'element', 'img' ); // -> true
     *        imgElement.is( 'view:element', 'img' ); // -> same as above, but more precise
     *
     * The list of view objects which implement the `is()` method:
     *
     * * {@link module:engine/view/attributeelement~AttributeElement#is `AttributeElement#is()`}
     * * {@link module:engine/view/containerelement~ContainerElement#is `ContainerElement#is()`}
     * * {@link module:engine/view/documentfragment~DocumentFragment#is `DocumentFragment#is()`}
     * * {@link module:engine/view/documentselection~DocumentSelection#is `DocumentSelection#is()`}
     * * {@link module:engine/view/editableelement~EditableElement#is `EditableElement#is()`}
     * * {@link module:engine/view/element~Element#is `Element#is()`}
     * * {@link module:engine/view/emptyelement~EmptyElement#is `EmptyElement#is()`}
     * * {@link module:engine/view/node~Node#is `Node#is()`}
     * * {@link module:engine/view/position~Position#is `Position#is()`}
     * * {@link module:engine/view/range~Range#is `Range#is()`}
     * * {@link module:engine/view/rooteditableelement~RootEditableElement#is `RootEditableElement#is()`}
     * * {@link module:engine/view/selection~Selection#is `Selection#is()`}
     * * {@link module:engine/view/text~Text#is `Text#is()`}
     * * {@link module:engine/view/textproxy~TextProxy#is `TextProxy#is()`}
     * * {@link module:engine/view/uielement~UIElement#is `UIElement#is()`}
     */
    is(type: string): boolean;

    /**
     * Checks if provided node is similar to this node.
     */
    isSimilar(node: Node): boolean;
}
