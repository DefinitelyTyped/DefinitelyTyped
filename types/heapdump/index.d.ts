// Type definitions for heapdump 0.3
// Project: https://github.com/bnoordhuis/node-heapdump
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function writeSnapshot(dumpFileName?: string, callback?: (err: Error | null, filename: string | undefined) => void): void;
export function writeSnapshot(callback: (err: Error | null, filename: string | undefined) => void): void;
