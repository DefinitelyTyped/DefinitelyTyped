// Type definitions for find-exec 1.0
// Project: https://github.com/shime/find-exec
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes a list of shell commands and returns the first available.
 * Works synchronously to respect the order.
 */
declare function findExec(execs: string[]): string | null;
declare function findExec(...args: string[]): string | null;
export = findExec;
