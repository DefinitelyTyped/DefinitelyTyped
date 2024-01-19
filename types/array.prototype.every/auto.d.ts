interface ReadonlyArray<T> {
    every<T>(this: T[], callbackfn: (value: T, index?: number, array?: T[]) => boolean, thisArg?: unknown): boolean;
}
