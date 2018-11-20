interface Array<T> {
    flatMap<U, R extends object | undefined = undefined>(
        fn: (this: R, x: T, index: number, array: this) => U[],
        thisArg?: R
    ): U[];
}
