import Element from './element';
import Position from './position';
import Range from './range';
import TextProxy from './textproxy';

export type TreeWalkerValueType = 'elementStart' | 'elementEnd' | 'character' | 'text';

export type TreeWalkerValue =
    | {
          item: TextProxy;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: 'character' | 'text';
      }
    | {
          item: Element;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: 'elementStart' | 'elementEnd';
      };

export type TreeWalkerDirection = 'forward' | 'backward';

export type TreeWalkerOptions =
    | {
          boundaries: Range;
          direction?: TreeWalkerDirection | undefined;
          ignoreElementEnd?: boolean | undefined;
          shallow?: boolean | undefined;
          singleCharacters?: boolean | undefined;
          startPosition?: Position | undefined;
      }
    | {
          boundaries?: Range | undefined;
          direction?: TreeWalkerDirection | undefined;
          ignoreElementEnd?: boolean | undefined;
          shallow?: boolean | undefined;
          singleCharacters?: boolean | undefined;
          startPosition: Position;
      };

/**
 * Position iterator class. It allows to iterate forward and backward over the document.
 */
export default class TreeWalker implements Iterator<TreeWalkerValue>, Iterable<TreeWalkerValue> {
    /**
     * Creates a range iterator. All parameters are optional, but you have to specify either `boundaries` or `startPosition`.
     */
    constructor(options: TreeWalkerOptions);

    /**
     * Walking direction. Defaults `'forward'`.
     */
    readonly direction: TreeWalkerDirection;

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
     * Iterator position. This is always static position, even if the initial position was a
     * {@link module:engine/model/liveposition~LivePosition live position}. If start position is not defined then position depends
     * on {@link #direction}. If direction is `'forward'` position starts form the beginning, when direction
     * is `'backward'` position starts from the end.
     */
    readonly position: Position;

    /**
     * Flag indicating whether all consecutive characters with the same attributes should be
     * returned as one {@link module:engine/model/textproxy~TextProxy} (`true`) or one by one (`false`).
     */
    readonly singleCharacters: boolean;

    /**
     * Flag indicating whether iterator should enter elements or not. If the iterator is shallow child nodes of any
     * iterated node will not be returned along with `elementEnd` tag.
     */
    readonly shallow: boolean;

    /**
     * Flag indicating whether iterator should ignore `elementEnd` tags. If the option is true walker will not
     * return a parent node of the start position. If this option is `true` each {@link module:engine/model/element~Element} will
     * be returned once, while if the option is `false` they might be returned twice:
     * for `'elementStart'` and `'elementEnd'`.
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
     *     walker.skip( value => value.type == 'text' ); // <paragraph>[]foo</paragraph> -> <paragraph>foo[]</paragraph>
     *     walker.skip( () => true ); // Move the position to the end: <paragraph>[]foo</paragraph> -> <paragraph>foo</paragraph>[]
     *     walker.skip( () => false ); // Do not move the position.
     */
    skip(skip: (value: TreeWalkerValue) => boolean): void;

    /**
     * Gets the next tree walker's value.
     */
    next(): { done: false; value: TreeWalkerValue } | { done: true; value: undefined };
}
