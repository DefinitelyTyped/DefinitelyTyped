import Position from "./position";
import Range from "./range";
import { Item } from "./item";

export type TreeWalkerOptions = {
    direction?: TreeWalkerDirection;
    /**
     * Flag indicating whether all characters from
     * {@link module:engine/view/text~Text} should be returned as one {@link module:engine/view/text~Text} (`false`) ore one by one as
     * {@link module:engine/view/textproxy~TextProxy} (`true`).
     */
    singleCharacters?: boolean;
    /**
     * Flag indicating whether iterator should enter elements or not. If the
     * iterator is shallow child nodes of any iterated node will not be returned along with `elementEnd` tag.
     */
    shallow?: boolean;
    /**
     * Flag indicating whether iterator should ignore `elementEnd`
     * tags. If the option is true walker will not return a parent node of start position. If this option is `true`
     * each {@link module:engine/view/element~Element} will be returned once, while if the option is `false` they might be returned
     * twice: for `'elementStart'` and `'elementEnd'`.
     */
    ignoreElementEnd?: boolean;
} & ({ boundaries: Range; startPosition?: null } | { boundaries?: null; startPosition: Position });

/**
 * Position iterator class. It allows to iterate forward and backward over the document.
 */
export default class TreeWalker implements Iterable<TreeWalkerValue> {
    /**
     * Creates a range iterator. All parameters are optional, but you have to specify either `boundaries` or `startPosition`.
     */
    constructor(options?: TreeWalkerOptions);

    /**
     * Iterator boundaries.
     *
     * When the iterator is walking `'forward'` on the end of boundary or is walking `'backward'`
     * on the start of boundary, then `{ done: true }` is returned.
     *
     * If boundaries are not defined they are set before first and after last child of the root node.
     */
    readonly boundaries: Range | null;

    /**
     * Iterator position. If start position is not defined then position depends on {@link #direction}. If direction is
     * `'forward'` position starts form the beginning, when direction is `'backward'` position starts from the end.
     */
    readonly position: Position;

    /**
     * Walking direction. Defaults `'forward'`.
     */
    readonly direction: TreeWalkerDirection;

    /**
     * Flag indicating whether all characters from {@link module:engine/view/text~Text} should be returned as one
     * {@link module:engine/view/text~Text} or one by one as {@link module:engine/view/textproxy~TextProxy}.
     */
    readonly singleCharacters: boolean;

    /**
     * Flag indicating whether iterator should enter elements or not. If the iterator is shallow child nodes of any
     * iterated node will not be returned along with `elementEnd` tag.
     */
    readonly shallow: boolean;

    /**
     * Flag indicating whether iterator should ignore `elementEnd` tags. If set to `true`, walker will not
     * return a parent node of the start position. Each {@link module:engine/view/element~Element} will be returned once.
     * When set to `false` each element might be returned twice: for `'elementStart'` and `'elementEnd'`.
     */
    readonly ignoreElementEnd: boolean;

    /**
     * Iterable interface.
     */
    [Symbol.iterator](): Iterator<TreeWalkerValue>;

    /**
     * Moves {@link #position} in the {@link #direction} skipping values as long as the callback function returns `true`.
     *
     * For example:
     *
     *         walker.skip( value => value.type == 'text' ); // <p>{}foo</p> -> <p>foo[]</p>
     *         walker.skip( value => true ); // Move the position to the end: <p>{}foo</p> -> <p>foo</p>[]
     *         walker.skip( value => false ); // Do not move the position.
     */
    skip(skip: (value: TreeWalkerValue) => boolean): void;

    /**
     * Gets the next tree walker's value.
     */
    next(): TreeWalkerValue;
}

/**
 * Type of the step made by {@link module:engine/view/treewalker~TreeWalker}.
 * Possible values: `'elementStart'` if walker is at the beginning of a node, `'elementEnd'` if walker is at the end
 * of node, or `'text'` if walker traversed over single and multiple characters.
 * For {@link module:engine/view/text~Text} `elementStart` and `elementEnd` is not returned.
 */

type TreeWalkerValueType = "elementStart" | "elementEnd" | "text";

/**
 * Object returned by {@link module:engine/view/treewalker~TreeWalker} when traversing tree view.
 */
export interface TreeWalkerValue {
    type: TreeWalkerValueType;
    item: Item;
    previousPosition: Position;
    nextPosition: Position;
    length?: number;
}

/**
 * Tree walking directions.
 */
type TreeWalkerDirection = "forward" | "backward";

export {};
