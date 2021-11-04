// Type definitions for semver-stable 3.0
// Project: https://github.com/kaelzhang/node-semver-stable#readme
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function is(version: string): boolean;
export function max(versions: string[]): string;
export function maxSatisfying(versions: string[], range: string): string;
