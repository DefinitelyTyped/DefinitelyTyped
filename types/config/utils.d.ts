type Join<K, P> = K extends string | number ? P extends string | number ? `${K}${"" extends P ? "" : "."}${P}`
    : never
    : never;

export type ConfigPaths<T> = T extends object ? {
        [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, ConfigPaths<T[K]>>
            : never;
    }[keyof T]
    : "";

export type ConfigPathValues<O, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof O ? ConfigPathValues<O[K], Rest>
    : never
    : P extends keyof O ? O[P]
    : never;

type IsSubsetOf<T, U> = T extends U ? true : false;

export type HasBeenAugmented<T> = IsSubsetOf<Exclude<keyof T, "get" | "has" | "util">, never> extends true ? false
    : true;
