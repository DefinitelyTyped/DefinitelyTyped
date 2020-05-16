// Type definitions for semver-utils 1.1
// Project: https://git.coolaj86.com/coolaj86/semver-utils.js
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SemVer {
    semver?: string;
    version?: string;
    major?: string;
    minor?: string;
    patch?: string;
    release?: string;
    build?: string;
    operator?: string;
}

export function parse(version: string): SemVer;
export function stringify(version: SemVer): string;
export function parseRange(range: string): SemVer[];
export function stringifyRange(version: SemVer[]): string;
