// Type definitions for ewma 2.0
// Project: https://github.com/ReactiveSocket/ewma#readme
// Definitions by: LeoDog896 <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ClockLike {
    now: () => number;
}

interface EwmaClass {
    insert: (x: number) => void;
    reset: (x: number) => void;
    value: () => number;
}

interface EwmaInstance {
    new(halfLifeMs: number, initialValue: number, clock?: ClockLike): EwmaClass;
    (halfLifeMs: number, initialValue: number, clock?: ClockLike): EwmaClass;
}

declare const EWMA: EwmaInstance;

export = EWMA;
