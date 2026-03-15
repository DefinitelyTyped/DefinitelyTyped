/**
 * A utility for managing a prototype chain as a list of objects.
 */
declare class ProtoList {
    /** Number of items in the list */
    readonly length: number;
    /** Array of all keys from the first list item */
    readonly keys: string[];
    /** Snapshot of current key-value pairs */
    readonly snapshot: { [key: string]: any };
    /** The first item in the list */
    readonly store: object;
    /** The root/base object of the prototype chain */
    root: object;

    /** Add an object to the end of the list */
    push(obj: object): this;
    /** Remove and return the last item */
    pop(): object | undefined;
    /** Add an object to the beginning of the list */
    unshift(obj: object): this;
    /** Remove and return the first item */
    shift(): object | undefined;
    /** Get a value by key from the first item */
    get(key: string): any;
    /** Set a value by key on the first item */
    set(key: string, val: any, save?: boolean): this;
    /** Iterate over keys in the first item */
    forEach(fn: (key: string, val: any, obj: object) => void, thisp?: any): void;
    /** Return a slice of the internal list */
    slice(): object[];
    /** Modify list contents */
    splice(...args: any[]): object[];
}

export = ProtoList;
