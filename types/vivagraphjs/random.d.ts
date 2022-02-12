/**
 * Creates seeded PRNG with two methods:
 *   next() and nextDouble()
 */
export function random(inputSeed: any): {
    /**
     * Generates random integer number in the range from 0 (inclusive) to maxValue (exclusive)
     *
     * @param maxValue Number REQUIRED. Ommitting this number will result in NaN values from PRNG.
     */
    next: (maxValue: any) => number;
    /**
     * Generates random double number in the range from 0 (inclusive) to 1 (exclusive)
     * This function is the same as Math.random() (except that it could be seeded)
     */
    nextDouble: () => number;
};
export function randomIterator(array: any, customRandom: any): {
    forEach: (callback: any) => void;
    /**
     * Shuffles array randomly, in place.
     */
    shuffle: () => any;
};
