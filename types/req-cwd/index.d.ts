// Type definitions for req-cwd 2.0
// Project: https://github.com/sindresorhus/req-cwd
// Definitions by: Arturas Molcanovas <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Like require(), throws when the module can't be found. */
declare function reqCwd(moduleId: string): any;

declare namespace reqCwd {
    /** Returns null instead of throwing when the module can't be found. */
    export function silent<T = any>(moduleId: string): T | null;
}

export = reqCwd;
