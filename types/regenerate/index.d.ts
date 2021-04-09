// Type definitions for regenerate 1.4
// Project: https://github.com/mathiasbynens/regenerate
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export as namespace regenerate;
export = regenerate;

type RegenerateArgValue = string | number | regenerate;
type RegenerateArgValueOrArray = RegenerateArgValue | readonly RegenerateArgValueOrArray[];

/**
 * The main Regenerate constructor. Calling this function creates a new set that gets a chainable API.
 *
 * Any arguments passed to `regenerate()` will be added to the set right away.
 *
 * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol)
 * are accepted, as well as arrays containing values of these types.
 *
 * It’s also possible to pass in a Regenerate instance.
 * Doing so adds all code points in that instance to the new set.
 */
declare function regenerate(...values: readonly RegenerateArgValueOrArray[]): regenerate;
declare class regenerate {
    constructor(...values: readonly RegenerateArgValueOrArray[]);

    /**
     * Any arguments passed to `add()` are added to the set.
     *
     * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol)
     * are accepted, as well as arrays containing values of these types.
     *
     * It’s also possible to pass in a Regenerate instance.
     * Doing so adds all code points in that instance to the current set.
     */
    add(value: RegenerateArgValueOrArray, ...rest: readonly RegenerateArgValueOrArray[]): this;

    /**
     * Any arguments passed to `remove()` are removed from the set.
     *
     * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol)
     * are accepted, as well as arrays containing values of these types.
     *
     * It’s also possible to pass in a Regenerate instance.
     * Doing so removes all code points in that instance from the current set.
     */
    remove(value: RegenerateArgValueOrArray, ...rest: readonly RegenerateArgValueOrArray[]): this;

    /**
     * Adds a range of code points from `start` to `end` (inclusive) from the set.
     *
     * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol) are accepted.
     *
     * @param start The start of the range to add.
     * @param end The end of the range to add.
     */
    addRange(start: string | number, end: string | number): this;

    /**
     * Removes a range of code points from `start` to `end` (inclusive) from the set.
     *
     * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol) are accepted.
     *
     * @param start The start of the range to remove.
     * @param end The end of the range to remove.
     */
    removeRange(start: string | number, end: string | number): this;

    /**
     * Removes any code points from the set that are not present in both the set and the given `codePoints` array.
     *
     * @param argument must be an array of numeric code point values, i.e. numbers, or a Regenerate instance.
     */
    intersection(argument: regenerate | readonly number[]): this;

    /**
     * Returns `true` if the given value is part of the set, and `false` otherwise.
     *
     * Both code points (numbers) and symbols (strings consisting of a single Unicode symbol) are accepted.
     *
     * @param codePoint The codepoint to check for
     */
    contains(codePoint: string | number): boolean;

    /**
     * Returns a clone of the current code point set.
     *
     * Any actions performed on the clone won’t mutate the original set.
     */
    clone(): regenerate;

    /**
     * Returns a regular expression that matches all the symbols
     * mapped to the code points within the set.
     *
     * @param flags The `flags` parameter to be passed to the regular expression.
     */
    toRegExp(flags?: string): RegExp;

    /**
     * Returns a string representing (part of) a regular expression that matches
     * all the symbols mapped to the code points within the set.
     *
     * @param options The optional `options` object
     */
    toString(options?: regenerate.ToStringOptions): string;

    /**
     * Returns a sorted array of unique code points in the set.
     *
     * @alias valueOf
     */
    toArray(): number[];

    /**
     * Returns a sorted array of unique code points in the set.
     *
     * @alias toArray
     */
    valueOf(): number[];

    /** A string representing the semantic version number. */
    static readonly version: string;
}

declare namespace regenerate {
    interface ToStringOptions {
        /**
         * When `bmpOnly` is set to `true`, the output matches surrogates individually,
         * regardless of whether they’re lone surrogates or just part of a surrogate pair.
         *
         * This simplifies the output, but it can only be used in case you’re certain
         * the strings it will be used on don’t contain any astral symbols.
         */
        readonly bmpOnly?: boolean;

        /**
         * When `hasUnicodeFlag` is set to `true`, the output makes use
         * of Unicode code point escapes (`\u{…}`) where applicable.
         *
         * This simplifies the output at the cost of compatibility and portability,
         * since it means the output can only be used as a pattern in a regular expression
         * with the ES6 `u` flag enabled.
         *
         * @see https://mathiasbynens.be/notes/es6-unicode-regex
         */
        readonly hasUnicodeFlag?: boolean;
    }
}
