export const HOSTS: "C:/Windows/System32/drivers/etc/hosts" | "/etc/hosts";

export type Line = string | [string, /* host */ string /* ip */];
export type Lines = Line[];
export type Callback = (error: Error | null) => void;
export type GetCallback = (error: Error | null, lines: Lines) => void;

/**
 * Get a list of the lines that make up the filePath.
 *
 * @param filePath - Path to the hosts file to read.
 * @param preserveFormatting - Whether to include comments, blank lines, etc.
 * @returns lines of file.
 */
export function getFile(filePath: string, preserveFormatting: boolean): Lines;
/**
 * Get a list of the lines that make up the filePath.
 *
 * @param filePath - Path to the hosts file to read.
 * @param preserveFormatting - Whether to include comments, blank lines, etc.
 * @param cb - Called when finished or failed (passing error or lines of file).
 */
export function getFile(filePath: string, preserveFormatting: boolean, cb: GetCallback): void;
export function getFile(filePath: string, preserveFormatting: boolean, cb?: GetCallback): void | Lines;

/**
 * Synchronous wrapper of `getFile` for getting a list of lines in the Host file
 *
 * @param preserveFormatting - Whether to include comments, blank lines, etc.
 * @returns lines of file.
 */
export function get(preserveFormatting: boolean): Lines;
/**
 * Wrapper of `getFile` for getting a list of lines in the Host file
 *
 * @param preserveFormatting - Whether to include comments, blank lines, etc.
 * @param cb - Called when finished or failed (passing error or lines of file).
 */
export function get(preserveFormatting: boolean, cb: GetCallback): void;
export function get(preserveFormatting: boolean, cb?: GetCallback): void | Lines;

/**
 * Add a rule to /etc/hosts. If the rule already exists, then this does nothing.
 *
 * @param ip - IP of the entry to set.
 * @param host - Host of the entry to set.
 * @param cb - Called when finished or failed (passing error).
 */
export function set(ip: string, host: string, cb?: Callback): void;

/**
 * Remove a rule from /etc/hosts. If the rule does not exist, then this does
 * nothing.
 *
 * @param ip - IP of the entry to remove.
 * @param host - Host of the entry to remove.
 * @param cb - Called when finished or failed (passing error).
 */
export function remove(ip: string, host: string, cb?: Callback): void;

/**
 * Write out an array of lines to the host file. Assumes that they're in the
 * format that `get` returns.
 *
 * @param lines - Lines to write to the file.
 * @param cb - Called when finished or failed (passing error).
 */
export function writeFile(lines: ReadonlyArray<Line>, preserveFormatting: boolean, cb?: Callback): void;
