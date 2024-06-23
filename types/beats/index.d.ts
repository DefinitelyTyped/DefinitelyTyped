export = beats;

declare function beats(
    bins: readonly beats.Bin[],
    minSeparation?: number,
): (frequencies: Uint8Array | Float32Array | readonly number[], dt?: number) => Float32Array;

declare namespace beats {
    interface Bin {
        lo: number;
        hi: number;
        threshold: number;
        decay: number;
    }
}
