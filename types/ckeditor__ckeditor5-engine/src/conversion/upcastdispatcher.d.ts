import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { Item } from "../view/item";
import Position from "../model/position";
import Range from "../model/range";
import Element from "../model/element";
import Node from "../model/node";
import ViewConsumable from "./viewconsumable";
import Schema, { SchemaContextDefinition } from "../model/schema";
import Writer from "../model/writer";
import ViewDocumentFragment from "../view/documentfragment";
import DocumentFragment from "../model/documentfragment";

/**
 * Upcast dispatcher is a central point of the view-to-model conversion, which is a process of
 * converting a given {@link module:engine/view/documentfragment~DocumentFragment view document fragment} or
 * {@link module:engine/view/element~Element view element} into a correct model structure.
 *
 * During the conversion process, the dispatcher fires events for all {@link module:engine/view/node~Node view nodes}
 * from the converted view document fragment.
 * Special callbacks called "converters" should listen to these events in order to convert the view nodes.
 *
 * The second parameter of the callback is the `data` object with the following properties:
 *
 * * `data.viewItem` contains a {@link module:engine/view/node~Node view node} or a
 * {@link module:engine/view/documentfragment~DocumentFragment view document fragment}
 * that is converted at the moment and might be handled by the callback.
 * * `data.modelRange` is used to point to the result
 * of the current conversion (e.g. the element that is being inserted)
 * and is always a {@link module:engine/model/range~Range} when the conversion succeeds.
 * * `data.modelCursor` is a {@link module:engine/model/position~Position position} on which the converter should insert
 * the newly created items.
 *
 * The third parameter of the callback is an instance of {@link module:engine/conversion/upcastdispatcher~UpcastConversionApi}
 * which provides additional tools for converters.
 *
 * You can read more about conversion in the following guides:
 *
 * * {@glink framework/guides/deep-dive/conversion/conversion-introduction Advanced conversion concepts &mdash; attributes}
 * * {@glink framework/guides/deep-dive/conversion/custom-element-conversion Custom element conversion}
 *
 * Examples of event-based converters:
 *
 *        // A converter for links (<a>).
 *        editor.data.upcastDispatcher.on( 'element:a', ( evt, data, conversionApi ) => {
 *            if ( conversionApi.consumable.consume( data.viewItem, { name: true, attributes: [ 'href' ] } ) ) {
 *                // The <a> element is inline and is represented by an attribute in the model.
 *                // This is why you need to convert only children.
 *                const { modelRange } = conversionApi.convertChildren( data.viewItem, data.modelCursor );
 *
 *                for ( let item of modelRange.getItems() ) {
 *                    if ( conversionApi.schema.checkAttribute( item, 'linkHref' ) ) {
 *                        conversionApi.writer.setAttribute( 'linkHref', data.viewItem.getAttribute( 'href' ), item );
 *                    }
 *                }
 *            }
 *        } );
 *
 *        // Convert <p> element's font-size style.
 *        // Note: You should use a low-priority observer in order to ensure that
 *        // it is executed after the element-to-element converter.
 *        editor.data.upcastDispatcher.on( 'element:p', ( evt, data, conversionApi ) => {
 *            const { consumable, schema, writer } = conversionApi;
 *
 *            if ( !consumable.consume( data.viewItem, { style: 'font-size' } ) ) {
 *                return;
 *            }
 *
 *            const fontSize = data.viewItem.getStyle( 'font-size' );
 *
 *            // Do not go for the model element after data.modelCursor because it might happen
 *            // that a single view element was converted to multiple model elements. Get all of them.
 *            for ( const item of data.modelRange.getItems( { shallow: true } ) ) {
 *                if ( schema.checkAttribute( item, 'fontSize' ) ) {
 *                    writer.setAttribute( 'fontSize', fontSize, item );
 *                }
 *            }
 *        }, { priority: 'low' } );
 *
 *        // Convert all elements which have no custom converter into a paragraph (autoparagraphing).
 *        editor.data.upcastDispatcher.on( 'element', ( evt, data, conversionApi ) => {
 *            // Check if an element can be converted.
 *            if ( !conversionApi.consumable.test( data.viewItem, { name: data.viewItem.name } ) ) {
 *                // When an element is already consumed by higher priority converters, do nothing.
 *                return;
 *            }
 *
 *            const paragraph = conversionApi.writer.createElement( 'paragraph' );
 *
 *            // Try to safely insert a paragraph at the model cursor - it will find an allowed parent for the current element.
 *            if ( !conversionApi.safeInsert( paragraph, data.modelCursor ) ) {
 *                // When an element was not inserted, it means that you cannot insert a paragraph at this position.
 *                return;
 *            }
 *
 *            // Consume the inserted element.
 *            conversionApi.consumable.consume( data.viewItem, { name: data.viewItem.name } ) );
 *
 *            // Convert the children to a paragraph.
 *            const { modelRange } = conversionApi.convertChildren( data.viewItem,  paragraph ) );
 *
 *            // Update `modelRange` and `modelCursor` in the `data` as a conversion result.
 *            conversionApi.updateConversionResult( paragraph, data );
 *        }, { priority: 'low' } );
 */
export default class UpcastDispatcher<T extends Record<string, unknown> = {}> extends EmitterMixin {
    /**
     * Creates an upcast dispatcher that operates using the passed API.
     */
    constructor(conversionApi?: T);
    readonly conversionApi: UpcastConversionApi & T;

    /**
     * Starts the conversion process. The entry point for the conversion.
     */
    convert(viewItem: ViewDocumentFragment, writer: Writer, context?: SchemaContextDefinition): DocumentFragment;
}
/**
 * A set of conversion utilities available as the third parameter of the
 * {@link module:engine/conversion/upcastdispatcher~UpcastDispatcher upcast dispatcher}'s events.
 */
export interface UpcastConversionApi {
    /**
     * Starts the conversion of a given item by firing an appropriate event.
     *
     * Every fired event is passed (as the first parameter) an object with the `modelRange` property. Every event may set and/or
     * modify that property. When all callbacks are done, the final value of the `modelRange` property is returned by this method.
     * The `modelRange` must be a {@link module:engine/model/range~Range model range} or `null` (as set by default).
     */
    convertItem(viewItem: Item, modelCursor: Position): { modelRange: Range | null; modelCursor: Position };

    /**
     * Starts the conversion of all children of a given item by firing appropriate events for all the children.
     */
    convertChildren(
        viewItem: Item,
        positionOrElement: Position | Element,
    ): { modelRange: Range; modelCursor: Position };

    /**
     * Safely inserts an element to the document, checking the {@link module:engine/model/schema~Schema schema} to find an allowed parent for
     * an element that you are going to insert, starting from the given position. If the current parent does not allow to insert the element
     * but one of the ancestors does, then splits the nodes to allowed parent.
     *
     * If the schema allows to insert the node in a given position, nothing is split.
     *
     * If it was not possible to find an allowed parent, `false` is returned and nothing is split.
     *
     * Otherwise, ancestors are split.
     *
     * For instance, if `<image>` is not allowed in `<paragraph>` but is allowed in `$root`:
     *
     *        <paragraph>foo[]bar</paragraph>
     *
     *        -> safe insert for `<image>` will split ->
     *
     *        <paragraph>foo</paragraph>[]<paragraph>bar</paragraph>
     *
     * Example usage:
     *
     *        const myElement = conversionApi.writer.createElement( 'myElement' );
     *
     *        if ( !conversionApi.safeInsert( myElement, data.modelCursor ) ) {
     *            return;
     *        }
     *
     * The split result is saved and {@link #updateConversionResult} should be used to update the
     * {@link module:engine/conversion/upcastdispatcher~UpcastConversionData conversion data}.
     */
    safeInsert(node: Node, position: Position): boolean;

    /**
     * Updates the conversion result and sets a proper {@link module:engine/conversion/upcastdispatcher~UpcastConversionData#modelRange} and
     * the next {@link module:engine/conversion/upcastdispatcher~UpcastConversionData#modelCursor} after the conversion.
     * Used together with {@link #safeInsert}, it enables you to easily convert elements without worrying if the node was split
     * during the conversion of its children.
     *
     * A usage example in converter code:
     *
     *        const myElement = conversionApi.writer.createElement( 'myElement' );
     *
     *        if ( !conversionApi.safeInsert( myElement, data.modelCursor ) ) {
     *            return;
     *        }
     *
     *        // Children conversion may split `myElement`.
     *        conversionApi.convertChildren( data.viewItem, myElement );
     *
     *        conversionApi.updateConversionResult( myElement, data );
     *
     */
    updateConversionResult(element: Element, data: UpcastConversionData, conversionApi: UpcastConversionApi): void;

    /**
     * Checks the {@link module:engine/model/schema~Schema schema} to find an allowed parent for an element that is going to be inserted
     * starting from the given position. If the current parent does not allow inserting an element but one of the ancestors does, the method
     * splits nodes to allowed parent.
     *
     * If the schema allows inserting the node in the given position, nothing is split and an object with that position is returned.
     *
     * If it was not possible to find an allowed parent, `null` is returned and nothing is split.
     *
     * Otherwise, ancestors are split and an object with a position and the copy of the split element is returned.
     *
     * For instance, if `<image>` is not allowed in `<paragraph>` but is allowed in `$root`:
     *
     *        <paragraph>foo[]bar</paragraph>
     *
     *        -> split for `<image>` ->
     *
     *        <paragraph>foo</paragraph>[]<paragraph>bar</paragraph>
     *
     * In the example above, the position between `<paragraph>` elements will be returned as `position` and the second `paragraph`
     * as `cursorParent`.
     *
     * **Note:** This is an advanced method. For most cases {@link #safeInsert} and {@link #updateConversionResult} should be used.
     */
    splitToAllowedParent(
        position: Position,
        node: Node,
    ): null | {
        position: Position;
        cursorParent?: Element;
    };

    /**
     * Returns all the split parts of the given `element` that were created during upcasting through using {@link #splitToAllowedParent}.
     * It enables you to easily track these elements and continue processing them after they are split during the conversion of their children.
     *
     *        <paragraph>Foo<image />bar<image />baz</paragraph> ->
     *        <paragraph>Foo</paragraph><image /><paragraph>bar</paragraph><image /><paragraph>baz</paragraph>
     *
     * For a reference to any of above paragraphs, the function will return all three paragraphs (the original element included),
     * sorted in the order of their creation (the original element is the first one).
     *
     * If the given `element` was not split, an array with a single element is returned.
     *
     * A usage example in the converter code:
     *
     *        const myElement = conversionApi.writer.createElement( 'myElement' );
     *
     *        // Children conversion may split `myElement`.
     *        conversionApi.convertChildren( data.viewItem, data.modelCursor );
     *
     *        const splitParts = conversionApi.getSplitParts( myElement );
     *        const lastSplitPart = splitParts[ splitParts.length - 1 ];
     *
     *        // Setting `data.modelRange` basing on split parts:
     *        data.modelRange = conversionApi.writer.createRange(
     *            conversionApi.writer.createPositionBefore( myElement ),
     *            conversionApi.writer.createPositionAfter( lastSplitPart )
     *        );
     *
     *        // Setting `data.modelCursor` to continue after the last split element:
     *        data.modelCursor = conversionApi.writer.createPositionAfter( lastSplitPart );
     *
     * **Tip:** If you are unable to get a reference to the original element (for example because the code is split into multiple converters
     * or even classes) but it has already been converted, you may want to check the first element in `data.modelRange`. This is a common
     * situation if an attribute converter is separated from an element converter.
     *
     * **Note:** This is an advanced method. For most cases {@link #safeInsert} and {@link #updateConversionResult} should be used.
     */
    getSplitParts(element: Element): Element[];

    /**
     * Stores information about what parts of the processed view item are still waiting to be handled. After a piece of view item
     * was converted, an appropriate consumable value should be
     * {@link module:engine/conversion/viewconsumable~ViewConsumable#consume consumed}.
     *
     */
    readonly consumable: ViewConsumable;

    /**
     * Custom data stored by converters for the conversion process. Custom properties of this object can be defined and use to
     * pass parameters between converters.
     *
     * The difference between this property and the `data` parameter of
     * {@link module:engine/conversion/upcastdispatcher~UpcastDispatcher#event:element} is that the `data` parameters allow you
     * to pass parameters within a single event and `store` within the whole conversion.
     *
     */
    readonly store: Record<string, unknown>;

    /**
     * The model's schema instance.
     */
    readonly schema: Schema;

    /**
     * The {@link module:engine/model/writer~Writer} instance used to manipulate the data during conversion.
     */
    readonly writer: Writer;
}

/**
 * Conversion data.
 *
 * **Note:** Keep in mind that this object is shared by reference between all conversion callbacks that will be called.
 * This means that callbacks can override values if needed, and these values will be available in other callbacks.
 */
interface UpcastConversionData {
    viewItem: Item;
    modelCursor: Position;
    modelRange?: Range;
}

export {};
