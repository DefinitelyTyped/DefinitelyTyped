// Type definitions for imurmurhash 0.1
// Project: https://github.com/jensyt/imurmurhash-js
// Definitions by: Jiayu Liu <https://github.com/Jimexist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

interface MurmurHash3 {
    result(): number;

    reset(seed?: number): MurmurHash3;

    hash(value: string): MurmurHash3;
}

declare var MurmurHash: {
    (text?: string, seed?: number): MurmurHash3;
    new (text?: string, seed?: number): MurmurHash3;
};

export = MurmurHash;
