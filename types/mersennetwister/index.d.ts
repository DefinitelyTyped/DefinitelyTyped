// Type definitions for mersennetwister 0.2
// Project: https://github.com/pigulla/mersennetwister#readme
// Definitions by: Klemen Slavič <https://github.com/krofdrakula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = MersenneTwister;

declare class MersenneTwister {
    /** Creates a new instance seeded by an unsined 32-bit integer or or array of unsigned 32-bit integers */
    constructor(seed?: number | ReadonlyArray<number>);
    /** Returns a random 32-bit unsigned integer */
    int(): number;
    /** Returns a random 31-bit unsigned integer */
    int31(): number;
    /** Returns a random float in the range [0,1) with 32-bit precision */
    rnd(): number;
    /**
     * This is an alias of the `rnd()` method
     * @alias rnd()
     */
    random(): number;
    /** Returns a random float in the range [0,1) with 53-bit precision */
    rndHiRes(): number;
    /** Returns a random float in the range [0,1] */
    real(): number;
    /** Returns a random float in the range (0,1) */
    realx(): number;
    /** Reseed the generator with the specified 32-bit unsigned integer */
    seed(seed: number): void;
    /** Reseed the generator's state vector with an array of 32-bit unsigned integers */
    seedArray(seeds: ReadonlyArray<number>): void;
}
