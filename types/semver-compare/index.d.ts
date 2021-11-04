// Type definitions for semver-compare 1.0
// Project: https://github.com/substack/semver-compare
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
//                 Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function semverCompare(a: string, b: string): -1 | 0 | 1;

export = semverCompare;
