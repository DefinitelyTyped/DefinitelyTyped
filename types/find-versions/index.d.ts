// Type definitions for find-versions 2.0
// Project: https://github.com/sindresorhus/find-versions
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function findVersions(version: string, options?: { loose: boolean }): string[];
export = findVersions;
