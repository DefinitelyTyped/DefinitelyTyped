// Type definitions for cpy 5.0
// Project: https://github.com/sindresorhus/cpy#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cpy;
declare function cpy(
    src: string | string[],
    dest: string,
    opts?: { cwd?: string, parents?: boolean, rename?(s: string): string }): Promise<void>;
