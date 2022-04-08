// Type definitions for glob-to-regexp 0.4
// Project: https://github.com/fitzgen/glob-to-regexp#readme
// Definitions by: whatasoda <https://github.com/whatasoda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace GlobToRegExp;

export = GlobToRegExp;

declare function GlobToRegExp(glob: string, options?: GlobToRegExp.Options): RegExp;

declare namespace GlobToRegExp {
    interface Options {
        extended?: boolean;
        globstar?: boolean;
        flags   ?: string;
    }
}
