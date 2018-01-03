// Type definitions for mersenne-twister 1.1
// Project: https://github.com/boo1ean/mersenne-twister
// Definitions by: KentarouTakeda <https://github.com/KentarouTakeda>
//                 taichi <https://github.com/taichi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class MersenneTwister {
    /**
     * constructs mt with a number
     * @params seed
     */
    constructor(seed?: number | number[]);

    /**
     * initializes mt with a number
     */
    init_seed(seed: number): void;

    /**
     * generates a random number on [0,0xffffffff]-interval
     */
    random_int(): number;

    /**
     * generates a random number on [0,0x7fffffff]-interval
     */
    random_int31(): number;

    /**
     * generates a random number on [0,1]-real-interval
     */
    random_incl(): number;

    /**
     * generates a random number on [0,1)-real-interval
     */
    random(): number;

    /**
     * generates a random number on (0,1)-real-interval
     */
    random_excl(): number;

    /**
     * generates a random number on [0,1) with 53-bit resolution
     */
    random_long(): number;
}
