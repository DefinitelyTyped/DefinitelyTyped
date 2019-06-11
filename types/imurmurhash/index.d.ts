// Type definitions for imurmurhash 0.1
// Project: https://github.com/jensyt/imurmurhash-js
// Definitions by: Jiayu Liu <jimexist@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IMurmurHash3 {
    result(): number;

    reset(seed?: number): IMurmurHash3;

    hash(value: string): IMurmurHash3;
}

/*~ You can declare properties of the module using const, let, or var */
export default function MurmurHash3(text?: string, seed?: number): IMurmurHash3;
