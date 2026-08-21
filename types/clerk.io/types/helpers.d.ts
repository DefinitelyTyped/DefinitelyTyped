import type { ClerkObject } from "../index";

export type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type PickAttributes<T extends string[]> = Pick<ClerkObject, T[number]>;
