export default class HashSet {
    data: Record<string, any[]>;

    constructor(hashFunction?: (a: any) => number, equalsFunction?: (a: any, b: any) => boolean);

    add(value: any): any;

    has(value: any): boolean;

    get(value: any): any | null;

    values(): any[];

    toString(): string;

    get length(): number;
}
