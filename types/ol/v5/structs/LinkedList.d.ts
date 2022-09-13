export interface Item {
    prev?: Item;
    next?: Item;
    data: any;
}
export default class LinkedList {
    constructor(opt_circular?: boolean);
    concat(list: LinkedList): void;
    firstItem(): any;
    getCurrItem(): any;
    getLength(): number;
    getNextItem(): any;
    getPrevItem(): any;
    insertItem(data: any): void;
    lastItem(): any;
    nextItem(): any;
    prevItem(): any;
    removeItem(): void;
    setFirstItem(): void;
}
