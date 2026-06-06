import Span from "./Span";
import { MATH_TYPE_SPAN } from "./types";

/**
 * Class for storing items of mixed type and fetching a randomised
 * value from these items.
 */
export default class ArraySpan extends Span {
    /**
     * Constructs an ArraySpan instance.
     */
    constructor(items?: Items);
    /**
     * @description The class type.
     */
    type: typeof MATH_TYPE_SPAN;
    /**
     * @description An array of colors
     */
    items: Items;
    /**
     * Gets a random item.
     */
    getValue(): Item;
}
/**
 * Attempts to create an ArraySpan from the items provided.
 */
export function createArraySpan(items: Items): ArraySpan;

export type Items = Item[] | Item;
export type Item = any;
