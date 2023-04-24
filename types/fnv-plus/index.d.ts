// Type definitions for fnv-plus 1.3
// Project: https://github.com/tjwebb/fnv-plus
// Definitions by: Mihnea Stoian <https://github.com/mihnea-s>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fnv;

export interface FnvHash {
    /** Returns the hashed value as an ascii string */
    str: () => string;

    /** Returns the hashed value as an hexadecimal string */
    hex: () => string;

    /** Returns the hashed value as an decimal string */
    dec: () => string;
}

/**
 * Hash a string using the given bit length.
 *
 * @default bitlength 52
 */
export function hash(value: string, bitlength?: number): FnvHash;

/**
 * Seed the algorithm to produce different values. Hashing the same value
 * with different seeds will very likely result in different results. To the
 * extent your seed can be random, it can serve as a source of randomness,
 * but nonetheless is not a replacement for a crypgographic PRG (pseudo-random
 * generator). By default the seed is `chongo <Landon Curt Noll> /\>./\\`.
 */
export function seed(seed: string): void;

/**
 * Controls UTF-8 awareness of hash functions. By default this is `false`.
 */
export function useUTF8(enable: boolean): void;

/** Calculate FNV-1a 32bit hash. */
export function fast1a32(value: string): number;

/** Calculate FNV-1a 32bit hash. */
export function fast1a32hex(value: string): string;

/** Calculate FNV-1a 32bit hash, handles UTF-8 strings. */
export function fast1a32utf(value: string): number;

/** Calculate FNV-1a 32bit hash, handles UTF-8 strings. */
export function fast1a32hexutf(value: string): string;

/** Calculate FNV-1a 52bit hash. */
export function fast1a52(value: string): number;

/** Calculate FNV-1a 52bit hash. */
export function fast1a52hex(value: string): string;

/** Calculate FNV-1a 52bit hash, handles UTF-8 strings. */
export function fast1a52utf(value: string): number;

/** Calculate FNV-1a 52bit hash, handles UTF-8 strings. */
export function fast1a52hexutf(value: string): string;

/** Calculate FNV-1a 64bit hash. */
export function fast1a64(value: string): number;

/** Calculate FNV-1a 64bit hash. */
export function fast1a64hex(value: string): string;

/** Calculate FNV-1a 64bit hash, handles UTF-8 strings. */
export function fast1a64utf(value: string): number;

/** Calculate FNV-1a 64bit hash, handles UTF-8 strings. */
export function fast1a64hexutf(value: string): string;
