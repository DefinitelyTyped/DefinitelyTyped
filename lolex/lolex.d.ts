// Type definitions for lolex 1.2.1
// Project: https://github.com/sinonjs/lolex
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface Clock {
    setTimeout(callback: () => any, timeout: number): number;
    setInterval(callback: () => any, timeout: number): number;
    setImmediate(callback: () => any): number;

    clearTimeout(id: number): void;
    clearInterval(id: number): void;
    clearImmediate(id: number): void;

    tick(ms: number): void;
    uninstall(): void;
}

declare export function createClock(now?: number): Clock;

declare export function install(now?: number, toFake?: string[]): Clock;
declare export function install(context?: any, now?: number, toFake?: string[]): Clock;
