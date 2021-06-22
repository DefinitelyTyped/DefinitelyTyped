// Type definitions for quick-hash 1.0
// Project: https://github.com/vigour-io/quick-hash#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Murmur hash optimized for performance, not collision avoidance.
 * @param key the string to hash
 * @param seed a seed for hashing
 * @returns A string of 5 to 7 alpha-numeric characters
 */
declare function quickHash(key: string, seed?: number): string;
export = quickHash;
