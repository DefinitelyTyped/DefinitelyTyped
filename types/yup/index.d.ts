// Type definitions for yup 0.26
// Project: https://github.com/jquense/yup
// Definitions by: Dominik Hardtke <https://github.com/dhardtke>,
//                 Vladyslav Tserman <https://github.com/vtserman>,
//                 Moreton Bay Regional Council <https://github.com/MoretonBayRC>,
//                 Sindre Seppola <https://github.com/sseppola>
//                 Yash Kulshrestha <https://github.com/YashdalfTheGray>
//                 Vincent Pizzo <https://github.com/vincentjames501>
//                 Robert Bullen <https://github.com/robertbullen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function reach<T>(
    schema: Schema<T>,
    path: string,
    value?: any,
    context?: any
): Schema<T>;
export function addMethod<T extends Schema<any>>(
    schemaCtor: AnySchemaConstructor,
    name: string,
    method: (this: T, ...args: any[]) => T
): void;
export function ref(path: string, options?: { contextPrefix: string }): Ref;
export function lazy<T>(fn: (value: T) => Schema<T>): Lazy;
export function ValidationError(
    errors: string | string[],
    value: any,
    path: string,
    type?: any
): ValidationError;
export function setLocale(customLocale: LocaleObject): void;

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

export type TestOptionsMessage = string
    | ((params: object & Partial<TestMessageParams>) => string);

export interface Schema<T> {
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
    cast(value: any, options?: any): T;
    isType(value: any): value is T;
    strict(isStrict: boolean): this;
    strip(strip: boolean): this;
    withMutation(fn: (current: this) => void): void;
    default(value?: any): this;
    nullable(isNullable: boolean): this;
    required(message?: TestOptionsMessage): this;
    notRequired(): this;
    typeError(message?: TestOptionsMessage): this;
    oneOf(arrayOfValues: any[], message?: TestOptionsMessage): this;
    notOneOf(arrayOfValues: any[], message?: TestOptionsMessage): this;
    when(keys: string | any[], builder: WhenOptions<this>): this;
    test(
        name: string,
        message:
            | string
            | ((params: object & Partial<TestMessageParams>) => string),
        test: (
            this: TestContext,
            value?: any
        ) => boolean | ValidationError | Promise<boolean | ValidationError>,
        callbackStyleAsync?: boolean
    ): this;
    test(options: TestOptions): this;
    transform(fn: TransformFunction<this>): this;
}

export interface MixedSchemaConstructor {
    (): MixedSchema;
    new (options?: { type?: string; [key: string]: any }): MixedSchema;
}

// tslint:disable-next-line:no-empty-interface
export interface MixedSchema extends Schema<any> {}

export interface StringSchemaConstructor {
    (): StringSchema;
    new (): StringSchema;
}

export interface StringSchema extends Schema<string> {
    min(limit: number | Ref, message?: TestOptionsMessage): StringSchema;
    max(limit: number | Ref, message?: TestOptionsMessage): StringSchema;
    matches(
        regex: RegExp,
        messageOrOptions?:
            | TestOptionsMessage
            | { message?: TestOptionsMessage; excludeEmptyString?: boolean }
    ): StringSchema;
    email(message?: TestOptionsMessage): StringSchema;
    url(message?: TestOptionsMessage): StringSchema;
    ensure(): StringSchema;
    trim(message?: TestOptionsMessage): StringSchema;
    lowercase(message?: TestOptionsMessage): StringSchema;
    uppercase(message?: TestOptionsMessage): StringSchema;
}

export interface NumberSchemaConstructor {
    (): NumberSchema;
    new (): NumberSchema;
}

export interface NumberSchema extends Schema<number> {
    min(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    max(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    lessThan(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    moreThan(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    positive(message?: TestOptionsMessage): NumberSchema;
    negative(message?: TestOptionsMessage): NumberSchema;
    integer(message?: TestOptionsMessage): NumberSchema;
    truncate(): NumberSchema;
    round(type: "floor" | "ceil" | "trunc" | "round"): NumberSchema;
}

export interface BooleanSchemaConstructor {
    (): BooleanSchema;
    new (): BooleanSchema;
}

// tslint:disable-next-line:no-empty-interface
export interface BooleanSchema extends Schema<boolean> {}

export interface DateSchemaConstructor {
    (): DateSchema;
    new (): DateSchema;
}

export interface DateSchema extends Schema<Date> {
    min(limit: Date | string | Ref, message?: TestOptionsMessage): DateSchema;
    max(limit: Date | string | Ref, message?: TestOptionsMessage): DateSchema;
}

export interface ArraySchemaConstructor {
    <T>(schema?: Schema<T>): ArraySchema<T>;
    new (): ArraySchema<{}>;
}

export interface ArraySchema<T> extends Schema<T[]> {
    of<U>(type: Schema<U>): ArraySchema<U>;
    min(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    ensure(): ArraySchema<T>;
    compact(rejector?: (value: any) => boolean): ArraySchema<T>;
}

export type ObjectSchemaDefinition<T extends object> = { [field in keyof T]: Schema<T[field]> | Ref };

/**
 * Merges two interfaces. For properties in common, property types from `U` trump those of `T`.
 * This is conducive to the functionality of
 * [yup's `object.shape()` method](https://www.npmjs.com/package/yup#objectshapefields-object-nosortedges-arraystring-string-schema).
 */
export type Shape<T extends object, U extends object> = { [P in keyof T]: P extends keyof U ? U[P] : T[P] } & U;

export interface ObjectSchemaConstructor {
    <T extends object>(fields?: ObjectSchemaDefinition<T>): ObjectSchema<T>;
    new (): ObjectSchema<{}>;
}

export interface ObjectSchema<T extends object> extends Schema<T> {
    shape<U extends object>(
        fields: ObjectSchemaDefinition<U>,
        noSortEdges?: Array<[string, string]>
    ): ObjectSchema<Shape<T, U>>;
    from(fromKey: string, toKey: string, alias?: boolean): ObjectSchema<T>;
    noUnknown(onlyKnownKeys?: boolean, message?: TestOptionsMessage): ObjectSchema<T>;
    transformKeys(callback: (key: any) => any): void;
    camelCase(): ObjectSchema<T>;
    constantCase(): ObjectSchema<T>;
}

export type TransformFunction<T> = ((
    this: T,
    value: any,
    originalValue: any
) => any);

export interface WhenOptionsBuilder<T> {
    (value: any, schema: T): T;
    (v1: any, v2: any, schema: T): T;
    (v1: any, v2: any, v3: any, schema: T): T;
    (v1: any, v2: any, v3: any, v4: any, schema: T): T;
}

export type WhenOptions<T> =
    | WhenOptionsBuilder<T>
    | { is: boolean | ((value: any) => boolean); then: any; otherwise: any }
    | object;

export interface TestContext {
    path: string;
    options: ValidateOptions;
    parent: any;
    schema: Schema<any>;
    resolve: (value: any) => any;
    createError: (params: { path: string; message: string }) => ValidationError;
}

export interface ValidateOptions {
    /**
     * Only validate the input, and skip and coercion or transformation. Default - false
     */
    strict?: boolean;
    /**
     * Teturn from validation methods on the first error rather than after all validations run. Default - true
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

export interface TestOptions {
    /**
     * Unique name identifying the test
     */
    name?: string;

    /**
     * Test function, determines schema validity
     */
    test: (
        this: TestContext,
        value: any
    ) => boolean | ValidationError | Promise<boolean | ValidationError>;

    /**
     * The validation error message
     */
    message?: TestOptionsMessage;

    /**
     * Values passed to message for interpolation
     */
    params?: object;

    /**
     * Mark the test as exclusive, meaning only one of the same can be active at once
     */
    exclusive?: boolean;
}

export interface SchemaDescription {
    type: string;
    label: string;
    meta: object;
    tests: string[];
    fields: object;
}

export interface ValidationError {
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

export interface LocaleObject {
    mixed?: { [key in keyof MixedSchema]?: string };
    string?: { [key in keyof StringSchema]?: string };
    number?: { [key in keyof NumberSchema]?: string };
    boolean?: { [key in keyof BooleanSchema]?: string };
    bool?: { [key in keyof BooleanSchema]?: string };
    date?: { [key in keyof DateSchema]?: string };
    array?: { [key in keyof ArraySchema<any>]?: string };
    object?: { [key in keyof ObjectSchema<any>]?: string };
}
