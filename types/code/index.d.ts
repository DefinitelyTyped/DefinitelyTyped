// Type definitions for code 4.0
// Project: https://github.com/hapijs/code
// Definitions by: Prashant Tiwari <https://github.com/prashaantt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Generates an assertion object. */
export function expect<T>(value: T | T[], prefix?: string): AssertionChain<T>;
/** Makes the test fail with the given message. */
export function fail(message: string): void;
/** Returns the total number of assertions created using the expect() method. */
export function count(): number;
/** Returns an array of the locations where incomplete assertions were declared or null if no incomplete assertions found. */
export function incomplete(): string[] | null;
/** Returns the filename, line number, and column number of where the error was created. */
export function thrownAt(error?: Error): CodeError;
/** Configure code. */
export const settings: Settings;

export type AssertionChain<T> = Assertion<T> & Expectation<T>;

export type Assertion<T> = Grammar<T> & Flags<T>;

export type Expectation<T> = Types<T> & Values<T>;

export interface Grammar<T> {
    /** Connecting word. */
    a: AssertionChain<T>;
    /** Connecting word. */
    an: AssertionChain<T>;
    /** Connecting word. */
    and: AssertionChain<T>;
    /** Connecting word. */
    at: AssertionChain<T>;
    /** Connecting word. */
    be: AssertionChain<T>;
    /** Connecting word. */
    have: AssertionChain<T>;
    /** Connecting word. */
    in: AssertionChain<T>;
    /** Connecting word. */
    to: AssertionChain<T>;
}

export interface Flags<T> {
    /** Inverses the expected result of any assertion */
    not: AssertionChain<T>;
    /**
     * Requires that inclusion matches appear only once in the provided value.
     * Used by include().
     */
    once: AssertionChain<T>;
    /**
     * Requires that only the provided elements appear in the provided value.
     * Used by include().
     */
    only: AssertionChain<T>;
    /**
     * Allows a partial match when asserting inclusion
     * Used by include(). Defaults to false.
     */
    part: AssertionChain<T>;
    /**
     * Performs a comparison using strict equality (===).
     * Code defaults to deep comparison. Used by equal() and include().
     */
    shallow: AssertionChain<T>;
}

export interface Types<T> {
    /** Asserts that the reference value is an arguments object. */
    arguments(): AssertionChain<T>;
    /** Asserts that the reference value is an Array. */
    array(): AssertionChain<T>;
    /** Asserts that the reference value is a boolean. */
    boolean(): AssertionChain<T>;
    /** Asserts that the reference value is a Buffer. */
    buffer(): AssertionChain<T>;
    /** Asserts that the reference value is a Date. */
    date(): AssertionChain<T>;
    /** Asserts that the reference value is an error. */
    error(type?: any, message?: string | RegExp): AssertionChain<T>;
    /** Asserts that the reference value is a function. */
    function(): AssertionChain<T>;
    /** Asserts that the reference value is a number. */
    number(): AssertionChain<T>;
    /** Asserts that the reference value is a RegExp. */
    regexp(): AssertionChain<T>;
    /** Asserts that the reference value is a string. */
    string(): AssertionChain<T>;
    /** Asserts that the reference value is an object (excluding array, buffer, or other native objects). */
    object(): AssertionChain<T>;
}

export interface Values<T> {
    /** Asserts that the reference value is true. */
    true(): AssertionChain<T>;
    /** Asserts that the reference value is false. */
    false(): AssertionChain<T>;
    /** Asserts that the reference value is null. */
    null(): AssertionChain<T>;
    /** Asserts that the reference value is undefined. */
    undefined(): AssertionChain<T>;
    /** Asserts that the reference value (a string, array, or object) includes the provided values. */
    include(values: string | string[] | T | T[]): AssertionChain<T>;
    /** Asserts that the reference value (a string, array, or object) includes the provided values. */
    includes(values: string | string[] | T | T[]): AssertionChain<T>;
    /** Asserts that the reference value (a string, array, or object) includes the provided values. */
    contain(values: string | string[] | T | T[]): AssertionChain<T>;
    /** Asserts that the reference value (a string, array, or object) includes the provided values. */
    contains(values: string | string[] | T | T[]): AssertionChain<T>;
    /** Asserts that the reference value (a string) starts with the provided value. */
    startWith(value: string): AssertionChain<T>;
    /** Asserts that the reference value (a string) starts with the provided value. */
    startsWith(value: string): AssertionChain<T>;
    /** Asserts that the reference value (a string) ends with the provided value. */
    endWith(value: string): AssertionChain<T>;
    /** Asserts that the reference value (a string) ends with the provided value. */
    endsWith(value: string): AssertionChain<T>;
    /** Asserts that the reference value exists (not null or undefined). */
    exist(): AssertionChain<T>;
    /** Asserts that the reference value exists (not null or undefined). */
    exists(): AssertionChain<T>;
    /** Asserts that the reference value has a length property equal to zero or an object with no keys. */
    empty(): AssertionChain<T>;
    /** Asserts that the reference value has a length property matching the provided size or an object with the specified number of keys. */
    length(size: number): AssertionChain<T>;
    /** Asserts that the reference value equals the provided value. */
    equal(value: T | T[], options?: any): AssertionChain<T>;
    /** Asserts that the reference value equals the provided value. */
    equals(value: T | T[], options?: any): AssertionChain<T>;
    /** Asserts that the reference value is greater than (>) the provided value. */
    above(value: T): AssertionChain<T>;
    /** Asserts that the reference value is greater than (>) the provided value. */
    greaterThan(value: T): AssertionChain<T>;
    /** Asserts that the reference value is at least (>=) the provided value. */
    least(value: T): AssertionChain<T>;
    /** Asserts that the reference value is at least (>=) the provided value. */
    min(value: T): AssertionChain<T>;
    /** Asserts that the reference value is less than (<) the provided value. */
    below(value: T): AssertionChain<T>;
    /** Asserts that the reference value is less than (<) the provided value. */
    lessThan(value: T): AssertionChain<T>;
    /** Asserts that the reference value is at most (<=) the provided value. */
    most(value: T): AssertionChain<T>;
    /** Asserts that the reference value is at most (<=) the provided value. */
    max(value: T): AssertionChain<T>;
    /** Asserts that the reference value is within (from <= value <= to) the provided values. */
    within(from: T, to: T): AssertionChain<T>;
    /** Asserts that the reference value is within (from <= value <= to) the provided values. */
    range(from: T, to: T): AssertionChain<T>;
    /** Asserts that the reference value is between but not equal (from < value < to) the provided values. */
    between(from: T, to: T): AssertionChain<T>;
    /** Asserts that the reference value is about the provided value within a delta margin of difference. */
    about(value: number, delta: number): AssertionChain<T>;
    /** Asserts that the reference value has the provided instanceof value. */
    instanceof(type: any): AssertionChain<T>;
    /** Asserts that the reference value has the provided instanceof value. */
    instanceOf(type: any): AssertionChain<T>;
    /** Asserts that the reference value's toString() representation matches the provided regular expression. */
    match(regex: RegExp): AssertionChain<T>;
    /** Asserts that the reference value's toString() representation matches the provided regular expression. */
    matches(regex: RegExp): AssertionChain<T>;
    /** Asserts that the Promise reference value rejects with an exception when called */
    reject(type?: any, message?: string | RegExp): AssertionChain<T>;
    /** Asserts that the Promise reference value rejects with an exception when called */
    rejects(type?: any, message?: string | RegExp): AssertionChain<T>;
    /** Asserts that the reference value satisfies the provided validator function. */
    satisfy(validator: (value: T) => boolean): AssertionChain<T>;
    /** Asserts that the reference value satisfies the provided validator function. */
    satisfies(validator: (value: T) => boolean): AssertionChain<T>;
    /** Asserts that the function reference value throws an exception when called. */
    throw(type?: any, message?: string | RegExp): AssertionChain<T>;
    /** Asserts that the function reference value throws an exception when called. */
    throws(type?: any, message?: string | RegExp): AssertionChain<T>;
}

export interface Settings {
    /**
     * Truncate long assertion error messages for readability?
     * Defaults to true.
     */
    truncateMessages?: boolean;
    /**
     * Ignore object prototypes when doing a deep comparison?
     * Defaults to false.
     */
    comparePrototypes?: boolean;
}

export interface CodeError {
    filename: string;
    line: string;
    column: string;
}
