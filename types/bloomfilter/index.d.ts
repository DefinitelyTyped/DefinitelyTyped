// Type definitions for BloomFilter 0.1
// Project: https://github.com/jasondavies/bloomfilter.js
// Definitions by: slawiko <https://github.com/slawiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class BloomFilter {
    buckets: Int32Array[];

    constructor(m: number, k: number);

    add(value: any): void;

    test(value: any): boolean;
}
