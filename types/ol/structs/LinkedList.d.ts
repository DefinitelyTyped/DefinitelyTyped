export interface Item {
    prev?: Item;
    next?: Item;
    data: any;
}
export default class LinkedList {
    constructor(opt_circular?: boolean);
    insertItem(data: any): void;
    concat(list: LinkedList): void;
    getCurrItem(): any;
    getLength(): number;
    getNextItem(): any;
    getPrevItem(): any;
    firstItem(): any;
    lastItem(): any;
    nextItem(): any;
    prevItem(): any;
    removeItem(): void;
    setFirstItem(): void;
}
