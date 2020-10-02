// Type definitions for dynamic-time-warping 1.0
// Project: https://github.com/GordonLesti/dynamic-time-warping
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    class DynamicTimeWarping<T> {
        constructor(ser1: ReadonlyArray<T>, ser2: ReadonlyArray<T>, distFunc: (a: T, b: T) => number);

        getDistance(): number;
        getPath(): Array<[number, number]>;
    }
}

export = DynamicTimeWarping;
