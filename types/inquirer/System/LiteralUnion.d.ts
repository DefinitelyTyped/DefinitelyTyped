/**
 * Represents a union which preserves autocompletion.
 */
export type LiteralUnion<T extends I, I = string> = T | (I & {});