// Type definitions for resolve-path 1.4
// Project: https://github.com/pillarjs/resolve-path#readme
// Definitions by: fer22f <https://github.com/fer22f>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Resolve a relative path against `process.cwd()` (the process's current working directory) and return an absolute path.
 * *This will throw* if the resulting resolution seems malicious. The following are malicious:
 *
 *  * The relative path is an absolute path
 *  * The relative path contains a NULL byte
 *  * The relative path resolves to a path outside of process.cwd()
 *  * The relative path traverses above process.cwd() and back down
 */
declare function resolvePath(relativePath: string): string;

/**
 * Resolve a relative path against the provided root path and return an absolute path.
 * *This will throw* if the resulting resolution seems malicious. The following are malicious:
 *
 *  * The relative path is an absolute path
 *  * The relative path contains a NULL byte
 *  * The relative path resolves to a path outside of the root path
 *  * The relative path traverses above the root and back down
 */
// tslint:disable-next-line unified-signatures
declare function resolvePath(rootPath: string, relativePath: string): string;

export = resolvePath;
