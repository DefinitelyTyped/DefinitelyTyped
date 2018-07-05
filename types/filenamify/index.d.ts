// Type definitions for filenamify 2.0
// Project: https://github.com/sindresorhus/filenamify
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function filenamify(input: string, options?: filenamify.Options): string;

declare namespace filenamify {
    interface Options {
        replacement: string;
    }
    function path(input: string, options?: Options): string;
}

export = filenamify;
