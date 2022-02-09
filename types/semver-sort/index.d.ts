// Type definitions for semver-sort 0.0
// Project: https://github.com/ragingwind/semver-sort
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>, Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function asc(versions: ReadonlyArray<string>): string[];
declare function desc(versions: ReadonlyArray<string>): string[];

export {
    asc,
    desc
};
