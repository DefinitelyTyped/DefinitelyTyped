// Type definitions for resolve-cwd 2.0
// Project: https://github.com/sindresorhus/resolve-cwd#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = resolveCwd;

declare function resolveCwd(moduleId: string): string;

declare namespace resolveCwd {
    function silent(moduleId: string): string | null;
}
