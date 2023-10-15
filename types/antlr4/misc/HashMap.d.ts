export default class HashMap {
    readonly data: Record<string, any>;
    readonly hashFunction: (a: any) => number;
    readonly equalsFunction: (a: any, b: any) => boolean;

    constructor(hashFunction?: (a: any) => number, equalsFunction?: (a: any, b: any) => boolean);

    set(key: string, value: any): any;

    containsKey(key: string): boolean;

    get(key: string): any;

    entries(): any[];

    getKeys(): any[];

    getValues(): any[];

    toString(): string;

    get length(): number;
}
