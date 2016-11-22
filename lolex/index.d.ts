// Type definitions for lolex 1.5.1
// Project: https://github.com/sinonjs/lolex
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface Clock {
    now: number;

    setTimeout(callback: () => any, timeout: number): number;
    setInterval(callback: () => any, timeout: number): number;
    setImmediate(callback: () => any): number;

    clearTimeout(id: number): void;
    clearInterval(id: number): void;
    clearImmediate(id: number): void;

    setSystemTime(now: number): void;
    setSystemTime(date: Date): void;

    tick(ms: number): void;
    uninstall(): void;
}

export declare function createClock(now?: number): Clock;

export declare function install(now?: number, toFake?: string[]): Clock;
export declare function install(context?: any, now?: number, toFake?: string[]): Clock;
