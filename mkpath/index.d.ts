// Type definitions for mkpath v0.1.0
// Project: https://www.npmjs.com/package/mkpath
// Definitions by: Jared Klopper <https://github.com/optical>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace mkpath {
    function sync(path: string, mode?: number): void;
}

declare function mkpath(path: string, callback?: (err: any) => void): void;
declare function mkpath(path: string, mode?: number, callback?: (err?: any) => void): void;

export = mkpath;
