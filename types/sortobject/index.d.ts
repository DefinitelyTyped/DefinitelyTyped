declare function sortObject<T extends object>(obj: T, comparator?: (a: string, b: string) => number): T;

export = sortObject;
