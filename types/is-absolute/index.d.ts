export = isAbsolute;

declare function isAbsolute(path: string): boolean;

declare namespace isAbsolute {
    function posix(path: string): boolean;
    function win32(path: string): boolean;
}
