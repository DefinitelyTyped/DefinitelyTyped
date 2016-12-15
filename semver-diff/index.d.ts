// Type definitions for semver-diff v2.1.0
// Project: https://github.com/sindresorhus/semver-diff
// Definitions by: Chris Barr <https://github.com/chrismbarr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/semver-diff

declare namespace SemverDiff {
    type SemverDiffReturn =  'major' | 'minor' | 'patch' | 'prerelease' | 'build' | null;

    export default function(versionA: string, versionB: string): SemverDiffReturn;
}

declare module 'semver-diff' {
    export = SemverDiff.default;
}
