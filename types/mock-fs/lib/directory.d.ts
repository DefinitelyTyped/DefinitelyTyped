import Item = require('./item');

export = Directory;

declare class Directory extends Item {
    /**
     * Add an item to the directory.
     * @param name The name to give the item.
     * @param item The item to add.
     * @return The added item.
     */
    addItem<T extends Item>(name: string, item: T): T;
    /** Get a named item (or null if none). */
    getItem(name: string): Item | null;
    /**
     * Remove an item. Will throw an error if not present.
     *
     * @param name Name of the item to remove.
     * @return The orphan item.
     */
    removeItem(name: string): Item;
    /** Get sorted list of item names in this directory. */
    list(): string[];
    /** Get directory stats. */
    getStats(): Item.ExtendedStats;
}
