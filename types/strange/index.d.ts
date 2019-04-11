// Type definitions for strange 1.7
// Project: https://github.com/moll/js-strange
// Definitions by: Anjun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Range;

/**
 * Create a new range object with the given begin and end endpoints.
 * You can also pass a two character string for bounds. Defaults to` "[]"` for
 * an all inclusive range.
 *
 * You can use any value for endpoints. `Null` is considered infinity for
 * values that don't have a special infinity type like `Number` has `Infinity`.
 *
 * An empty range is one where either of the endpoints is `undefined`
 * (like `new Range`) or a range with two equivalent, but exculsive endpoints
 * (`new Range(5, 5, "[)")`).
 *
 * @example
 * var Range = require("strange")
 * new Range(10, 20) // => {begin: 10, end: 20, bounds: "[]"}
 * new Range(new Date(2000, 5, 18), new Date(2000, 5, 22))
 */
declare const Range: RangeConstructor;

interface RangeConstructor {
    /**
     *
     * @param begin Range's beginning, or left endpoint.
     * @param end Range's end, or right endpoint.
     * @param bounds Range's bounds.
     */
    new <T extends Range.Endpoint>(begin?: T | null, end?: T | null, bounds?: Range.Bounds): Range<T>;

    /**
     *
     * @param begin Range's beginning, or left endpoint.
     * @param end Range's end, or right endpoint.
     * @param bounds Range's bounds.
     */
    <T extends Range.Endpoint>(begin?: T | null, end?: T | null, bounds?: Range.Bounds): Range<T>;

    /**
     * Compares two range's beginnings.
     * Returns `-1` if `a` begins before `b` begins, `0` if they're equal and `1`
     * if `a` begins after `b`.
     *
     * @example
     * Range.compareBeginToBegin(new Range(0, 10), new Range(5, 15)) // => -1
     * Range.compareBeginToBegin(new Range(0, 10), new Range(0, 15)) // => 0
     * Range.compareBeginToBegin(new Range(0, 10), new Range(0, 15, "()")) // => 1
     */
    compareBeginToBegin<U extends Range.Endpoint>(a: Range<U>, b: Range<U>): -1 | 0 | 1;

    /**
     * Compares the first range's beginning to the second's end.
     * Returns `<0` if `a` begins before `b` ends, `0` if one starts where the other
     * ends and `>1` if `a` begins after `b` ends.
     *
     * @example
     * Range.compareBeginToEnd(new Range(0, 10), new Range(0, 5)) // => -1
     * Range.compareBeginToEnd(new Range(0, 10), new Range(-10, 0)) // => 0
     * Range.compareBeginToEnd(new Range(0, 10), new Range(-10, -5)) // => 1
     */
    compareBeginToEnd<U extends Range.Endpoint>(a: Range<U>, b: Range<U>): -1 | 0 | 1;

    /**
     * Compares two range's endings.
     * Returns `-1` if `a` ends before `b` ends, `0` if they're equal and `1`
     * if `a` ends after `b`.
     *
     * @example
     * Range.compareEndToEnd(new Range(0, 10), new Range(5, 15)) // => -1
     * Range.compareEndToEnd(new Range(0, 10), new Range(5, 10)) // => 0
     * Range.compareEndToEnd(new Range(0, 10), new Range(5, 10, "()")) // => 1
     */
    compareEndToEnd<U extends Range.Endpoint>(a: Range<U>, b: Range<U>): -1 | 0 | 1;

    /**
     * Parses a string stringified by
     * [`Range.prototype.toString`](#Range.prototype.toString).
     *
     * To have it also parse the endpoints to something other than a string, pass
     * a function as the second argument.
     *
     * If you pass `Number` as the _parse_ function and the endpoints are
     * unbounded, they'll be set to `Infinity` for easier computation.
     *
     * @example
     * Range.parse("[a,z)") // => new Range("a", "z", "[)")
     */
    parse(range: string): Range<string>;

    /**
     * Parses a string stringified by
     * [`Range.prototype.toString`](#Range.prototype.toString).
     *
     * To have it also parse the endpoints to something other than a string, pass
     * a function as the second argument.
     *
     * If you pass `Number` as the _parse_ function and the endpoints are
     * unbounded, they'll be set to `Infinity` for easier computation.
     *
     * @example
     * Range.parse("[42,69]", Number) // => new Range(42, 69)
     * Range.parse("[15,]", Number) // => new Range(15, Infinity)
     * Range.parse("(,3.14]", Number) // => new Range(-Infinity, 3.14, "(]")
     */
    parse<U extends Range.Endpoint>(range: string, parse: (endpoint: string) => U): Range<U>;

    /**
     * Merges two ranges and returns a range that encompasses both of them.
     * The ranges don't have to be intersecting.
     *
     * @example
     * Range.union(new Range(0, 5), new Range(5, 10)) // => new Range(0, 10)
     * Range.union(new Range(0, 10), new Range(5, 15)) // => new Range(0, 15)
     *
     * var a = new Range(-5, 0, "()")
     * var b = new Range(5, 10)
     * Range.union(a, b) // => new Range(-5, 10, "(]")
     */
    union<U extends Range.Endpoint>(a: Range<U>, b: Range<U>): Range<U>;

    readonly prototype: Range<any>;
}

interface Range<T extends Range.Endpoint> {
    /**
     * Range's beginning, or left endpoint.
     */
    begin?: T | null;

    /**
     * Range's end, or right endpoint.
     */
    end?: T | null;

    /**
     * Range's bounds.
     *
     * Bounds signify whether the range includes or excludes that particular
     * endpoint.
     *
     * Pair | Meaning
     * -----|--------
     * `()` | open
     * `[]` | closed
     * `[)` | left-closed, right-open
     * `(]` | left-open, right-closed
     *
     * @example
     * new Range(1, 5).bounds // => "[]"
     * new Range(1, 5, "[)").bounds // => "[)"
     */
    bounds: Range.Bounds;

    /**
     * Compares this range's beginning with the given value.
     * Returns `-1` if this range begins before the given value, `0` if they're
     * equal and `1` if this range begins after the given value.
     *
     * `null` is considered to signify negative infinity for non-numeric range
     * endpoints.
     *
     * @example
     * new Range(0, 10).compareBegin(5) // => -1
     * new Range(0, 10).compareBegin(0) // => 0
     * new Range(5, 10).compareBegin(0) // => 1
     * new Range(5, 10).compareBegin(null) // => 1
     */
    compareBegin(begin: T | null): -1 | 0 | 0;

    /**
     * Compares this range's end with the given value.
     * Returns `-1` if this range ends before the given value, `0` if they're
     * equal and `1` if this range ends after the given value.
     *
     * `null` is considered to signify positive infinity for non-numeric range
     * endpoints.
     *
     * @example
     * new Range(0, 10).compareEnd(5) // => -1
     * new Range(0, 10).compareEnd(10) // => 0
     * new Range(0, 5).compareEnd(10) // => 1
     * new Range(0, 5).compareEnd(null) // => -1
     */
    compareEnd(end: T | null): -1 | 0 | 0;

    /**
     * Check whether the range is empty.
     * An empty range is one where either of the endpoints is `undefined`
     * (like `new Range`) or a range with two equivalent, but exculsive endpoints
     * (`new Range(5, 5, "[)")`).
     *
     * Equivalence is checked by using the `<` operators, so value objects will be
     * coerced into something comparable by JavaScript. That usually means calling
     * the object's `valueOf` function.
     *
     * @example
     * new Range().isEmpty() // => true
     * new Range(5, 5, "[)").isEmpty() // => true
     * new Range(1, 10).isEmpty() // => false
     */
    isEmpty(): boolean;

    /**
     * Check whether the range is bounded.
     * A bounded range is one where neither endpoint is `null` or `Infinity`. An
     * empty range is considered bounded.
     *
     * @example
     * new Range().isBounded() // => true
     * new Range(5, 5).isBounded() // => true
     * new Range(null, new Date(2000, 5, 18)).isBounded() // => false
     * new Range(0, Infinity).isBounded() // => false
     * new Range(-Infinity, Infinity).isBounded() // => false
     */
    isBounded(): boolean;

    /**
     * @alias isBounded
     */
    isFinite(): boolean;

    /**
     * Check whether the range is unbounded.
     * An unbounded range is one where either endpoint is `null` or `Infinity`. An
     * empty range is not considered unbounded.
     *
     * @example
     * new Range().isUnbounded() // => false
     * new Range(5, 5).isUnbounded() // => false
     * new Range(null, new Date(2000, 5, 18)).isUnbounded() // => true
     * new Range(0, Infinity).isUnbounded() // => true
     * new Range(-Infinity, Infinity).isUnbounded() // => true
     */
    isUnbounded(): boolean;

    /**
     * @alias isUnbounded
     */
    isInfinite(): boolean;

    /**
     * Check if a given value is contained within this range.
     * Returns `true` or `false`.
     *
     * @example
     * new Range(0, 10).contains(5) // => true
     * new Range(0, 10).contains(10) // => true
     * new Range(0, 10, "[)").contains(10) // => false
     */
    contains(value: T | null): boolean;

    /**
     * Check if this range intersects with another.
     * Returns `true` or `false`.
     *
     * Ranges that have common points intersect. Ranges that are consecutive and
     * with *inclusive* endpoints are also intersecting. An empty range will never
     * intersect.
     *
     * @example
     * new Range(0, 10).intersects(new Range(5, 7)) // => true
     * new Range(0, 10).intersects(new Range(10, 20)) // => true
     * new Range(0, 10, "[)").intersects(new Range(10, 20)) // => false
     * new Range(0, 10).intersects(new Range(20, 30)) // => false
     */
    intersects(value: Range<T>): boolean;

    /**
     * Returns an array of the endpoints and bounds.
     *
     * Useful with [Egal.js](https://github.com/moll/js-egal) or other libraries
     * that compare value objects by their `valueOf` output.
     *
     * @example
     * new Range(1, 10, "[)").valueOf() // => [1, 10, "[)"]
     */
    valueOf(): [T | null | undefined, T | null | undefined, Range.Bounds];

    /**
     * Stringifies a range in `[a,b]` format.
     *
     * This happens to match the string format used by [PostgreSQL's range type
     * format](http://www.postgresql.org/docs/9.4/static/rangetypes.html). You can
     * therefore use stRange.js to parse and stringify ranges for your database.
     *
     * @example
     * new Range(1, 5).toString() // => "[1,5]"
     * new Range(1, 10, "[)").toString() // => "[1,10)"
     */
    toString(): string;

    /**
     * Stringifies the range when passing it to `JSON.stringify`.
     * This way you don't need to manually call `toString` when stringifying.
     *
     * @example
     * JSON.stringify(new Range(1, 10)) // "\"[1,10]\""
     *
     * @alias toString
     */
    toJSON(): string;

    /**
     * @alias toJSON
     */
    inspect(): string;
}

declare namespace Range {
    type Endpoint = Date | number | string;
    type Bounds = '()' | '[]' | '[)' | '(]';
}
