import { LiteralUnion } from "./LiteralUnion";

/**
 * Represents either a key of `T` or a `string`.
 */
export type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;