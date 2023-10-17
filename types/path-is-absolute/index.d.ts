export = path_is_absolute;
declare function path_is_absolute(path: string): boolean;
declare namespace path_is_absolute {
    function win32(path: string): boolean;
    function posix(path: string): boolean;
}
