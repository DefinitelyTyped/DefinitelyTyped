// Type definitions for find-config 1.0
// Project: https://github.com/shannonmoeller/find-config
// Definitions by: Luke James <https://github.com/itslukej>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace findConfig {
    interface Options {
        cwd?: string;
        dir?: string;
        dot?: boolean;
        home?: boolean;
        module?: boolean;
    }

    interface ReadOptions extends Options {
        encoding?: string;
        flag?: string;
    }

    function obj(filename?: string, options?: Options): { cwd: string; dir: string; path: string; } | null;
    function read(filename?: string, options?: ReadOptions): string | null;
    function require(filename?: string, options?: Options): any;
}

declare function findConfig(filename?: string, options?: findConfig.Options): string | null;

export = findConfig;
