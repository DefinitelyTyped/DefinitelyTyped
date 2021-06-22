// Type definitions for timer-machine 1.1
// Project: https://github.com/brentburg/timer-machine, https://github.com/brentburgoyne/timer-machine
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Timer;
export = Timer;

declare namespace Timer {
    type TimerEvent = "start" | "stop" | "time";
}

declare class Timer {
    static get(reference: string): Timer;
    static destroy(reference: string): Timer;

    constructor(started?: boolean);

    isStarted(): boolean;
    isStopped(): boolean;
    start(): void;
    timeFromStart(): number;
    stop(): void;
    time(): number;
    toggle(): void;
    emitTime(): void;
    valueOf(): number;
    on(event: Timer.TimerEvent, callback?: () => void): void;
}
