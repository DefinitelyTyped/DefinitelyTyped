// Type definitions for tempy 0.1
// Project: https://github.com/sindresorhus/tempy#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function directoryAsync(): Promise<string>;
export function directory(): string;
export function file(options?: {extension: string}): string;
export const root: string;
