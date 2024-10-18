/**
 * Takes a list of shell commands and returns the first available.
 * Works synchronously to respect the order.
 */
declare function findExec(execs: string[]): string | null;
declare function findExec(...args: string[]): string | null;
export = findExec;
