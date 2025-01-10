export = LFSR;

declare class LFSR {
    /** size of this LFSR's state (degree of polynomial) */
    n: number;
    /** taps used by this LFSR (polynomial) */
    taps: number[];

    /** current LFSR state */
    register: number;

    /** create a new LFSR */
    constructor(
        /** size of the LFSR, affects sequence length (if not given, `DEFAULT_LENGTH` is used) */
        n?: number,
        /** initial state (if not given, `_defaultSeed(n)` is called to obtain one) */
        seed?: number,
    );

    /** performs one cycle of the LSFR, returning the resulting bit */
    shift(): number;

    /** obtains a sequence of next n shifted bits from the LFSR, as a bitfield */
    seq(n: number): number;

    /** obtains a sequence of next n shifted bits from the LFSR, as a binary string */
    seqString(n: number): string;

    /** computes number of shifts before initial state repeats */
    maxSeqLen(): number;

    /** this holds the default taps (polynomials) to use for each LFSR size */
    TAPS: { [count: string]: number[] };
    /** default length when `n` is not specified in the constructor */
    DEFAULT_LENGTH: number;
    /** function used by the constructor to obtain a seed when not specified */
    _defaultSeed(n: number): number;
}
