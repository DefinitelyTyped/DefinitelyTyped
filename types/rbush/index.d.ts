declare namespace RBush {
    interface BBox {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }
}

declare class RBush<T> {
    /**
     * Constructs an `RBush`, a high-performance 2D spatial index for points and
     * rectangles. Based on an optimized __R-tree__ data structure with
     * __bulk-insertion__ support.
     *
     * @param maxEntries An optional argument to RBush defines the maximum
     *                   number of entries in a tree node. `9` (used by default)
     *                   is a reasonable choice for most applications. Higher
     *                   value means faster insertion and slower search, and
     *                   vice versa.
     */
    constructor(maxEntries?: number);

    /**
     * Inserts an item. To insert many items at once, use `load()`.
     *
     * @param item The item to insert.
     */
    insert(item: T): RBush<T>;

    /**
     * Bulk-inserts the given items into the tree.
     *
     * Bulk insertion is usually ~2-3 times faster than inserting items one by
     * one. After bulk loading (bulk insertion into an empty tree), subsequent
     * query performance is also ~20-30% better.
     *
     * Note that when you do bulk insertion into an existing tree, it bulk-loads
     * the given data into a separate tree and inserts the smaller tree into the
     * larger tree. This means that bulk insertion works very well for clustered
     * data (where items in one update are close to each other), but makes query
     * performance worse if the data is scattered.
     *
     * @param items The items to load.
     */
    load(items: readonly T[]): RBush<T>;

    /**
     * Removes a previously inserted item, comparing by reference.
     *
     * To remove all items, use `clear()`.
     *
     * @param item The item to remove.
     * @param equals A custom function that allows comparing by value instead.
     *               Useful when you have only a copy of the object you need
     *               removed (e.g. loaded from server).
     */
    remove(item: T, equals?: (a: T, b: T) => boolean): RBush<T>;

    /**
     * Removes all items.
     */
    clear(): RBush<T>;

    /**
     * Returns an array of data items (points or rectangles) that the given
     * bounding box intersects.
     *
     * Note that the search method accepts a bounding box in `{minX, minY, maxX,
     * maxY}` format regardless of the data format.
     *
     * @param box The bounding box in which to search.
     */
    search(box: RBush.BBox): T[];

    /**
     * Returns all items contained in the tree.
     */
    all(): T[];

    /**
     * Returns `true` if there are any items intersecting the given bounding
     * box, otherwise `false`.
     *
     * @param box The bounding box in which to search.
     */
    collides(box: RBush.BBox): boolean;

    /**
     * Returns the bounding box for the provided item.
     *
     * By default, `RBush` assumes the format of data points to be an object
     * with `minX`, `minY`, `maxX`, and `maxY`. However, you can specify a
     * custom item format by overriding `toBBox()`, `compareMinX()`, and
     * `compareMinY()`.
     *
     * @example
     * class MyRBush<T> extends RBush<T> {
     *   toBBox([x, y]) { return { minX: x, minY: y, maxX: x, maxY: y }; }
     *   compareMinX(a, b) { return a.x - b.x; }
     *   compareMinY(a, b) { return a.y - b.y; }
     * }
     * const tree = new MyRBush<[number, number]>();
     * tree.insert([20, 50]); // accepts [x, y] points
     *
     * @param item The item whose bounding box should be returned.
     */
    toBBox(item: T): RBush.BBox;

    /**
     * Compares the minimum x coordinate of two items. Returns -1 if `a`'s
     * x-coordinate is smaller, 1 if `b`'s x coordinate is smaller, or 0 if
     * they're equal.
     *
     * By default, `RBush` assumes the format of data points to be an object
     * with `minX`, `minY`, `maxX`, and `maxY`. However, you can specify a
     * custom item format by overriding `toBBox()`, `compareMinX()`, and
     * `compareMinY()`.
     *
     * @example
     * class MyRBush<T> extends RBush<T> {
     *   toBBox([x, y]) { return { minX: x, minY: y, maxX: x, maxY: y }; }
     *   compareMinX(a, b) { return a.x - b.x; }
     *   compareMinY(a, b) { return a.y - b.y; }
     * }
     * const tree = new MyRBush<[number, number]>();
     * tree.insert([20, 50]); // accepts [x, y] points
     *
     * @param a The first item to compare.
     * @param b The second item to compare.
     */
    compareMinX(a: T, b: T): number;

    /**
     * Compares the minimum y coordinate of two items. Returns -1 if `a`'s
     * x-coordinate is smaller, 1 if `b`'s x coordinate is smaller, or 0 if
     * they're equal.
     *
     * By default, `RBush` assumes the format of data points to be an object
     * with `minX`, `minY`, `maxX`, and `maxY`. However, you can specify a
     * custom item format by overriding `toBBox()`, `compareMinX()`, and
     * `compareMinY()`.
     *
     * @example
     * class MyRBush<T> extends RBush<T> {
     *   toBBox([x, y]) { return { minX: x, minY: y, maxX: x, maxY: y }; }
     *   compareMinX(a, b) { return a.x - b.x; }
     *   compareMinY(a, b) { return a.y - b.y; }
     * }
     * const tree = new MyRBush<[number, number]>();
     * tree.insert([20, 50]); // accepts [x, y] points
     *
     * @param a The first item to compare.
     * @param b The second item to compare.
     */
    compareMinY(a: T, b: T): number;

    /**
     * Exports the tree's contents as a JSON object.
     *
     * Importing and exporting as JSON allows you to use RBush on both the
     * server (using Node.js) and the browser combined, e.g. first indexing the
     * data on the server and and then importing the resulting tree data on the
     * client for searching.
     *
     * Note that the `maxEntries` option from the constructor must be the same
     * in both trees for export/import to work properly.
     */
    toJSON(): any;

    /**
     * Imports previously exported data into the tree (i.e., data that was
     * emitted by `toJSON()`).
     *
     * Importing and exporting as JSON allows you to use RBush on both the
     * server (using Node.js) and the browser combined, e.g. first indexing the
     * data on the server and and then importing the resulting tree data on the
     * client for searching.
     *
     * Note that the `maxEntries` option from the constructor must be the same
     * in both trees for export/import to work properly.
     *
     * @param data The previously exported JSON data.
     */
    fromJSON(data: any): RBush<T>;
}

export = RBush;
