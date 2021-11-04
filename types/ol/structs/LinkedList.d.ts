export interface Item {
    prev?: Item;
    next?: Item;
    data: any;
}
export default class LinkedList {
    constructor(opt_circular?: boolean);
    /**
     * Concatenates two lists.
     */
    concat(list: LinkedList): void;
    /**
     * Sets the cursor to the first item, and returns the associated data.
     */
    firstItem(): any;
    /**
     * Returns the current item's data.
     */
    getCurrItem(): any;
    /**
     * Returns the current length of the list.
     */
    getLength(): number;
    /**
     * Returns the next item's data without moving the cursor.
     */
    getNextItem(): any;
    /**
     * Returns the previous item's data without moving the cursor.
     */
    getPrevItem(): any;
    /**
     * Inserts an item into the linked list right after the current one.
     */
    insertItem(data: any): void;
    /**
     * Sets the cursor to the last item, and returns the associated data.
     */
    lastItem(): any;
    /**
     * Sets the cursor to the next item, and returns the associated data.
     */
    nextItem(): any;
    /**
     * Sets the cursor to the previous item, and returns the associated data.
     */
    prevItem(): any;
    /**
     * Removes the current item from the list. Sets the cursor to the next item,
     * if possible.
     */
    removeItem(): void;
    /**
     * Sets the first item of the list. This only works for circular lists, and sets
     * the last item accordingly.
     */
    setFirstItem(): void;
}
