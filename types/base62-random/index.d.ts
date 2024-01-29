export = base62;

/**
 * Generate random [base62 strings] (https://helloacm.com/base62/) with better
 * [statistical dispersion](https://en.wikipedia.org/wiki/Statistical_dispersion)
 * than `Math.random()` unless Math.random is all that's available.
 *
 * @example
 * import base62 = require('base62-random');
 *
 * base62(12); // 'KsykHbcCzUSL'
 */
declare function base62(length: number): string;

declare namespace base62 {
    /**
     * Check whether a string is a base62 string.
     *
     * @example
     * import base62 = require('base62-random');
     *
     * base62.test('5HXx8Eznu0'); // true
     * base62.test('P-f6cA4e'); // false
     */
    function test(str: unknown): str is string;
    function generateBase62Math(): string;
    function generateBase62Node(): string;
    function generateBase62Browser(): string;
    function initMath(): void;
    function initNode(): void;
    function initBrowser(): void;
}
