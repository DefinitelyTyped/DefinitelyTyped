interface RepositoryInitOptions {
    description: string,
    flags: number,
    initialHead: string,
    mode: number,
    originUrl: string,
    templatePath: string,
    version: number,
    workdirPath: string
}


export class Repository {
    /**
     * Creates a branch with the passed in name pointing to the commit
     *
     * @static
     * @param {string} startPath
     * @param {number} acrossFs
     * @param {string} ceilingDirs
     * @returns {Promise<string>}
     *
     * @memberof Repository
     */
    static discover(startPath: string, acrossFs: number, ceilingDirs: string): Promise<string>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @param {boolean} [isBare]
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static init(path: string, isBare?: boolean): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} repoPath
     * @param {RepositoryInitOptions} [options]
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static initExt(repoPath: string, options?: RepositoryInitOptions): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static open(path: string): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} barePath
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static openBare(barePath: string): Promise<Repository>;
    static openExt(path: string, flags?: number, ceilingDirs?: string): Promise<Repository>;

    // getBranchCommit(name: string): Promise<Commit>;
}
