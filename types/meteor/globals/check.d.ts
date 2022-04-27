/**
 * The namespace for all Match types and methods.
 */
declare namespace Match {
    interface Matcher<T> {
        _meteorCheckMatcherBrand: void;
    }
    // prettier-ignore
    export type Pattern =
        typeof String |
        typeof Number |
        typeof Boolean |
        typeof Object |
        typeof Function |
        (new (...args: any[]) => any) |
        undefined | null | string | number | boolean |
        [Pattern] |
        {[key: string]: Pattern} |
        Matcher<any>;
    // prettier-ignore
    export type PatternMatch<T extends Pattern> =
        T extends Matcher<infer U> ? U :
        T extends typeof String ? string :
        T extends typeof Number ? number :
        T extends typeof Boolean ? boolean :
        T extends typeof Object ? object :
        T extends typeof Function ? Function :
        T extends undefined | null | string | number | boolean ? T :
        T extends new (...args: any[]) => infer U ? U :
        T extends [Pattern] ? PatternMatch<T[0]>[] :
        T extends {[key: string]: Pattern} ? {[K in keyof T]: PatternMatch<T[K]>} :
        unknown;

    /** Matches any value. */
    var Any: Matcher<any>;
    /** Matches a signed 32-bit integer. Doesn’t match `Infinity`, `-Infinity`, or `NaN`. */
    var Integer: Matcher<number>;

    /**
     * Matches either `undefined`, `null`, or pattern. If used in an object, matches only if the key is not set as opposed to the value being set to `undefined` or `null`. This set of conditions
     * was chosen because `undefined` arguments to Meteor Methods are converted to `null` when sent over the wire.
     */
    function Maybe<T extends Pattern>(pattern: T): Matcher<PatternMatch<T> | undefined | null>;

    /** Behaves like `Match.Maybe` except it doesn’t accept `null`. If used in an object, the behavior is identical to `Match.Maybe`. */
    function Optional<T extends Pattern>(pattern: T): Matcher<PatternMatch<T> | undefined>;

    /** Matches an Object with the given keys; the value may also have other keys with arbitrary values. */
    function ObjectIncluding<T extends { [key: string]: Pattern }>(dico: T): Matcher<PatternMatch<T>>;

    /** Matches any value that matches at least one of the provided patterns. */
    function OneOf<T extends Pattern[]>(...patterns: T): Matcher<PatternMatch<T[number]>>;

    /**
     * Calls the function condition with the value as the argument. If condition returns true, this matches. If condition throws a `Match.Error` or returns false, this fails. If condition throws
     * any other error, that error is thrown from the call to `check` or `Match.test`.
     */
    function Where<T>(condition: (val: any) => val is T): Matcher<T>;
    function Where(condition: (val: any) => boolean): Matcher<any>;

    /**
     * Returns true if the value matches the pattern.
     * @param value The value to check
     * @param pattern The pattern to match `value` against
     */
    function test<T extends Pattern>(value: any, pattern: T): value is PatternMatch<T>;
}

/**
 * Check that a value matches a pattern.
 * If the value does not match the pattern, throw a `Match.Error`.
 *
 * Particularly useful to assert that arguments to a function have the right
 * types and structure.
 * @param value The value to check
 * @param pattern The pattern to match `value` against
 */
declare function check<T extends Match.Pattern>(value: any, pattern: T): asserts value is Match.PatternMatch<T>;
