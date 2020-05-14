// Type definitions for yup 0.28
// Project: https://github.com/jquense/yup
// Definitions by: Dominik Hardtke <https://github.com/dhardtke>,
//                 Vladyslav Tserman <https://github.com/vtserman>,
//                 Moreton Bay Regional Council <https://github.com/MoretonBayRC>,
//                 Sindre Seppola <https://github.com/sseppola>
//                 Yash Kulshrestha <https://github.com/YashdalfTheGray>
//                 Vincent Pizzo <https://github.com/vincentjames501>
//                 Robert Bullen <https://github.com/robertbullen>
//                 Yusuke Sato <https://github.com/sat0yu>
//                 Desmond Koh <https://github.com/deskoh>
//                 Maurice de Beijer <https://github.com/mauricedb>
//                 Kalley Powell <https://github.com/kalley>
//                 Elías García <https://github.com/elias-garcia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export function reach<T>(schema: Schema<T>, path: string, value?: any, context?: any): Schema<T>;
export function addMethod<T extends Schema<any>>(
    schemaCtor: AnySchemaConstructor,
    name: string,
    method: (this: T, ...args: any[]) => T,
): void;
export function ref(path: string, options?: { contextPrefix: string }): Ref;
export function lazy<T>(fn: (value: T) => Schema<T>): Lazy;
export function setLocale(customLocale: LocaleObject): void;
export function isSchema(obj: any): obj is Schema<any>;

export const mixed: MixedSchemaConstructor;
export const string: StringSchemaConstructor;
export const number: NumberSchemaConstructor;
export const boolean: BooleanSchemaConstructor;
export const bool: BooleanSchemaConstructor;
export const date: DateSchemaConstructor;
export const array: ArraySchemaConstructor;
export const object: ObjectSchemaConstructor;

export type AnySchemaConstructor =
    | MixedSchemaConstructor
    | StringSchemaConstructor
    | NumberSchemaConstructor
    | BooleanSchemaConstructor
    | DateSchemaConstructor
    | ArraySchemaConstructor
    | ObjectSchemaConstructor;

export type TestOptionsMessage<Extra extends Record<string, any> = {}, R = any> =
    | string
    | ((params: Extra & Partial<TestMessageParams>) => R);

export interface Schema<T> {
    type: string;
    clone(): this;
    label(label: string): this;
    meta(metadata: any): this;
    meta(): any;
    describe(): SchemaDescription;
    concat(schema: this): this;
    validate(value: any, options?: ValidateOptions): Promise<T>;
    validateSync(value: any, options?: ValidateOptions): T;
    validateAt(path: string, value: T, options?: ValidateOptions): Promise<T>;
    validateSyncAt(path: string, value: T, options?: ValidateOptions): T;
    isValid(value: any, options?: any): Promise<boolean>;
    isValidSync(value: any, options?: any): value is T;
    cast(value?: any, options?: any): T;
    isType(value: any): value is T;
    strict(isStrict: boolean): this;
    strip(strip: boolean): this;
    withMutation(fn: (current: this) => void): void;
    default(value: any): this;
    default(): T;
    typeError(message?: TestOptionsMessage): this;
    notOneOf(arrayOfValues: any[], message?: MixedLocale['notOneOf']): this;
    when(keys: string | any[], builder: WhenOptions<this>): this;
    transform(fn: TransformFunction<this>): this;
}

export interface MixedSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T = any>(): MixedSchema<T>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T = any>(options?: { type?: string; [key: string]: any }): MixedSchema<T>;
}

export interface MixedSchema<T extends any = NotUndefined> extends Schema<T> {
    nullable(isNullable?: true): MixedSchema<T | null>;
    nullable(isNullable: false): MixedSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): MixedSchema<T>;
    required(message?: TestOptionsMessage): MixedSchema<Exclude<T, undefined>>;
    defined(): MixedSchema<Exclude<T, undefined>>;
    notRequired(): MixedSchema<T | undefined>;
    optional(): MixedSchema<T | undefined>;
    concat(schema: this): this;
    concat<U>(schema: Schema<U>): MixedSchema<T | U>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): MixedSchema<MaintainOptionality<T, U>>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): MixedSchema<MaintainOptionality<T, U>>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
        ): MixedSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): MixedSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
}

export interface StringSchemaConstructor {
    <T extends string | null | undefined = string>(): T extends string ? StringSchema<T> : StringSchema;
    new <T extends string | null | undefined = string>(): T extends string ? StringSchema<T> : StringSchema;
}

export interface StringSchema<T extends string | null | undefined = string> extends Schema<T> {
    length(limit: number | Ref, message?: StringLocale['length']): StringSchema<T>;
    min(limit: number | Ref, message?: StringLocale['min']): StringSchema<T>;
    max(limit: number | Ref, message?: StringLocale['max']): StringSchema<T>;
    matches(
        regex: RegExp,
        messageOrOptions?:
            | StringLocale['matches']
            | { message?: StringLocale['matches']; excludeEmptyString?: boolean },
    ): StringSchema<T>;
    email(message?: StringLocale['email']): StringSchema<T>;
    url(message?: StringLocale['url']): StringSchema<T>;
    ensure(): StringSchema<T>;
    trim(message?: StringLocale['trim']): StringSchema<T>;
    lowercase(message?: StringLocale['lowercase']): StringSchema<T>;
    uppercase(message?: StringLocale['uppercase']): StringSchema<T>;
    nullable(isNullable?: true): StringSchema<T | null>;
    nullable(isNullable: false): StringSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): StringSchema<T>;
    required(message?: TestOptionsMessage): StringSchema<Exclude<T, undefined>>;
    defined(): StringSchema<Exclude<T, undefined>>;
    notRequired(): StringSchema<T | undefined>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): StringSchema<MaintainOptionality<T, U>>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): StringSchema<MaintainOptionality<T, U>>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
    ): StringSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): StringSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
    optional(): StringSchema<T | undefined>;
}

export interface NumberSchemaConstructor {
    (): NumberSchema;
    new (): NumberSchema;
}

export interface NumberSchema<T extends number | null | undefined = number> extends Schema<T> {
    min(limit: number | Ref, message?: NumberLocale['min']): NumberSchema<T>;
    max(limit: number | Ref, message?: NumberLocale['max']): NumberSchema<T>;
    lessThan(limit: number | Ref, message?: NumberLocale['lessThan']): NumberSchema<T>;
    moreThan(limit: number | Ref, message?: NumberLocale['moreThan']): NumberSchema<T>;
    positive(message?: NumberLocale['positive']): NumberSchema<T>;
    negative(message?: NumberLocale['negative']): NumberSchema<T>;
    integer(message?: NumberLocale['integer']): NumberSchema<T>;
    truncate(): NumberSchema<T>;
    round(type: 'floor' | 'ceil' | 'trunc' | 'round'): NumberSchema<T>;
    nullable(isNullable?: true): NumberSchema<T | null>;
    nullable(isNullable: false): NumberSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): NumberSchema<T>;
    required(message?: TestOptionsMessage): NumberSchema<Exclude<T, undefined>>;
    defined(): NumberSchema<Exclude<T, undefined>>;
    notRequired(): NumberSchema<T | undefined>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): NumberSchema<MaintainOptionality<T, U>>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): NumberSchema<MaintainOptionality<T, U>>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
    ): NumberSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): NumberSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
    optional(): NumberSchema<T | undefined>;
}

export interface BooleanSchemaConstructor {
    (): BooleanSchema;
    new (): BooleanSchema;
}

export interface BooleanSchema<T extends boolean | null | undefined = boolean> extends Schema<T> {
    nullable(isNullable?: true): BooleanSchema<T | null>;
    nullable(isNullable: false): BooleanSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): BooleanSchema<T>;
    required(message?: TestOptionsMessage): BooleanSchema<Exclude<T, undefined>>;
    defined(): BooleanSchema<Exclude<T, undefined>>;
    notRequired(): BooleanSchema<T | undefined>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): BooleanSchema<MaintainOptionality<T, U>>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): BooleanSchema<MaintainOptionality<T, U>>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
    ): BooleanSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): BooleanSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
    optional(): BooleanSchema<T | undefined>;
}

export interface DateSchemaConstructor {
    (): DateSchema;
    new (): DateSchema;
}

export interface DateSchema<T extends Date | null | undefined = Date> extends Schema<T> {
    min(limit: Date | string | Ref, message?: DateLocale['min']): DateSchema<T>;
    max(limit: Date | string | Ref, message?: DateLocale['max']): DateSchema<T>;
    nullable(isNullable?: true): DateSchema<T | null>;
    nullable(isNullable: false): DateSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): DateSchema<T>;
    required(message?: TestOptionsMessage): DateSchema<Exclude<T, undefined>>;
    defined(): DateSchema<Exclude<T, undefined>>;
    notRequired(): DateSchema<T | undefined>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): DateSchema<MaintainOptionality<T, U>>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): DateSchema<MaintainOptionality<T, U>>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
    ): DateSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): DateSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
    optional(): DateSchema<T | undefined>;
}

export interface ArraySchemaConstructor {
    <T>(schema?: Schema<T>): ArraySchema<T>;
    new (): ArraySchema<{}>;
}

interface BasicArraySchema<E, T extends E[] | null | undefined> extends Schema<T> {
    min(limit: number | Ref, message?: ArrayLocale['min']): this;
    max(limit: number | Ref, message?: ArrayLocale['max']): this;
    ensure(): this;
    compact(
        rejector?: (value: InferredArrayType<T>, index: number, array: Array<InferredArrayType<T>>) => boolean,
    ): this;

    // This doesn't narrow the type of the schema like the more primitive oneOf calls
    // it would be very complex to do that accurately with the subtypes, and it's not
    // really worth it because the oneOf check is a shallow (==) comparison so it rarely
    // applies to arrays anyway.
    oneOf(arrayOfValues: ReadonlyArray<T | Ref | null>, message?: MixedLocale['oneOf']): this;
    equals(arrayOfValues: ReadonlyArray<T | Ref | null>, message?: MixedLocale['oneOf']): this;
    test(name: string, message: TestOptionsMessage, test: TestFunction): this;
    test(options: TestOptions<Record<string, any>>): this;
    innerType: Schema<E>;
}

export interface NotRequiredNullableArraySchema<T> extends BasicArraySchema<T, T[] | null | undefined> {
    of<U>(type: Schema<U>): NotRequiredNullableArraySchema<U>;
    nullable(isNullable?: true): NotRequiredNullableArraySchema<T>;
    nullable(isNullable: false): NotRequiredArraySchema<T>;
    nullable(isNullable?: boolean): ArraySchema<T>;
    required(message?: TestOptionsMessage): NullableArraySchema<T>;
    defined(): NullableArraySchema<T>;
    notRequired(): NotRequiredNullableArraySchema<T>;
    optional(): NotRequiredNullableArraySchema<T>;
}

export interface NullableArraySchema<T> extends BasicArraySchema<T, T[] | null> {
    of<U>(type: Schema<U>): NullableArraySchema<U>;
    nullable(isNullable?: true): NullableArraySchema<T>;
    nullable(isNullable: false): ArraySchema<T>;
    nullable(isNullable?: boolean): ArraySchema<T>;
    required(message?: TestOptionsMessage): NullableArraySchema<T>;
    defined(): NullableArraySchema<T>;
    notRequired(): NotRequiredNullableArraySchema<T>;
    optional(): NotRequiredNullableArraySchema<T>;
}

export interface NotRequiredArraySchema<T> extends BasicArraySchema<T, T[] | undefined> {
    of<U>(type: Schema<U>): NotRequiredArraySchema<U>;
    nullable(isNullable?: true): NotRequiredNullableArraySchema<T>;
    nullable(isNullable: false): NotRequiredArraySchema<T>;
    nullable(isNullable: boolean): ArraySchema<T>;
    required(message?: TestOptionsMessage): ArraySchema<T>;
    defined(): ArraySchema<T>;
    notRequired(): NotRequiredArraySchema<T>;
    optional(): NotRequiredArraySchema<T>;
}

export interface ArraySchema<T> extends BasicArraySchema<T, T[]> {
    of<U>(type: Schema<U>): ArraySchema<U>;
    nullable(isNullable?: true): NullableArraySchema<T>;
    nullable(isNullable: false | boolean): ArraySchema<T>;
    required(message?: TestOptionsMessage): ArraySchema<T>;
    defined(): ArraySchema<T>;
    notRequired(): NotRequiredArraySchema<T>;
    optional(): NotRequiredArraySchema<T>;
}

export type ObjectSchemaDefinition<T extends object | null | undefined> = {
    // This shouldn't be necessary because MixedSchema extends Schema, but type
    // inference only works with it this way - otherwise when you use a mixed
    // field in object schema, it will type as `unknown`. Not sure why that is -
    // maybe some sort of inference depth limit?
    [field in keyof T]: Schema<T[field]> | MixedSchema<T[field]> | Ref;
};

/**
 * Merges two interfaces. For properties in common, property types from `U` trump those of `T`.
 * This is conducive to the functionality of
 * [yup's `object.shape()` method](https://www.npmjs.com/package/yup#objectshapefields-object-nosortedges-arraystring-string-schema).
 */
export type Shape<T extends object | null | undefined, U extends object> =
    | ({ [P in keyof T]: P extends keyof U ? U[P] : T[P] } & U)
    | PreserveOptionals<T>;

export interface ObjectSchemaConstructor {
    <T extends object>(fields?: ObjectSchemaDefinition<T>): ObjectSchema<T>;
    new (): ObjectSchema<{}>;
}

export interface ObjectSchema<T extends object | null | undefined = object> extends Schema<T> {
    fields: {
        [k in keyof T]: Schema<T[k]>;
    };
    shape<U extends object>(
        fields: ObjectSchemaDefinition<U>,
        noSortEdges?: Array<[string, string]>,
    ): ObjectSchema<Shape<T, U>>;
    from(fromKey: string, toKey: string, alias?: boolean): ObjectSchema<T>;
    noUnknown(onlyKnownKeys?: boolean, message?: ObjectLocale['noUnknown']): ObjectSchema<T>;
    unknown(allow?: boolean, message?: ObjectLocale['noUnknown']): ObjectSchema<T>;
    transformKeys(callback: (key: any) => any): void;
    camelCase(): ObjectSchema<T>;
    snakeCase(): ObjectSchema<T>;
    constantCase(): ObjectSchema<T>;
    nullable(isNullable?: true): ObjectSchema<T | null>;
    nullable(isNullable: false): ObjectSchema<Exclude<T, null>>;
    nullable(isNullable?: boolean): ObjectSchema<T>;
    required(message?: TestOptionsMessage): ObjectSchema<Exclude<T, undefined>>;
    defined(): ObjectSchema<Exclude<T, undefined>>;
    notRequired(): ObjectSchema<T | undefined>;
    optional(): ObjectSchema<T | undefined>;
    concat(schema: this): this;
    concat<U extends object>(schema: ObjectSchema<U>): ObjectSchema<T & U>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): ObjectSchema<U>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref | null>, message?: MixedLocale['oneOf']): ObjectSchema<U>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U>
    ): ObjectSchema<U>;
    test(
        name: string,
        message: TestOptionsMessage,
        test: TestFunction
    ): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>>): ObjectSchema<U>;
    test(options: TestOptions<Record<string, any>>): this;
}

export type TestFunction = (this: TestContext, value: any) => boolean | ValidationError | Promise<boolean | ValidationError>;
export type AssertingTestFunction<T> = (this: TestContext, value: any) => value is T;

export type TransformFunction<T> = (this: T, value: any, originalValue: any) => any;

export interface WhenOptionsBuilderFunction<T> {
    (value: any, schema: T): T;
    (v1: any, v2: any, schema: T): T;
    (v1: any, v2: any, v3: any, schema: T): T;
    (v1: any, v2: any, v3: any, v4: any, schema: T): T;
}

export type WhenOptionsBuilderObjectIs = ((...values: any[]) => boolean) | boolean | number | null | object | string;

export type WhenOptionsBuilderObject =
    | {
          is: WhenOptionsBuilderObjectIs;
          then: any;
          otherwise: any;
      }
    | object;

export type WhenOptions<T> = WhenOptionsBuilderFunction<T> | WhenOptionsBuilderObject;

export interface TestContext {
    path: string;
    options: ValidateOptions;
    parent: any;
    schema: Schema<any>;
    resolve: (value: any) => any;
    createError: (params?: { path?: string; message?: string; params?: object }) => ValidationError;
}

export interface ValidateOptions {
    /**
     * Only validate the input, and skip and coercion or transformation. Default - false
     */
    strict?: boolean;
    /**
     * Return from validation methods on the first error rather than after all validations run. Default - true
     */
    abortEarly?: boolean;
    /**
     * Remove unspecified keys from objects. Default - false
     */
    stripUnknown?: boolean;
    /**
     * When false validations will not descend into nested schema (relevant for objects or arrays). Default - true
     */
    recursive?: boolean;
    /**
     * Any context needed for validating schema conditions (see: when())
     */
    context?: object;
}

export interface TestMessageParams {
    path: string;
    value: any;
    originalValue: any;
    label: string;
}

interface BaseTestOptions<P extends Record<string, any>> {
    /**
     * Unique name identifying the test. Required for exclusive tests.
     */
    name?: string;

    /**
     * Test function, determines schema validity
     */
    test: TestFunction;

    /**
     * The validation error message
     */
    message?: TestOptionsMessage<P>;

    /**
     * Values passed to message for interpolation
     */
    params?: P;

    /**
     * Mark the test as exclusive, meaning only one of the same can be active at once
     */
    exclusive?: boolean;
}

interface NonExclusiveTestOptions<P extends Record<string, any>> extends BaseTestOptions<P> {
    exclusive?: false;
}

interface ExclusiveTestOptions<P extends Record<string, any>> extends BaseTestOptions<P> {
    exclusive: true;
    name: string;
}

interface NonExclusiveAssertingTestOptions<U, P extends Record<string, any>> extends NonExclusiveTestOptions<P> {
    test: AssertingTestFunction<U>;
}

interface ExclusiveAssertingTestOptions<U, P extends Record<string, any>> extends ExclusiveTestOptions<P> {
    test: AssertingTestFunction<U>;
}

export type TestOptions<P extends Record<string, any> = {}> =
  NonExclusiveTestOptions<P> | ExclusiveTestOptions<P>;

export type AssertingTestOptions<U, P extends Record<string, any> = {}> =
  NonExclusiveAssertingTestOptions<U, P> | ExclusiveAssertingTestOptions<U, P>;

export interface SchemaFieldRefDescription {
    type: 'ref';
    key: string;
}

export interface SchemaFieldInnerTypeDescription
    extends Pick<SchemaDescription, Exclude<keyof SchemaDescription, 'fields'>> {
    innerType?: SchemaFieldDescription;
}

export type SchemaFieldDescription = SchemaDescription | SchemaFieldRefDescription | SchemaFieldInnerTypeDescription;

export interface SchemaDescription {
    type: string;
    label: string;
    meta: object;
    tests: Array<{ name: string; params: { [k: string]: any } }>;
    fields: Record<string, SchemaFieldDescription>;
}

// ValidationError works a lot more like a class vs. a constructor
// function that returns an interface. It's also got a couple of
// static methods and it inherits from the generic Error class in
// the [yup codebase][1].
// [1]: (https://github.com/jquense/yup/blob/master/src/ValidationError.js)
export class ValidationError extends Error {
    name: string;
    message: string;
    value: any;
    /**
     * A string, indicating where there error was thrown. path is empty at the root level.
     */
    path: string;
    type: any;
    /**
     * array of error messages
     */
    errors: string[];

    /**
     * In the case of aggregate errors, inner is an array of ValidationErrors throw earlier in the validation chain.
     */
    inner: ValidationError[];
    params?: object;

    static isError(err: any): err is ValidationError;
    static formatError(message: string | ((params?: any) => string), params?: any): string | ((params?: any) => string);

    constructor(errors: string | string[], value: any, path: string, type?: any);
}

// It is tempting to declare `Ref` very simply, but there are problems with these approaches:
//
// * `type Ref = Record<string, any>;` - This is essentially how it was originally declared, but
//    just about any object satisfies this contract, which makes the type declaration too loose to
//    be useful.
//
// * `type Ref = object;` - This is a variation on the previous bullet in that it is too loose.
//
// * `class Ref {}` - This is yet another variation that is too loose.
//
// * `type Ref = void;` - This works and the emitted JavaScript is just fine, but it results in some
//    confusing IntelliSense, e.g it looks like the `ref()` returns `void`, which is not the case.
//
// The solution is twofold. 1.) Declare it as a class with a private constructor to prevent it from
// being instantiated by anything but the `ref()` factory function, and; 2.) declare a private
// readonly property (that yup actually places on the prototype) to force it to be structurally
// incompatible with any other object type.

/**
 * `Ref` is an opaque type that is internal to yup. Creating a `Ref` instance is accomplished via the `ref()` factory
 * function.
 */
export class Ref {
    private constructor();
    private readonly __isYupRef: true;
}

// tslint:disable-next-line:no-empty-interface
export interface Lazy extends Schema<any> {}

export interface FormatErrorParams {
    path: string;
    type: string;
    value?: any;
    originalValue?: any;
}

export type LocaleValue = string | ((params: FormatErrorParams) => string);

interface MixedLocale {
    default?: TestOptionsMessage;
    required?: TestOptionsMessage;
    oneOf?: TestOptionsMessage<{ values: any }>;
    notOneOf?: TestOptionsMessage<{ values: any }>;
    notType?: LocaleValue;
}

interface StringLocale {
    length?: TestOptionsMessage<{ length: number }>;
    min?: TestOptionsMessage<{ min: number }>;
    max?: TestOptionsMessage<{ max: number }>;
    matches?: TestOptionsMessage<{ regex: RegExp }>;
    email?: TestOptionsMessage<{ regex: RegExp }>;
    url?: TestOptionsMessage<{ regex: RegExp }>;
    trim?: TestOptionsMessage;
    lowercase?: TestOptionsMessage;
    uppercase?: TestOptionsMessage;
}

interface NumberLocale {
    min?: TestOptionsMessage<{ min: number }>;
    max?: TestOptionsMessage<{ max: number }>;
    lessThan?: TestOptionsMessage<{ less: number }>;
    moreThan?: TestOptionsMessage<{ more: number }>;
    positive?: TestOptionsMessage<{ more: number }>;
    negative?: TestOptionsMessage<{ less: number }>;
    integer?: TestOptionsMessage;
}

interface DateLocale {
    min?: TestOptionsMessage<{ min: Date | string }>;
    max?: TestOptionsMessage<{ max: Date | string }>;
}

interface ObjectLocale {
    noUnknown?: TestOptionsMessage;
}

interface ArrayLocale {
    min?: TestOptionsMessage<{ min: number }>;
    max?: TestOptionsMessage<{ max: number }>;
}

export interface LocaleObject {
    mixed?: MixedLocale;
    string?: StringLocale;
    number?: NumberLocale;
    date?: DateLocale;
    boolean?: {};
    object?: ObjectLocale;
    array?: ArrayLocale;
}

export type InferType<T> = T extends Schema<infer P> ? InnerInferType<P> : never;

// Shut off automatic exporting after this statement
export {};

type KeyOfUndefined<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never;
}[keyof T];

type PreserveNull<T> = T extends null ? null : never;
type PreserveUndefined<T> = T extends undefined ? undefined : never;
type PreserveOptionals<T> = PreserveNull<T> | PreserveUndefined<T>;
type Id<T> = { [K in keyof T]: T[K] };
type RequiredProps<T> = Pick<T, Exclude<keyof T, KeyOfUndefined<T>>>;
type NotRequiredProps<T> = Partial<Pick<T, KeyOfUndefined<T>>>;
type InnerInferType<T> =
    | (T extends Array<infer T> ? T[] : Id<NotRequiredProps<T> & RequiredProps<T>>)
    | PreserveOptionals<T>;
type InferredArrayType<T> = T extends Array<infer U> ? U : T;
/** If `T` is optional, returns optional `U`. */
type MaintainOptionality<T, U> = T extends undefined ? U | undefined : U;
type NotUndefined = string | number | boolean | symbol | object | null;
