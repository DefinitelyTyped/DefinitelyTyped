// Type definitions for joi v10.4.0
// Project: https://github.com/hapijs/joi
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Laurence Dougal Myers <https://github.com/laurence-myers>, Christopher Glantschnig <https://github.com/cglantschnig>, David Broder-Rodgers <https://github.com/DavidBR-SW>, Gael Magnan de Bornier <https://github.com/GaelMagnan>, Rytis Alekna <https://github.com/ralekna>, Pavel Ivanov <https://github.com/schfkt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO express type of Schema in a type-parameter (.default, .valid, .example etc)



export interface ValidationOptions {
    /**
     * when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
     */
    abortEarly?: boolean;
    /**
     * when true, attempts to cast values to the required types (e.g. a string to a number). Defaults to true.
     */
    convert?: boolean;
    /**
     * when true, allows object to contain unknown keys which are ignored. Defaults to false.
     */
    allowUnknown?: boolean;
    /**
     * when true, ignores unknown keys with a function value. Defaults to false.
     */
    skipFunctions?: boolean;
    /**
     * remove unknown elements from objects and arrays. Defaults to false
     * - when true, all unknown elements will be removed
     * - when an object:
     *      - arrays - set to true to remove unknown items from arrays.
     *      - objects - set to true to remove unknown keys from objects
     */
    stripUnknown?: boolean | {arrays: boolean} | {objects: boolean} | {arrays: boolean; objects: boolean};
    /**
     * overrides individual error messages. Defaults to no override ({}).
     */
    language?: Object;
    /**
     * sets the default presence requirements. Supported modes: 'optional', 'required', and 'forbidden'. Defaults to 'optional'.
     */
    presence?: string;
    /**
     * provides an external data set to be used in references
     */
    context?: Object;
    /**
     * when true, do not apply default values. Defaults to false.
     */
    noDefaults?: boolean;
}

export interface RenameOptions {
    /**
     * if true, does not delete the old key name, keeping both the new and old keys in place. Defaults to false.
     */
    alias?: boolean;
    /**
     * if true, allows renaming multiple keys to the same destination where the last rename wins. Defaults to false.
     */
    multiple?: boolean;
    /**
     * if true, allows renaming a key over an existing key. Defaults to false.
     */
    override?: boolean;
    /**
     * if true, skip renaming of a key if it's undefined. Defaults to false.
     */
    ignoreUndefined?: boolean;
}

export interface EmailOptions {
    /**
     * Numerical threshold at which an email address is considered invalid
     */
    errorLevel?: number | boolean;
    /**
     * Specifies a list of acceptable TLDs.
     */
    tldWhitelist?: string[] | Object;
    /**
     * Number of atoms required for the domain. Be careful since some domains, such as io, directly allow email.
     */
    minDomainAtoms?: number;
}

export interface IpOptions {
    /**
     * One or more IP address versions to validate against. Valid values: ipv4, ipv6, ipvfuture
     */
    version?: string | string[];
    /**
     * Used to determine if a CIDR is allowed or not. Valid values: optional, required, forbidden
     */
    cidr?: string;
}

export type GuidVersions = 'uuidv1' | 'uuidv2' | 'uuidv3' | 'uuidv4' | 'uuidv5'

export interface GuidOptions {
    version: GuidVersions[] | GuidVersions
}

export interface UriOptions {
    /**
     * Specifies one or more acceptable Schemes, should only include the scheme name.
     * Can be an Array or String (strings are automatically escaped for use in a Regular Expression).
     */
    scheme?: string | RegExp | Array<string | RegExp>;
}

export interface WhenOptions<T> {
    /**
     * the required condition joi type.
     */
    is: T;
    /**
     * the alternative schema type if the condition is true. Required if otherwise is missing.
     */
    then?: Schema;
    /**
     * the alternative schema type if the condition is false. Required if then is missing
     */
    otherwise?: Schema;
}

export interface ReferenceOptions {
    separator?: string;
    contextPrefix?: string;
}

export interface IPOptions {
    version?: Array<string>;
    cidr?: string
}

export interface ValidationError extends Error {
    isJoi: boolean;
    details: ValidationErrorItem[];
    annotate(): string;
    _object: any;
}

export interface ValidationErrorItem {
    message: string;
    type: string;
    path: string;
    options?: ValidationOptions;
    context?: {
        [key: string]: any;
        value?: any;
    };
}

export interface ValidationErrorFunction {
    (errors: ValidationErrorItem[]): string | ValidationErrorItem | ValidationErrorItem[] | Error;
}

export interface ValidationResult<T> {
    error: ValidationError;
    value: T;
}

export interface SchemaMap {
    [key: string]: Schema | SchemaMap | (Schema | SchemaMap)[];
}

export interface Schema extends AnySchema<Schema> {

}

export interface Reference extends Schema {

}

export interface AnySchema<T extends AnySchema<Schema>> {
    /**
     * Validates a value using the schema and options.
     */
    validate<T>(value: T): ValidationResult<T>;
    validate<T>(value: T, options: ValidationOptions): ValidationResult<T>;
    validate<T, R>(value: T, callback: (err: ValidationError, value: T) => R): R;
    validate<T, R>(value: T, options: ValidationOptions, callback: (err: ValidationError, value: T) => R): R;

    /**
     * Whitelists a value
     */
    allow(value: any, ...values: any[]): T;
    allow(values: any[]): T;

    /**
     * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
     */
    valid(value: any, ...values: any[]): T;
    valid(values: any[]): T;
    only(value: any, ...values: any[]): T;
    only(values: any[]): T;
    equal(value: any, ...values: any[]): T;
    equal(values: any[]): T;

    /**
     * Blacklists a value
     */
    invalid(value: any, ...values: any[]): T;
    invalid(values: any[]): T;
    disallow(value: any, ...values: any[]): T;
    disallow(values: any[]): T;
    not(value: any, ...values: any[]): T;
    not(values: any[]): T;

    /**
     * Marks a key as required which will not allow undefined as value. All keys are optional by default.
     */
    required(): T;

    /**
     * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
     */
    optional(): T;

    /**
     * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
     */
    forbidden(): T;

    /**
     * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
     */
    strip(): T;

    /**
     * Annotates the key
     */
    description(desc: string): T;

    /**
     * Annotates the key
     */
    notes(notes: string): T;
    notes(notes: string[]): T;

    /**
     * Annotates the key
     */
    tags(notes: string): T;
    tags(notes: string[]): T;

    /**
     * Attaches metadata to the key.
     */
    meta(meta: Object): T;

    /**
     * Annotates the key with an example value, must be valid.
     */
    example(value: any): T;

    /**
     * Annotates the key with an unit name.
     */
    unit(name: string): T;

    /**
     * Overrides the global validate() options for the current key and any sub-key.
     */
    options(options: ValidationOptions): T;

    /**
     * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
     */
    strict(isStrict?: boolean): T;

    /**
     * Sets a default value if the original value is undefined.
     * @param value - the value.
     *   value supports references.
     *   value may also be a function which returns the default value.
     *   If value is specified as a function that accepts a single parameter, that parameter will be a context
     *    object that can be used to derive the resulting value. This clones the object however, which incurs some
     *    overhead so if you don't need access to the context define your method so that it does not accept any
     *    parameters.
     *   Without any value, default has no effect, except for object that will then create nested defaults
     *    (applying inner defaults of that object).
     *
     * Note that if value is an object, any changes to the object after default() is called will change the
     *  reference and any future assignment.
     *
     * Additionally, when specifying a method you must either have a description property on your method or the
     *  second parameter is required.
     */
    default(value: any, description?: string): T;
    default(): T;

    /**
     * Returns a new type that is the result of adding the rules of one type to another.
     */
    concat(schema: T): T;

    /**
     * Converts the type into an alternatives type where the conditions are merged into the type definition where:
     */
    when<U>(ref: string, options: WhenOptions<U>): AlternativesSchema;
    when<U>(ref: Reference, options: WhenOptions<U>): AlternativesSchema;

    /**
     * Overrides the key name in error messages.
     */
    label(name: string): T;

    /**
     * Outputs the original untouched value instead of the casted value.
     */
    raw(isRaw?: boolean): T;

    /**
     * Considers anything that matches the schema to be empty (undefined).
     * @param schema - any object or joi schema to match. An undefined schema unsets that rule.
     */
    empty(schema?: any): T;

    /**
     * Overrides the default joi error with a custom error if the rule fails where:
     * @param err - can be:
     *   an instance of `Error` - the override error.
     *   a `function(errors)`, taking an array of errors as argument, where it must either:
     *    return a `string` - substitutes the error message with this text
     *    return a single `object` or an `Array` of it, where:
     *     `type` - optional parameter providing the type of the error (eg. `number.min`).
     *     `message` - optional parameter if `template` is provided, containing the text of the error.
     *     `template` - optional parameter if `message` is provided, containing a template string, using the same format as usual joi language errors.
     *     `context` - optional parameter, to provide context to your error if you are using the `template`.
     *    return an `Error` - same as when you directly provide an `Error`, but you can customize the error message based on the errors.
     *
     * Note that if you provide an `Error`, it will be returned as-is, unmodified and undecorated with any of the
     * normal joi error properties. If validation fails and another error is found before the error
     * override, that error will be returned and the override will be ignored (unless the `abortEarly`
     * option has been set to `false`).
     */
    error?(err: Error | ValidationErrorFunction): T;
}

export interface BooleanSchema extends AnySchema<BooleanSchema> {

    /**
     * Allows for additional values to be considered valid booleans by converting them to true during validation.
     * Accepts a value or an array of values. String comparisons are by default case insensitive,
     * see boolean.insensitive() to change this behavior.
     * @param values - strings, numbers or arrays of them
     */
    truthy(... values: Array<string | number | string[] | number[]>): BooleanSchema;

    /**
     * Allows for additional values to be considered valid booleans by converting them to false during validation.
     * Accepts a value or an array of values. String comparisons are by default case insensitive,
     * see boolean.insensitive() to change this behavior.
     * @param values - strings, numbers or arrays of them
     */
    falsy(... values: Array<string | number | string[] | number[]>): BooleanSchema;

    /**
     * Allows the values provided to truthy and falsy as well as the "true" and "false" default conversion
     * (when not in strict() mode) to be matched in a case insensitive manner.
     * @param enabled
     */
    insensitive(enabled: boolean): BooleanSchema;
}

export interface NumberSchema extends AnySchema<NumberSchema> {
    /**
     * Specifies the minimum value.
     * It can also be a reference to another field.
     */
    min(limit: number): NumberSchema;
    min(limit: Reference): NumberSchema;

    /**
     * Specifies the maximum value.
     * It can also be a reference to another field.
     */
    max(limit: number): NumberSchema;
    max(limit: Reference): NumberSchema;

    /**
     * Specifies that the value must be greater than limit.
     * It can also be a reference to another field.
     */
    greater(limit: number): NumberSchema;
    greater(limit: Reference): NumberSchema;

    /**
     * Specifies that the value must be less than limit.
     * It can also be a reference to another field.
     */
    less(limit: number): NumberSchema;
    less(limit: Reference): NumberSchema;

    /**
     * Requires the number to be an integer (no floating point).
     */
    integer(): NumberSchema;

    /**
     * Specifies the maximum number of decimal places where:
     *  limit - the maximum number of decimal places allowed.
     */
    precision(limit: number): NumberSchema;

    /**
     * Specifies that the value must be a multiple of base.
     */
    multiple(base: number): NumberSchema;

    /**
     * Requires the number to be positive.
     */
    positive(): NumberSchema;

    /**
     * Requires the number to be negative.
     */
    negative(): NumberSchema;
}

export interface StringSchema extends AnySchema<StringSchema> {
    /**
     * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
     */
    insensitive(): StringSchema;

    /**
     * Specifies the minimum number string characters.
     * @param limit - the minimum number of string characters required. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    min(limit: number, encoding?: string): StringSchema;
    min(limit: Reference, encoding?: string): StringSchema;

    /**
     * Specifies the maximum number of string characters.
     * @param limit - the maximum number of string characters allowed. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    max(limit: number, encoding?: string): StringSchema;
    max(limit: Reference, encoding?: string): StringSchema;

    /**
     * Requires the number to be a credit card number (Using Lunh Algorithm).
     */
    creditCard(): StringSchema;

    /**
     * Specifies the exact string length required
     * @param limit - the required string length. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    length(limit: number, encoding?: string): StringSchema;
    length(limit: Reference, encoding?: string): StringSchema;

    /**
     * Defines a regular expression rule.
     * @param pattern - a regular expression object the string value must match against.
     * @param name - optional name for patterns (useful with multiple patterns). Defaults to 'required'.
     */
    regex(pattern: RegExp, name?: string): StringSchema;

    /**
     * Replace characters matching the given pattern with the specified replacement string where:
     * @param pattern - a regular expression object to match against, or a string of which all occurrences will be replaced.
     * @param replacement - the string that will replace the pattern.
     */
    replace(pattern: RegExp, replacement: string): StringSchema;
    replace(pattern: string, replacement: string): StringSchema;

    /**
     * Requires the string value to only contain a-z, A-Z, and 0-9.
     */
    alphanum(): StringSchema;

    /**
     * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
     */
    token(): StringSchema;

    /**
     * Requires the string value to be a valid email address.
     */
    email(options?: EmailOptions): StringSchema;

    /**
     * Requires the string value to be a valid ip address.
     */
    ip(options?: IpOptions): StringSchema;

    /**
     * Requires the string value to be a valid RFC 3986 URI.
     */
    uri(options?: UriOptions): StringSchema;

    /**
     * Requires the string value to be a valid GUID.
     */
    guid(options?: GuidOptions): StringSchema;

    /**
     * Requires the string value to be a valid hexadecimal string.
     */
    hex(): StringSchema;

    /**
     * Requires the string value to be a valid hostname as per RFC1123.
     */
    hostname(): StringSchema;

    /**
     * Requires the string value to be in valid ISO 8601 date format.
     */
    isoDate(): StringSchema;

    /**
     * Requires the string value to be all lowercase. If the validation convert option is on (enabled by default), the string will be forced to lowercase.
     */
    lowercase(): StringSchema;

    /**
     * Requires the string value to be all uppercase. If the validation convert option is on (enabled by default), the string will be forced to uppercase.
     */
    uppercase(): StringSchema;

    /**
     * Requires the string value to contain no whitespace before or after. If the validation convert option is on (enabled by default), the string will be trimmed.
     */
    trim(): StringSchema;
}

export interface ArraySchema extends AnySchema<ArraySchema> {
    /**
     * Allow this array to be sparse.
     * enabled can be used with a falsy value to go back to the default behavior.
     */
    sparse(enabled?: any): ArraySchema;

    /**
     * Allow single values to be checked against rules as if it were provided as an array.
     * enabled can be used with a falsy value to go back to the default behavior.
     */
    single(enabled?: any): ArraySchema;

    /**
     * List the types allowed for the array values.
     * type can be an array of values, or multiple values can be passed as individual arguments.
     * If a given type is .required() then there must be a matching item in the array.
     * If a type is .forbidden() then it cannot appear in the array.
     * Required items can be added multiple times to signify that multiple items must be found.
     * Errors will contain the number of items that didn't match.
     * Any unmatched item having a label will be mentioned explicitly.
     *
     * @param type - a joi schema object to validate each array item against.
     */
    items(...types: Schema[]): ArraySchema;
    items(...types: SchemaMap[]): ArraySchema;
    items(types: Schema[]): ArraySchema;
    items(types: SchemaMap[]): ArraySchema;

    /**
     * Lists the types in sequence order for the array values where:
     * @param type - a joi schema object to validate against each array item in sequence order. type can be an array of values, or multiple values can be passed as individual arguments.
     * If a given type is .required() then there must be a matching item with the same index position in the array. Errors will contain the number of items that didn't match. Any unmatched item having a label will be mentioned explicitly.
     */
    ordered(...types: Schema[]): ArraySchema;
    ordered(...types: SchemaMap[]): ArraySchema;
    ordered(types: Schema[]): ArraySchema;
    ordered(types: SchemaMap[]): ArraySchema;

    /**
     * Specifies the minimum number of items in the array.
     */
    min(limit: number): ArraySchema;

    /**
     * Specifies the maximum number of items in the array.
     */
    max(limit: number): ArraySchema;

    /**
     * Specifies the exact number of items in the array.
     */
    length(limit: number): ArraySchema;

    /**
     * Requires the array values to be unique.
     * Be aware that a deep equality is performed on elements of the array having a type of object,
     * a performance penalty is to be expected for this kind of operation.
     */
    unique(comparator?: (a: any, b: any) => boolean): ArraySchema;
    unique(comparator?: string): ArraySchema;
}

export interface ObjectSchema extends AnySchema<ObjectSchema> {
    /**
     * Sets the allowed object keys.
     */
    keys(schema?: SchemaMap): ObjectSchema;

    /**
     * Specifies the minimum number of keys in the object.
     */
    min(limit: number): ObjectSchema;

    /**
     * Specifies the maximum number of keys in the object.
     */
    max(limit: number): ObjectSchema;

    /**
     * Specifies the exact number of keys in the object.
     */
    length(limit: number): ObjectSchema;

    /**
     * Specify validation rules for unknown keys matching a pattern.
     */
    pattern(regex: RegExp, schema: Schema): ObjectSchema;

    /**
     * Defines an all-or-nothing relationship between keys where if one of the peers is present, all of them are required as well.
     * @param peers - the key names of which if one present, all are required. peers can be a single string value,
     * an array of string values, or each peer provided as an argument.
     */
    and(peer1: string, ...peers: string[]): ObjectSchema;
    and(peers: string[]): ObjectSchema;

    /**
     * Defines a relationship between keys where not all peers can be present at the same time.
     * @param peers - the key names of which if one present, the others may not all be present.
     * peers can be a single string value, an array of string values, or each peer provided as an argument.
     */
    nand(peer1: string, ...peers: string[]): ObjectSchema;
    nand(peers: string[]): ObjectSchema;

    /**
     * Defines a relationship between keys where one of the peers is required (and more than one is allowed).
     */
    or(peer1: string, ...peers: string[]): ObjectSchema;
    or(peers: string[]): ObjectSchema;

    /**
     * Defines an exclusive relationship between a set of keys. one of them is required but not at the same time where:
     */
    xor(peer1: string, ...peers: string[]): ObjectSchema;
    xor(peers: string[]): ObjectSchema;

    /**
     * Requires the presence of other keys whenever the specified key is present.
     */
    with(key: string, peers: string): ObjectSchema;
    with(key: string, peers: string[]): ObjectSchema;

    /**
     * Forbids the presence of other keys whenever the specified is present.
     */
    without(key: string, peers: string): ObjectSchema;
    without(key: string, peers: string[]): ObjectSchema;

    /**
     * Renames a key to another name (deletes the renamed key).
     */
    rename(from: string, to: string, options?: RenameOptions): ObjectSchema;

    /**
     * Verifies an assertion where.
     */
    assert(ref: string, schema: Schema, message?: string): ObjectSchema;
    assert(ref: Reference, schema: Schema, message?: string): ObjectSchema;

    /**
     * Overrides the handling of unknown keys for the scope of the current object only (does not apply to children).
     */
    unknown(allow?: boolean): ObjectSchema;

    /**
     * Requires the object to be an instance of a given constructor.
     *
     * @param constructor - the constructor function that the object must be an instance of.
     * @param name - an alternate name to use in validation errors. This is useful when the constructor function does not have a name.
     */
    type(constructor: Function, name?: string): ObjectSchema;

    /**
     * Sets the specified children to required.
     *
     * @param children - can be a single string value, an array of string values, or each child provided as an argument.
     *
     *   var schema = Joi.object().keys({ a: { b: Joi.number() }, c: { d: Joi.string() } });
     *   var requiredSchema = schema.requiredKeys('', 'a.b', 'c', 'c.d');
     *
     * Note that in this example '' means the current object, a is not required but b is, as well as c and d.
     */
    requiredKeys(children: string): ObjectSchema;
    requiredKeys(children: string[]): ObjectSchema;
    requiredKeys(child: string, ...children: string[]): ObjectSchema;

    /**
     * Sets the specified children to optional.
     *
     * @param children - can be a single string value, an array of string values, or each child provided as an argument.
     *
     * The behavior is exactly the same as requiredKeys.
     */
    optionalKeys(children: string): ObjectSchema;
    optionalKeys(children: string[]): ObjectSchema;
    optionalKeys(child: string, ...children: string[]): ObjectSchema;
}

export interface BinarySchema extends AnySchema<BinarySchema> {
    /**
     * Sets the string encoding format if a string input is converted to a buffer.
     */
    encoding(encoding: string): BinarySchema;

    /**
     * Specifies the minimum length of the buffer.
     */
    min(limit: number): BinarySchema;

    /**
     * Specifies the maximum length of the buffer.
     */
    max(limit: number): BinarySchema;

    /**
     * Specifies the exact length of the buffer:
     */
    length(limit: number): BinarySchema;
}

export interface DateSchema extends AnySchema<DateSchema> {

    /**
     * Specifies the oldest date allowed.
     * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
     * allowing to explicitly ensure a date is either in the past or in the future.
     * It can also be a reference to another field.
     */
    min(date: Date): DateSchema;
    min(date: number): DateSchema;
    min(date: string): DateSchema;
    min(date: Reference): DateSchema;

    /**
     * Specifies the latest date allowed.
     * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
     * allowing to explicitly ensure a date is either in the past or in the future.
     * It can also be a reference to another field.
     */
    max(date: Date): DateSchema;
    max(date: number): DateSchema;
    max(date: string): DateSchema;
    max(date: Reference): DateSchema;

    /**
     * Specifies the allowed date format:
     * @param format - string or array of strings that follow the moment.js format.
     */
    format(format: string): DateSchema;
    format(format: string[]): DateSchema;

    /**
     * Requires the string value to be in valid ISO 8601 date format.
     */
    iso(): DateSchema;


    /**
     * Requires the value to be a timestamp interval from Unix Time.
     * @param type - the type of timestamp (allowed values are unix or javascript [default])
     */
    timestamp(type?: 'javascript' | 'unix'): DateSchema;
}

export interface FunctionSchema extends AnySchema<FunctionSchema> {

    /**
     * Specifies the arity of the function where:
     * @param n - the arity expected.
     */
    arity(n: number): FunctionSchema;


    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    minArity(n: number): FunctionSchema;


    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    maxArity(n: number): FunctionSchema;

    /**
     * Requires the function to be a Joi reference.
     */
    ref(): FunctionSchema;
}

export interface AlternativesSchema extends AnySchema<FunctionSchema> {
    try(schemas: Schema[]): AlternativesSchema;
    try(type1: Schema, type2: Schema, ...types: Schema[]): AlternativesSchema;
    when<T>(ref: string, options: WhenOptions<T>): AlternativesSchema;
    when<T>(ref: Reference, options: WhenOptions<T>): AlternativesSchema;
}

export interface Terms {
    value: any;
    state: {
        key: string,
        path: string,
        parent: any
    };
    options: ValidationOptions;
}

export interface Rules {
    name: string;
    params?: ObjectSchema | { [key: string]: Schema };
    setup?: Function;
    validate?: Function;
    description?: string | Function;
}

export interface Extension {
    name: string;
    base?: Schema;
    pre?: Function;
    language?: {};
    describe?: Function;
    rules?: Rules[];
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

/**
 * Generates a schema object that matches any data type.
 */
export declare function any(): Schema;

/**
 * Generates a schema object that matches an array data type.
 */
export declare function array(): ArraySchema;

/**
 * Generates a schema object that matches a boolean data type (as well as the strings 'true', 'false', 'yes', and 'no'). Can also be called via bool().
 */
export declare function bool(): BooleanSchema;

export declare function boolean(): BooleanSchema;

/**
 * Generates a schema object that matches a Buffer data type (as well as the strings which will be converted to Buffers).
 */
export declare function binary(): BinarySchema;

/**
 * Generates a schema object that matches a date type (as well as a JavaScript date string or number of milliseconds).
 */
export declare function date(): DateSchema;

/**
 * Generates a schema object that matches a function type.
 */
export declare function func(): FunctionSchema;

/**
 * Generates a schema object that matches a number data type (as well as strings that can be converted to numbers).
 */
export declare function number(): NumberSchema;

/**
 * Generates a schema object that matches an object data type (as well as JSON strings that parsed into objects).
 */
export declare function object(schema?: SchemaMap): ObjectSchema;

/**
 * Generates a schema object that matches a string data type. Note that empty strings are not allowed by default and must be enabled with allow('').
 */
export declare function string(): StringSchema;

/**
 * Generates a type that will match one of the provided alternative schemas
 */
export function alternatives(): AlternativesSchema;
export function alternatives(types: Schema[]): AlternativesSchema;
export function alternatives(type1: Schema, type2: Schema, ...types: Schema[]): AlternativesSchema;

/**
 * Generates a placeholder schema for a schema that you would provide with the fn.
 * Supports the same methods of the any() type.
 * This is mostly useful for recursive schemas
 */
export declare function lazy(cb: () => Schema): Schema;

/**
 * Validates a value using the given schema and options.
 */
export function validate<T>(value: T): ValidationResult<T>;
export function validate<T, R>(value: T, callback: (err: ValidationError, value: T) => R): R;

export function validate<T>(value: T, schema: Schema): ValidationResult<T>;
export function validate<T>(value: T, schema: Object): ValidationResult<T>;
export function validate<T, R>(value: T, schema: Schema, callback: (err: ValidationError, value: T) => R): R;
export function validate<T, R>(value: T, schema: Object, callback: (err: ValidationError, value: T) => R): R;

export function validate<T>(value: T, schema: Schema, options: ValidationOptions): ValidationResult<T>;
export function validate<T>(value: T, schema: Object, options: ValidationOptions): ValidationResult<T>;
export function validate<T, R>(value: T, schema: Schema, options: ValidationOptions, callback: (err: ValidationError, value: T) => R): R;
export function validate<T, R>(value: T, schema: Object, options: ValidationOptions, callback: (err: ValidationError, value: T) => R): R;
/**
 * Converts literal schema definition to joi schema object (or returns the same back if already a joi schema object).
 */
export function compile(schema: Object): Schema;

/**
 * Validates a value against a schema and throws if validation fails.
 *
 * @param value - the value to validate.
 * @param schema - the schema object.
 * @param message - optional message string prefix added in front of the error message. may also be an Error object.
 */
export function assert(value: any, schema: Schema, message?: string | Error): void;


/**
 * Validates a value against a schema, returns valid object, and throws if validation fails where:
 *
 * @param value - the value to validate.
 * @param schema - the schema object.
 * @param message - optional message string prefix added in front of the error message. may also be an Error object.
 */
export function attempt<T>(value: T, schema: Schema, message?: string | Error): T;


/**
 * Generates a reference to the value of the named key.
 */
export function ref(key: string, options?: ReferenceOptions): Reference;


/**
 * Checks whether or not the provided argument is a reference. It's especially useful if you want to post-process error messages.
 */
export function isRef(ref: any): boolean;


/**
 * Get a sub-schema of an existing schema based on a path. Path separator is a dot (.).
 */
export function reach(schema: Schema, path: string): Schema;


/**
 * Creates a new Joi instance customized with the extension(s) you provide included.
 */
export function extend(extention: Extension): any;

/**
 * Whitelists a value
 */
export function allow(value: any, ...values: any[]): Schema;
export function allow(values: any[]): Schema;

/**
 * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
 */
export function valid(value: any, ...values: any[]): Schema;
export function valid(values: any[]): Schema;
export function only(value: any, ...values : any[]): Schema;
export function only(values: any[]): Schema;
export function equal(value: any, ...values : any[]): Schema;
export function equal(values: any[]): Schema;

/**
 * Blacklists a value
 */
export function invalid(value: any, ...values: any[]): Schema;
export function invalid(values: any[]): Schema;
export function disallow(value: any, ...values : any[]): Schema;
export function disallow(values: any[]): Schema;
export function not(value: any, ...values : any[]): Schema;
export function not(values: any[]): Schema;

/**
 * Marks a key as required which will not allow undefined as value. All keys are optional by default.
 */
export function required(): Schema;

/**
 * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
 */
export function optional(): Schema;

/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 */
export function forbidden(): Schema;

/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 */
export function strip(): Schema;

/**
 * Annotates the key
 */
export function description(desc: string): Schema;

/**
 * Annotates the key
 */
export function notes(notes: string): Schema;
export function notes(notes: string[]): Schema;

/**
 * Annotates the key
 */
export function tags(notes: string): Schema;
export function tags(notes: string[]): Schema;

/**
 * Attaches metadata to the key.
 */
export function meta(meta: Object): Schema;

/**
 * Annotates the key with an example value, must be valid.
 */
export function example(value: any): Schema;

/**
 * Annotates the key with an unit name.
 */
export function unit(name: string): Schema;

/**
 * Overrides the global validate() options for the current key and any sub-key.
 */
export function options(options: ValidationOptions): Schema;

/**
 * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
 */
export function strict(isStrict?: boolean): Schema;

/**
 * Returns a new type that is the result of adding the rules of one type to another.
 */
export function concat<T>(schema: T): T;

/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition where:
 */
export function when<U>(ref: string, options: WhenOptions<U>): AlternativesSchema;
export function when<U>(ref: Reference, options: WhenOptions<U>): AlternativesSchema;

/**
 * Overrides the key name in error messages.
 */
export function label(name: string): Schema;

/**
 * Outputs the original untouched value instead of the casted value.
 */
export function raw(isRaw?: boolean): Schema;

/**
 * Considers anything that matches the schema to be empty (undefined).
 * @param schema - any object or joi schema to match. An undefined schema unsets that rule.
 */
export function empty(schema?: any) : Schema;
