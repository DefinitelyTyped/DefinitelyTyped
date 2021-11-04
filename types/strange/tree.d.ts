import Range = require('./index');

export = RangeTree;

/**
 * Create an interval tree node.
 *
 * For creating a binary search tree out of an array of ranges, you might want
 * to use [`RangeTree.from`](#RangeTree.from).
 *
 * @example
 * var RangeTree = require("strange/tree")
 * var left = new RangeTree([new Range(-5, 0)])
 * var right = new RangeTree([new Range(5, 10)])
 * var root = new RangeTree([new Range(0, 5), new Range(0, 10)], left, right)
 * root.search(7) // => [new Range(0, 10), new Range(5, 10)]
 */
declare class RangeTree<T extends Date | number | string> {
    /**
     * Create an interval tree (implemented as an augmented binary search tree)
     * from an array of ranges.
     * Returns a [`RangeTree`](#RangeTree) you can search on.
     *
     * If you need to relate the found ranges to other data, add some properties
     * directly to every range _or_ use JavaScript's `Map` or `WeakMap` to relate
     * extra data to those range instances.
     *
     * @example
     * var ranges = [new Range(0, 10), new Range(20, 30), new Range(40, 50)]
     * RangeTree.from(ranges).search(42) // => [new Range(40, 50)]
     */
    static from<U extends Date | number | string>(ranges: Array<Range<U>>): RangeTree<U>;

    /**
     * Ranges of current tree node.
     */
    private keys: Array<Range<T>>;
    private left: RangeTree<T> | null;
    private right: RangeTree<T> | null;

    constructor(ranges: Range<T> | Array<Range<T>>, left?: RangeTree<T> | null, right?: RangeTree<T> | null);

    /**
     * Search for ranges that include the given value or, given a range, intersect
     * with it.
     * Returns an array of matches or an empty one if no range contained or
     * intersected with the given value.
     *
     * @example
     * var tree = RangeTree.from([new Range(40, 50)])
     * tree.search(42) // => [new Range(40, 50)]
     * tree.search(13) // => []
     * tree.search(new Range(30, 42)) // => [new Range(40, 50)]
     */
    search(valueOrRange: null | T | Range<T>): Array<Range<T>>;
}

declare namespace RangeTree {
}
