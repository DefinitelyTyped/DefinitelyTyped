// Type definitions for to-absolute-glob 2.0
// Project: https://github.com/jonschlinkert/to-absolute-glob
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function toAbsoluteGlob(pattern: string, options?: toAbsoluteGlob.Options): string;
declare namespace toAbsoluteGlob {
    interface Options {
        cwd?: string;
        root?: string;
    }
}
export = toAbsoluteGlob;
