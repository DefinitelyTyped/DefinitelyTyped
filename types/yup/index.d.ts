// Type definitions for yup 0.23
// Project: https://github.com/jquense/yup
// Definitions by: Dominik Hardtke <https://github.com/dhardtke>, Vladyslav Tserman <https://github.com/vtserman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function reach(schema: Schema, path: string, value?: any, context?: any): Schema;
export function addMethod(schemaType: Schema, name: string, method: () => Schema): void;
export function ref(path: string, options: { contextPrefix: string }): Ref;
export function lazy(fn: (value: any) => Schema): Lazy;

export const mixed: SchemaConstructor;
export const string: StringSchemaConstructor;
export const number: NumberSchemaConstructor;
export const boolean: BooleanSchemaConstructor;
export const bool: BooleanSchemaConstructor;
export const date: DateSchemaConstructor;
export const array: ArraySchemaConstructor;
export const object: ObjectSchemaConstructor;

export interface ValidationError {
    errors: string | string[];
    value: any;
    path: string;
    inner?: ValidationError[];
}

export interface Ref {
}

export interface Lazy {
}

export interface SchemaConstructor {
    (): Schema;
    new(options?: any): Schema;
}

export interface Schema {
    clone(): Schema;
    label(label: string): Schema;
    meta(metadata: any): Schema;
    meta(): any;
    describe(): SchemaDescription;
    concat(schema: Schema): Schema;
    validate(value: any, options?: ValidateOptions, callback?: () => void): Promise<any>;
    validateSync(value: any, options?: ValidateOptions): any;
    isValid(value: any, options?: any, callback?: () => void): Promise<boolean>;
    isValidSync(value: any, options?: any): boolean;
    cast(value: any): any;
    isType(value: any): boolean;
    strict(isStrict: boolean): Schema;
    strip(stripField: boolean): Schema;
    withMutation(builder: (current: Schema) => void): void;
    default(value: any): Schema;
    default(): any;
    nullable(isNullable: boolean): Schema;
    required(message?: string): Schema;
    typeError(message?: string): Schema;
    oneOf(arrayOfValues: any[], message?: string): Schema;
    notOneOf(arrayOfValues: any[], message?: string): Schema;
    when(keys: string | any[], builder: ((value: any, schema: Schema) => Schema) | object): Schema;
    test(name: string, message: string, test: (value: any) => boolean, callbackStyleAsync?: boolean): Schema;
    test(options: TestOptions): Schema;
    transform(transformation: (currentValue: any, originalValue: any) => any): Schema;
}

export interface StringSchemaConstructor {
    (): StringSchema;
    new(): StringSchema;
}

export interface StringSchema extends Schema {
    required(message?: string): StringSchema;
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
    required(message?: string): NumberSchema;
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
    required(message?: string): ArraySchema;
    min(limit: number | Ref, message?: string): ArraySchema;
    max(limit: number | Ref, message?: string): ArraySchema;
    ensure(): ArraySchema;
    compact(rejector: (value: any) => boolean): ArraySchema;
}

export interface ObjectSchemaConstructor {
    (): ObjectSchema;
    new(): ObjectSchema;
}

export interface ObjectSchema extends Schema {
    shape(fields: any, noSortEdges?: Array<[string, string]>): ObjectSchema;
    from(fromKey: string, toKey: string, alias: boolean): ObjectSchema;
    noUnknown(onlyKnownKeys: boolean, message?: string): ObjectSchema;
    transformKeys(callback: (key: any) => any): void
    camelCase(): ObjectSchema;
    constantCase(): ObjectSchema;
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
