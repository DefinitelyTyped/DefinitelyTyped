import Document from "./document";
import Element from "./element";

interface RootElementObject {
    document: Document | null;
}

/**
 * Type of {@link module:engine/model/element~Element} that is a root of a model tree.
 */
export default class RootElement extends Element<RootElement> {
    /**
     * Creates root element.
     */
    constructor(document: Document, name: string, rootName?: string);
    /**
     * {@link module:engine/model/document~Document Document} that owns this root element.
     */
    readonly document: Document | null;
    /**
     * Checks whether this object is of the given.
     *
     *    rootElement.is( 'rootElement' ); // -> true
     *    rootElement.is( 'element' ); // -> true
     *    rootElement.is( 'node' ); // -> true
     *    rootElement.is( 'model:rootElement' ); // -> true
     *    rootElement.is( 'model:element' ); // -> true
     *    rootElement.is( 'model:node' ); // -> true
     *
     *    rootElement.is( 'view:element' ); // -> false
     *    rootElement.is( 'documentFragment' ); // -> false
     *
     * Assuming that the object being checked is an element, you can also check its
     * {@link module:engine/model/element~Element#name name}:
     *
     *    rootElement.is( 'rootElement', '$root' ); // -> same as above
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string, name: string): boolean;
    /**
     * Converts `RootElement` instance to `String` containing it's name.
     */
}

export {};
