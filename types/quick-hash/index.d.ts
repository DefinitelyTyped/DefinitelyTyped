/**
 * Murmur hash optimized for performance, not collision avoidance.
 * @param key the string to hash
 * @param seed a seed for hashing
 * @returns A string of 5 to 7 alpha-numeric characters
 */
declare function quickHash(key: string, seed?: number): string;
export = quickHash;
