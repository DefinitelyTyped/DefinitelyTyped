// Type definitions for clipboardy 1.1
// Project: https://github.com/sindresorhus/clipboardy#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function write(input: string): Promise<void>;
export function writeSync(input: string): void;
export function read(): Promise<string>;
export function readSync(): string;
