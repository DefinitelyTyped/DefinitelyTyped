declare global {
    class DynamicTimeWarping<T> {
        constructor(ser1: ReadonlyArray<T>, ser2: ReadonlyArray<T>, distFunc: (a: T, b: T) => number);

        getDistance(): number;
        getPath(): Array<[number, number]>;
    }
}

export = DynamicTimeWarping;
