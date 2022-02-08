// Type definitions for lcm 0.0
// Project: https://github.com/nickleefly/node-lcm
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Compute the least common multiple using [Euclid’s algorithm](http://en.wikipedia.org/wiki/Euclidean_algorithm).
 *
 * @returns the least common multiple of the integers `a` and `b` using Euclid's algorithm.
 */
declare function lcm(a: number, b: number): number;

export = lcm;
