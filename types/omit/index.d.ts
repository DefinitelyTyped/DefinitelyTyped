type Key = string | readonly string[];
type KeyAsStringType<K extends Key> = K extends readonly string[] ? K[number] : K;
type Rule<K extends Key, V> = Key | ((key: K, value: V, target: Record<KeyAsStringType<K>, V>) => boolean);

type OmitMultiple<T, K extends Key> = Pick<T, Exclude<keyof T, KeyAsStringType<K>>>;
type MaybeOmitMultiple<T, K extends Key> =
    & OmitMultiple<T, K>
    & {
        [P in Extract<keyof T, KeyAsStringType<K>>]?: T[P];
    };

// Static key
declare function omit<K extends Key>(key: K): <T>(target: T) => T extends Array<infer T> ? Array<OmitMultiple<T, K>>
    : OmitMultiple<T, K>;
// Static key, with target
declare function omit<T, K extends Key>(key: K, target: T): T extends Array<infer T> ? Array<OmitMultiple<T, K>>
    : OmitMultiple<T, K>;
// Custom key
declare function omit<K extends Key>(
    rule: Rule<K, any>,
): <T>(target: T) => T extends Array<infer T> ? Array<MaybeOmitMultiple<T, K>>
    : MaybeOmitMultiple<T, K>;
// Custom key, with target
declare function omit<T, K extends Key>(
    key: Rule<K, any>,
    target: T,
): T extends Array<infer T> ? Array<MaybeOmitMultiple<T, K>>
    : MaybeOmitMultiple<T, K>;

export = omit;
