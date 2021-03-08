import { Item } from "../model/item";
import TextProxy from "../model/textproxy";
import Selection from "../model/selection";
import Range from "../model/range";

/**
 * Manages a list of consumable values for {@link module:engine/model/item~Item model items}.
 *
 * Consumables are various aspects of the model. A model item can be broken down into singular properties that might be
 * taken into consideration when converting that item.
 *
 * `ModelConsumable` is used by {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher} while analyzing changed
 * parts of {@link module:engine/model/document~Document the document}. The added / changed / removed model items are broken down
 * into singular properties (the item itself and it's attributes). All those parts are saved in `ModelConsumable`. Then,
 * during conversion, when given part of model item is converted (i.e. the view element has been inserted into the view,
 * but without attributes), consumable value is removed from `ModelConsumable`.
 *
 * For model items, `ModelConsumable` stores consumable values of one of following types: `insert`, `addattribute:<attributeKey>`,
 * `changeattributes:<attributeKey>`, `removeattributes:<attributeKey>`.
 *
 * In most cases, it is enough to let {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher}
 * gather consumable values, so there is no need to use
 * {@link module:engine/conversion/modelconsumable~ModelConsumable#add add method} directly.
 * However, it is important to understand how consumable values can be
 * {@link module:engine/conversion/modelconsumable~ModelConsumable#consume consumed}.
 * See {@link module:engine/conversion/downcasthelpers default downcast converters} for more information.
 *
 * Keep in mind, that one conversion event may have multiple callbacks (converters) attached to it. Each of those is
 * able to convert one or more parts of the model. However, when one of those callbacks actually converts
 * something, other should not, because they would duplicate the results. Using `ModelConsumable` helps avoiding
 * this situation, because callbacks should only convert those values, which were not yet consumed from `ModelConsumable`.
 *
 * Consuming multiple values in a single callback:
 *
 *        // Converter for custom `image` element that might have a `caption` element inside which changes
 *        // how the image is displayed in the view:
 *        //
 *        // Model:
 *        //
 *        // [image]
 *        //   └─ [caption]
 *        //       └─ foo
 *        //
 *        // View:
 *        //
 *        // <figure>
 *        //   ├─ <img />
 *        //   └─ <caption>
 *        //       └─ foo
 *        modelConversionDispatcher.on( 'insert:image', ( evt, data, conversionApi ) => {
 *            // First, consume the `image` element.
 *            conversionApi.consumable.consume( data.item, 'insert' );
 *
 *            // Just create normal image element for the view.
 *            // Maybe it will be "decorated" later.
 *            const viewImage = new ViewElement( 'img' );
 *            const insertPosition = conversionApi.mapper.toViewPosition( data.range.start );
 *            const viewWriter = conversionApi.writer;
 *
 *            // Check if the `image` element has children.
 *            if ( data.item.childCount > 0 ) {
 *                const modelCaption = data.item.getChild( 0 );
 *
 *                // `modelCaption` insertion change is consumed from consumable values.
 *                // It will not be converted by other converters, but it's children (probably some text) will be.
 *                // Through mapping, converters for text will know where to insert contents of `modelCaption`.
 *                if ( conversionApi.consumable.consume( modelCaption, 'insert' ) ) {
 *                    const viewCaption = new ViewElement( 'figcaption' );
 *
 *                    const viewImageHolder = new ViewElement( 'figure', null, [ viewImage, viewCaption ] );
 *
 *                    conversionApi.mapper.bindElements( modelCaption, viewCaption );
 *                    conversionApi.mapper.bindElements( data.item, viewImageHolder );
 *                    viewWriter.insert( insertPosition, viewImageHolder );
 *                }
 *            } else {
 *                conversionApi.mapper.bindElements( data.item, viewImage );
 *                viewWriter.insert( insertPosition, viewImage );
 *            }
 *
 *            evt.stop();
 *        } );
 */
export default class ModelConsumable {
    /**
     * Adds a consumable value to the consumables list and links it with given model item.
     *
     *        modelConsumable.add( modelElement, 'insert' ); // Add `modelElement` insertion change to consumable values.
     *        modelConsumable.add( modelElement, 'addAttribute:bold' ); // Add `bold` attribute insertion on `modelElement` change.
     *        modelConsumable.add( modelElement, 'removeAttribute:bold' ); // Add `bold` attribute removal on `modelElement` change.
     *        modelConsumable.add( modelSelection, 'selection' ); // Add `modelSelection` to consumable values.
     *        modelConsumable.add( modelRange, 'range' ); // Add `modelRange` to consumable values.
     */
    add(item: Item | Selection | Range, type: string): void;

    /**
     * Removes given consumable value from given model item.
     *
     *        modelConsumable.consume( modelElement, 'insert' ); // Remove `modelElement` insertion change from consumable values.
     *        modelConsumable.consume( modelElement, 'addAttribute:bold' ); // Remove `bold` attribute insertion on `modelElement` change.
     *        modelConsumable.consume( modelElement, 'removeAttribute:bold' ); // Remove `bold` attribute removal on `modelElement` change.
     *        modelConsumable.consume( modelSelection, 'selection' ); // Remove `modelSelection` from consumable values.
     *        modelConsumable.consume( modelRange, 'range' ); // Remove 'modelRange' from consumable values.
     */
    consume(item: Item | Selection | Range, type: string): boolean;

    /**
     * Tests whether there is a consumable value of given type connected with given model item.
     *
     *        modelConsumable.test( modelElement, 'insert' ); // Check for `modelElement` insertion change.
     *        modelConsumable.test( modelElement, 'addAttribute:bold' ); // Check for `bold` attribute insertion on `modelElement` change.
     *        modelConsumable.test( modelElement, 'removeAttribute:bold' ); // Check for `bold` attribute removal on `modelElement` change.
     *        modelConsumable.test( modelSelection, 'selection' ); // Check if `modelSelection` is consumable.
     *        modelConsumable.test( modelRange, 'range' ); // Check if `modelRange` is consumable.
     */
    test(item: Item | Selection | Range, type: string): boolean | null;

    /**
     * Reverts consuming of consumable value.
     *
     *        modelConsumable.revert( modelElement, 'insert' ); // Revert consuming `modelElement` insertion change.
     *        modelConsumable.revert( modelElement, 'addAttribute:bold' ); // Revert consuming `bold` attribute insert from `modelElement`.
     *        modelConsumable.revert( modelElement, 'removeAttribute:bold' ); // Revert consuming `bold` attribute remove from `modelElement`.
     *        modelConsumable.revert( modelSelection, 'selection' ); // Revert consuming `modelSelection`.
     *        modelConsumable.revert( modelRange, 'range' ); // Revert consuming `modelRange`.
     */
    revert(item: Item | Selection | Range, type: string): null | boolean;
}
