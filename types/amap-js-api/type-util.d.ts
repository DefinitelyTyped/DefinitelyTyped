declare namespace AMap {
    type Omit<T, E extends keyof T> = {
        [K in Exclude<keyof T, E>]: T[K]
    };

    type OptionalKey<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T];

    type Merge<O, T> =
        { [K in Exclude<keyof O, keyof T | OptionalKey<O>>]-?: O[K]; } &
        { [K in Extract<Exclude<keyof O, keyof T>, OptionalKey<O>>]?: O[K]; } &
        T;
}
