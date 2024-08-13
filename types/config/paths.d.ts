type Join<K, P> = K extends string | number
    ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
    : never

export type Paths<T> = T extends object
    ? {
        [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K]>>
        : never
    }[keyof T]
    : ''

export type PathValues<O, P extends string> =
    P extends `${infer K}.${infer Rest}`
    ? K extends keyof O
    ? PathValues<O[K], Rest>
    : never
    : P extends keyof O
    ? O[P]
    : never;
