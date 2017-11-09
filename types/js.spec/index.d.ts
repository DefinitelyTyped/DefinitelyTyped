// Type definitions for js.spec 1.0
// Project: http://js-spec.online
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
     * @param value the value to examine
     * @returns list of problems or null if none
     */
    explain(value: any): Problem[];
}

/**
 * A Spec with a boolean conform function. Test the value and return true if it conforms.
 */
export interface Predicate extends Spec {
    (value: any): boolean;
}

/**
 * An explanation of why a part of a value does not conform to a spec.
 */
export interface Problem {
    /**
     * The path to the value.
     */
    readonly path: string[];

    /**
     * Pth to he Spec that applies.
     */
    readonly via: string[];

    /**
     * The value associated with the problem.
     */
    readonly value: any;

    /**
     * A predicate function to test new values for conformance.
     */
    readonly predicate: Predicate;
}

/**
 * Given a Spec, tests the value for confomrance. If it passes, then returns true.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns true if valid
 */
export function valid(spec: Spec, value: any): boolean;

/**
 * Returns the conformed value to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns if the value does not conform to the spec, or the conformed value if it does.
 */
export function conform(spec: Spec, value: any): any;

/**
 * Like explain(), but returns Problems array.
 * @param spec the spec to test with
 * @param value the value to test
 * @returns list of problems or null if none
 */
export function explainData(spec: Spec, value: any): Problem[];

/**
 * Prints, to the console, reasons why the value did not conform to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function explain(spec: Spec, value: any): void;

/**
 * Returns a multiline string with reasons why the value did not conform to this spec.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function explainStr(spec: Spec, value: any): string;

/**
 * Tests if a value conforms to a spec, and if not, throws an Error.
 * @param spec the spec to test with
 * @param value the value to test
 */
export function assert(spec: Spec, value: any): void;

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

export namespace spec {
    /**
     * Predicate function definition to describe non-spec predicate functions.
     */
    type PredFn = (value: any) => boolean;

    /**
     * Defins an input to a spec. Can be a Spec instance or a predicate function.
     */
    type SpecInput = PredFn | Spec;

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

    // Predicates
    /**
     * Returns true if data is an integer.
     */
    const int: Predicate;

    /**
     * Returns true if data is an integer.
     */
    const integer: Predicate;

    /**
     * Returns true if data is a finite number.
     */
    const finite: Predicate;

    /**
     * Returns true if data is a number (can be double or integer).
     */
    const number: Predicate;

    /**
     * Returns true if data is an odd number.
     */
    const odd: Predicate;

    /**
     * Returns true if data is an even number.
     */
    const even: Predicate;

    /**
     * Returns true if data is a number greater than zero.
     */
    const positive: Predicate;

    /**
     * Returns true if data is a number smaller than zero.
     */
    const negative: Predicate;

    /**
     * Returns true if data is the number zero.
     * Why: To easily construct specs for >= 0.
     */
    const zero: Predicate;

    /**
     * Returns true if data is a string.
     */
    const str: Predicate;

    /**
     * Returns true if data is a string.
     */
    const string: Predicate;

    /**
     * Returns true if data is a function.
     */
    const fn: Predicate;

    /**
     * Returns true if data is a Symbol.
     */
    const sym: Predicate;

    /**
     * Returns true if data is a Symbol.
     */
    const symbol: Predicate;

    /**
     * Returns true if data is null or undefined.
     */
    const nil: Predicate;

    /**
     * Returns true if data is a boolean.
     */
    const bool: Predicate;

    /**
     * Returns true if data is a boolean.
     */
    const boolean: Predicate;

    /**
     * Returns true if data is a Date.
     */
    const date: Predicate;

    /**
     * Returns true if data is a plain object.
     */
    const obj: Predicate;

    /**
     * Returns true if data is a plain object.
     */
    const object: Predicate;

    /**
     * Returns true if data is an Array.
     */
    const array: Predicate;

    /**
     * Returns true if data is a Set.
     */
    const set: Predicate;

    /**
     * Returns true if data is an Array or Set.
     */
    const coll: Predicate;
}
