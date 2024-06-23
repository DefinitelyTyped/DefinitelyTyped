export type KeyChain = any;

export class FlexiMap {
    constructor(object?: any[] | object);

    get(keyChain: KeyChain): any;
    getRange(keyChain: KeyChain, fromIndex: number, toIndex: number): any;
    getRaw(keyChain: KeyChain): any;
    getAll(): any[] | object;

    count(keyChain: KeyChain): number;

    hasImmediateKey(key: string): boolean;
    hasKey(keyChain: KeyChain): boolean;
    hasType(keyChain: KeyChain, type: any): boolean;
    hasValue(keyChain: KeyChain, value: any): boolean;
    hasObject(keyChain: KeyChain, object: object): boolean;

    set(keyChain: KeyChain, value: any): any;

    add(keyChain: KeyChain, value: any): number;

    concat(keyChain: KeyChain, value: any): any;

    remove(keyChain: KeyChain): any;
    removeRange(keyChain: KeyChain, fromIndex: number, toIndex: number): any[];
    removeAll(): void;

    splice(keyChain: KeyChain, index: number, count: number, ...items: any[]): any[];

    pop(keyChain: KeyChain): any[];
}
