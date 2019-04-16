// Type definitions for resolve-from 4.0
// Project: https://github.com/sindresorhus/resolve-from
// Definitions by: unional <https://github.com/unional>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = resolveFrom;

declare function resolveFrom(fromDir: string, moduleId: string): string;

declare namespace resolveFrom {
    function silent(fromDir: string, moduleId: string): string | null;
}
