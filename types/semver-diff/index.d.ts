// Type definitions for semver-diff 2.1
// Project: https://github.com/sindresorhus/semver-diff
// Definitions by: Chris Barr <https://github.com/chrismbarr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/semver-diff

declare namespace SemverDiff {
    type SemverDiffReturn = 'major' | 'minor' | 'patch' | 'prerelease' | 'build' | null;
}

declare function SemverDiff(versionA: string, versionB: string): SemverDiff.SemverDiffReturn;

export = SemverDiff;
