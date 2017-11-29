// Type definitions for yup 0.23
// Project: https://github.com/jquense/yup
// Definitions by: 
// Dominik Hardtke <https://github.com/dhardtke>
// Vladyslav Tserman <https://github.com/vtserman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace yup;

export function reach(schema: Schema, path: string, value?: any, context?: any): Schema;
export function addMethod(schemaType: Schema, name: string, method: () => Schema): void;
export function ref(path: string, options: { contextPrefix: string }): Ref;
export function lazy(fn: (value: any) => Schema): Lazy;
export function mixed(): Schema;
export function string(): StringSchema;
export function number(): NumberSchema;
export function boolean(): BooleanSchema;
export function date(): DateSchema;
export function array(): ArraySchema;
export function object(): ObjectSchema;

export interface ValidationError {
    errors: string | Array<string>;
    value: any;
    path: string;
    inner?: Array<ValidationError>;
}

interface Ref {
}

interface Lazy {
}

interface Schema {
    clone(): Schema;
    label(label: string): Schema;
    meta(metadata: any): Schema;
    describe(): SchemaDescription;
    concat(schema: Schema): Schema;
    validate(value: any, options?: ValidateOptions, callback?: () => void): Promise<any>;
    isValid(value: any, options?: any, callback?: () => void): Promise<any>;
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
    oneOf(arrayOfValues: Array<any>, message?: string): Schema;
    equals(arrayOfValues: Array<any>, message?: string): Schema;
    notOneOf(arrayOfValues: Array<any>, message?: string): Schema;
    when(keys: string | Array<string>, builder: any | ((value: any, schema: Schema) => Schema)): Schema;
    test(name: string, message: string, test: Function, callbackStyleAsync?: boolean): Schema;
    test(options: any): Schema;
    transform(transformation: (currentValue: any, originalValue: any) => any): Schema;
}

interface StringSchema extends Schema {
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

interface NumberSchema extends Schema {
    min(limit: number | Ref, message?: string): NumberSchema;
    max(limit: number | Ref, message?: string): NumberSchema;
    positive(message?: string): NumberSchema;
    negative(message?: string): NumberSchema;
    integer(message?: string): NumberSchema;
    truncate(): NumberSchema;
    round(type: "floor" | "ceil" | "trunc" | "round"): NumberSchema;
}

interface BooleanSchema extends Schema {

}

interface DateSchema extends Schema {
    min(limit: Date | string | Ref, message?: string): DateSchema;
    max(limit: Date | string | Ref, message?: string): DateSchema;
}

interface ArraySchema extends Schema {
    of(type: Schema): ArraySchema;
    required(message?: string): ArraySchema;
    min(limit: number | Ref, message?: string): ArraySchema;
    max(limit: number | Ref, message?: string): ArraySchema;
    ensure(): ArraySchema;
    compact(rejector: (value: any) => boolean): ArraySchema;
}

interface ObjectSchema extends Schema {
    shape(fields: any, noSortEdges?: Array<[string, string]>): ObjectSchema;
    from(fromKey: string, toKey: string, alias: boolean): ObjectSchema;
    noUnknown(onlyKnownKeys: boolean, message?: string): ObjectSchema;
    camelCase(): ObjectSchema;
    constantCase(): ObjectSchema;
}

interface ValidateOptions {

}

interface SchemaDescription {
    type: string;
    label: string;
    meta: object;
    tests: Array<string>;
}

