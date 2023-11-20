import { JSONSchema4, JSONSchema6, JSONSchema7, ValidationError } from "json-schema";
import { WError } from "verror";

/**
 * Creates a deep copy of a primitive type, object, or array of primitive types.
 *
 * Deep copy an acyclic *basic* Javascript object.  This only handles basic
 * scalars (strings, numbers, booleans) and arbitrarily deep arrays and objects
 * containing these.  This does *not* handle instances of other classes.
 */
export function deepCopy<T>(obj: T): T;

/**
 * Returns whether two objects are equal.
 */
export function deepEqual(obj1: Readonly<unknown>, obj2: Readonly<unknown>): boolean;

/**
 * Returns true if the given string ends with the given suffix and false otherwise.
 */
export function endsWith(str: string, suffix: string): boolean;

/**
 * Check an object for unexpected properties. Accepts the object to check,
 * and an array of allowed property name strings.
 *
 * If extra properties are detected,
 * an array of extra property names is returned.
 *
 * If no properties other than those
 * in the allowed list are present on the object, the returned array will be of zero length.
 */
export function extraProperties(obj: Readonly<{ [key: string]: unknown }>, allowed: ReadonlyArray<string>): string[];

/**
 * This is similar to ```flattenObject``` except that instead of returning an array, this function invokes
 * ```func(entry)``` for each ```entry``` in the array that ```flattenObject``` would return. ```flattenIter(obj, depth, func)``` is
 * logically equivalent to ```flattenObject(obj, depth).forEach(func)```.
 *
 * Importantly, this version never constructs the full array.
 * Its memory usage is O(depth) rather than O(n) (where n is the number of flattened elements).
 *
 * There's another difference between ```flattenObject``` and ```flattenIter``` that's related to the special case where ```depth === 0```.
 * In this case, ```flattenObject``` omits the array wrapping ```obj``` (which is regrettable).
 */
export function flattenIter(data: Readonly<object>, depth: number, callback: (value: unknown[]) => void): never | void;

/**
 * Flattens an object up to a given level of nesting, returning an array of arrays of length ```depth + 1```,
 * where the first ```depth``` elements correspond to flattened columns and the last element contains the remaining object.
 */
export function flattenObject(data: Readonly<{ [key: string]: unknown }>, depth: number): unknown[];

/**
 * Like ```Array.forEach```, but iterates enumerable, owned properties of an object rather than elements of an array.
 *
 * Equivalent to:
 *   ```
 *   for (var key in obj) {
 *       if (Object.prototype.hasOwnProperty.call(obj, key)) {
 *           callback(key, obj[key]);
 *       }
 *   }
 *   ```
 */
export function forEachKey(obj: Readonly<object>, callback: (key: string, value: unknown) => void): void;

/**
 * Returns ```true``` if the given object has an enumerable, non-inherited property called key
 */
export function hasKey(obj: Readonly<object>, key: string): boolean;

/**
 * Add two hrtime intervals (as from Node's ```process.hrtime()```), storing the result in ```timeA```.
 *
 * This function overwrites (and returns) the first argument passed in.
 */
export function hrtimeAccum(a: [number, number], b: Readonly<[number, number]>): [number, number] | never;

/**
 * Add two hrtime intervals (as from Node's ```process.hrtime()```), returning a new hrtime interval array.
 *
 * This function does not modify either input argument.
 */
export function hrtimeAdd(a: Readonly<[number, number]>, b: Readonly<[number, number]>): [number, number] | never;

/**
 * Given two hrtime readings (as from Node's ```process.hrtime()```), where ```timeA``` is later than ```timeB```,
 * compute the difference and return that as an hrtime.
 *
 * It is illegal to invoke this for a pair of times where ```timeB``` is newer than ```timeA```.
 */
export function hrtimeDiff(a: Readonly<[number, number]>, b: Readonly<[number, number]>): [number, number] | never;

/**
 * Given two hrtime readings (as from Node's ```process.hrtime()```), where ```timeA``` is later than ```timeB```,
 * compute the difference and return that as an hrtime.
 *
 * It is illegal to invoke this for a pair of times where ```timeB``` is newer than ```timeA```.
 */
export function hrtimediff(a: Readonly<[number, number]>, b: Readonly<[number, number]>): [number, number] | never;

/**
 * Convert a hrtime reading from the array format returned by Node's
 * ```process.hrtime()``` into a scalar number of microseconds.
 */
export function hrtimeMicrosec(a: Readonly<[number, number]>): number | never;

/**
 * Convert a hrtime reading from the array format returned by Node's
 * ```process.hrtime()``` into a scalar number of milliseconds.
 */
export function hrtimeMillisec(a: Readonly<[number, number]>): number | never;

/**
 * This suite of functions converts a hrtime interval (as from Node's ```process.hrtime()```) into a
 * scalar number of nanoseconds, microseconds or milliseconds.
 *
 * Results are truncated, as with ```Math.floor()```
 */
export function hrtimeNanosec(a: Readonly<[number, number]>): number | never;

/**
 * Returns true if the given object has no properties and false otherwise.
 */
export function isEmpty(obj: Readonly<string | object | undefined | null>): boolean;

/**
 * Converts a Date object to an ISO8601 date string of the form "YYYY-MM-DDTHH:MM:SS.sssZ".
 *
 * This format is not customizable.
 */
export function iso8601(d: Readonly<Date | number>): string;

/**
 * Merge properties from objects "provided", "overrides", and "defaults". The intended use case
 * is for functions that accept named arguments in an "args" object, but want to provide some
 * default values and override other values. In that case, "provided" is what the caller specified,
 * "overrides" are what the function wants to override, and "defaults" contains default values.
 *
 * The function starts with the values in "defaults", overrides them with the values in "provided",
 * and then overrides those with the values in "overrides". For convenience, any of these objects may
 * be falsey, in which case they will be ignored. The input objects are never modified, but properties
 * in the returned object are not deep-copied.
 *
 * @example
 * mergeObjects(undefined, { 'objectMode': true }, { 'highWaterMark': 0 })
 *
 * returns: { 'objectMode': true, 'highWaterMark': 0 }
 *
 * @example
 *  mergeObjects(
 *      { 'highWaterMark': 16, 'objectMode': 7 },  //from caller
 *      { 'objectMode': true },                    //overrides
 *      { 'highWaterMark': 0 }                     //default
 * );
 *
 *  returns: { 'objectMode': true, 'highWaterMark': 16 }
 */
export function mergeObjects(
    provided?: Readonly<object>,
    overrides?: Readonly<object>,
    defaults?: Readonly<object>,
): { [key: string]: unknown };

/**
 * Parses a date expressed as a string, as either a number of milliseconds since the epoch or any string format that
 * Date accepts, giving preference to the former where these two sets overlap (e.g., strings containing small numbers).
 */
export function parseDateTime(str: Readonly<string | number>): Date;

/**
 * Note that if ```base``` is unspecified, and ```allowPrefix``` or ```leadingZeroIsOctal``` are, then the leading characters can
 * change the default ```base``` from 10. If ```base``` is explicitly specified and ```allowPrefix``` is ```true```, then the prefix
 * will only be accepted if it matches the specified ```base```.
 *
 * ```base``` and ```leadingZeroIsOctal``` cannot be used together.
 */
export interface Uopts {
    /**
     * Numeric base (radix) to use, in the range 2 to 36
     *
     * Default value: ```10```
     */
    base?: number;

    /**
     * Whether to interpret any leading + (positive) and - (negative) characters
     *
     * Default value: ```true```
     */
    allowSign?: boolean;

    /**
     * Whether to accept values that may have lost precision (past ```MAX_SAFE_INTEGER``` or below ```MIN_SAFE_INTEGER```)
     *
     * Default value: ```false```
     */
    allowImprecise?: boolean;

    /**
     * Whether to interpret the prefixes ```0b``` (base 2), ```0o``` (base 8), ```0t``` (base 10), or ```0x``` (base 16)
     *
     * Default value: ```false```
     */
    allowPrefix?: boolean;

    /**
     * Whether to ignore trailing characters
     *
     * Default value: ```false```
     */
    allowTrailing?: boolean;

    /**
     * Whether to trim any leading or trailing whitespace/line terminators
     *
     * Default value: ```false```
     */
    trimWhitespace?: boolean;

    /**
     * Whether a leading zero indicates octal
     *
     * Default value: ```false```
     */
    leadingZeroIsOctal?: boolean;
}

/**
 * A stricter version of ```parseInt()``` that provides options for changing what is an acceptable string
 * (for example, disallowing trailing characters).
 *
 * On success, the integer value is returned (as a number).
 *
 * On failure, an error is returned describing why parsing failed.
 */
export function parseInteger(str: string, uopts?: Uopts): number | never;

/**
 * Fetch nested property ```key``` from object ```obj```, traversing objects as needed.
 * For example, ```pluck(obj, "foo.bar.baz")``` is roughly equivalent to ```obj.foo.bar.baz```, except that:
 *
 * 1. If traversal fails, the resulting value is undefined, and no error is thrown. For example, ```pluck({}, "foo.bar")``` is just ```undefined```
 *
 * 2. If ```obj``` has property ```key``` directly (without traversing), the corresponding property is returned. For example, ```pluck({ 'foo.bar': 1 }, 'foo.bar')``` is ```1```, not ```undefined```.
 * This is also true recursively, so ```pluck({ 'a': { 'foo.bar': 1 } }, 'a.foo.bar')``` is also ```1```, not ```undefined```
 */
export function pluck(obj: Readonly<{ [key: string]: unknown }>, key: string): unknown | undefined;

/**
 * Returns an element from ```arr``` selected uniformly at random.
 *
 * If ```arr``` is empty, throws an Error.
 */
export function randElt<T>(arr: ReadonlyArray<T>): T | never;

/**
 * Converts a Date object to an RFC1123 date string of the form "ddd, dd MMM yyyy HH:mm:ss GMT".
 *
 * This format is not customizable.
 */
export function rfc1123(date: Readonly<Date>): string;

/**
 * Returns ```true``` if the given string starts with the given prefix and false otherwise.
 */
export function startsWith(str: string, prefix: string): boolean;

export interface JsPrimError extends WError {
    jsv_details: ValidationError;
}

/**
 * Uses JSON validation (via JSV) to validate the given object against the given schema.
 *
 * On success, returns ```null```.
 *
 * On failure, returns (does not throw) a useful Error object.
 */
export function validateJsonObject(schema: JSONSchema4 | JSONSchema6 | JSONSchema7, input: object): JsPrimError | null;

/**
 * Uses JSON validation (via JSV) to validate the given object against the given schema.
 *
 * On success, returns ```null```.
 *
 * On failure, returns (does not throw) a useful Error object.
 */
export function validateJsonObjectJS(
    schema: JSONSchema4 | JSONSchema6 | JSONSchema7,
    input: object,
): JsPrimError | null;
