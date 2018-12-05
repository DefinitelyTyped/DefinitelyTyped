// Type definitions for bash-glob 2.0
// Project: https://github.com/micromatch/bash-glob
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Patterns = string | string[];
type Callback = (err: Error, files: string[]) => void;

declare function bashGlob(pattern: Patterns, callback: Callback): void;
declare function bashGlob(pattern: Patterns, options: bashGlob.Options, callback: Callback): void;

declare namespace bashGlob {
    interface Options {
        cwd?: string;
        dot?: boolean;
        dotglob?: boolean;
        extglob?: boolean;
        failglob?: boolean;
        globstar?: boolean;
        nocase?: boolean;
        nocaseglob?: boolean;
        nullglob?: boolean;
    }

    function on(event: 'match' | 'files', callback: (files: string, cwd: string) => void): void;
    function on(event: 'end', callback: (files: string) => void): void;

    function each(patterns: Patterns, callback: Callback): void;
    function each(patterns: Patterns, options: Options, callback: Callback): void;

    function promise(patterns: Patterns, options?: Options): Promise<string[]>;

    function sync(patterns: Patterns, options?: Options): string[];
}

export = bashGlob;
