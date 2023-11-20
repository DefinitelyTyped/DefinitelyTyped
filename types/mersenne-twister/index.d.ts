export = MersenneTwister;
declare class MersenneTwister {
    /**
     * constructs mt with a number
     * @param seed
     */
    constructor(seed?: number | number[]);

    /**
     * initializes mt with a number
     */
    init_seed(seed: number): void;

    /**
     * initialize by an array with array-length
     *
     * @param init_key is the array for initializing keys
     * @param key_length is its length
     */
    init_by_array(init_key: number[], key_length: number): void;

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
