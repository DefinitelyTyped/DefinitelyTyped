// Type definitions for knuth-shuffle-seeded 1.0
// Project: https://github.com/TimothyGu/knuth-shuffle-seeded
// Definitions by: Ethan Brown <https://github.com/EthanRBrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = shuffle;

/**
 * Shuffle an array using the Fisher-Yates shuffle algorithm, aka Knuth
 * shuffle.
 *
 * Note that this function overwrites the initial array. As a result if you
 * would like to keep the original array intact, you have to copy the initial
 * array to a new array.
 *
 * Implementation derived from http://stackoverflow.com/questions/2450954/.
 *
 * @param inputArray - An array that is to be shuffled.
 * @param [seed=Math.random()] - Seed for the shuffling operation. If
 *                              unspecified then a random value is used.
 * @return The resulting array.
 */
declare function shuffle<T = unknown>(inputArray: T[], seed?: number): T[];
