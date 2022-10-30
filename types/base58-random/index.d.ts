// Type definitions for base58-random 0.1.1
// Project: https://github.com/deployable/base58-random#readme
// Definitions by: Zeilar <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Test whether the given string is valid base58.
 */
export function test(str: string): boolean;

/**
 * Returns a random base58 string.
 */
export default function base58(length: number): string;

// The below functions are used internally by the library, they do not need to be executed.
export function generateBase58Math(): string;
export function generateBase58Node(): string;
export function generateBase58Browser(): string;
export function initMath(): void;
export function initNode(): void;
export function initBrowser(): void;
