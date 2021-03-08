import Element from "../view/element";
import DocumentFragment from "../view/documentfragment";
import Text from "../view/text";

interface Consumables {
    name: boolean;
    attributes: string | string[];
    classes: string | string[];
    styles: string | string[];
}

export default class ViewConsumable {
    /**
     * Adds {@link module:engine/view/element~Element view element}, {@link module:engine/view/text~Text text node} or
     * {@link module:engine/view/documentfragment~DocumentFragment document fragment} as ready to be consumed.
     *
     *        viewConsumable.add( p, { name: true } ); // Adds element's name to consume.
     *        viewConsumable.add( p, { attributes: 'name' } ); // Adds element's attribute.
     *        viewConsumable.add( p, { classes: 'foobar' } ); // Adds element's class.
     *        viewConsumable.add( p, { styles: 'color' } ); // Adds element's style
     *        viewConsumable.add( p, { attributes: 'name', styles: 'color' } ); // Adds attribute and style.
     *        viewConsumable.add( p, { classes: [ 'baz', 'bar' ] } ); // Multiple consumables can be provided.
     *        viewConsumable.add( textNode ); // Adds text node to consume.
     *        viewConsumable.add( docFragment ); // Adds document fragment to consume.
     *
     * Throws {@link module:utils/ckeditorerror~CKEditorError CKEditorError} `viewconsumable-invalid-attribute` when `class` or `style`
     * attribute is provided - it should be handled separately by providing actual style/class.
     *
     *        viewConsumable.add( p, { attributes: 'style' } ); // This call will throw an exception.
     *        viewConsumable.add( p, { styles: 'color' } ); // This is properly handled style.
     */
    add(element: Element | DocumentFragment, consumables?: Consumables): void;

    /**
     * Tests if {@link module:engine/view/element~Element view element}, {@link module:engine/view/text~Text text node} or
     * {@link module:engine/view/documentfragment~DocumentFragment document fragment} can be consumed.
     * It returns `true` when all items included in method's call can be consumed. Returns `false` when
     * first already consumed item is found and `null` when first non-consumable item is found.
     *
     *        viewConsumable.test( p, { name: true } ); // Tests element's name.
     *        viewConsumable.test( p, { attributes: 'name' } ); // Tests attribute.
     *        viewConsumable.test( p, { classes: 'foobar' } ); // Tests class.
     *        viewConsumable.test( p, { styles: 'color' } ); // Tests style.
     *        viewConsumable.test( p, { attributes: 'name', styles: 'color' } ); // Tests attribute and style.
     *        viewConsumable.test( p, { classes: [ 'baz', 'bar' ] } ); // Multiple consumables can be tested.
     *        viewConsumable.test( textNode ); // Tests text node.
     *        viewConsumable.test( docFragment ); // Tests document fragment.
     *
     * Testing classes and styles as attribute will test if all added classes/styles can be consumed.
     *
     *        viewConsumable.test( p, { attributes: 'class' } ); // Tests if all added classes can be consumed.
     *        viewConsumable.test( p, { attributes: 'style' } ); // Tests if all added styles can be consumed.
     */
    test(element: Element | Text | DocumentFragment, consumables?: Consumables): boolean | null;

    /**
     * Consumes {@link module:engine/view/element~Element view element}, {@link module:engine/view/text~Text text node} or
     * {@link module:engine/view/documentfragment~DocumentFragment document fragment}.
     * It returns `true` when all items included in method's call can be consumed, otherwise returns `false`.
     *
     *        viewConsumable.consume( p, { name: true } ); // Consumes element's name.
     *        viewConsumable.consume( p, { attributes: 'name' } ); // Consumes element's attribute.
     *        viewConsumable.consume( p, { classes: 'foobar' } ); // Consumes element's class.
     *        viewConsumable.consume( p, { styles: 'color' } ); // Consumes element's style.
     *        viewConsumable.consume( p, { attributes: 'name', styles: 'color' } ); // Consumes attribute and style.
     *        viewConsumable.consume( p, { classes: [ 'baz', 'bar' ] } ); // Multiple consumables can be consumed.
     *        viewConsumable.consume( textNode ); // Consumes text node.
     *        viewConsumable.consume( docFragment ); // Consumes document fragment.
     *
     * Consuming classes and styles as attribute will test if all added classes/styles can be consumed.
     *
     *        viewConsumable.consume( p, { attributes: 'class' } ); // Consume only if all added classes can be consumed.
     *        viewConsumable.consume( p, { attributes: 'style' } ); // Consume only if all added styles can be consumed.
     */
    consume(element: Element | Text | DocumentFragment, consumables?: Consumables): boolean;

    /**
     * Reverts {@link module:engine/view/element~Element view element}, {@link module:engine/view/text~Text text node} or
     * {@link module:engine/view/documentfragment~DocumentFragment document fragment} so they can be consumed once again.
     * Method does not revert items that were never previously added for consumption, even if they are included in
     * method's call.
     *
     *        viewConsumable.revert( p, { name: true } ); // Reverts element's name.
     *        viewConsumable.revert( p, { attributes: 'name' } ); // Reverts element's attribute.
     *        viewConsumable.revert( p, { classes: 'foobar' } ); // Reverts element's class.
     *        viewConsumable.revert( p, { styles: 'color' } ); // Reverts element's style.
     *        viewConsumable.revert( p, { attributes: 'name', styles: 'color' } ); // Reverts attribute and style.
     *        viewConsumable.revert( p, { classes: [ 'baz', 'bar' ] } ); // Multiple names can be reverted.
     *        viewConsumable.revert( textNode ); // Reverts text node.
     *        viewConsumable.revert( docFragment ); // Reverts document fragment.
     *
     * Reverting classes and styles as attribute will revert all classes/styles that were previously added for
     * consumption.
     *
     *        viewConsumable.revert( p, { attributes: 'class' } ); // Reverts all classes added for consumption.
     *        viewConsumable.revert( p, { attributes: 'style' } ); // Reverts all styles added for consumption.
     */
    revert(element: Element | Text | DocumentFragment, consumables?: Consumables): boolean;

    /**
     * Creates consumable object from {@link module:engine/view/element~Element view element}. Consumable object will include
     * element's name and all its attributes, classes and styles.
     */
    static consumablesFromElement(element: Element): Consumables;

    /**
     * Creates {@link module:engine/conversion/viewconsumable~ViewConsumable ViewConsumable} instance from
     * {@link module:engine/view/node~Node node} or {@link module:engine/view/documentfragment~DocumentFragment document fragment}.
     * Instance will contain all elements, child nodes, attributes, styles and classes added for consumption.
     */
    static createFrom(from: Node | DocumentFragment, instance?: ViewConsumable): ViewConsumable;
}

export {};
