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
