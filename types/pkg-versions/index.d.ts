// Type definitions for pkg-versions 1.1
// Project: https://github.com/sindresorhus/pkg-versions#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pkgVersions;

declare function pkgVersions(name: string): Promise<Set<string>>;
