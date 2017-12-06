// Type definitions for yup 0.23
// Project: https://github.com/jquense/yup
// Definitions by: Dominik Hardtke <https://github.com/dhardtke>, Vladyslav Tserman <https://github.com/vtserman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function reach(schema: Schema, path: string, value?: any, context?: any): Schema;
export function addMethod(schemaType: Schema, name: string, method: (this: Schema) => Schema): void;
export function ref(path: string, options?: { contextPrefix: string }): Ref;
export function lazy(fn: (value: any) => Schema): Lazy;
export function ValidationError(errors: string | string[], value: any, path: string, type?: any): ValidationError;

export const mixed: MixedSchemaConstructor;
export const string: StringSchemaConstructor;
export const number: NumberSchemaConstructor;
export const boolean: BooleanSchemaConstructor;
export const bool: BooleanSchemaConstructor;
export const date: DateSchemaConstructor;
export const array: ArraySchemaConstructor;
export const object: ObjectSchemaConstructor;

export interface Schema {
    clone(): this;
    label(label: string): this;
    meta(metadata: any): this;
    meta(): any;
    describe(): SchemaDescription;
    concat(schema: this): this;
    validate<U>(value: U, options?: ValidateOptions): Promise<ValidationError|U>;
    validateSync<U>(value: U, options?: ValidateOptions): ValidationError|U;
    isValid(value: any, options?: any): Promise<boolean>;
    isValidSync(value: any, options?: any): boolean;
    cast(value: any, options?: any): any;
    isType(value: any): boolean;
    strict(isStrict: boolean): this;
    strip(strip: boolean): this;
    withMutation(fn: (current: this) => void): void;
    default(value?: any): this;
    nullable(isNullable: boolean): this;
    required(message?: string): this;
    typeError(message?: string): this;
    oneOf(arrayOfValues: any[], message?: string): this;
    notOneOf(arrayOfValues: any[], message?: string): this;
    when(keys: string | any[], builder: WhenOptions<this>): this;
    test(name: string, message: string, test: (value?: any) => boolean, callbackStyleAsync?: boolean): this;
    test(options: TestOptions): this;
    transform(fn: TransformFunction<this>): this;
}

export interface MixedSchemaConstructor {
  (): MixedSchema;
  new(options?: { type?: string, [key: string]: any }): MixedSchema;
}

// tslint:disable-next-line:no-empty-interface
export interface MixedSchema extends Schema {
}

export interface StringSchemaConstructor {
    (): StringSchema;
    new(): StringSchema;
}

export interface StringSchema extends Schema {
    min(limit: number | Ref, message?: string): StringSchema;
    max(limit: number | Ref, message?: string): StringSchema;
    matches(regex: RegExp, message?: string): StringSchema;
    email(message?: string): StringSchema;
    url(message?: string): StringSchema;
    ensure(): StringSchema;
    trim(message?: string): StringSchema;
    lowercase(message?: string): StringSchema;
    uppercase(message?: string): StringSchema;
}

export interface NumberSchemaConstructor {
    (): NumberSchema;
    new(): NumberSchema;
}

export interface NumberSchema extends Schema {
    min(limit: number | Ref, message?: string): NumberSchema;
    max(limit: number | Ref, message?: string): NumberSchema;
    positive(message?: string): NumberSchema;
    negative(message?: string): NumberSchema;
    integer(message?: string): NumberSchema;
    truncate(): NumberSchema;
    round(type: "floor" | "ceil" | "trunc" | "round"): NumberSchema;
}

export interface BooleanSchemaConstructor {
    (): BooleanSchema;
    new(): BooleanSchema;
}

// tslint:disable-next-line:no-empty-interface
export interface BooleanSchema extends Schema {
}

export interface DateSchemaConstructor {
    (): DateSchema;
    new(): DateSchema;
}

export interface DateSchema extends Schema {
    min(limit: Date | string | Ref, message?: string): DateSchema;
    max(limit: Date | string | Ref, message?: string): DateSchema;
}

export interface ArraySchemaConstructor {
    (): ArraySchema;
    new(): ArraySchema;
}

export interface ArraySchema extends Schema {
    of(type: Schema): ArraySchema;
    min(limit: number | Ref, message?: string): ArraySchema;
    max(limit: number | Ref, message?: string): ArraySchema;
    ensure(): ArraySchema;
    compact(rejector: (value: any) => boolean): ArraySchema;
}

export interface ObjectSchemaConstructor {
    (fields?: any): ObjectSchema;
    new(): ObjectSchema;
}

export interface ObjectSchema extends Schema {
    shape(fields: any, noSortEdges?: Array<[string, string]>): ObjectSchema;
    from(fromKey: string, toKey: string, alias?: boolean): ObjectSchema;
    noUnknown(onlyKnownKeys: boolean, message?: string): ObjectSchema;
    transformKeys(callback: (key: any) => any): void;
    camelCase(): ObjectSchema;
    constantCase(): ObjectSchema;
}

export type TransformFunction<T> = ((this: T, value: any, originalValue: any) => any);

export interface WhenOptionsBuilder<T> {
    (value: any, schema: T): T;
    (v1: any, v2: any, schema: T): T;
    (v1: any, v2: any, v3: any, schema: T): T;
    (v1: any, v2: any, v3: any, v4: any, schema: T): T;
}

export type WhenOptions<T> = WhenOptionsBuilder<T>
| { is: boolean | ((value: any) => boolean), then: any, otherwise: any }
| object;

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

export interface TestOptions {
    /**
     * Unique name identifying the test
     */
    name?: string;

    /**
     * Test function, determines schema validity
     */
    test: (value: any) => boolean;

    /**
     * The validation error message
     */
    message?: string;

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
    errors: string | string[];

    /**
     * In the case of aggregate errors, inner is an array of ValidationErrors throw earlier in the validation chain.
     */
    inner: ValidationError[];
    params?: object;
}

export interface Ref {
    [key: string]: any;
}

// tslint:disable-next-line:no-empty-interface
export interface Lazy extends Schema {
}
