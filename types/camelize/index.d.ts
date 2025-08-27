type CamelSeparator = "-" | "_" | ".";

/**
 * Converts a string to camel case.
 */
type CamelCase<S extends string> = S extends `${infer FirstWord}${CamelSeparator}${infer SecondChar}${infer Remaining}`
    ? `${Lowercase<FirstWord>}${Uppercase<SecondChar>}${CamelCase<Remaining>}`
    : Lowercase<S>;

type Camelize<T> = T extends Date ? T
    : T extends RegExp ? T
    : T extends Array<infer I> ? Array<Camelize<I>>
    : T extends object ? {
            [K in keyof T as CamelCase<string & K>]: Camelize<T[K]>;
        }
    : T;

declare function camelize<T>(obj: T): T extends string ? CamelCase<T> : Camelize<T>;

export = camelize;
