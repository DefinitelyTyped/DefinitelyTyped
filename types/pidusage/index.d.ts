// Type definitions for pidusage 1.1
// Project: https://github.com/soyuka/pidusage
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Stat {
    cpu: number;
    memory: number;
}

export type StatCallback = (error: Error, stat: Stat) => void;

export function stat(pid: number, callback: StatCallback): never;
export function unmonitor(pid: number): never;
