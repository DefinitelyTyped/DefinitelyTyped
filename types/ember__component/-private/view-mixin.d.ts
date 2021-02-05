import Mixin from '@ember/object/mixin';

interface ViewMixin {
    /**
     * A list of properties of the view to apply as attributes. If the property
     * is a string value, the value of that string will be applied as the value
     * for an attribute of the property's name.
     */
    attributeBindings: string[];
    /**
     * Returns the current DOM element for the view.
     */
    element: Element;
    /**
     * Returns a jQuery object for this view's element. If you pass in a selector
     * string, this method will return a jQuery object, using the current element
     * as its buffer.
     */
    $: JQueryStatic;
    /**
     * The HTML `id` of the view's element in the DOM. You can provide this
     * value yourself but it must be unique (just as in HTML):
     */
    elementId: string;
    /**
     * Tag name for the view's outer element. The tag name is only used when an
     * element is first created. If you change the `tagName` for an element, you
     * must destroy and recreate the view element.
     */
    tagName: string;
    /**
     * Renders the view again. This will work regardless of whether the
     * view is already in the DOM or not. If the view is in the DOM, the
     * rendering process will be deferred to give bindings a chance
     * to synchronize.
     */
    rerender(): void;
    /**
     * Called when a view is going to insert an element into the DOM.
     */
    willInsertElement(): void;
    /**
     * Called when the element of the view has been inserted into the DOM.
     * Override this function to do any set up that requires an element
     * in the document body.
     */
    didInsertElement(): void;
    /**
     * Called when the view is about to rerender, but before anything has
     * been torn down. This is a good opportunity to tear down any manual
     * observers you have installed based on the DOM state
     */
    willClearRender(): void;
    /**
     * Called when the element of the view is going to be destroyed. Override
     * this function to do any teardown that requires an element, like removing
     * event listeners.
     */
    willDestroyElement(): void;
}
declare const ViewMixin: Mixin<ViewMixin>;

export default ViewMixin;
