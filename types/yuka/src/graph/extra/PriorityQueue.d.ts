/**
 * Compare function for items.
 *
 * Should return:
 * -1 for a < b.
 * 0 for a == b.
 * 1 for a > b.
 */
export type CompareFunction<T> = (a: T, b: T) => number;

/**
 * Class for representing a binary heap priority queue that enables
 * more efficient sorting of arrays. The implementation is based on
 * {@link https://github.com/mourner/tinyqueue tinyqueue}.
 */
export class PriorityQueue<T> {
    /**
     * The data items of the priority queue.
     */
    data: T[];

    /**
     * The length of the priority queue.
     * @default 0
     */
    length: number;

    /**
     * The compare function used for sorting.
     */
    compare: CompareFunction<T>;

    /**
     * Constructs a new priority queue.
     *
     * @param [compare] - The compare function used for sorting.
     */
    constructor(compare?: CompareFunction<T>);

    /**
     * Pushes an item to the priority queue.
     *
     * @param item - The item to add.
     */
    push(item: T): void;

    /**
     * Returns the item with the highest priority and removes
     * it from the priority queue.
     *
     * @return The item with the highest priority.
     */
    pop(): T | null;

    /**
     * Returns the item with the highest priority without removal.
     *
     * @return The item with the highest priority.
     */
    peek(): T | null;
}
