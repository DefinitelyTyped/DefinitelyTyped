// Type definitions for joi 10.6
// Project: https://github.com/hapijs/joi
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Laurence Dougal Myers <https://github.com/laurence-myers>
//                 Christopher Glantschnig <https://github.com/cglantschnig>
//                 David Broder-Rodgers <https://github.com/DavidBR-SW>
//                 Gael Magnan de Bornier <https://github.com/GaelMagnan>
//                 Rytis Alekna <https://github.com/ralekna>
//                 Pavel Ivanov <https://github.com/schfkt>
//                 Youngrok Kim <https://github.com/rokoroku>
//                 Conan Lai <https://github.com/aconanlai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// TODO express type of Schema in a type-parameter (.default, .valid, .example etc)

export type Types = 'any' | 'alternatives' | 'array' | 'boolean' | 'binary' | 'date' | 'function' | 'lazy' | 'number' | 'object' | 'string';

export type LanguageOptions = string | boolean | null | {
    [key: string]: LanguageOptions;
};

export type LanguageRootOptions = {
    root?: string;
    key?: string;
    messages?: { wrapArrays?: boolean; };
} & Partial<Record<Types, LanguageOptions>> & { [key: string]: LanguageOptions; };

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
    stripUnknown?: boolean | { arrays?: boolean; objects?: boolean };
    /**
     * overrides individual error messages. Defaults to no override ({}).
     */
    language?: LanguageRootOptions;
    /**
     * sets the default presence requirements. Supported modes: 'optional', 'required', and 'forbidden'. Defaults to 'optional'.
     */
    presence?: 'optional' | 'required' | 'forbidden';
    /**
     * provides an external data set to be used in references
     */
    context?: Context;
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

export type GuidVersions = 'uuidv1' | 'uuidv2' | 'uuidv3' | 'uuidv4' | 'uuidv5';

export interface GuidOptions {
    version: GuidVersions[] | GuidVersions;
}

export interface UriOptions {
    /**
     * Specifies one or more acceptable Schemes, should only include the scheme name.
     * Can be an Array or String (strings are automatically escaped for use in a Regular Expression).
     */
    scheme?: string | RegExp | Array<string | RegExp>;
}

export interface WhenOptions {
    /**
     * the required condition joi type.
     */
    is: SchemaLike;
    /**
     * the alternative schema type if the condition is true. Required if otherwise is missing.
     */
    then?: SchemaLike;
    /**
     * the alternative schema type if the condition is false. Required if then is missing
     */
    otherwise?: SchemaLike;
}

export interface WhenSchemaOptions {
    /**
     * the alternative schema type if the condition is true. Required if otherwise is missing.
     */
    then?: SchemaLike;
    /**
     * the alternative schema type if the condition is false. Required if then is missing
     */
    otherwise?: SchemaLike;
}

export interface ReferenceOptions {
    separator?: string;
    contextPrefix?: string;
}

export interface IPOptions {
    version?: string[];
    cidr?: string;
}

export interface JoiObject {
    isJoi: boolean;
}

export interface ValidationError extends Error, JoiObject {
    details: ValidationErrorItem[];
    annotate(): string;
    _object: any;
}

export interface ValidationErrorItem {
    message: string;
    type: string;
    path: string;
    options?: ValidationOptions;
    context?: Context;
}

export interface ValidationErrorFunction {
    (errors: ValidationErrorItem[]): string | ValidationErrorItem | ValidationErrorItem[] | Error;
}

export interface ValidationResult<T> {
    error: ValidationError;
    value: T;
}

export type SchemaLike = string | number | boolean | object | null | Schema | SchemaMap;

export interface SchemaMap {
    [key: string]: SchemaLike | SchemaLike[];
}

export type Schema = AnySchema
    | ArraySchema
    | AlternativesSchema
    | BinarySchema
    | BooleanSchema
    | DateSchema
    | FunctionSchema
    | NumberSchema
    | ObjectSchema
    | StringSchema
    | LazySchema;

export interface AnySchema extends JoiObject {
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
    allow(...values: any[]): this;
    allow(values: any[]): this;

    /**
     * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
     */
    valid(...values: any[]): this;
    valid(values: any[]): this;
    only(...values: any[]): this;
    only(values: any[]): this;
    equal(...values: any[]): this;
    equal(values: any[]): this;

    /**
     * Blacklists a value
     */
    invalid(...values: any[]): this;
    invalid(values: any[]): this;
    disallow(...values: any[]): this;
    disallow(values: any[]): this;
    not(...values: any[]): this;
    not(values: any[]): this;

    /**
     * Marks a key as required which will not allow undefined as value. All keys are optional by default.
     */
    required(): this;
    exist(): this;

    /**
     * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
     */
    optional(): this;

    /**
     * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
     */
    forbidden(): this;

    /**
     * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
     */
    strip(): this;

    /**
     * Annotates the key
     */
    description(desc: string): this;

    /**
     * Annotates the key
     */
    notes(notes: string): this;
    notes(notes: string[]): this;

    /**
     * Annotates the key
     */
    tags(notes: string): this;
    tags(notes: string[]): this;

    /**
     * Attaches metadata to the key.
     */
    meta(meta: object): this;

    /**
     * Annotates the key with an example value, must be valid.
     */
    example(value: any): this;

    /**
     * Annotates the key with an unit name.
     */
    unit(name: string): this;

    /**
     * Overrides the global validate() options for the current key and any sub-key.
     */
    options(options: ValidationOptions): this;

    /**
     * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
     */
    strict(isStrict?: boolean): this;

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
    default(value: any, description?: string): this;
    default(): this;

    /**
     * Returns a new type that is the result of adding the rules of one type to another.
     */
    concat(schema: this): this;

    /**
     * Converts the type into an alternatives type where the conditions are merged into the type definition where:
     */
    when(ref: string, options: WhenOptions): AlternativesSchema;
    when(ref: Reference, options: WhenOptions): AlternativesSchema;
    when(ref: Schema, options: WhenSchemaOptions): AlternativesSchema;

    /**
     * Overrides the key name in error messages.
     */
    label(name: string): this;

    /**
     * Outputs the original untouched value instead of the casted value.
     */
    raw(isRaw?: boolean): this;

    /**
     * Considers anything that matches the schema to be empty (undefined).
     * @param schema - any object or joi schema to match. An undefined schema unsets that rule.
     */
    empty(schema?: SchemaLike): this;

    /**
     * Overrides the default joi error with a custom error if the rule fails where:
     * @param err - can be:
     *   an instance of `Error` - the override error.
     *   a `function(errors)`, taking an array of errors as argument, where it must either:
     *    return a `string` - substitutes the error message with this text
     *    return a single ` object` or an `Array` of it, where:
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
    error?(err: Error | ValidationErrorFunction): this;

    /**
     * Returns a plain object representing the schema's rules and properties
     */
    describe(): Description;
}

export interface Description {
    type?: Types | string;
    label?: string;
    description?: string;
    flags?: object;
    notes?: string[];
    tags?: string[];
    meta?: any[];
    example?: any[];
    valids?: any[];
    invalids?: any[];
    unit?: string;
    options?: ValidationOptions;
    [key: string]: any;
}

export interface Context {
    [key: string]: any;
}

export interface State {
    key?: string;
    path?: string;
    parent?: any;
    reference?: any;
}

export interface BooleanSchema extends AnySchema {
    /**
     * Allows for additional values to be considered valid booleans by converting them to true during validation.
     * Accepts a value or an array of values. String comparisons are by default case insensitive,
     * see boolean.insensitive() to change this behavior.
     * @param values - strings, numbers or arrays of them
     */
    truthy(...values: Array<string | number | string[] | number[]>): this;

    /**
     * Allows for additional values to be considered valid booleans by converting them to false during validation.
     * Accepts a value or an array of values. String comparisons are by default case insensitive,
     * see boolean.insensitive() to change this behavior.
     * @param values - strings, numbers or arrays of them
     */
    falsy(...values: Array<string | number | string[] | number[]>): this;

    /**
     * Allows the values provided to truthy and falsy as well as the "true" and "false" default conversion
     * (when not in strict() mode) to be matched in a case insensitive manner.
     * @param enabled
     */
    insensitive(enabled?: boolean): this;
}

export interface NumberSchema extends AnySchema {
    /**
     * Specifies the minimum value.
     * It can also be a reference to another field.
     */
    min(limit: number): this;
    min(limit: Reference): this;

    /**
     * Specifies the maximum value.
     * It can also be a reference to another field.
     */
    max(limit: number): this;
    max(limit: Reference): this;

    /**
     * Specifies that the value must be greater than limit.
     * It can also be a reference to another field.
     */
    greater(limit: number): this;
    greater(limit: Reference): this;

    /**
     * Specifies that the value must be less than limit.
     * It can also be a reference to another field.
     */
    less(limit: number): this;
    less(limit: Reference): this;

    /**
     * Requires the number to be an integer (no floating point).
     */
    integer(): this;

    /**
     * Specifies the maximum number of decimal places where:
     * @param limit - the maximum number of decimal places allowed.
     */
    precision(limit: number): this;

    /**
     * Specifies that the value must be a multiple of base.
     */
    multiple(base: number): this;

    /**
     * Requires the number to be positive.
     */
    positive(): this;

    /**
     * Requires the number to be negative.
     */
    negative(): this;
}

export interface StringSchema extends AnySchema {
    /**
     * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
     */
    insensitive(): this;

    /**
     * Specifies the minimum number string characters.
     * @param limit - the minimum number of string characters required. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    min(limit: number, encoding?: string): this;
    min(limit: Reference, encoding?: string): this;

    /**
     * Specifies the maximum number of string characters.
     * @param limit - the maximum number of string characters allowed. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    max(limit: number, encoding?: string): this;
    max(limit: Reference, encoding?: string): this;

    /**
     * Specifies whether the string.max() limit should be used as a truncation.
     * @param enabled - optional parameter defaulting to true which allows you to reset the behavior of truncate by providing a falsy value.
     */
    truncate(enabled?: boolean): this;

    /**
     * Requires the string value to be in a unicode normalized form. If the validation convert option is on (enabled by default), the string will be normalized.
     * @param form - The unicode normalization form to use. Valid values: NFC [default], NFD, NFKC, NFKD
     */
    normalize(form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): this;

    /**
     * Requires the number to be a credit card number (Using Lunh Algorithm).
     */
    creditCard(): this;

    /**
     * Specifies the exact string length required
     * @param limit - the required string length. It can also be a reference to another field.
     * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
     */
    length(limit: number, encoding?: string): this;
    length(limit: Reference, encoding?: string): this;

    /**
     * Defines a regular expression rule.
     * @param pattern - a regular expression object the string value must match against.
     * @param name - optional name for patterns (useful with multiple patterns). Defaults to 'required'.
     */
    regex(pattern: RegExp, name?: string): this;

    /**
     * Replace characters matching the given pattern with the specified replacement string where:
     * @param pattern - a regular expression object to match against, or a string of which all occurrences will be replaced.
     * @param replacement - the string that will replace the pattern.
     */
    replace(pattern: RegExp, replacement: string): this;
    replace(pattern: string, replacement: string): this;

    /**
     * Requires the string value to only contain a-z, A-Z, and 0-9.
     */
    alphanum(): this;

    /**
     * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
     */
    token(): this;

    /**
     * Requires the string value to be a valid email address.
     */
    email(options?: EmailOptions): this;

    /**
     * Requires the string value to be a valid ip address.
     */
    ip(options?: IpOptions): this;

    /**
     * Requires the string value to be a valid RFC 3986 URI.
     */
    uri(options?: UriOptions): this;

    /**
     * Requires the string value to be a valid GUID.
     */
    guid(options?: GuidOptions): this;

    /**
     * Alias for `guid` -- Requires the string value to be a valid GUID
     */
    uuid(options?: GuidOptions): this;

    /**
     * Requires the string value to be a valid hexadecimal string.
     */
    hex(): this;

    /**
     * Requires the string value to be a valid hostname as per RFC1123.
     */
    hostname(): this;

    /**
     * Requires the string value to be in valid ISO 8601 date format.
     */
    isoDate(): this;

    /**
     * Requires the string value to be all lowercase. If the validation convert option is on (enabled by default), the string will be forced to lowercase.
     */
    lowercase(): this;

    /**
     * Requires the string value to be all uppercase. If the validation convert option is on (enabled by default), the string will be forced to uppercase.
     */
    uppercase(): this;

    /**
     * Requires the string value to contain no whitespace before or after. If the validation convert option is on (enabled by default), the string will be trimmed.
     */
    trim(): this;
}

export interface ArraySchema extends AnySchema {
    /**
     * Allow this array to be sparse.
     * enabled can be used with a falsy value to go back to the default behavior.
     */
    sparse(enabled?: any): this;

    /**
     * Allow single values to be checked against rules as if it were provided as an array.
     * enabled can be used with a falsy value to go back to the default behavior.
     */
    single(enabled?: any): this;

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
    items(...types: SchemaLike[]): this;
    items(types: SchemaLike[]): this;

    /**
     * Lists the types in sequence order for the array values where:
     * @param type - a joi schema object to validate against each array item in sequence order. type can be an array of values, or multiple values can be passed as individual arguments.
     * If a given type is .required() then there must be a matching item with the same index position in the array.
     * Errors will contain the number of items that didn't match.
     * Any unmatched item having a label will be mentioned explicitly.
     */
    ordered(...types: SchemaLike[]): this;
    ordered(types: SchemaLike[]): this;

    /**
     * Specifies the minimum number of items in the array.
     */
    min(limit: number): this;

    /**
     * Specifies the maximum number of items in the array.
     */
    max(limit: number): this;

    /**
     * Specifies the exact number of items in the array.
     */
    length(limit: number): this;
    length(limit: Reference): this;

    /**
     * Requires the array values to be unique.
     * Be aware that a deep equality is performed on elements of the array having a type of object,
     * a performance penalty is to be expected for this kind of operation.
     */
    unique(comparator?: string): this;
    unique<T = any>(comparator?: (a: T, b: T) => boolean): this;
}

export interface ObjectSchema extends AnySchema {
    /**
     * Sets the allowed object keys.
     */
    keys(schema?: SchemaMap): this;

    /**
     * Specifies the minimum number of keys in the object.
     */
    min(limit: number): this;

    /**
     * Specifies the maximum number of keys in the object.
     */
    max(limit: number): this;

    /**
     * Specifies the exact number of keys in the object.
     */
    length(limit: number): this;

    /**
     * Specify validation rules for unknown keys matching a pattern.
     */
    pattern(regex: RegExp, schema: SchemaLike): this;

    /**
     * Defines an all-or-nothing relationship between keys where if one of the peers is present, all of them are required as well.
     * @param peers - the key names of which if one present, all are required. peers can be a single string value,
     * an array of string values, or each peer provided as an argument.
     */
    and(...peers: string[]): this;
    and(peers: string[]): this;

    /**
     * Defines a relationship between keys where not all peers can be present at the same time.
     * @param peers - the key names of which if one present, the others may not all be present.
     * peers can be a single string value, an array of string values, or each peer provided as an argument.
     */
    nand(...peers: string[]): this;
    nand(peers: string[]): this;

    /**
     * Defines a relationship between keys where one of the peers is required (and more than one is allowed).
     */
    or(...peers: string[]): this;
    or(peers: string[]): this;

    /**
     * Defines an exclusive relationship between a set of keys. one of them is required but not at the same time where:
     */
    xor(...peers: string[]): this;
    xor(peers: string[]): this;

    /**
     * Requires the presence of other keys whenever the specified key is present.
     */
    with(key: string, peers: string): this;
    with(key: string, peers: string[]): this;

    /**
     * Forbids the presence of other keys whenever the specified is present.
     */
    without(key: string, peers: string): this;
    without(key: string, peers: string[]): this;

    /**
     * Renames a key to another name (deletes the renamed key).
     */
    rename(from: string, to: string, options?: RenameOptions): this;

    /**
     * Verifies an assertion where.
     */
    assert(ref: string, schema: SchemaLike, message?: string): this;
    assert(ref: Reference, schema: SchemaLike, message?: string): this;

    /**
     * Overrides the handling of unknown keys for the scope of the current object only (does not apply to children).
     */
    unknown(allow?: boolean): this;

    /**
     * Requires the object to be an instance of a given constructor.
     *
     * @param constructor - the constructor function that the object must be an instance of.
     * @param name - an alternate name to use in validation errors. This is useful when the constructor function does not have a name.
     */
    type(constructor: Function, name?: string): this;

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
    requiredKeys(children: string[]): this;
    requiredKeys(...children: string[]): this;

    /**
     * Sets the specified children to optional.
     *
     * @param children - can be a single string value, an array of string values, or each child provided as an argument.
     *
     * The behavior is exactly the same as requiredKeys.
     */
    optionalKeys(children: string[]): this;
    optionalKeys(...children: string[]): this;
}

export interface BinarySchema extends AnySchema {
    /**
     * Sets the string encoding format if a string input is converted to a buffer.
     */
    encoding(encoding: string): this;

    /**
     * Specifies the minimum length of the buffer.
     */
    min(limit: number): this;

    /**
     * Specifies the maximum length of the buffer.
     */
    max(limit: number): this;

    /**
     * Specifies the exact length of the buffer:
     */
    length(limit: number): this;
}

export interface DateSchema extends AnySchema {
    /**
     * Specifies the oldest date allowed.
     * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
     * allowing to explicitly ensure a date is either in the past or in the future.
     * It can also be a reference to another field.
     */
    min(date: Date): this;
    min(date: number): this;
    min(date: string): this;
    min(date: Reference): this;

    /**
     * Specifies the latest date allowed.
     * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
     * allowing to explicitly ensure a date is either in the past or in the future.
     * It can also be a reference to another field.
     */
    max(date: Date): this;
    max(date: number): this;
    max(date: string): this;
    max(date: Reference): this;

    /**
     * Specifies the allowed date format:
     * @param format - string or array of strings that follow the moment.js format.
     */
    format(format: string): this;
    format(format: string[]): this;

    /**
     * Requires the string value to be in valid ISO 8601 date format.
     */
    iso(): this;

    /**
     * Requires the value to be a timestamp interval from Unix Time.
     * @param type - the type of timestamp (allowed values are unix or javascript [default])
     */
    timestamp(type?: 'javascript' | 'unix'): this;
}

export interface FunctionSchema extends AnySchema {
    /**
     * Specifies the arity of the function where:
     * @param n - the arity expected.
     */
    arity(n: number): this;

    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    minArity(n: number): this;

    /**
     * Specifies the minimal arity of the function where:
     * @param n - the minimal arity expected.
     */
    maxArity(n: number): this;

    /**
     * Requires the function to be a Joi reference.
     */
    ref(): this;
}

export interface AlternativesSchema extends AnySchema {
    try(types: SchemaLike[]): this;
    try(...types: SchemaLike[]): this;
    when(ref: string, options: WhenOptions): this;
    when(ref: Reference, options: WhenOptions): this;
    when(ref: Schema, options: WhenSchemaOptions): this;
}

export interface LazySchema extends AnySchema {
}

export interface Reference extends JoiObject {
    (value: any, validationOptions: ValidationOptions): any;
    isContext: boolean;
    key: string;
    path: string;
    toString(): string;
}

export type ExtensionBoundSchema = Schema & {
    /**
     * Creates a joi error object.
     * Used in conjunction with custom rules.
     * @param type - the type of rule to create the error for.
     * @param context - provide properties that will be available in the `language` templates.
     * @param state - should the context passed into the `validate` function in a custom rule
     * @param options - should the context passed into the `validate` function in a custom rule
     */
    createError(type: string, context: Context, state: State, options: ValidationOptions): Err;
};

export interface Rules<P extends object = any> {
    name: string;
    params?: ObjectSchema | {[key in keyof P]: SchemaLike; };
    setup?(this: ExtensionBoundSchema, params: P): Schema | void;
    validate?<R = any>(this: ExtensionBoundSchema, params: P, value: any, state: State, options: ValidationOptions): Err | R;
    description?: string | ((params: P) => string);
}

export interface Extension {
    name: string;
    base?: Schema;
    language?: LanguageOptions;
    coerce?<R = any>(this: ExtensionBoundSchema, value: any, state: State, options: ValidationOptions): Err | R;
    pre?<R = any>(this: ExtensionBoundSchema, value: any, state: State, options: ValidationOptions): Err | R;
    describe?(this: Schema, description: Description): Description;
    rules?: Rules[];
}

export interface Err extends JoiObject {
    toString(): string;
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

/**
 * Current version of the joi package.
 */
export const version: string;

/**
 * Generates a schema object that matches any data type.
 */
export function any(): AnySchema;

/**
 * Generates a schema object that matches an array data type.
 */
export function array(): ArraySchema;

/**
 * Generates a schema object that matches a boolean data type (as well as the strings 'true', 'false', 'yes', and 'no'). Can also be called via bool().
 */
export function bool(): BooleanSchema;

export function boolean(): BooleanSchema;

/**
 * Generates a schema object that matches a Buffer data type (as well as the strings which will be converted to Buffers).
 */
export function binary(): BinarySchema;

/**
 * Generates a schema object that matches a date type (as well as a JavaScript date string or number of milliseconds).
 */
export function date(): DateSchema;

/**
 * Generates a schema object that matches a function type.
 */
export function func(): FunctionSchema;

/**
 * Generates a schema object that matches a number data type (as well as strings that can be converted to numbers).
 */
export function number(): NumberSchema;

/**
 * Generates a schema object that matches an object data type (as well as JSON strings that parsed into objects).
 */
export function object(schema?: SchemaMap): ObjectSchema;

/**
 * Generates a schema object that matches a string data type. Note that empty strings are not allowed by default and must be enabled with allow('').
 */
export function string(): StringSchema;

/**
 * Generates a type that will match one of the provided alternative schemas
 */
export function alternatives(types: SchemaLike[]): AlternativesSchema;
export function alternatives(...types: SchemaLike[]): AlternativesSchema;

/**
 * Alias for `alternatives`
 */
export function alt(types: SchemaLike[]): AlternativesSchema;
export function alt(...types: SchemaLike[]): AlternativesSchema;

/**
 * Generates a placeholder schema for a schema that you would provide with the fn.
 * Supports the same methods of the any() type.
 * This is mostly useful for recursive schemas
 */
export function lazy(cb: () => Schema): LazySchema;

/**
 * Validates a value using the given schema and options.
 */
export function validate<T>(value: T, schema: SchemaLike): ValidationResult<T>;
export function validate<T, R>(value: T, schema: SchemaLike, callback: (err: ValidationError, value: T) => R): R;

export function validate<T>(value: T, schema: SchemaLike, options: ValidationOptions): ValidationResult<T>;
export function validate<T, R>(value: T, schema: SchemaLike, options: ValidationOptions, callback: (err: ValidationError, value: T) => R): R;

/**
 * Converts literal schema definition to joi schema object (or returns the same back if already a joi schema object).
 */
export function compile(schema: SchemaLike): Schema;
export function compile<T extends Schema>(schema: SchemaLike): T;

/**
 * Validates a value against a schema and throws if validation fails.
 *
 * @param value - the value to validate.
 * @param schema - the schema object.
 * @param message - optional message string prefix added in front of the error message. may also be an Error object.
 */
export function assert(value: any, schema: SchemaLike, message?: string | Error): void;

/**
 * Validates a value against a schema, returns valid object, and throws if validation fails where:
 *
 * @param value - the value to validate.
 * @param schema - the schema object.
 * @param message - optional message string prefix added in front of the error message. may also be an Error object.
 */
export function attempt<T>(value: T, schema: SchemaLike, message?: string | Error): T;

/**
 * Generates a reference to the value of the named key.
 */
export function ref(key: string, options?: ReferenceOptions): Reference;

/**
 * Checks whether or not the provided argument is a reference. It's especially useful if you want to post-process error messages.
 */
export function isRef(ref: any): ref is Reference;

/**
 * Get a sub-schema of an existing schema based on a path. Path separator is a dot (.).
 */
export function reach(schema: ObjectSchema, path: string): Schema;
export function reach<T extends Schema>(schema: ObjectSchema, path: string): T;

/**
 * Creates a new Joi instance customized with the extension(s) you provide included.
 */
export function extend(extention: Extension): any;

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Below are undocumented APIs. use at your own risk
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

/**
 * Returns a plain object representing the schema's rules and properties
 */
export function describe(schema: Schema): Description;

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
export function only(value: any, ...values: any[]): Schema;
export function only(values: any[]): Schema;
export function equal(value: any, ...values: any[]): Schema;
export function equal(values: any[]): Schema;

/**
 * Blacklists a value
 */
export function invalid(value: any, ...values: any[]): Schema;
export function invalid(values: any[]): Schema;
export function disallow(value: any, ...values: any[]): Schema;
export function disallow(values: any[]): Schema;
export function not(value: any, ...values: any[]): Schema;
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
export function meta(meta: object): Schema;

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
export function when(ref: string, options: WhenOptions): AlternativesSchema;
export function when(ref: Reference, options: WhenOptions): AlternativesSchema;
export function when(ref: Schema, options: WhenSchemaOptions): AlternativesSchema;

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
export function empty(schema?: any): Schema;
