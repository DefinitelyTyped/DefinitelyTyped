// Type definitions for path-is-absolute 1.0
// Project: https://github.com/sindresorhus/path-is-absolute#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = path_is_absolute;
declare function path_is_absolute(path: string): boolean;
declare namespace path_is_absolute {
    function win32(path: string): boolean;
    function posix(path: string): boolean;
}
