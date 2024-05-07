type CamelSeparator = "-" | "_" | ".";

/**
 * Converts a string to camel case.
 */
type CamelCase<S extends string> = S extends `${infer FirstWord}${CamelSeparator}${infer SecondChar}${infer Remaining}`
    ? `${Lowercase<FirstWord>}${Uppercase<SecondChar>}${CamelCase<Remaining>}`
    : Lowercase<S>;

type Camelize<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K] extends {} ? Camelize<T[K]> : T[K];
};

declare function camelize<T>(obj: T): T extends string ? CamelCase<T>
    : T extends RegExp ? T
    : T extends Date ? T
    : T extends {} ? Camelize<T>
    : T;

export = camelize;
