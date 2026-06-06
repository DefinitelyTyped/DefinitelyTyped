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
