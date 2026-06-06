export = nextFn;

/**
 * Gives you a random adj-noun pair that you can use as a unique identifier.
 *
 * @example
 * import adjNoun = require('adj-noun');
 *
 * // seed it so your pairs are different than someone else using this lib
 * adjNoun.seed(123);
 * // -> true
 *
 * // optionally you can provide primes to adjust how words are chosen:
 * adjNoun.adjPrime(3);
 * adjNoun.nounPrime(7);
 *
 * for (let i = 0; i < 10; i++) {
 *   // generate and log pairs
 *   console.log(adjNoun().join('-'));
 * }
 * // console.logs ->
 * //   lasting-meaning
 * //   numerical-excerpt
 * //   unresponsive-madman
 * //   royal-haircut
 * //   squeaky-schedule
 * //   respectable-compressor
 * //   northern-knife
 * //   shrewd-tribute
 * //   blank-volcano
 * //   rhenish-periodical
 */
declare function nextFn(): [string, string];

declare namespace nextFn {
    const next: typeof nextFn;
    /**
     * Provide a seed so that the generated pairs are different than someone else's using this lib.
     *
     * Only works before `next()` is called for the first time.
     *
     * @param newSeed The seed to use.
     * @returns `true` if the new seed was set or `false` if `next()` was called at least once and
     * the seed value was ignored.
     *
     * @example
     * import adjNoun = require('adj-noun');
     *
     * // seed it so your pairs are different than someone else using this lib
     * adjNoun.seed(123);
     * // -> true
     *
     * adjNoun();
     *
     * // after you start generating pairs, you cannot change the seed or primes
     * // otherwise you might end up with non-unique pairs
     * adjNoun.seed(456);
     * // -> false
     */
    function seed(newSeed: number): boolean;
    /**
     * Provide a prime to adjust how adjectives are chosen.
     *
     * Only works before `next` is called for the first time.
     *
     * @param newPrime The prime number to use.
     * @returns `true` if the new prime was set or `false` if `next()` was called at least once and
     * the prime value was ignored.
     *
     * @example
     * import adjNoun = require('adj-noun');
     *
     * adjNoun.seed(123);
     * adjNoun.adjPrime(3);
     * // -> true
     *
     * adjNoun();
     *
     * // after you start generating pairs, you cannot change the seed or primes
     * // otherwise you might end up with non-unique pairs
     * adjNoun.adjPrime(5);
     * // -> false
     */
    function adjPrime(newPrime: number): boolean;
    /**
     * Provide a prime to adjust how nouns are chosen.
     *
     * Only works before `next` is called for the first time.
     *
     * @param newPrime The prime number to use.
     * @returns `true` if the new prime was set or `false` if `next()` was called at least once and
     * the prime value was ignored.
     *
     * @example
     * import adjNoun = require('adj-noun');
     *
     * adjNoun.seed(123);
     * adjNoun.nounPrime(3);
     * // -> true
     *
     * adjNoun();
     *
     * // after you start generating pairs, you cannot change the seed or primes
     * // otherwise you might end up with non-unique pairs
     * adjNoun.nounPrime(5);
     * // -> false
     */
    function nounPrime(newPrime: number): boolean;
}
