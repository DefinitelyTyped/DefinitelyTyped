import Span from './Span';
import { MATH_TYPE_SPAN } from './types';

/**
 * Class for storing items of mixed type and fetching a randomised
 * value from these items.
 *
 */
export default class ArraySpan extends Span {
    /**
     * Constructs an ArraySpan instance.
     *
     * @param {mixed|array<mixed>?} items - Items
     * @return void
     */
    constructor(items?: Items);
    /**
     * @desc The class type.
     * @type {string}
     */
    type: typeof MATH_TYPE_SPAN;
    /**
     * @desc An array of colors
     * @type {array}
     */
    items: Items;
    /**
     * Gets a random item.
     *
     * @return {mixed}
     */
    getValue(): Item;
}
/**
 * Attempts to create an ArraySpan from the items provided.
 *
 * @param {mixed} items - Items to try and create an ArraySpan from
 * @return {?ArraySpan}
 */
export function createArraySpan(items: Items): ArraySpan;

type Items = Item[] | Item;
type Item = any;
