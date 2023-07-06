// Type definitions for short-hash 1.0
// Project: https://github.com/joakimbeng/short-hash#readme
// Definitions by: Ericsson Schroeter <https://github.com/ekschro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Get a short hash from a string. Uses Bernstein's popular "times 33" hash algorithm but returns a hex string instead of a number.
 * @param str The string to hash.
 */
export default function shortHash(str: string): string;
