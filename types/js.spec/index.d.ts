// Type definitions for js.spec 1.0
// Project: http://js-spec.online, https://github.com/prayerslayer/js.spec
// Definitions by: Matt Bishop <https://github.com/mattbishop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * A Spec provides a predicate that can test a value for conformance.
 */
export interface Spec {
    /**
     * The name of the spec, displayed in explain() results.
     */
    readonly name: string;

    /**
     * Data necessary to check values for conformity.
     */
    readonly options: object;

    /**
     * Returns the conformed value to this spec.
     * @param value the value to test for conformance
     * @returns if the value does not conform to the spec, or the value if it does.
     */
    conform(value: any): any;

    /**
     * Explain why a value does not conform to this spec.
     * @param path the path to the value
     * @param via the containing specs, if any
     * @param value the value to examine
     * @returns list of problems or null if none
     */
    explain(path: string[], via: string[], value: any): Problem[];

    /**
     * Describe the specification. Used in explain strings and Problems.
     * @returns the human-readable description of this spec
     */
    toString(): string;
}

/**
 * Predicate function definition to describe a predicate function.
 */
export type PredFn = (value: any) => boolean;

/**
 * Defines an input to a js.spec method. Can be a Spec instance or a predicate function.
 */
export type SpecInput = PredFn | Spec;

/**
 * An explanation of why a part of a value does not conform to a spec.
 */
export interface Problem {
    /**
     * The path to the value.
     */
    readonly path: string[];

    /**
     * Path to the Spec that applies.
     */
    readonly via: string[];

    /**
     * The value associated with the problem.
     */
    readonly value: any;

    /**
     * A predicate function to test new values for conformance.
     */
    readonly predicate: PredFn;
}

/**
 * Given a Spec, tests the value for confomrance. If it passes, then returns true.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns true if valid
 */
export function valid(spec: SpecInput, value: any): boolean;

/**
 * Returns the conformed value to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns if the value does not conform to the spec, or the conformed value if it does.
 */
export function conform(spec: SpecInput, value: any): any;

/**
 * Like explain(), but returns Problems array.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns list of problems or null if none
 */
export function explainData(spec: SpecInput, value: any): Problem[];

/**
 * Prints, to the console, reasons why the value did not conform to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function explain(spec: SpecInput, value: any): void;

/**
 * Returns a multiline string with reasons why the value did not conform to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function explainStr(spec: SpecInput, value: any): string;

/**
 * Returns a string with the problem statement from the given Problem.
 * @param problem the problem
 */
export function problemStr(problem: Problem): string;

/**
 * Tests if a value conforms to a spec, and if not, throws an Error.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function assert(spec: SpecInput, value: any): void;

/**
 * Symbols used
 */
export namespace symbol {
    /**
     * Returned by conform() to indicate a value does not conform to a spec.
     */
    const invalid: symbol;

    /**
     * Used as an option in collection() to specify the size of a collection.
     */
    const count: symbol;

    /**
     * Used as an option in collection() to specify the maximum size of a collection.
     */
    const maxCount: symbol;

    /**
     * Used as an option in collection() to specify the minimum size of a collection.
     */
    const minCount: symbol;

    /**
     * Used as an option in map() to specify a key spec that is optional.
     */
    const optional: symbol;
}

/**
 * Factory methods to create Spec instances. Also provides included predicate functions that can be used in Specs.
 */
export namespace spec {
    /**
     * Data must conform to every provided spec.
     * @param name the name of the spec
     * @param specs the array of specs that must all match
     * @returns the constructed Spec
     */
    function and(name: string, ...specs: SpecInput[]): Spec;

    /**
     * Data must conform to at least one provided spec. The order in which they are validated is not defined.
     * The conform() function returns matched branches along with input data.
     * @param name the name of the spec
     * @param alts map of alternative keys with their respective SpecInputs
     * @returns the constructed Spec
     */
    function or(name: string, alts: {[key: string]: SpecInput}): Spec;

    /**
     * By default no spec accepts null or undefined as valid input. Wrap your spec in nilable() to change this.
     * @param name the name of the spec
     * @param spec the spec to apply if a value is non-nil
     * @returns the constructed spec
     */
    function nilable(name: string, spec: SpecInput): Spec;

    // Cannot specify 'symbol' as a key type: https://github.com/Microsoft/TypeScript/issues/7660
    /**
     * Used to define collections with items of the same type. Works with Arrays and Sets.
     * Accepts an option map as optional second parameter.
     * NOTE: the keys in this option map are symbols but Typescript will not allow 'symbol' to be specified
     * as a key type but the TS compiler will allow it.
     * @param name the name of the spec
     * @param spec the spec to apply to values in the collection
     * @param options symbol.count or symbol.minCount / symbol.maxCount
     */
    function collection(name: string, spec: SpecInput, options?: {[option: string]: number}): Spec;

    /**
     * Used to define collections with items of possibly different types. Works only with arrays as order is important.
     * @param name the name of the spec
     * @param specs the specs to test the value array
     * @returns the constructed spec
     */
    function tuple(name: string, ...specs: SpecInput[]): Spec;

    /**
     * Used to define the shape of maps. By default all keys are required. Use {symbol.optional} key to define
     * optional keys. Shape map can contain nested key specs.
     * @param name the name of the spec
     * @param shape the shape map with keys and associated specs
     * @returns the constructed spec
     */
    function map(name: string, shape: object): Spec;

    /**
     * Used to define "one out of these values", like an enum. (It's called oneOf because enum is a reserved word.)
     * @param name the name of the spec
     * @param values the emum of values
     * @returns the constructed spec
     */
    function oneOf(name: string, ...values: any[]): Spec;

    /**
     * Used to define a predicate function as a Spec.
     * @param name the name of the spec
     * @param predicate the predicate function
     * @returns the constructed spec
     */
    function predicate(name: string, predicate: PredFn): Spec;

    // Predicates
    /**
     * Returns true if data is an integer.
     */
    const int: PredFn;

    /**
     * Returns true if data is an integer.
     */
    const integer: PredFn;

    /**
     * Returns true if data is a finite number.
     */
    const finite: PredFn;

    /**
     * Returns true if data is a number (can be double or integer).
     */
    const number: PredFn;

    /**
     * Returns true if data is an odd number.
     */
    const odd: PredFn;

    /**
     * Returns true if data is an even number.
     */
    const even: PredFn;

    /**
     * Returns true if data is a number greater than zero.
     */
    const positive: PredFn;

    /**
     * Returns true if data is a number smaller than zero.
     */
    const negative: PredFn;

    /**
     * Returns true if data is the number zero.
     * Why: To easily construct specs for >= 0.
     */
    const zero: PredFn;

    /**
     * Returns true if data is a string.
     */
    const str: PredFn;

    /**
     * Returns true if data is a string.
     */
    const string: PredFn;

    /**
     * Returns true if data is a function.
     */
    const fn: PredFn;

    /**
     * Returns true if data is a Symbol.
     */
    const sym: PredFn;

    /**
     * Returns true if data is a Symbol.
     */
    const symbol: PredFn;

    /**
     * Returns true if data is null or undefined.
     */
    const nil: PredFn;

    /**
     * Returns true if data is a boolean.
     */
    const bool: PredFn;

    /**
     * Returns true if data is a boolean.
     */
    const boolean: PredFn;

    /**
     * Returns true if data is a Date.
     */
    const date: PredFn;

    /**
     * Returns true if data is a plain object.
     */
    const obj: PredFn;

    /**
     * Returns true if data is a plain object.
     */
    const object: PredFn;

    /**
     * Returns true if data is an Array.
     */
    const array: PredFn;

    /**
     * Returns true if data is a Set.
     */
    const set: PredFn;

    /**
     * Returns true if data is an Array or Set.
     */
    const coll: PredFn;
}
