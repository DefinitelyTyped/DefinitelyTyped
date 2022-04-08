// Type definitions for is-absolute 1.0
// Project: https://github.com/jonschlinkert/is-absolute
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isAbsolute;

declare function isAbsolute(path: string): boolean;

declare namespace isAbsolute {
    function posix(path: string): boolean;
    function win32(path: string): boolean;
}
