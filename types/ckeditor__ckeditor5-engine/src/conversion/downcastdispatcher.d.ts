import DowncastWriter from "../view/downcastwriter";
import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Mapper from "./mapper";
import MarkerCollection from "../model/markercollection";
import ModelConsumable from "./modelconsumable";
import ModelDiffer from "../model/differ";
import Schema from "../model/schema";
import Range from "../model/range";
import Position from "../model/position";
import Selection from "../model/selection";
import Element from "../model/element";

/**
 * The downcast dispatcher is a central point of downcasting (conversion from the model to the view), which is a process of reacting
 * to changes in the model and firing a set of events. Callbacks listening to these events are called converters. The
 * converters' role is to convert the model changes to changes in view (for example, adding view nodes or
 * changing attributes on view elements).
 *
 * During the conversion process, downcast dispatcher fires events basing on the state of the model and prepares
 * data for these events. It is important to understand that the events are connected with the changes done on the model,
 * for example: "a node has been inserted" or "an attribute has changed". This is in contrary to upcasting (a view-to-model conversion)
 * where you convert the view state (view nodes) to a model tree.
 *
 * The events are prepared basing on a diff created by {@link module:engine/model/differ~Differ Differ}, which buffers them
 * and then passes to the downcast dispatcher as a diff between the old model state and the new model state.
 *
 * Note that because the changes are converted, there is a need to have a mapping between the model structure and the view structure.
 * To map positions and elements during the downcast (a model-to-view conversion), use {@link module:engine/conversion/mapper~Mapper}.
 *
 * Downcast dispatcher fires the following events for model tree changes:
 *
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:insert `insert`} &ndash;
 * If a range of nodes was inserted to the model tree.
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:remove `remove`} &ndash;
 * If a range of nodes was removed from the model tree.
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:attribute `attribute`} &ndash;
 * If an attribute was added, changed or removed from a model node.
 *
 * For {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:insert `insert`}
 * and {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:attribute `attribute`},
 * downcast dispatcher generates {@link module:engine/conversion/modelconsumable~ModelConsumable consumables}.
 * These are used to have control over which changes have already been consumed. It is useful when some converters
 * overwrite others or convert multiple changes (for example, it converts an insertion of an element and also converts that
 * element's attributes during the insertion).
 *
 * Additionally, downcast dispatcher fires events for {@link module:engine/model/markercollection~Marker marker} changes:
 *
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:addMarker} &ndash; If a marker was added.
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:removeMarker} &ndash; If a marker was removed.
 *
 * Note that changing a marker is done through removing the marker from the old range and adding it to the new range,
 * so both events are fired.
 *
 * Finally, downcast dispatcher also handles firing events for the {@link module:engine/model/selection model selection}
 * conversion:
 *
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:selection}
 * &ndash; Converts the selection from the model to the view.
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:attribute}
 * &ndash; Fired for every selection attribute.
 * * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:addMarker}
 * &ndash; Fired for every marker that contains a selection.
 *
 * Unlike the model tree and the markers, the events for selection are not fired for changes but for a selection state.
 *
 * When providing custom listeners for a downcast dispatcher, remember to check whether a given change has not been
 * {@link module:engine/conversion/modelconsumable~ModelConsumable#consume consumed} yet.
 *
 * When providing custom listeners for downcast dispatcher, keep in mind that any callback that has
 * {@link module:engine/conversion/modelconsumable~ModelConsumable#consume consumed} a value from a consumable and
 * converted the change should also stop the event (for efficiency purposes).
 *
 * When providing custom listeners for downcast dispatcher, remember to use the provided
 * {@link module:engine/view/downcastwriter~DowncastWriter view downcast writer} to apply changes to the view document.
 *
 * You can read more about conversion in the following guides:
 *
 * * {@glink framework/guides/deep-dive/conversion/conversion-introduction Advanced conversion concepts &mdash; attributes}
 * * {@glink framework/guides/deep-dive/conversion/conversion-extending-output Extending the editor output }
 * * {@glink framework/guides/deep-dive/conversion/custom-element-conversion Custom element conversion}
 *
 * An example of a custom converter for the downcast dispatcher:
 *
 *        // You will convert inserting a "paragraph" model element into the model.
 *        downcastDispatcher.on( 'insert:paragraph', ( evt, data, conversionApi ) => {
 *            // Remember to check whether the change has not been consumed yet and consume it.
 *            if ( conversionApi.consumable.consume( data.item, 'insert' ) ) {
 *                return;
 *            }
 *
 *            // Translate the position in the model to a position in the view.
 *            const viewPosition = conversionApi.mapper.toViewPosition( data.range.start );
 *
 *            // Create a <p> element that will be inserted into the view at the `viewPosition`.
 *            const viewElement = conversionApi.writer.createContainerElement( 'p' );
 *
 *            // Bind the newly created view element to the model element so positions will map accordingly in the future.
 *            conversionApi.mapper.bindElements( data.item, viewElement );
 *
 *            // Add the newly created view element to the view.
 *            conversionApi.writer.insert( viewPosition, viewElement );
 *
 *            // Remember to stop the event propagation.
 *            evt.stop();
 *        } );
 */
export default class DowncastDispatcher<T extends Record<string, unknown> = {}> extends EmitterMixin {
    /**
     * Creates a downcast dispatcher instance.
     *
     * @see module:engine/conversion/downcastdispatcher~DowncastConversionApi
     */
    constructor(conversionApi?: T);

    /**
     * An interface passed by the dispatcher to the event callbacks.
     *
     */
    readonly conversionApi: DowncastConversionApi & T;
    /**
     * Takes a {@link module:engine/model/differ~Differ model differ} object with buffered changes and fires conversion basing on it.
     */
    convertChanges(differ: ModelDiffer, markers: MarkerCollection, writer: DowncastWriter): void;
    /**
     * Starts a conversion of a range insertion.
     *
     * For each node in the range, {@link #event:insert `insert` event is fired}. For each attribute on each node,
     * {@link #event:attribute `attribute` event is fired}.
     *
     * @fires insert
     * @fires attribute
     */
    convertInsert(range: Range, writer: DowncastWriter): void;
    /**
     * Fires conversion of a single node removal. Fires {@link #event:remove remove event} with provided data.
     */
    convertRemove(position: Position, length: number, name: string, writer: DowncastWriter): void;
    /**
     * Starts a conversion of an attribute change on a given `range`.
     *
     * For each node in the given `range`, {@link #event:attribute attribute event} is fired with the passed data.
     *
     * @fires attribute
     */
    convertAttribute(range: Range, key: string, oldValue: unknown, newValue: unknown, writer: DowncastWriter): void;
    /**
     * Starts the reconversion of an element. It will:
     *
     * * Fire an {@link #event:insert `insert` event} for the element to reconvert.
     * * Fire an {@link #event:attribute `attribute` event} for element attributes.
     *
     * This will not reconvert children of the element if they have existing (already converted) views. For newly inserted child elements
     * it will behave the same as {@link #convertInsert}.
     *
     * Element reconversion is defined by the `triggerBy` configuration for the
     * {@link module:engine/conversion/downcasthelpers~DowncastHelpers#elementToElement `elementToElement()`} conversion helper.
     *
     * @fires insert
     * @fires attribute
     */
    reconvertElement(element: Element, writer: DowncastWriter): void;
    /**
     * Starts the model selection conversion.
     *
     * Fires events for a given {@link module:engine/model/selection~Selection selection} to start the selection conversion.
     *
     * @fires selection
     * @fires addMarker
     * @fires attribute
     */
    convertSelection(selection: Selection, markers: MarkerCollection, writer: DowncastWriter): void;
    /**
     * Converts the added marker. Fires the {@link #event:addMarker `addMarker`} event for each item
     * in the marker's range. If the range is collapsed, a single event is dispatched. See the event description for more details.
     *
     * @fires addMarker
     */
    convertMarkerAdd(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    /**
     * Fires the conversion of the marker removal. Fires the {@link #event:removeMarker `removeMarker`} event with the provided data.
     *
     * @fires removeMarker
     */
    convertMarkerRemove(markerName: string, markerRange: Range, writer: DowncastWriter): void;
}
/**
 * Conversion interface that is registered for given {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher}
 * and is passed as one of parameters when {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher dispatcher}
 * fires its events.
 */
interface DowncastConversionApi {
    dispatcher: DowncastDispatcher;
    /**
     * Stores the information about what parts of a processed model item are still waiting to be handled. After a piece of a model item was
     * converted, an appropriate consumable value should be {@link module:engine/conversion/modelconsumable~ModelConsumable#consume consumed}.
     */
    consumable: ModelConsumable;
    mapper: Mapper;
    schema: Schema;
    writer: DowncastWriter;
    /**
     * An object with an additional configuration which can be used during the conversion process. Available only for data downcast conversion.
     */
    options: Record<string, unknown>;
}

export {};
