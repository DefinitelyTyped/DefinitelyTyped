import lockfileInfo = require('lockfile-info');

lockfileInfo; // $ExpectType (cwd?: string | undefined) => Promise<LockfileInfo>

lockfileInfo(); // $ExpectType Promise<LockfileInfo>
const p = lockfileInfo('.'); // $ExpectType Promise<LockfileInfo>

p.then(({
    hasPackageJSON,
    hasNodeModulesDir,
    hasLockfile,
    hasPackageLock,
    hasShrinkwrap,
    lockfileVersion,
}) => {
    hasPackageJSON; // $ExpectType boolean
    hasNodeModulesDir; // $ExpectType boolean
    hasLockfile; // $ExpectType boolean
    hasPackageLock; // $ExpectType boolean
    hasShrinkwrap; // $ExpectType boolean
    lockfileVersion; // $ExpectType number
});
