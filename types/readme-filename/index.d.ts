// Type definitions for readme-filename 1.0
// Project: https://github.com/ngryman/readme-filename#readme
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Determines the path to a `README` file.
 *
 * @param root
 * The directory to look for a `README` file.
 *
 * @returns
 * The path to the `README` file.
 */
declare function readmeFilename(root?: string): Promise<string>;

export = readmeFilename;
