// Type definitions for yup 0.29
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
//                 Ian Sanders <https://github.com/iansan5653>
//                 Jay Fong <https://github.com/fjc0k>
//                 Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export function reach<T, C = object>(schema: Schema<T, C>, path: string, value?: any, context?: any): Schema<T, C>;
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

export interface Schema<T, C = object> {
    type: string;
    clone(): this;
    label(label: string): this;
    meta(metadata: any): this;
    meta(): any;
    describe(): SchemaDescription;
    concat(schema: this): this;
    validate(value: any, options?: ValidateOptions<C>): Promise<T>;
    validateSync(value: any, options?: ValidateOptions<C>): T;
    validateAt(path: string, value: T, options?: ValidateOptions<C>): Promise<T>;
    validateSyncAt(path: string, value: T, options?: ValidateOptions<C>): T;
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

// Note: Using `{} | null | undefined` allows excluding `null` & `undefined`
// whereas using `any` as the default type would mean that `nullable(false)`,
// `defined`, and `required` would all have no effect.

export interface MixedSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T = {} | null | undefined, C = object>(): MixedSchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T = {} | null | undefined, C = object>(options?: { type?: string; [key: string]: any }): MixedSchema<T, C>;
}

export interface MixedSchema<T extends any = {} | null | undefined, C = object> extends Schema<T, C> {
    nullable(isNullable?: true): MixedSchema<T | null, C>;
    nullable(isNullable: false): MixedSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): MixedSchema<T, C>;
    required(message?: TestOptionsMessage): MixedSchema<Exclude<T, undefined | null>, C>;
    defined(): MixedSchema<Exclude<T, undefined>, C>;
    notRequired(): MixedSchema<T | undefined, C>;
    optional(): MixedSchema<T | undefined, C>;
    concat(schema: this): this;
    concat<U>(schema: Schema<U, C>): MixedSchema<T | U, C>;
    oneOf<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): MixedSchema<MaintainOptionality<T, U>, C>;
    equals<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): MixedSchema<MaintainOptionality<T, U>, C>;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): MixedSchema<U, C>;
    test(name: string, message: TestOptionsMessage, test: TestFunction<unknown, C>): this;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): MixedSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
}

export interface StringSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T extends string | null | undefined = string | undefined, C = object>(): StringSchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T extends string | null | undefined = string | undefined, C = object>(): StringSchema<T, C>;
}

export interface StringSchema<T extends string | null | undefined = string | undefined, C = object>
    extends Schema<T, C> {
    length(limit: number | Ref, message?: StringLocale['length']): StringSchema<T, C>;
    min(limit: number | Ref, message?: StringLocale['min']): StringSchema<T, C>;
    max(limit: number | Ref, message?: StringLocale['max']): StringSchema<T, C>;
    matches(
        regex: RegExp,
        messageOrOptions?:
            | StringLocale['matches']
            | { message?: StringLocale['matches']; excludeEmptyString?: boolean },
    ): StringSchema<T, C>;
    email(message?: StringLocale['email']): StringSchema<T, C>;
    url(message?: StringLocale['url']): StringSchema<T, C>;
    uuid(message?: StringLocale['uuid']): StringSchema<T, C>;
    ensure(): StringSchema<T, C>;
    trim(message?: StringLocale['trim']): StringSchema<T, C>;
    lowercase(message?: StringLocale['lowercase']): StringSchema<T, C>;
    uppercase(message?: StringLocale['uppercase']): StringSchema<T, C>;
    nullable(isNullable?: true): StringSchema<T | null, C>;
    nullable(isNullable: false): StringSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): StringSchema<T, C>;
    required(message?: TestOptionsMessage): StringSchema<Exclude<T, undefined | null>, C>;
    defined(): StringSchema<Exclude<T, undefined>, C>;
    notRequired(): StringSchema<T | undefined, C>;
    oneOf<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): StringSchema<MaintainOptionality<T, U>, C>;
    equals<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): StringSchema<MaintainOptionality<T, U>, C>;
    /*
        All TestFunction generics are intentionally T with (undefined | null) as previous .required / .defined / .nullable
        will narrow out those types, and tests run for (undefined | null) even if they're not allowed.
    */
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): StringSchema<U, C>;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): StringSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
    optional(): StringSchema<T | undefined, C>;
}

export interface NumberSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T extends number | null | undefined = number | undefined, C = object>(): NumberSchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T extends number | null | undefined = number | undefined, C = object>(): NumberSchema<T, C>;
}

export interface NumberSchema<T extends number | null | undefined = number | undefined, C = object>
    extends Schema<T, C> {
    min(limit: number | Ref, message?: NumberLocale['min']): NumberSchema<T, C>;
    max(limit: number | Ref, message?: NumberLocale['max']): NumberSchema<T, C>;
    lessThan(limit: number | Ref, message?: NumberLocale['lessThan']): NumberSchema<T, C>;
    moreThan(limit: number | Ref, message?: NumberLocale['moreThan']): NumberSchema<T, C>;
    positive(message?: NumberLocale['positive']): NumberSchema<T, C>;
    negative(message?: NumberLocale['negative']): NumberSchema<T, C>;
    integer(message?: NumberLocale['integer']): NumberSchema<T, C>;
    truncate(): NumberSchema<T, C>;
    round(type: 'floor' | 'ceil' | 'trunc' | 'round'): NumberSchema<T, C>;
    nullable(isNullable?: true): NumberSchema<T | null, C>;
    nullable(isNullable: false): NumberSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): NumberSchema<T, C>;
    required(message?: TestOptionsMessage): NumberSchema<Exclude<T, undefined | null>, C>;
    defined(): NumberSchema<Exclude<T, undefined>, C>;
    notRequired(): NumberSchema<T | undefined, C>;
    oneOf<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): NumberSchema<MaintainOptionality<T, U>, C>;
    equals<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): NumberSchema<MaintainOptionality<T, U>, C>;
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): NumberSchema<U, C>;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): NumberSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
    optional(): NumberSchema<T | undefined, C>;
}

export interface BooleanSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T extends boolean | null | undefined = boolean | undefined, C = object>(): BooleanSchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T extends boolean | null | undefined = boolean | undefined, C = object>(): BooleanSchema<T, C>;
}

export interface BooleanSchema<T extends boolean | null | undefined = boolean | undefined, C = object>
    extends Schema<T, C> {
    nullable(isNullable?: true): BooleanSchema<T | null, C>;
    nullable(isNullable: false): BooleanSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): BooleanSchema<T, C>;
    required(message?: TestOptionsMessage): BooleanSchema<Exclude<T, undefined | null>, C>;
    defined(): BooleanSchema<Exclude<T, undefined>, C>;
    notRequired(): BooleanSchema<T | undefined, C>;
    oneOf<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): BooleanSchema<MaintainOptionality<T, U>, C>;
    equals<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): BooleanSchema<MaintainOptionality<T, U>, C>;
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): BooleanSchema<U, C>;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): BooleanSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
    optional(): BooleanSchema<T | undefined, C>;
}

export interface DateSchemaConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <T extends Date | string | null | undefined = Date | undefined, C = object>(): DateSchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <T extends Date | string | null | undefined = Date | undefined, C = object>(): DateSchema<T, C>;
}

export interface DateSchema<T extends Date | string | null | undefined = Date | undefined, C = object> extends Schema<T, C> {
    min(limit: Date | string | Ref, message?: DateLocale['min']): DateSchema<T, C>;
    max(limit: Date | string | Ref, message?: DateLocale['max']): DateSchema<T, C>;
    nullable(isNullable?: true): DateSchema<T | null, C>;
    nullable(isNullable: false): DateSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): DateSchema<T, C>;
    required(message?: TestOptionsMessage): DateSchema<Exclude<T, undefined | null>, C>;
    defined(): DateSchema<Exclude<T, undefined>, C>;
    notRequired(): DateSchema<T | undefined, C>;
    oneOf<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): DateSchema<MaintainOptionality<T, U>, C>;
    equals<U extends T>(
        arrayOfValues: ReadonlyArray<U | Ref>,
        message?: MixedLocale['oneOf'],
    ): DateSchema<MaintainOptionality<T, U>, C>;
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): DateSchema<U, C>;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): DateSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
    optional(): DateSchema<T | undefined, C>;
}

export interface ArraySchemaConstructor {
    <T, C = object>(schema?: Schema<T, C>): NotRequiredArraySchema<T, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <C = object>(): NotRequiredArraySchema<{}, C>;
}

export interface BasicArraySchema<E, T extends E[] | null | undefined, C = object> extends Schema<T, C> {
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
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test(options: TestOptions<Record<string, any>, C>): this;
    innerType: Schema<E, C>;
}

export interface NotRequiredNullableArraySchema<T, C = object> extends BasicArraySchema<T, T[] | null | undefined, C> {
    of<U>(type: Schema<U, C>): NotRequiredNullableArraySchema<U, C>;
    nullable(isNullable?: true): NotRequiredNullableArraySchema<T, C>;
    nullable(isNullable: false): NotRequiredArraySchema<T, C>;
    nullable(isNullable?: boolean): ArraySchema<T, C>;
    required(message?: TestOptionsMessage): ArraySchema<T, C>;
    defined(): NullableArraySchema<T, C>;
    notRequired(): NotRequiredNullableArraySchema<T, C>;
    optional(): NotRequiredNullableArraySchema<T, C>;
}

export interface NullableArraySchema<T, C = object> extends BasicArraySchema<T, T[] | null, C> {
    of<U>(type: Schema<U, C>): NullableArraySchema<U, C>;
    nullable(isNullable?: true): NullableArraySchema<T, C>;
    nullable(isNullable: false): ArraySchema<T, C>;
    nullable(isNullable?: boolean): ArraySchema<T, C>;
    required(message?: TestOptionsMessage): ArraySchema<T, C>;
    defined(): NullableArraySchema<T, C>;
    notRequired(): NotRequiredNullableArraySchema<T, C>;
    optional(): NotRequiredNullableArraySchema<T, C>;
}

export interface NotRequiredArraySchema<T, C = object> extends BasicArraySchema<T, T[] | undefined, C> {
    of<U>(type: Schema<U, C>): NotRequiredArraySchema<U, C>;
    nullable(isNullable?: true): NotRequiredNullableArraySchema<T, C>;
    nullable(isNullable: false): NotRequiredArraySchema<T, C>;
    nullable(isNullable: boolean): ArraySchema<T, C>;
    required(message?: TestOptionsMessage): ArraySchema<T, C>;
    defined(): ArraySchema<T, C>;
    notRequired(): NotRequiredArraySchema<T, C>;
    optional(): NotRequiredArraySchema<T, C>;
}

export interface ArraySchema<T, C = object> extends BasicArraySchema<T, T[], C> {
    of<U>(type: Schema<U, C>): ArraySchema<U, C>;
    nullable(isNullable?: true): NullableArraySchema<T, C>;
    nullable(isNullable: false | boolean): ArraySchema<T, C>;
    required(message?: TestOptionsMessage): ArraySchema<T, C>;
    defined(): ArraySchema<T, C>;
    notRequired(): NotRequiredArraySchema<T, C>;
    optional(): NotRequiredArraySchema<T, C>;
}

export type ObjectSchemaDefinition<T extends object | null | undefined, C = object> = {
    // This shouldn't be necessary because MixedSchema extends Schema, but type
    // inference only works with it this way - otherwise when you use a mixed
    // field in object schema, it will type as `unknown`. Not sure why that is -
    // maybe some sort of inference depth limit?
    [field in keyof T]: Schema<T[field], C> | MixedSchema<T[field], C> | Ref;
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
    <T extends object, C = object>(fields?: ObjectSchemaDefinition<T, C>): ObjectSchema<T | undefined, C>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <C = object>(): ObjectSchema<{}, C>;
}

export interface ObjectSchema<T extends object | null | undefined = object | undefined, C = object>
    extends Schema<T, C> {
    fields: {
        [k in keyof T]: Schema<T[k], C>;
    };
    shape<U extends object>(
        fields: ObjectSchemaDefinition<U, C>,
        noSortEdges?: Array<[string, string]>,
    ): ObjectSchema<Shape<T, U>, C>;
    from(fromKey: string, toKey: string, alias?: boolean): ObjectSchema<T, C>;
    noUnknown(onlyKnownKeys?: boolean, message?: ObjectLocale['noUnknown']): ObjectSchema<T, C>;
    unknown(allow?: boolean, message?: ObjectLocale['noUnknown']): ObjectSchema<T, C>;
    transformKeys(callback: (key: any) => any): void;
    camelCase(): ObjectSchema<T, C>;
    snakeCase(): ObjectSchema<T, C>;
    constantCase(): ObjectSchema<T, C>;
    nullable(isNullable?: true): ObjectSchema<T | null, C>;
    nullable(isNullable: false): ObjectSchema<Exclude<T, null>, C>;
    nullable(isNullable?: boolean): ObjectSchema<T, C>;
    required(message?: TestOptionsMessage): ObjectSchema<Exclude<T, undefined | null>, C>;
    defined(): ObjectSchema<Exclude<T, undefined>, C>;
    notRequired(): ObjectSchema<T | undefined, C>;
    optional(): ObjectSchema<T | undefined, C>;
    concat(schema: this): this;
    concat<U extends object>(schema: ObjectSchema<U, C>): ObjectSchema<T & U, C>;
    oneOf<U extends T>(arrayOfValues: ReadonlyArray<U | Ref>, message?: MixedLocale['oneOf']): ObjectSchema<U, C>;
    equals<U extends T>(arrayOfValues: ReadonlyArray<U | Ref>, message?: MixedLocale['oneOf']): ObjectSchema<U, C>;
    test(name: string, message: TestOptionsMessage, test: TestFunction<T | undefined | null, C>): this;
    test<U extends T = T>(
        name: string,
        message: TestOptionsMessage,
        test: AssertingTestFunction<U, C>,
    ): ObjectSchema<U, C>;
    test<U extends T = T>(options: AssertingTestOptions<U, Record<string, any>, C>): ObjectSchema<U, C>;
    test(options: TestOptions<Record<string, any>, C>): this;
}

export type TestFunction<T = unknown, C = object> = (
    this: TestContext<C>,
    value: T,
    context: TestContext<C>
) => boolean | ValidationError | Promise<boolean | ValidationError>;
export type AssertingTestFunction<T, C> = (this: TestContext<C>, value: any, context: TestContext<C>) => value is T;

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

export interface TestContext<C = object> {
    path: string;
    options: ValidateOptions<C>;
    parent: any;
    schema: Schema<any, C>;
    originalValue: any;
    resolve: (value: any) => any;
    createError: (params?: { path?: string; message?: string; params?: object }) => ValidationError;
}

export interface ValidateOptions<C = object> {
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
    context?: C;
}

export interface TestMessageParams {
    path: string;
    value: any;
    originalValue: any;
    label: string;
}

interface BaseTestOptions<P extends Record<string, any>, C = object> {
    /**
     * Unique name identifying the test. Required for exclusive tests.
     */
    name?: string;

    /**
     * Test function, determines schema validity
     */
    test: TestFunction<unknown, C>;

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

interface NonExclusiveTestOptions<P extends Record<string, any>, C> extends BaseTestOptions<P, C> {
    exclusive?: false;
}

interface ExclusiveTestOptions<P extends Record<string, any>, C> extends BaseTestOptions<P, C> {
    exclusive: true;
    name: string;
}

interface NonExclusiveAssertingTestOptions<U, P extends Record<string, any>, C> extends NonExclusiveTestOptions<P, C> {
    test: AssertingTestFunction<U, C>;
}

interface ExclusiveAssertingTestOptions<U, P extends Record<string, any>, C> extends ExclusiveTestOptions<P, C> {
    test: AssertingTestFunction<U, C>;
}

export type TestOptions<P extends Record<string, any> = {}, C = object> =
    | NonExclusiveTestOptions<P, C>
    | ExclusiveTestOptions<P, C>;

export type AssertingTestOptions<U, P extends Record<string, any> = {}, C = object> =
    | NonExclusiveAssertingTestOptions<U, P, C>
    | ExclusiveAssertingTestOptions<U, P, C>;

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

export interface Lazy extends Schema<any> {}

export interface FormatErrorParams {
    path: string;
    type: string;
    value?: any;
    originalValue?: any;
}

export type LocaleValue = string | ((params: FormatErrorParams) => string);

export interface MixedLocale {
    default?: TestOptionsMessage;
    required?: TestOptionsMessage;
    oneOf?: TestOptionsMessage<{ values: any }>;
    notOneOf?: TestOptionsMessage<{ values: any }>;
    notType?: LocaleValue;
    defined?: TestOptionsMessage;
}

export interface StringLocale {
    length?: TestOptionsMessage<{ length: number }>;
    min?: TestOptionsMessage<{ min: number }>;
    max?: TestOptionsMessage<{ max: number }>;
    matches?: TestOptionsMessage<{ regex: RegExp }>;
    email?: TestOptionsMessage<{ regex: RegExp }>;
    url?: TestOptionsMessage<{ regex: RegExp }>;
    uuid?: TestOptionsMessage<{ regex: RegExp }>;
    trim?: TestOptionsMessage;
    lowercase?: TestOptionsMessage;
    uppercase?: TestOptionsMessage;
}

export interface NumberLocale {
    min?: TestOptionsMessage<{ min: number }>;
    max?: TestOptionsMessage<{ max: number }>;
    lessThan?: TestOptionsMessage<{ less: number }>;
    moreThan?: TestOptionsMessage<{ more: number }>;
    notEqual?: TestOptionsMessage<{ notEqual: number }>;
    positive?: TestOptionsMessage<{ more: number }>;
    negative?: TestOptionsMessage<{ less: number }>;
    integer?: TestOptionsMessage;
}

export interface DateLocale {
    min?: TestOptionsMessage<{ min: Date | string }>;
    max?: TestOptionsMessage<{ max: Date | string }>;
}

export interface ObjectLocale {
    noUnknown?: TestOptionsMessage<{ unknown: string }>;
}

export interface ArrayLocale {
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
type Id<T> = {
    [K in keyof T]: T[K] extends object ? InnerInferType<T[K]> : T[K];
};
type RequiredProps<T> = Pick<T, Exclude<keyof T, KeyOfUndefined<T>>>;
type NotRequiredProps<T> = Partial<Pick<T, KeyOfUndefined<T>>>;
type InnerInferType<T> =
    | (T extends Array<infer T> ? InnerInferTypeArray<T> : Id<NotRequiredProps<T> & RequiredProps<T>>)
    | PreserveOptionals<T>;
interface InnerInferTypeArray<T> extends Array<InnerInferType<T>> {}
type InferredArrayType<T> = T extends Array<infer U> ? U : T;
/** If `T` is optional, returns optional `U`. */
type MaintainOptionality<T, U> = T extends undefined ? U | undefined : U;
