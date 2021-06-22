/**
 * Credits to Piotr Witek (http://piotrwitek.github.io) and utility-type project (https://github.com/piotrwitek/utility-types)
 */

export type Assign<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T> & Diff<U, T>> = Pick<
    I,
    keyof I
>;

export type Diff<T extends object, U extends object> = Pick<T, Exclude<keyof T, keyof U>>;

export type PickByValue<T, ValueType> = Pick<T, { [Key in keyof T]: T[Key] extends ValueType ? Key : never }[keyof T]>;

export type Intersection<T extends object, U extends object> = Pick<
    T,
    Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;

export type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T];

export type KnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
    ? U
    : never;
