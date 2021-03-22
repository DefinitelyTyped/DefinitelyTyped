export type NonNullParams<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown> ? NonNullParams<T[K]> : NonNullable<T[K]>;
};

export type NullableParams<T> = {
    [K in keyof T]: T[K] | undefined | null
};

export type WithAdditionalParams<T extends Record<string, any>> = T & Record<string, unknown>;
