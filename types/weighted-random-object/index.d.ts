// TypeScript Version: 2.7

interface Weighted {
    weight: number;
}

declare function weightedRandomObject<T extends Weighted>(objects: ReadonlyArray<T>): T;

export = weightedRandomObject;
