// Type definitions for tempy 0.2
// Project: https://github.com/sindresorhus/tempy#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>, Gustav Bylund <https://github.com/maistho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function directory(): string;
export function file(
    options?: { extension: string } | { name: string }
): string;
export const root: string;
