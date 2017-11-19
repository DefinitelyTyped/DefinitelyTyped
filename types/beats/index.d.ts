// Type definitions for beats 0.0
// Project: https://github.com/hughsk/beats/
// Definitions by: Uri Shaked <https://github.com/urish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = beats;

type DetectFunction = (frequencies: Uint8Array | Float32Array | ReadonlyArray<number>, dt?: number) => Float32Array;

declare function beats(bins: ReadonlyArray<beats.Bin>, minSeparation?: number): DetectFunction;

declare namespace beats {
    interface Bin {
        lo: number;
        hi: number;
        threshold: number;
        decay: number;
    }
}
