// Type definitions for find-versions 3.0
// Project: https://github.com/sindresorhus/find-versions
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Chris Arnesen <https://github.com/carnesen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function findVersions(version: string, options?: { loose: boolean }): string[];
export = findVersions;
