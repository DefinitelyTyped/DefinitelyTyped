// Type definitions for pidusage 1.1
// Project: https://github.com/soyuka/pidusage
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface Stat {
    cpu: number;
    memory: number;
}

export function stat(pid: number, callback: (error: Error, stat: Stat) => void): void;
export function unmonitor(pid: number): void;
