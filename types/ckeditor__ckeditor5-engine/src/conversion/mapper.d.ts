import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import ModelElement from '../model/element';
import ModelPosition from '../model/position';
import ModelRange from '../model/range';
import ViewElement from '../view/element';
import ViewPosition from '../view/position';
import ViewRange from '../view/range';

/**
 * Maps elements, positions and markers between {@link module:engine/view/document~Document the view} and
 * {@link module:engine/model/model the model}.
 *
 * The instance of the Mapper used for the editing pipeline is available in
 * {@link module:engine/controller/editingcontroller~EditingController#mapper `editor.editing.mapper`}.
 *
 * Mapper uses bound elements to find corresponding elements and positions, so, to get proper results,
 * all model elements should be {@link module:engine/conversion/mapper~Mapper#bindElements bound}.
 *
 * To map complex model to/from view relations, you may provide custom callbacks for
 * {@link module:engine/conversion/mapper~Mapper#event:modelToViewPosition modelToViewPosition event} and
 * {@link module:engine/conversion/mapper~Mapper#event:viewToModelPosition viewToModelPosition event} that are fired whenever
 * a position mapping request occurs.
 * Those events are fired by {@link module:engine/conversion/mapper~Mapper#toViewPosition toViewPosition}
 * and {@link module:engine/conversion/mapper~Mapper#toModelPosition toModelPosition} methods. `Mapper` adds it's own default callbacks
 * with `'lowest'` priority. To override default `Mapper` mapping, add custom callback with higher priority and
 * stop the event.
 */
export default class Mapper implements Emitter {
    /**
     * Creates an instance of the mapper.
     */
    constructor();

    /**
     * Marks model and view elements as corresponding. Corresponding elements can be retrieved by using
     * the {@link module:engine/conversion/mapper~Mapper#toModelElement toModelElement} and
     * {@link module:engine/conversion/mapper~Mapper#toViewElement toViewElement} methods.
     * The information that elements are bound is also used to translate positions.
     */
    bindElements(modelElement: ModelElement, viewElement: ViewElement): void;

    /**
     * Unbinds given {@link module:engine/view/element~Element view element} from the map.
     *
     * **Note:** view-to-model binding will be removed, if it existed. However, corresponding model-to-view binding
     * will be removed only if model element is still bound to passed `viewElement`.
     *
     * This behavior lets for re-binding model element to another view element without fear of losing the new binding
     * when the previously bound view element is unbound.
     */
    unbindViewElement(viewElement: ViewElement): void;

    /**
     * Unbinds given {@link module:engine/model/element~Element model element} from the map.
     *
     * **Note:** model-to-view binding will be removed, if it existed. However, corresponding view-to-model binding
     * will be removed only if view element is still bound to passed `modelElement`.
     *
     * This behavior lets for re-binding view element to another model element without fear of losing the new binding
     * when the previously bound model element is unbound.
     */
    unbindModelElement(modelElement: ModelElement): void;

    /**
     * Binds given marker name with given {@link module:engine/view/element~Element view element}. The element
     * will be added to the current set of elements bound with given marker name.
     */
    bindElementToMarker(element: ViewElement, name: string): void;

    /**
     * Unbinds an element from given marker name.
     */
    unbindElementFromMarkerName(element: ViewElement, name: string): void;

    /**
     * Returns all marker names of markers which has changed due to unbinding a view element (so it is assumed that the view element
     * has been removed, moved or renamed) since the last flush. After returning, the marker names list is cleared.
     */
    flushUnboundMarkerNames(): string[];

    /**
     * Gets the length of the view element in the model.
     *
     * The length is calculated as follows:
     * * if {@link #registerViewToModelLength length mapping callback} is provided for given `viewNode` it is used to
     * evaluate model length (`viewNode` is used as first and only parameter passed to the callback),
     * * length of a {@link module:engine/view/text~Text text node} is equal to the length of it's
     * {@link module:engine/view/text~Text#data data},
     * * length of a {@link module:engine/view/uielement~UIElement ui element} is equal to 0,
     * * length of a mapped {@link module:engine/view/element~Element element} is equal to 1,
     * * length of a not-mapped {@link module:engine/view/element~Element element} is equal to the length of it's children.
     *
     * Examples:
     *
     *    foo                          -> 3 // Text length is equal to it's data length.
     *    <p>foo</p>                   -> 1 // Length of an element which is mapped is by default equal to 1.
     *    <b>foo</b>                   -> 3 // Length of an element which is not mapped is a length of its children.
     *    <div><p>x</p><p>y</p></div>  -> 2 // Assuming that <div> is not mapped and <p> are mapped.
     */
    getModelLength(viewNode: ViewElement): number;

    /**
     * Removes all model to view and view to model bindings.
     */
    clearBindings(): void;

    /**
     * Gets the corresponding model element.
     *
     * **Note:** {@link module:engine/view/uielement~UIElement} does not have corresponding element in model.
     */
    toModelElement(viewElement: ViewElement): ModelElement | undefined;

    /**
     * Gets the corresponding view element.
     */
    toViewElement(modelElement: ModelElement): ViewElement;

    /**
     * Gets the corresponding model range.
     */
    toModelRange(viewRange: ViewRange): ModelRange;

    /**
     * Gets the corresponding view range.
     */
    toViewRange(modelRange: ModelRange): ViewRange;

    /**
     * Gets the corresponding model position.
     */
    toModelPosition(viewPosition: ViewPosition): ModelPosition;

    /**
     * Gets the corresponding view position.
     */
    toViewPosition(modelPosition: ModelPosition, options?: { isPhantom?: boolean }): ViewPosition;

    /**
     * Gets all view elements bound to the given marker name.
     */
    markerNameToElements(name: string): Set<ViewElement> | null;

    /**
     * Registers a callback that evaluates the length in the model of a view element with given name.
     *
     * The callback is fired with one argument, which is a view element instance. The callback is expected to return
     * a number representing the length of view element in model.
     *
     *    // List item in view may contain nested list, which have other list items. In model though,
     *    // the lists are represented by flat structure. Because of those differences, length of list view element
     *    // may be greater than one. In the callback it's checked how many nested list items are in evaluated list item.
     *
     *    function getViewListItemLength( element ) {
     *      let length = 1;
     *
     *      for ( let child of element.getChildren() ) {
     *        if ( child.name == 'ul' || child.name == 'ol' ) {
     *          for ( let item of child.getChildren() ) {
     *            length += getViewListItemLength( item );
     *          }
     *        }
     *      }
     *
     *      return length;
     *    }
     *
     *    mapper.registerViewToModelLength( 'li', getViewListItemLength );
     */
    registerViewToModelLength(viewElementName: string, lengthCallback: (element: ViewElement) => number): void;

    /**
     * For given `viewPosition`, finds and returns the closest ancestor of this position that has a mapping to
     * the model.
     */
    findMappedViewAncestor(viewPosition: ViewPosition): ViewElement;

    /**
     * Finds the position in the view node (or its children) with the expected model offset.
     *
     * Example:
     *
     *    <p>fo<b>bar</b>bom</p> -> expected offset: 4
     *
     *    findPositionIn( p, 4 ):
     *    <p>|fo<b>bar</b>bom</p> -> expected offset: 4, actual offset: 0
     *    <p>fo|<b>bar</b>bom</p> -> expected offset: 4, actual offset: 2
     *    <p>fo<b>bar</b>|bom</p> -> expected offset: 4, actual offset: 5 -> we are too far
     *
     *    findPositionIn( b, 4 - ( 5 - 3 ) ):
     *    <p>fo<b>|bar</b>bom</p> -> expected offset: 2, actual offset: 0
     *    <p>fo<b>bar|</b>bom</p> -> expected offset: 2, actual offset: 3 -> we are too far
     *
     *    findPositionIn( bar, 2 - ( 3 - 3 ) ):
     *    We are in the text node so we can simple find the offset.
     *    <p>fo<b>ba|r</b>bom</p> -> expected offset: 2, actual offset: 2 -> position found
     */
    findPositionIn(viewParent: ViewElement, expectedOffset: number): ViewPosition;

    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
