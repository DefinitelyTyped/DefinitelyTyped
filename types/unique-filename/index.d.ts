/**
 * Generate a unique filename by joining a filepath with a unique slug.
 *
 * @param filepath - The base directory path.
 * @param prefix - Optional prefix prepended to the slug with a hyphen.
 * @param uniq - Optional unique identifier used to generate the slug.
 */
declare function uniqueFilename(filepath: string, prefix?: string, uniq?: string): string;
export = uniqueFilename;
