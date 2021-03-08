import ContainerElement from "./containerelement";
import mix from "@ckeditor/ckeditor5-utils/src/mix";
import ObservableMixin from "@ckeditor/ckeditor5-utils/src/observablemixin";

declare class BaseEditableElement extends ContainerElement {
    readonly isReadOnly: boolean;
    readonly isFocused: boolean;

    /**
     * Checks whether this object is of the given.
     *
     *        editableElement.is( 'editableElement' ); // -> true
     *        editableElement.is( 'element' ); // -> true
     *        editableElement.is( 'node' ); // -> true
     *        editableElement.is( 'view:editableElement' ); // -> true
     *        editableElement.is( 'view:element' ); // -> true
     *        editableElement.is( 'view:node' ); // -> true
     *
     *        editableElement.is( 'model:element' ); // -> false
     *        editableElement.is( 'documentFragment' ); // -> false
     *
     * Assuming that the object being checked is an editbale element, you can also check its
     * {@link module:engine/view/editableelement~EditableElement#name name}:
     *
     *        editableElement.is( 'element', 'div' ); // -> true if this is a div element
     *        editableElement.is( 'editableElement', 'div' ); // -> same as above
     *        text.is( 'element', 'div' ); -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string, name?: string): boolean;

    destroy(): void;
}

/**
 * Editable element which can be a {@link module:engine/view/rooteditableelement~RootEditableElement root}
 * or nested editable area in the editor.
 *
 * Editable is automatically read-only when its {@link module:engine/view/document~Document Document} is read-only.
 *
 * The constructor of this class shouldn't be used directly. To create new `EditableElement` use the
 * {@link module:engine/view/downcastwriter~DowncastWriter#createEditableElement `downcastWriter#createEditableElement()`} method.
 */
export default class EditableElement extends ObservableMixin {}
export {};
