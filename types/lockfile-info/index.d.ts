interface LockfileInfo {
    hasPackageJSON: boolean;
    hasNodeModulesDir: boolean;
    hasLockfile: boolean;
    hasPackageLock: boolean;
    hasShrinkwrap: boolean;
    lockfileVersion: typeof NaN | 1 | 2 | 3; // https://github.com/microsoft/TypeScript/issues/47347
}
/** @async */
declare function lockfileInfo(cwd?: string): Promise<LockfileInfo>;
export = lockfileInfo;
