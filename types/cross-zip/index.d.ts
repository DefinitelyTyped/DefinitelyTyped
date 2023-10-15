// Type definitions for cross-zip 4.0
// Project: https://github.com/feross/cross-zip
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function unzip(inPath: string, outPath: string, callback?: (error?: Error) => void): void;
export function unzipSync(inPath: string, outPath: string): void;
export function zip(inPath: string, outPath: string, callback?: (error?: Error) => void): void;
export function zipSync(inPath: string, outPath: string): void;
