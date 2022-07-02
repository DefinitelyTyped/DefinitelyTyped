// Type definitions for semver-utils 1.1
// Project: https://git.coolaj86.com/coolaj86/semver-utils.js
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SemVer {
    semver?: string | undefined;
    version?: string | undefined;
    major?: string | undefined;
    minor?: string | undefined;
    patch?: string | undefined;
    release?: string | undefined;
    build?: string | undefined;
    operator?: string | undefined;
}

export function parse(version: string): SemVer;
export function stringify(version: SemVer): string;
export function parseRange(range: string): SemVer[];
export function stringifyRange(version: SemVer[]): string;
