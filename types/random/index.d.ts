// Type definitions for random 2.1
// Project: https://github.com/transitive-bullshit/random
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn>
//                 Michał Kijowski <https://github.com/kijowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface RNG {
    name: string;
    next(): number;
    seed(seed: number, opts: {}): void;
    clone(seed: number, opts: {}): RNG;
}

/**
 * Samples a uniform random floating point number, optionally specifying lower and upper bounds.
 * Convence wrapper around random.uniform()
 * @param min - Lower bound (float, inclusive) (default 0)
 * @param max - Upper bound (float, exclusive) (default 1)
 */
export function float(min?: number, max?: number): number;
/**
 * Samples a uniform random integer, optionally specifying lower and upper bounds.
 * Convence wrapper around random.uniformInt()
 * @param min - Lower bound (integer, inclusive) (default 0)
 * @param max - Upper bound (integer, inclusive) (default 1)
 */
export function int(min?: number, max?: number): number;
/**
 * Samples a uniform random boolean value.
 * Convence wrapper around random.uniformBoolean()
 */
export function boolean(): boolean;
/**
 * Samples a uniform random boolean value.
 * Convence wrapper around random.uniformBoolean()
 */
export function bool(): boolean;

/**
 * Generates a Continuous uniform distribution
 * https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)
 *
 * @param min - Lower bound (float, inclusive) (default 0)
 * @param max - Upper bound (float, exclusive) (default 1)
 */
export function uniform(min?: number, max?: number): () => number;
/**
 * Generates a Discrete uniform distribution
 * https://en.wikipedia.org/wiki/Discrete_uniform_distribution
 *
 * @param min - Lower bound (integer, inclusive) (default 0)
 * @param max - Upper bound (integer, inclusive) (default 1)
 */
export function uniformInt(min?: number, max?: number): () => number;
/**
 * Generates a Discrete uniform distribution, with two possible outcomes, true or `false.
 * This method is analogous to flipping a coin.
 */
export function uniformBoolean(): () => boolean;

/**
 * Generates a Normal distribution.
 * https://en.wikipedia.org/wiki/Normal_distribution
 * @param mu - Mean (default 0)
 * @param sigma - Standard deviation (default 1)
 */
export function normal(mu?: number, sigma?: number): () => number;
/**
 * Generates a Log-normal distribution.
 * https://en.wikipedia.org/wiki/Log-normal_distribution
 * @param mu - Mean of underlying normal distribution (default 0)
 * @param sigma - Standard deviation of underlying normal distribution (default 1)
 */
export function logNormal(mu?: number, sigma?: number): () => number;

/**
 * Generates a Bernoulli distribution.
 * https://en.wikipedia.org/wiki/Bernoulli_distribution
 * @param p - Success probability of each trial. (default 0.5)
 */
export function bernoulli(p?: number): () => number;
/**
 * Generates a Binomial distribution.
 * https://en.wikipedia.org/wiki/Binomial_distribution
 * @param n - Number of trials. (default 1)
 * @param p - Success probability of each trial. (default 0.5)
 */
export function binomial(n?: number, p?: number): () => number;
/**
 * Generates a Geometric distribution.
 * https://en.wikipedia.org/wiki/Geometric_distribution
 * @param p - Success probability of each trial. (default 0.5)
 */
export function geometric(p?: number): () => number;

/**
 * Generates a Poisson distribution.
 * https://en.wikipedia.org/wiki/Poisson_distribution
 * @param lambda - Mean (lambda > 0) (default 1)
 */
export function poisson(lambda?: number): () => number;
/**
 * Generates an Exponential distribution.
 * https://en.wikipedia.org/wiki/Exponential_distribution
 * @param lambda - Inverse mean (lambda > 0) (default 1)
 */
export function exponential(lambda?: number): () => number;

/**
 * Generates an Irwin Hall distribution.
 * https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution
 * @param n - Number of uniform samples to sum (n >= 0) (default 1)
 */
export function irwinHall(n?: number): () => number;
/**
 * Generates a Bates distribution.
 * https://en.wikipedia.org/wiki/Bates_distribution
 * @param n - Number of uniform samples to average (n >= 1) (default 1)
 */
export function bates(n?: number): () => number;
/**
 * Generates a Pareto distribution.
 * https://en.wikipedia.org/wiki/Pareto_distribution
 * @param alpha - Alpha (default 1)
 */
export function pareto(alpha?: number): () => number;

/**
 * Sets the underlying pseudorandom number generator used via either an instance of seedrandom,
 * a custom instance of RNG (for PRNG plugins),
 * or a string specifying the PRNG to use along with an optional seed and opts to initialize the RNG.
 * @param n
 */
export function use(n: number | string | (() => number) | RNG): void;

/**
 * Patches Math.random with this Random instance's PRNG.
 */
export function patch(): void;

/**
 * Restores a previously patched Math.random to its original value.
 */
export function unpatch(): void;
