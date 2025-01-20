/**
 * Appends a '/' to the end of the path unless it exists.
 * @param path A path.
 * @returns The path with a '/' appended to it.
 */
export function addSlashToEnd(path: string): string;

/**
 * Returns a short string representing the size of bytes in unit symbols up to petabytes.
 * @param size Size in bytes.
 * @returns A string representing the size in the matching unit symbol.
 */
export function size(size: number): string;

/**
 * Contains functions to format permissions.
 */
export namespace permissions {
    /**
     * Converts Unix-like permissions from numeric to symbolic notation.
     * @param perm A string of Unix-like permission in numeric notation.
     * @returns A representation of the permissions in symbolic notation.
     */
    function symbolic(perm: string): string;

    /**
     * Converts Unix-like permissions from symbolic to numeric notation.
     * @param perm A string of Unix-like permission in symbolic notation.
     * @returns A representation of the permissions in numeric notation.
     */
    function numeric(perm: string): string;
}
