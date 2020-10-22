// Type definitions for single-line-log 1.1
// Project: https://github.com/freeall/single-line-log
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SingleLineLog {
    (data: string): void;
    clear(): void;
    write(data: string): void;
}

export const stdout: SingleLineLog;
export const stderr: SingleLineLog;
