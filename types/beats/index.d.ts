// Type definitions for beats 0.0
// Project: https://github.com/hughsk/beats/
// Definitions by: Uri Shaked <https://github.com/urish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = beats;

declare function beats(bins: ReadonlyArray<beats.Bin>, minSeparation?: number): (frequencies: Uint8Array | Float32Array | ReadonlyArray<number>, dt?: number) => Float32Array;

declare namespace beats {
    interface Bin {
        lo: number;
        hi: number;
        threshold: number;
        decay: number;
    }
}
