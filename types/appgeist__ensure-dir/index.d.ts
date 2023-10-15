// Type definitions for package-name-regex 1.1
// Project: https://github.com/appgeist/ensure-dir#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Ensure the specified directory path exists
 *
 * @returns A promise that fulfills when the operation completes
 */
declare function ensureDir(dir: string): Promise<void>;

export = ensureDir;
