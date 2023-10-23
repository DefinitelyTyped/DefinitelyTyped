export as namespace base58;
export = base58;

/**
 * Generate random [base58 strings](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58)
 * quickly with better [statistical dispersion](https://en.wikipedia.org/wiki/Statistical_dispersion)
 * than `Math.random()` unless Math.random is all that's available.
 *
 * @example
 * import base58 = require('base58-random');
 * base58(12); // 'KsykHbcCzUSL'
 */
declare function base58(length: number): string;

declare namespace base58 {
    /**
     * Check whether a string is a base58 string.
     *
     * @example
     * import base58 = require('base58-random');
     *
     * base58.test('4rhdLsp32qn'); // true
     * base58.test('5HXx8Eznu0'); // false
     * base58.test('P-f6cA4e'); // false
     */
    function test(str: unknown): str is string;
    function generateBase58Math(): string;
    function generateBase58Node(): string;
    function generateBase58Browser(): string;
    function initMath(): void;
    function initNode(): void;
    function initBrowser(): void;
}
