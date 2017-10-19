// Type definitions for heapdump 0.3
// Project: https://github.com/bnoordhuis/node-heapdump
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function writeSnapshot(dumpFileName: string, callback: (err?: Error) => void): void;
