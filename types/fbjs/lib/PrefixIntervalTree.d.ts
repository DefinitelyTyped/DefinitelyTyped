/**
 * A prefix interval tree stores an numeric array and the partial sums of that
 * array. It is optimized for updating the values of the array without
 * recomputing all of the partial sums.
 *
 *   - O(ln n) update
 *   - O(1) lookup
 *   - O(ln n) compute a partial sum
 *   - O(n) space
 *
 * Note that the sequence of partial sums is one longer than the array, so that
 * the first partial sum is always 0, and the last partial sum is the sum of the
 * entire array.
 */
declare class PrefixIntervalTree {
    /**
     * Number of elements in the array
     */
    _size: number;
    /**
     * Half the size of the heap. It is also the number of non-leaf nodes, and the
     * index of the first element in the heap. Always a power of 2.
     */

    _half: number;
    /**
     * Binary heap
     */

    _heap: Int32Array;

    constructor(xs: number[]);

    static uniform(size: number, initialValue: number): PrefixIntervalTree;

    set(index: number, value: number): void;

    get(index: number): number;

    getSize(): number;
    /**
     * Returns the sum get(0) + get(1) + ... + get(end - 1).
     */

    sumUntil(end: number): number;
    /**
     * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
     */

    sumTo(inclusiveEnd: number): number;
    /**
     * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
     */

    sum(begin: number, end: number): number;
    /**
     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
     * -1 if no such i exists.
     */

    greatestLowerBound(t: number): number;
    /**
     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
     * -1 if no such i exists.
     */

    greatestStrictLowerBound(t: number): number;
    /**
     * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
     * size + 1 if no such i exists.
     */

    leastUpperBound(t: number): number;
    /**
     * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
     * size + 1 if no such i exists.
     */

    leastStrictUpperBound(t: number): number;
}
declare namespace PrefixIntervalTree {}
export = PrefixIntervalTree;
