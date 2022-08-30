// Type definitions for semver-compare-multi 1.0
// Project: https://github.com/zenithpolar/semver-compare
// Definitions by: ravenclaw900 <https://github.com/ravenclaw900>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function cmp(a: string, b: string): number;
export function newComparer(separators?: string[]): (a: string, b: string) => number;
