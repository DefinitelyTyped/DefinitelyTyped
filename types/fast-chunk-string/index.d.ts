// Type definitions for fast-chunk-string 1.0
// Project: https://github.com/vladgolubev/fast-chunk-string#readme
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    size: number;
    unicodeAware?: boolean;
}

declare function fastChunkString(str: string, options: Options): string[];

export = fastChunkString;
