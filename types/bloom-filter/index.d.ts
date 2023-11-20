/// <reference types="node" />

declare class Filter {
    constructor(options: Filter.FilterOptions);
    static create(elements: number, falsePositiveRate: number, nTweak?: number, nFlags?: number): Filter;
    toObject(): Filter.FilterOptions;
    hash(nHashNum: number, vDataToHash: Buffer): number;
    insert(data: Buffer): void;
    contains(data: Buffer): boolean;
    clear(): void;
    inspect(): string;
    BLOOM_UPDATE_NONE: number;
    BLOOM_UPDATE_ALL: number;
    BLOOM_UPDATE_P2PUBKEY_ONLY: number;
    MAX_BLOOM_FILTER_SIZE: number;
    MAX_HASH_FUNCS: number;
    MIN_HASH_FUNCS: number;
    LN2SQUARED: number;
    LN2: number;
}

declare namespace Filter {
    interface FilterOptions {
        vData: Buffer;
        nHashFuncs: number;
        nTweak?: number | undefined;
        nFlags?: number | undefined;
    }

    function MurmurHash3(seed: number, data: Buffer): number;
}

export = Filter;
