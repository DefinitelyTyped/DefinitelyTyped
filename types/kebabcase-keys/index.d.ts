/**
 * Return a default type if input type is nil.
 * @template T - Input type.
 * @template U - Default type.
 */
type WithDefault<T, U> = T extends undefined ? U : T;

/**
 * Allow union with, for example, `undefined` and `null`.
 */
type ObjectUnion = Record<string, unknown> | unknown;

type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? "-" : ""}${Lowercase<T>}${CamelToKebab<U>}`
    : S;

type PascalToKebab<S extends string> = CamelToKebab<Uncapitalize<S>>;

type SnakeToKebab<S extends string> = S extends `${infer T}_${infer U}` ? `${T}-${SnakeToKebab<U>}` : S;

type SpaceToKebab<S extends string> = S extends `${infer T}${Whitespace}${infer U}` ? `${T}-${SnakeToKebab<U>}` : S;

type ContainWordSeparatorsToKebab<S extends string> = S extends `${infer T}-${infer U}` ? S
    : S extends `${infer T}_${infer U}` ? SnakeToKebab<Lowercase<S>>
    : SpaceToKebab<S>;

type AnyCaseToKebab<S extends string> = S extends `${infer T}${WordSeparators}${infer U}`
    ? ContainWordSeparatorsToKebab<S>
    : S extends Uppercase<S> ? Lowercase<S>
    : S extends Capitalize<S> ? PascalToKebab<S>
    : CamelToKebab<S>;

type KebabCase<S extends string | number | symbol> = S extends number ? `${S}`
    : S extends symbol ? never
    : S extends string ? AnyCaseToKebab<S>
    : S;

declare namespace kebabcaseKeys {
    type KebabCasedProperties<
        T extends ObjectUnion | ReadonlyArray<Record<string, unknown>>,
        Deep extends boolean = false,
        Exclude extends ReadonlyArray<string | RegExp> = [],
    > = T extends ReadonlyArray<Record<string, unknown>> ? {
            [Key in keyof T]: KebabCasedProperties<T[Key], Deep, Exclude>;
        }
        : T extends ObjectUnion ? {
                [Key in keyof T as Array<Includes<Exclude, Key>> extends Array<true> ? Key : KebabCase<Key>]:
                    T[Key] extends
                        | ObjectUnion
                        | ReadonlyArray<Record<string, unknown>>
                        ? Deep[] extends Array<true> ? KebabCasedProperties<T[Key], Deep, Exclude>
                        : T[Key]
                        : T[Key];
            }
        : T;

    interface Options {
        /**
         * Recurse nested objects and objects in arrays.
         * @default false
         */
        readonly deep?: boolean;

        /**
         * Exclude keys from being kebab-cased.
         * @default []
         */
        readonly exclude?: ReadonlyArray<string | RegExp>;
    }
}

/**
 * Convert object keys to kebabcase.
 * @param input - Object or array of objects to snake-case.
 * @param options - Options of conversion.
 */
declare function kebabcaseKeys<
    T extends Record<string, unknown> | ReadonlyArray<Record<string, unknown>>,
    OptionsType extends kebabcaseKeys.Options,
>(
    input: T,
    options?: OptionsType,
): kebabcaseKeys.KebabCasedProperties<
    T,
    WithDefault<OptionsType["deep"], false>,
    WithDefault<OptionsType["exclude"], []>
>;

export = kebabcaseKeys;

// based on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59806#pullrequestreview-942584759
// Copied from https://github.com/sindresorhus/type-fest
type WordSeparators = "-" | "_" | Whitespace;
type Whitespace =
    | "\u{9}" // '\t'
    | "\u{A}" // '\n'
    | "\u{B}" // '\v'
    | "\u{C}" // '\f'
    | "\u{D}" // '\r'
    | "\u{20}" // ' '
    | "\u{85}"
    | "\u{A0}"
    | "\u{1680}"
    | "\u{2000}"
    | "\u{2001}"
    | "\u{2002}"
    | "\u{2003}"
    | "\u{2004}"
    | "\u{2005}"
    | "\u{2006}"
    | "\u{2007}"
    | "\u{2008}"
    | "\u{2009}"
    | "\u{200A}"
    | "\u{2028}"
    | "\u{2029}"
    | "\u{202F}"
    | "\u{205F}"
    | "\u{3000}"
    | "\u{FEFF}";
type IsEqual<A, B> = A[] extends B[] ? (B[] extends A[] ? true : false) : false;
type Includes<Value extends readonly any[], Item> = Value extends readonly [Value[0], ...infer rest]
    ? IsEqual<Value[0], Item> extends true ? true
    : Includes<rest, Item>
    : false;
