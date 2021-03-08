import Position from "./position";
import Range from "./range";
import { Item } from "./item";

/**
 * Tree walking directions.
 */
type TreeWalkerDirection = "forward" | "backward";

/**
 * Type of the step made by {@link module:engine/model/treewalker~TreeWalker}.
 * Possible values: `'elementStart'` if walker is at the beginning of a node, `'elementEnd'` if walker is at the end of node,
 * `'character'` if walker traversed over a character, or `'text'` if walker traversed over multiple characters (available in
 * character merging mode, see {@link module:engine/model/treewalker~TreeWalker#constructor}).
 */
type TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

/**
 * Object returned by {@link module:engine/model/treewalker~TreeWalker} when traversing tree model.
 */
export interface TreeWalkerValue {
    type: TreeWalkerValueType;
    item: Item;
    previousPosition: Position;
    nextPosition: Position;
    length?: number;
}

/**
 * Position iterator class. It allows to iterate forward and backward over the document.
 */
export default class TreeWalker implements Iterable<TreeWalkerValue> {
    /**
     * Creates a range iterator. All parameters are optional, but you have to specify either `boundaries` or `startPosition`.
     */
    constructor(options?: {
        direction?: "forward" | "backward";
        boundaries?: null | Range;
        startPosition?: Position;
        singleCharacters?: boolean;
        shallow?: boolean;
        ignoreElementEnd?: boolean;
    });
    /**
     * Iterable interface.
     */
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    /**
     * Moves {@link #position} in the {@link #direction} skipping values as long as the callback function returns `true`.
     *
     * For example:
     *
     *         walker.skip( value => value.type == 'text' ); // <paragraph>[]foo</paragraph> -> <paragraph>foo[]</paragraph>
     *         walker.skip( () => true ); // Move the position to the end: <paragraph>[]foo</paragraph> -> <paragraph>foo</paragraph>[]
     *         walker.skip( () => false ); // Do not move the position.
     */
    skip(skip: (value: TreeWalkerValue) => boolean): void;
    /**
     * Gets the next tree walker's value.
     */
    next(): TreeWalkerValue;
}

export {};
