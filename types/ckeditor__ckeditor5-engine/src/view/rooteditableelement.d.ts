import Document from "./document";
import EditableElement from "./editableelement";

/**
 * Class representing a single root in the data view. A root can be either {@link ~RootEditableElement#isReadOnly editable or read-only},
 * but in both cases it is called "an editable". Roots can contain other {@link module:engine/view/editableelement~EditableElement
 * editable elements} making them "nested editables".
 */
export default class RootEditableElement extends EditableElement {
    /**
     * Checks whether this object is of the given.
     *
     *        rootEditableElement.is( 'rootElement' ); // -> true
     *        rootEditableElement.is( 'editableElement' ); // -> true
     *        rootEditableElement.is( 'element' ); // -> true
     *        rootEditableElement.is( 'node' ); // -> true
     *        rootEditableElement.is( 'view:editableElement' ); // -> true
     *        rootEditableElement.is( 'view:element' ); // -> true
     *        rootEditableElement.is( 'view:node' ); // -> true
     *
     *        rootEditableElement.is( 'model:element' ); // -> false
     *        rootEditableElement.is( 'documentFragment' ); // -> false
     *
     * Assuming that the object being checked is a root editable element, you can also check its
     * {@link module:engine/view/rooteditableelement~RootEditableElement#name name}:
     *
     *        rootEditableElement.is( 'element', 'div' ); // -> true if this is a div root editable element
     *        rootEditableElement.is( 'rootElement', 'div' ); // -> same as above
     *        text.is( 'element', 'div' ); -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string, name?: null): boolean;

    get rootName(): string;
    set rootName(rootName: string);
}
