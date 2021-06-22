/**
 * Makes sure that all passed files exist.
 *
 * Filenames are expected to be absolute.
 *
 * If a file is not found, prints a warning message and returns `false`.
 */
declare function checkRequiredFiles(files: ReadonlyArray<string>): boolean;
export = checkRequiredFiles;
