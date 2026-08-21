/**
 * Ensure the specified directory path exists
 *
 * @returns A promise that fulfills when the operation completes
 */
declare function ensureDir(dir: string): Promise<void>;

export = ensureDir;
