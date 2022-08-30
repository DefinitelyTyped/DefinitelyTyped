// Type definitions for path-complete-extname 1.0
// Project: https://github.com/ruyadorno/path-complete-extname
// Definitions by: Marcin C <https://github.com/melangue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * Takes a file path and returns the complete file extension (multiple dots, like tar.gz)
 * Automatically determines if running under Posix or Win32 environment
 */
declare function pathCompleteExtname(path: string): string;
export = pathCompleteExtname;
