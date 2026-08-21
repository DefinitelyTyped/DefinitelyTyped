/**
 * Finds the currently running process on `port`.
 * Returns a string containing the name and directory.
 */
declare function getProcessForPort(port: number): string | null;
export = getProcessForPort;
