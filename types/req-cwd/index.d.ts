// Type definitions for req-cwd 2.0
// Project: https://github.com/sindresorhus/req-cwd
// Definitions by: Arturas Molcanovas <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** Like require(), throws when the module can't be found. */
declare function reqCwd(moduleId: string): any;

declare namespace reqCwd {
    /** Returns null instead of throwing when the module can't be found. */
    function silent(moduleId: string): any;
}

export = reqCwd;
