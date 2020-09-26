// Type definitions for D3JS d3-random module 2.0
// Project: https://github.com/d3/d3-random/, https://d3js.org/d3-random
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>
//                 Alex Ford <https://github.com/gustavderdrache>
//                 Boris Yankov <https://github.com/borisyankov>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 2.0.1

export interface RandomNumberGenerationSource {
    /**
     * Returns the same type of function for generating random numbers but where the given random number
     * generator source is used as the source of randomness instead of Math.random.
     * This is useful when a seeded random number generator is preferable to Math.random.
     *
     * @param source Source (pseudo-)random number generator implementing the Math.random interface.
     * The given random number generator must implement the same interface as Math.random and
     * only return values in the range [0, 1).
     */
    source(source: () => number): this;
}

/**
 * A configurable random number generator for the uniform distribution.
 */
export interface RandomUniform extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with a uniform distribution.
     * The minimum allowed value of a returned number is min (inclusive), and the maximum is max (exclusive).
     * Max defaults to 0; if max is not specified, it defaults to 1.
     *
     * @param max The maximum allowed value of a returned number, defaults to 1.
     */
    (max?: number): () => number;
    /**
     * Returns a function for generating random numbers with a uniform distribution.
     * The minimum allowed value of a returned number is min (inclusive), and the maximum is max (exclusive).
     *
     * @param min The minimum allowed value of a returned number.
     * @param max The maximum allowed value of a returned number.
     */
    (min: number, max: number): () => number;
}

export const randomUniform: RandomUniform;

/**
 * A configurable random integer generator for the uniform distribution.
 */
export interface RandomInt extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random integers with a uniform distribution.
     * The minimum allowed value of a returned number is ⌊min⌋ (inclusive), and the maximum is ⌊max - 1⌋ (inclusive)
     * Min defaults to 0.
     *
     * @param max The maximum allowed value of a returned number.
     */
    (max: number): () => number;
    /**
     * Returns a function for generating random integers with a uniform distribution.
     * The minimum allowed value of a returned number is ⌊min⌋ (inclusive), and the maximum is ⌊max - 1⌋ (inclusive)
     *
     * @param min The minimum allowed value of a returned number.
     * @param max The maximum allowed value of a returned number.
     */
    (min: number, max: number): () => number;
}

export const randomInt: RandomInt;

/**
 * A configurable random number generator for the normal (Gaussian) distribution.
 */
export interface RandomNormal extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with a normal (Gaussian) distribution.
     * The expected value of the generated numbers is mu, with the given standard deviation sigma.
     * If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
     *
     * @param mu Expected value, defaults to 0.
     * @param sigma Standard deviation, defaults to 1.
     */
    (mu?: number, sigma?: number): () => number;
}

export const randomNormal: RandomNormal;

/**
 * A configurable random number generator for the log-normal distribution.
 */
export interface RandomLogNormal extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with a log-normal distribution. The expected value of the random variable’s natural logarithm is mu,
     * with the given standard deviation sigma. If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
     *
     * @param mu Expected value, defaults to 0.
     * @param sigma Standard deviation, defaults to 1.
     */
    (mu?: number, sigma?: number): () => number;
}

export const randomLogNormal: RandomLogNormal;

/**
 * A configurable random number generator for the Bates distribution.
 */
export interface RandomBates extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with a Bates distribution with n independent variables.
     *
     * @param n Number of independent random variables to use.
     */
    (n: number): () => number;
}

export const randomBates: RandomBates;

/**
 * A configurable random number generator for the Irwin–Hall distribution.
 */
export interface RandomIrwinHall extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with an Irwin–Hall distribution with n independent variables.
     *
     * @param n Number of independent random variables to use.
     */
    (n: number): () => number;
}

export const randomIrwinHall: RandomIrwinHall;

/**
 * A configurable random number generator for the exponential distribution.
 */
export interface RandomExponential extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with an exponential distribution with the rate lambda;
     * equivalent to time between events in a Poisson process with a mean of 1 / lambda.
     *
     * @param lambda Expected time between events.
     */
    (lambda: number): () => number;
}

export const randomExponential: RandomExponential;

/**
 * A configurable random number generator with an Pareto distribution.
 */
export interface RandomPareto extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating random numbers with an Pareto distribution with the shape alpha.
     * The value alpha must be a positive value.
     *
     * @param alpha alpha
     */
    (alpha: number): () => number;
}

export const randomPareto: RandomPareto;

/**
 * A configurable random 0 or 1 generator according to a Bernoulli distribution.
 */
export interface RandomBernoulli extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating either 1 or 0 according to a Bernoulli distribution with 1 being returned with success probability p and 0 with failure probability q = 1 - p.
     * The value p is in the range [0, 1].
     *
     * @param p p
     */
    (p: number): () => number;
}

export const randomBernoulli: RandomBernoulli;

/**
 * A configurable random number generator with a geometric distribution.
 */
export interface RandomGeometric extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating numbers with a geometric distribution with success probability p.
     * The value p is in the range (0, 1].
     *
     * @param p Success probability
     */
    (p: number): () => number;
}

export const randomGeometric: RandomGeometric;

/**
 * A configurable random number generator with a binomial distribution.
 */
export interface RandomBinomial extends RandomNumberGenerationSource {
    /**
     * Returns a function for generating numbers with a geometric distribution with success probability p.
     * The value p is in the range (0, 1].
     *
     * @param p Success probability
     */
    (p: number): () => number;
}

export const randomBinomial: RandomBinomial;
