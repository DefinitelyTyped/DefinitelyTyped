// Type definitions for resolve-global 0.1
// Project: https://github.com/sindresorhus/resolve-global#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = resolveGlobal;

declare function resolveGlobal(moduleId: string): string;

declare namespace resolveGlobal {
    function silent(moduleId: string): string | null;
}
