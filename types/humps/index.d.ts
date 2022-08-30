// Type definitions for humps 2.0
// Project: https://github.com/domchristie/humps
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 4.1

export type SnakeToCamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${SnakeToCamelCase<P3>}`
    : S;

export type Camelized<T> = {
    [K in keyof T as SnakeToCamelCase<string & K>]: T[K] extends Array<(infer U)>
        ? U extends {}
            ? Array<Camelized<U>>
            : T[K]
        : T[K] extends {}
            ? Camelized<T[K]>
            : T[K];
};

export type SnakeToPascalCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Capitalize<P1>}${Uppercase<P2>}${SnakeToPascalCase<P3>}`
    : S;

export type Pascalized<T> = {
    [K in keyof T as SnakeToPascalCase<string & K>]: T[K] extends Array<(infer U)>
        ? U extends {}
            ? Array<Pascalized<U>>
            : T[K]
        : T[K] extends {}
            ? Pascalized<T[K]>
            : T[K];
};

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
    : S;

export type Decamelized<T> = {
    [K in keyof T as CamelToSnakeCase<string & K>]: T[K] extends Array<(infer U)>
        ? U extends {}
            ? Array<Decamelized<U>>
            : T[K]
        : T[K] extends {}
            ? Decamelized<T[K]>
            : T[K];
};

export type PascalToSnakeCase<S extends string> = S extends `${infer T1}${infer T2}${infer U}`
    ? `${T2 extends Capitalize<T2> ? '_' : ''}${Lowercase<T1>}${Lowercase<T2>}${CamelToSnakeCase<U>}`
    : S;

export type Depascalized<T> = {
    [K in keyof T as CamelToSnakeCase<string & K>]: T[K] extends Array<(infer U)>
        ? U extends {}
            ? Array<Decamelized<U>>
            : T[K]
        : T[K] extends {}
            ? Decamelized<T[K]>
            : T[K];
};

export function camelize<T extends string>(value: T): SnakeToCamelCase<T>;

export function pascalize<T extends string>(value: T): SnakeToPascalCase<T>;

export function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
export function decamelize<T extends string>(value: T): CamelToSnakeCase<T>;

export function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
export function depascalize<T extends string>(value: T): PascalToSnakeCase<T>;

export function camelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function camelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
export function camelizeKeys<T>(str: T, optionsOrProcessor?: OptionOrProcessor): Camelized<T>;

export function pascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function pascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
export function pascalizeKeys<T>(str: T, optionsOrProcessor?: OptionOrProcessor): Pascalized<T>;

export function decamelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function decamelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
export function decamelizeKeys<T>(str: T, optionsOrProcessor?: OptionOrProcessor): Decamelized<T>;

export function depascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function depascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
export function depascalizeKeys<T>(str: T, optionsOrProcessor?: OptionOrProcessor): Depascalized<T>;

export interface HumpsOptions {
    separator?: string | undefined;
    split?: RegExp | undefined;
    process?: HumpsProcessor | undefined;
}
export interface HumpsProcessor {
    (key: string, convert: HumpsProcessorParameter, options?: HumpsOptions): string;
}
export interface HumpsProcessorParameter {
    (key: string, options?: HumpsOptions): string;
}
export type OptionOrProcessor = HumpsOptions | HumpsProcessor;

export as namespace humps;
