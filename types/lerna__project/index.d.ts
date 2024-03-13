import { Package } from "@lerna/package";

export interface ProjectConfig {
    packages: string[];
    /** if Yarn workspaces are being used */
    useWorkspaces: boolean;
    /**
     * Root Version
     */
    version: string;
}
/**
 * A representation of the entire project managed by Lerna.
 *
 * Wherever the lerna.json file is located, that is the project root.
 * All package globs are rooted from this location.
 */
export class Project {
    /**
     * @param cwd defaults to process.cwd()
     */
    static getPackages(cwd?: string): Promise<Package[]>;
    /**
     * @param cwd defaults to process.cwd()
     */
    static getPackagesSync(cwd?: string): Package[];

    constructor(cwd?: string);
    get version(): string;
    set version(val: string);
    get packageConfigs(): string[];
    get packageParentDirs(): string[];
    get manifest(): Package;
    get licensePath(): string;
    getPackages(): Promise<Package[]>;
    getPackagesSync(): Package[];
    getPackageLicensePaths(): string[];
    isIndependent(): boolean;
    rootPath: string;
    rootConfigLocation: string;
    config: ProjectConfig;
}
export const getPackages: typeof Project.getPackages;
export const getPackagesSync: typeof Project.getPackagesSync;
