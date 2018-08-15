// Type definitions for app-root-path 1.2.1
// Project: https://github.com/inxilpro/node-app-root-path
// Definitions by: Shant Marouti <https://github.com/shantmarouti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RootPath {

    /**
     * Application root directory absolute path
     * @type {string}
     */
    path: string;

    /**
     * Resolves relative path from root to absolute path
     * @param {string} pathToModule
     * @returns {string}
     */
    resolve(pathToModule: string): string;

    /**
     * Resolve module by relative addressing from root
     * @param {string} pathToModule
     * @returns {*}
     */
    require(pathToModule: string): any;

    /**
     * Explicitly set root path
     * @param {string} explicitlySetPath
     */
    setPath(explicitlySetPath: string): void;

    toString(): string;
}
declare const RootPath: RootPath;
export = RootPath;
