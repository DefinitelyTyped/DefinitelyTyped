import DomConverter from './domconverter';
import Element from './element';
import View from './view';

/**
 * UI element class. It should be used to represent editing UI which needs to be injected into the editing view
 * If possible, you should keep your UI outside the editing view. However, if that is not possible,
 * UI elements can be used.
 *
 * How a UI element is rendered is in your control (you pass a callback to
 * {@link module:engine/view/downcastwriter~DowncastWriter#createUIElement `downcastWriter#createUIElement()`}).
 * The editor will ignore your UI element – the selection cannot be placed in it, it is skipped (invisible) when
 * the user modifies the selection by using arrow keys and the editor does not listen to any mutations which
 * happen inside your UI elements.
 *
 * The limitation is that you cannot convert a model element to a UI element. UI elements need to be
 * created for {@link module:engine/model/markercollection~Marker markers} or as additinal elements
 * inside normal {@link module:engine/view/containerelement~ContainerElement container elements}.
 *
 * To create a new UI element use the
 * {@link module:engine/view/downcastwriter~DowncastWriter#createUIElement `downcastWriter#createUIElement()`} method.
 */
export default class UIElement extends Element {
    /**
     * Returns `null` because filler is not needed for UIElements.
     */
    getFillerOffset(): null;

    /**
     * Renders this {@link module:engine/view/uielement~UIElement} to DOM. This method is called by
     * {@link module:engine/view/domconverter~DomConverter}.
     * Do not use inheritance to create custom rendering method, replace `render()` method instead:
     *
     *    const myUIElement = downcastWriter.createUIElement( 'span' );
     *    myUIElement.render = function( domDocument, domConverter ) {
     *      const domElement = this.toDomElement( domDocument );
     *
     *      domConverter.setContentOf( domElement, '<b>this is ui element</b>' );
     *
     *      return domElement;
     *    };
     *
     * If changes in your UI element should trigger some editor UI update you should call
     * the {@link module:core/editor/editorui~EditorUI#update `editor.ui.update()`} method
     * after rendering your UI element.
     */
    render(domDocument: Document, domConverter: DomConverter): HTMLElement;

    /**
     * Creates DOM element based on this view UIElement.
     * Note that each time this method is called new DOM element is created.
     */
    toDomElement(domDocument: Document): HTMLElement;
}

/**
 * This function injects UI element handling to the given {@link module:engine/view/document~Document document}.
 *
 * A callback is added to {@link module:engine/view/document~Document#event:keydown document keydown event}.
 * The callback handles the situation when right arrow key is pressed and selection is collapsed before a UI element.
 * Without this handler, it would be impossible to "jump over" UI element using right arrow key.
 */
export function injectUiElementHandling(view: View): void;
