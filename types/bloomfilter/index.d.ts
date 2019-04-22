// Type definitions for BloomFilter 0.0
// Project: https://github.com/jasondavies/bloomfilter.js
// Definitions by: slawiko <https://github.com/slawiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class BloomFilter {
    buckets: Int32Array;

    /**
     * Create a new empty bloom filter of size m with hashes k or
     * provide buckets as a number[] or Int32Array to deserialize a bloom filter
     * @param mOrBucketsArray number of bits (will be rounded up to nearest 32), or buckets
     * to deserialize into a filled bloomfilter
     * @param k number of hashes
     */
    constructor(m: number | number[] | Int32Array, k: number);

    /**
     * Add a value to a bloom filter
     * @param value
     */
    add(value: any): void;

    /**
     * Test whether a value exists in a bloom filter. (False positives are
     * possible, false negatives are not.)
     */
    test(value: any): boolean;
}
