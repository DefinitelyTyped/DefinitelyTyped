export default class HashSet {
    readonly data: Record<string, any[]>;

    constructor(hashFunction?: (a: any) => number, equalsFunction?: (a: any, b: any) => boolean);

    add(value: any): any;

    has(value: any): boolean;

    get(value: any): any;

    values(): any[];

    toString(): string;

    get length(): number;
}
