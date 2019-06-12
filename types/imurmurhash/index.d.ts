// Type definitions for imurmurhash 0.1
// Project: https://github.com/jensyt/imurmurhash-js
// Definitions by: Jiayu Liu <jimexist@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "imurmurhash" {
    interface MurmurHash3 {
        result(): number;

        reset(seed?: number): MurmurHash3;

        hash(value: string): MurmurHash3;
    }
    function MurmurHash(text?: string, seed?: number): MurmurHash3;

    export = MurmurHash;
}
