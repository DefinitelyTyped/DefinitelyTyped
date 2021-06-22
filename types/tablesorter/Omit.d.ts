/**
 * Exclude all keys `K` from type `T`.
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
