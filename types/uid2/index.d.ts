// Type definitions for uid2 0.0
// Project: https://github.com/coreh/uid2
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function uid2(length: number): string;
declare function uid2(length: number, callback: (err: Error | null, result?: string) => void): void;

export = uid2;
