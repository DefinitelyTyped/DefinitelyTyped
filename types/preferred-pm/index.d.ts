// Type definitions for preferred-pm 2.0
// Project: https://github.com/zkochan/packages/tree/master/preferred-pm
// Definitions by: Chuah Chee Shian <https://github.com/shian15810>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function preferredPM(pkgPath: string): Promise<null | { name: string; version: string }>;

export = preferredPM;
