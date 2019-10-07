// Type definitions for random-normal 1.0
// Project: https://github.com/mock-end/random-normal
// Definitions by: Darius I. Karel <https://github.com/dikarel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Normal distribution options
 */
interface Options {
    /** The mean of the normal distribution. Defaults to 0 */
    mean?: number;

    /** The standard deviation of the normal distribution. Defaults to 1 */
    dev?: number;
}

/**
 * Return a [normally-distributed](https://en.wikipedia.org/wiki/Normal_distribution)
 * random number. By default this, starts with a mean of 0 and a standard
 * deviation of 1 which is the standard normal distribution.
 * @param options Controls the shape of the normal distribution
 */
declare function randomNormal(options?: Options): number;

export = randomNormal;
