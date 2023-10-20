/**
 * Replaces the extension from path with extension and returns the updated path string.
 *
 * Does not replace the extension if path is not a string or is empty.
 */
declare function replaceExt(path: string, extension: string): string;

export = replaceExt;
