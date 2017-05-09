// Type definitions for glob-base 0.3
// Project: https://github.com/jonschlinkert/glob-base
// Definitions by: Alan Agius <https://github.com/alan-agius4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function globbase(basePath?: string): globbase.GlobBaseResult;

declare namespace globbase {
    interface GlobBaseResult {
        base: string;
        isGlob: boolean;
        glob: string;
    }
}

export = globbase;
