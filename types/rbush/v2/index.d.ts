// Type definitions for rbush 2.0
// Project: https://github.com/mourner/rbush
// Definitions by: Dan Vanderkam <http://danvk.org/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace rbush {
  export interface BBox {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }

  export interface RBush<T> {
    /**
     * Insert an item. To insert many items, use load().
     */
    insert(item: T): RBush<T>;

    /**
     * Bulk-insert the given data into the tree.
     *
     * Bulk insertion is usually ~2-3 times faster than inserting items one by one.
     * After bulk loading (bulk insertion into an empty tree), subsequent query
     * performance is also ~20-30% better.
     *
     * Note that when you do bulk insertion into an existing tree, it bulk-loads
     * the given data into a separate tree and inserts the smaller tree into the
     * larger tree. This means that bulk insertion works very well for clustered
     * data (where items in one update are close to each other), but makes query
     * performance worse if the data is scattered.
     */
    load(items: T[]): RBush<T>;

    /**
     * Remove a previously inserted item.
     *
     * By default, RBush removes objects by reference. However, you can pass a
     * custom equals function to compare by value for removal, which is useful
     * when you only have a copy of the object you need removed (e.g. loaded
     * from server).
     */
    remove(item: T, equals?: (a: T, b: T) => boolean): RBush<T>;

    /** Remove all items */
    clear(): RBush<T>;

    /**
     * Returns an array of data items (points or rectangles) that the given
     * bounding box intersects.
     *
     * Note that the search method accepts a bounding box in {minX, minY, maxX, maxY}
     * format regardless of the format specified in the constructor (which only
     * affects inserted objects).
     */
    search(bbox: BBox): T[];

    /** Returns all items of the tree. */
    all(): T[];

    /**
     * Returns true if there are any items intersecting the given bounding box,
     * otherwise false.
     */
    collides(bbox: BBox): boolean;

    /**
     * Export data as JSON object.
     *
     * Importing and exporting as JSON allows you to use RBush on both the server
     * (using Node.js) and the browser combined, e.g. first indexing the data on
     * the server and and then importing the resulting tree data on the client
     * for searching.
     *
     * Note that the nodeSize option passed to the constructor must be the same
     * in both trees for export/import to work properly.
     */
    toJSON(): any;

    /**
     * Import previously exported data.
     *
     * Importing and exporting as JSON allows you to use RBush on both the server
     * (using Node.js) and the browser combined, e.g. first indexing the data on
     * the server and and then importing the resulting tree data on the client
     * for searching.
     *
     * Note that the nodeSize option passed to the constructor must be the same
     * in both trees for export/import to work properly.
     */
    fromJSON(data: any): RBush<T>;
  }

  interface IRBush {
    /**
     * Create a spatial index.
     *
     * An optional argument to rbush defines the maximum number of entries in a tree node.
     * 9 (used by default) is a reasonable choice for most applications. Higher value means\
     * faster insertion and slower search, and vice versa.
     */
    <T extends BBox>(nodeSize?: number): RBush<T>;
    <T>(nodeSize: number, formatter: string[]): RBush<T>;
  }
}

declare module 'rbush' {
  const temp: rbush.IRBush;
  export = temp;
}
