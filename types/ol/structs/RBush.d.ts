import { Extent } from '../extent';

export interface Entry {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    value?: any;
}
export default class RBush<T> {
    constructor(opt_maxEntries?: number);
    /**
     * Remove all values from the RBush.
     */
    clear(): void;
    concat(rbush: RBush<T>): void;
    /**
     * Calls a callback function with each value in the tree.
     * If the callback returns a truthy value, this value is returned without
     * checking the rest of the tree.
     */
    forEach(callback: (p0: T) => any): any;
    /**
     * Calls a callback function with each value in the provided extent.
     */
    forEachInExtent(extent: Extent, callback: (p0: T) => any): any;
    /**
     * Return all values in the RBush.
     */
    getAll(): T[];
    getExtent(opt_extent?: Extent): Extent;
    /**
     * Return all values in the given extent.
     */
    getInExtent(extent: Extent): T[];
    /**
     * Insert a value into the RBush.
     */
    insert(extent: Extent, value: T): void;
    isEmpty(): boolean;
    /**
     * Bulk-insert values into the RBush.
     */
    load(extents: Extent[], values: T[]): void;
    /**
     * Remove a value from the RBush.
     */
    remove(value: T): boolean;
    /**
     * Update the extent of a value in the RBush.
     */
    update(extent: Extent, value: T): void;
}
