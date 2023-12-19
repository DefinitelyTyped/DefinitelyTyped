declare global {
    class DynamicTimeWarping<T> {
        constructor(ser1: readonly T[], ser2: readonly T[], distFunc: (a: T, b: T) => number);

        getDistance(): number;
        getPath(): Array<[number, number]>;
    }
}

export = DynamicTimeWarping;
