import Element from "./element";
import Node from "./node";

/**
 * Empty element class. It is used to represent elements that cannot contain any child nodes (for example `<img>` elements).
 *
 * To create a new empty element use the
 * {@link module:engine/view/downcastwriter~DowncastWriter#createEmptyElement `downcastWriter#createEmptyElement()`} method.
 */
export default class EmptyElement extends Element {
    getFillerOffset(): null;

    /**
     * Checks whether this object is of the given.
     *
     *        emptyElement.is( 'emptyElement' ); // -> true
     *        emptyElement.is( 'element' ); // -> true
     *        emptyElement.is( 'node' ); // -> true
     *        emptyElement.is( 'view:emptyElement' ); // -> true
     *        emptyElement.is( 'view:element' ); // -> true
     *        emptyElement.is( 'view:node' ); // -> true
     *
     *        emptyElement.is( 'model:element' ); // -> false
     *        emptyElement.is( 'documentFragment' ); // -> false
     *
     * Assuming that the object being checked is an empty element, you can also check its
     * {@link module:engine/view/emptyelement~EmptyElement#name name}:
     *
     *        emptyElement.is( 'element', 'img' ); // -> true if this is a img element
     *        emptyElement.is( 'emptyElement', 'img' ); // -> same as above
     *        text.is( 'element', 'img' ); -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string, name?: string): boolean;
}
