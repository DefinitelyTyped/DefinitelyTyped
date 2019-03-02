// Type definitions for resolve-pkg 1.0
// Project: https://github.com/sindresorhus/resolve-pkg
// Definitions by: Meno Abels <https://github.com/mabels>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = resolvePkg;

declare function resolvePkg(moduleId: string, options?: resolvePkg.Options): string;

declare namespace resolvePkg {
    interface Options {
        cwd?: boolean;
    }
}
