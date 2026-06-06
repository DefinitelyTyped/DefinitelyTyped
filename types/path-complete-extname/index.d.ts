export = pathCompleteExtname;
/**
 * Takes a file path and returns the complete file extension (multiple dots, like .tar.gz)
 * Automatically determines if running under Posix or Win32 environment
 */
declare function pathCompleteExtname(path: string): string;
declare namespace pathCompleteExtname {
    /**
     * Takes a file path and returns the complete file extension (multiple dots, like .tar.gz)
     * Uses Win32 logic for extension extraction
     */
    function win32(path: string): string;

    /**
     * Takes a file path and returns the complete file extension (multiple dots, like .tar.gz)
     * Uses Posix logic for extension extraction
     */
    function posix(path: string): string;
}
