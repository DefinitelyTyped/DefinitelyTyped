// Type definitions for log-update 2.0
// Project: https://github.com/sindresorhus/log-update#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export = logUpdate;

declare function logUpdate(...text: string[]): void;

declare namespace logUpdate {
    function clear(): void;
    function done(): void;
    const stderr: typeof logUpdate;
    function create(stream: NodeJS.WritableStream): typeof logUpdate;
}
