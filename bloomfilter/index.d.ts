// Type definitions for BloomFilter v0.0.16
// Project: https://github.com/jasondavies/bloomfilter.js
// Definitions by: slawiko <https://github.com/slawiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare class BloomFilter {
    buckets: Array<Int32Array>;

    constructor(m: number, k: number);

    add(value: any): void;

    test(value: any): boolean;
}
