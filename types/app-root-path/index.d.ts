interface RootPath {
    /**
     * Application root directory absolute path
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
